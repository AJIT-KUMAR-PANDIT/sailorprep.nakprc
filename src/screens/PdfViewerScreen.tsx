import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { ArrowLeft, ZoomIn, ZoomOut, AlertCircle } from 'lucide-react';
import { pb } from '../lib/pb';
import { useAuth } from '../contexts/AuthContext';
import AuthGuard from '../components/AuthGuard';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PdfViewerScreen() {
  const { pyqId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const [numPages, setNumPages] = useState<number>();
  const [scale, setScale] = useState(1.0);
  const [pyq, setPyq] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function loadPyq() {
      try {
        if (!pyqId) return;
        const record = await pb.collection('pyqs').getOne(pyqId);
        setPyq(record);
      } catch (err: any) {
        if (err.isAbort) {
          return;
        }
        console.error('PDF fetch error:', err);
        setError(`Failed to load PDF metadata: ${err.message || err.toString()}`);
      } finally {
        setLoading(false);
      }
    }
    loadPyq();
  }, [pyqId]);

  // Prevent right click and specific keybinds
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && (e.key === 'p' || e.key === 's')) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-surface">Loading PDF viewer...</div>;
  }

  if (error || !pyq) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-surface text-error">
        <AlertCircle size={48} className="mb-4" />
        <p className="font-bold">{error || "PYQ not found"}</p>
        <button onClick={() => navigate(-1)} className="mt-4 text-primary hover:underline">Go Back</button>
      </div>
    );
  }

  const pdfSource = pyq.pdf_file ? pb.files.getUrl(pyq, pyq.pdf_file) : pyq.pdf_url;
  const userWatermark = user?.email || user?.phone || 'Confidential Document';

  return (
    <AuthGuard>
      <div className="min-h-screen flex flex-col bg-[#1a1c1e] text-white">
        {/* Top Toolbar */}
        <div className="h-16 bg-[#1a1c1e]/90 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-4 sticky top-0 z-50">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <ArrowLeft size={24} />
            </button>
            <div className="font-headline-md font-bold truncate max-w-xs md:max-w-md">
              {pyq.title}
            </div>
          </div>
          
          <div className="flex items-center gap-2 md:gap-4">
            <button onClick={() => setScale(s => Math.max(0.5, s - 0.2))} className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <ZoomOut size={20} />
            </button>
            <span className="text-sm font-medium w-12 text-center">{Math.round(scale * 100)}%</span>
            <button onClick={() => setScale(s => Math.min(3, s + 0.2))} className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <ZoomIn size={20} />
            </button>
            {/* No download button to enforce protection */}
          </div>
        </div>

        {/* PDF Container (Screenshot Protected) */}
        <div 
          ref={containerRef}
          className="flex-grow overflow-auto flex justify-center p-4 relative"
          style={{ userSelect: 'none', WebkitUserSelect: 'none' }} 
        >
          {/* Dynamic Watermark Overlay */}
          <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden opacity-[0.03] mix-blend-overlay flex flex-wrap gap-8 items-center justify-center" style={{ width: '100vw', height: '100vh' }}>
            {Array.from({ length: 150 }).map((_, i) => (
              <div key={i} className="text-3xl font-bold -rotate-45 whitespace-nowrap text-white">
                {userWatermark}
              </div>
            ))}
          </div>

          <div className="shadow-2xl relative z-10">
            <Document
              file={pdfSource}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={
                <div className="w-[600px] h-[800px] bg-white/5 animate-pulse rounded-lg flex items-center justify-center">
                  Loading Document...
                </div>
              }
              error={
                <div className="p-8 bg-error/20 text-error rounded-lg">
                  Failed to load PDF. It may be corrupt or inaccessible.
                </div>
              }
            >
              {Array.from(new Array(numPages), (el, index) => (
                <div key={`page_${index + 1}`} className="mb-8 relative group bg-white rounded-lg">
                  <Page 
                    pageNumber={index + 1} 
                    scale={scale} 
                    renderTextLayer={false} 
                    renderAnnotationLayer={false}
                    className="rounded-lg overflow-hidden"
                  />
                  <div className="absolute bottom-4 right-4 bg-black/50 text-white/50 text-xs px-2 py-1 rounded backdrop-blur-sm pointer-events-none">
                    Page {index + 1}
                  </div>
                </div>
              ))}
            </Document>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
}
