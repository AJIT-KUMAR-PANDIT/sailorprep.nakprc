import { Ship, Smile, Heart, Frown, Home, ClipboardList, BookOpen, Bookmark as BookmarkIcon, User } from "lucide-react";
import { useEffect, useState } from "react";
import { pb } from "../lib/pb";
import AuthGuard from "../components/AuthGuard";

export default function StudyNotesScreen() {
  const [notes, setNotes] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % notes.length);
    // Reset flip if possible (the flip logic seems to be CSS based on a class maybe? or maybe just updating index is enough to re-render)
    const flashcard = document.getElementById('flashcard');
    if (flashcard) {
      flashcard.classList.remove('is-flipped'); // Just in case it has a toggle class
      // actually the ui uses hover or click to flip based on some css. 
      // If it's pure CSS hover, changing the card will just render the new text.
    }
    // Also reset controls area
    const controls = document.getElementById('controls-area');
    if (controls) {
      controls.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
      controls.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
    }
  };

  useEffect(() => {
    async function fetchNotes() {
      try {
        const records = await pb.collection('study_notes').getList(1, 10);
        setNotes(records.items);
      } catch (error) {
        console.error("Error fetching notes:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchNotes();
  }, []);

  const currentNote = notes[currentIndex];
  const filled = '"FILL" 1';
  return (
    <>
      <div className="min-h-screen flex flex-col maritime-bg text-on-background antialiased overflow-hidden bg-background">
        {/* Top App Bar */}
        {/* Main Content */}
        <main className="flex-grow flex flex-col pt-20 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full h-[calc(100vh-80px)] overflow-hidden relative z-10">
          {/* Header Section */}
          <div className="mb-6 flex flex-col items-center justify-center text-center">
            {loading ? (
              <p className="text-on-surface-variant">Loading notes...</p>
            ) : currentNote ? (
              <>
                <span className="glass-panel text-primary px-4 py-1.5 rounded-full font-label-md text-label-md mb-3 inline-flex items-center gap-1.5 shadow-sm border border-primary/20">
                  <Ship className="text-[16px]" />
                  {currentNote.category || "Topic"}
                </span>
                <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-1 tracking-tight">{currentNote.title || "Note Title"}</h2>
                <div className="flex items-center gap-3 w-full max-w-xs mx-auto mt-3">
                  <span className="font-label-sm text-label-sm text-on-surface-variant/70 font-semibold w-12 text-right">{currentIndex + 1}</span>
                  <div className="flex-grow h-1.5 bg-surface-variant rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-inverse-primary rounded-full" style={{ width: `${((currentIndex + 1) / notes.length) * 100}%` }} />
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant/70 font-semibold w-12 text-left">{notes.length}</span>
                </div>
              </>
            ) : (
              <p className="text-on-surface-variant">No notes found.</p>
            )}
          </div>

          {/* Flashcard Area */}
          {!loading && currentNote && (
            <AuthGuard>
            <div className="flex-grow flex flex-col items-center justify-center w-full max-w-2xl mx-auto perspective-1000 mb-8">
              <div className="w-full h-[400px] md:h-[450px] relative transform-style-3d flashcard-inner cursor-pointer" id="flashcard">
                {/* Front of Card */}
                <div className="absolute inset-0 w-full h-full bg-surface-container-lowest/90 rounded-[2rem] premium-shadow backface-hidden flex flex-col p-8 backdrop-blur-xl border border-white/60">
                  <div className="flex justify-between items-start mb-4">
                     <span className="font-label-md text-label-md text-primary/60 uppercase tracking-[0.15em] font-bold">Question</span>
                    <button className="text-on-surface-variant hover:text-primary transition-colors bg-surface-container-low p-2 rounded-full shadow-sm">
                      <BookmarkIcon className="text-[20px]" />
                    </button>
                  </div>
                  <div className="flex-grow flex items-center justify-center text-center px-4 overflow-y-auto">
                    <div className="font-headline-md md:font-display-lg text-[24px] leading-tight md:text-display-lg text-on-surface font-semibold text-balance" dangerouslySetInnerHTML={{ __html: currentNote.content || "Question content goes here." }} />
                  </div>
                  <div className="mt-auto text-center">
                    <div className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-primary/5 text-primary border border-primary/10 animate-bounce duration-3000">
                      <BookmarkIcon className="text-[18px]" style={{ fontVariationSettings: '"FILL" 0' }} />
                      <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">Tap to reveal</span>
                    </div>
                  </div>
                </div>

                {/* Back of Card */}
                <div className="absolute inset-0 w-full h-full bg-surface-container-lowest/95 rounded-[2rem] premium-shadow backface-hidden rotate-y-180 flex flex-col p-8 backdrop-blur-xl border border-primary/20">
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-label-md text-label-md text-primary uppercase tracking-[0.15em] font-bold">Answer</span>
                  </div>
                  <div className="flex-grow flex items-center justify-center text-center px-4 overflow-y-auto">
                    <div className="font-body-lg text-body-lg text-on-surface text-balance" dangerouslySetInnerHTML={{ __html: currentNote.answer || currentNote.content || "Answer goes here." }} />
                  </div>
                </div>
              </div>
            </div>
            </AuthGuard>
          )}

          {/* Controls (shown after flip) */}
          {/* Note: since there's no JS flip logic here yet, we'll just make these buttons always visible or add an onClick to flip. For now, let's just make them visible so users can advance */}
          <div className="w-full max-w-md mx-auto grid grid-cols-3 gap-4 transition-all duration-500 ease-out mt-4" id="controls-area">
            <button onClick={nextCard} className="glass-panel text-on-surface-variant py-4 rounded-2xl font-label-md text-label-md hover:bg-white/80 transition-all flex flex-col items-center justify-center gap-2 active:scale-95 shadow-sm border border-outline-variant/20">
              <div className="w-10 h-10 rounded-full bg-error/10 flex items-center justify-center mb-1">
                <Frown className="text-error text-[24px]" />
              </div>
              Hard
            </button>
            <button onClick={nextCard} className="bg-primary text-on-primary py-4 rounded-2xl font-label-md text-label-md hover:bg-primary/90 transition-all flex flex-col items-center justify-center gap-2 active:scale-95 shadow-lg shadow-primary/30 border border-primary/20">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-1">
                <Smile className="text-white text-[24px]" />
              </div>
              Good
            </button>
            <button onClick={nextCard} className="glass-panel text-on-surface-variant py-4 rounded-2xl font-label-md text-label-md hover:bg-white/80 transition-all flex flex-col items-center justify-center gap-2 active:scale-95 shadow-sm border border-outline-variant/20">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-1">
                <Heart className="text-primary text-[24px]" />
              </div>
              Easy
            </button>
          </div>
        </main>

        {/* Bottom Nav (mobile only) */}
        {/* Desktop Side Nav */}
        <nav className="hidden md:flex fixed top-0 left-0 w-64 h-full glass-panel border-r border-outline-variant/30 flex-col pt-24 px-4 z-40">
          <div className="flex flex-col gap-2">
            <a href="/welcome" className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-low transition-colors font-label-md text-label-md">
              <Home className="text-[20px]" /> Home
            </a>
            <a href="/mock-tests" className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-low transition-colors font-label-md text-label-md">
              <ClipboardList className="text-[20px]" /> Tests
            </a>
            <a href="/pyq" className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-low transition-colors font-label-md text-label-md">
              <BookOpen className="text-[20px]" /> PYQ
            </a>
            <a href="/study-notes" className="flex items-center gap-3 px-4 py-3 rounded-xl text-primary font-bold bg-primary/10 transition-colors font-label-md text-label-md">
              <BookmarkIcon className="text-[20px]" style={{ fontVariationSettings: filled }} /> Notes
            </a>
            <a href="/interview-prep" className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-low transition-colors font-label-md text-label-md">
              <BookOpen className="text-[20px]" /> Interview
            </a>
            <a href="/my-progress" className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-low transition-colors font-label-md text-label-md">
              <User className="text-[20px]" /> Profile
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
