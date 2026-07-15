import type { ReactNode } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AuthGuardProps {
  children: ReactNode;
  fallback?: ReactNode;
  type?: 'overlay' | 'replace';
}

export default function AuthGuard({ children, fallback, type = 'overlay' }: AuthGuardProps) {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) return <div className="animate-pulse w-full h-full bg-surface-variant/20 rounded-xl"></div>;

  if (user) {
    return <>{children}</>;
  }

  // Guest Mode UI
  if (type === 'replace') {
    return fallback ? <>{fallback}</> : (
      <div className="flex flex-col items-center justify-center p-8 bg-surface-variant/30 rounded-3xl border border-outline-variant/30 text-center">
        <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center mb-4 shadow-sm">
          <Lock className="text-on-surface-variant" size={28} />
        </div>
        <h3 className="font-headline-sm text-on-surface font-bold mb-2">Sign In Required</h3>
        <p className="text-on-surface-variant mb-6">You need to create an account or sign in to access this premium content.</p>
        <button 
          onClick={() => navigate('/auth')}
          className="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-bold shadow-md hover:shadow-lg transition-all"
        >
          Sign In Now
        </button>
      </div>
    );
  }

  // Overlay Mode (Default)
  return (
    <div className="relative group overflow-hidden rounded-xl">
      <div className="filter blur-[4px] opacity-60 pointer-events-none select-none">
        {children}
      </div>
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-background/40 backdrop-blur-[2px]">
        <div className="bg-surface/90 p-4 rounded-2xl shadow-xl flex flex-col items-center border border-white/20 transform group-hover:scale-105 transition-transform">
          <Lock className="text-primary mb-2" size={24} />
          <span className="font-label-md font-bold text-on-surface mb-3">Members Only</span>
          <button 
            onClick={() => navigate('/auth')}
            className="text-xs font-bold bg-primary text-on-primary px-4 py-1.5 rounded-lg shadow-sm"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
