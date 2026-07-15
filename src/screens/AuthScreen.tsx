import { useState } from 'react';
import { pb } from '../lib/pb';
import { Ship, Mail, Lock, Phone, User, ArrowRight, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AuthScreen() {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Form states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (isLogin) {
        await pb.collection('users').authWithPassword(email, password);
        navigate('/');
      } else {
        if (password !== passwordConfirm) {
          throw new Error("Passwords do not match");
        }
        
        // Create user
        await pb.collection('users').create({
          email,
          password,
          passwordConfirm,
          name,
          phone,
        });

        // Auto login after signup
        await pb.collection('users').authWithPassword(email, password);
        navigate('/');
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An error occurred during authentication.");
    } finally {
      setLoading(false);
    }
  };

  const handleGuestAccess = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary/10 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-secondary/10 blur-[120px] pointer-events-none -z-10" />
      
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-md glass-card p-8 rounded-3xl border border-white/20 shadow-xl relative z-10">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-2xl flex items-center justify-center mb-4 shadow-lg border border-primary/30">
              <Ship className="text-[32px] filled drop-shadow-md" />
            </div>
            <h1 className="text-3xl font-extrabold font-headline-lg tracking-tight mb-2">
              {isLogin ? 'Welcome Back' : 'Join SailorPrep'}
            </h1>
            <p className="text-on-surface-variant text-center font-body-md">
              {isLogin ? 'Sign in to continue your preparation journey' : 'Create an account to track your progress'}
            </p>
          </div>

          {error && (
            <div className="bg-error/10 text-error p-3 rounded-xl mb-6 text-sm font-medium border border-error/20 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {!isLogin && (
              <>
                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-on-surface-variant">
                      <User size={18} />
                    </div>
                    <input 
                      type="text" 
                      required 
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="w-full bg-surface/50 border border-outline-variant/30 rounded-xl py-3 pl-11 pr-4 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none backdrop-blur-sm" 
                      placeholder="Full Name" 
                    />
                  </div>
                </div>
                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-on-surface-variant">
                      <Phone size={18} />
                    </div>
                    <input 
                      type="tel" 
                      required 
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      className="w-full bg-surface/50 border border-outline-variant/30 rounded-xl py-3 pl-11 pr-4 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none backdrop-blur-sm" 
                      placeholder="Phone Number" 
                    />
                  </div>
                </div>
              </>
            )}

            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-on-surface-variant">
                  <Mail size={18} />
                </div>
                <input 
                  type="email" 
                  required 
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full bg-surface/50 border border-outline-variant/30 rounded-xl py-3 pl-11 pr-4 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none backdrop-blur-sm" 
                  placeholder="Email Address" 
                />
              </div>
            </div>

            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-on-surface-variant">
                  <Lock size={18} />
                </div>
                <input 
                  type="password" 
                  required 
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full bg-surface/50 border border-outline-variant/30 rounded-xl py-3 pl-11 pr-4 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none backdrop-blur-sm" 
                  placeholder="Password" 
                />
              </div>
            </div>

            {!isLogin && (
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-on-surface-variant">
                    <Lock size={18} />
                  </div>
                  <input 
                    type="password" 
                    required 
                    value={passwordConfirm}
                    onChange={e => setPasswordConfirm(e.target.value)}
                    className="w-full bg-surface/50 border border-outline-variant/30 rounded-xl py-3 pl-11 pr-4 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none backdrop-blur-sm" 
                    placeholder="Confirm Password" 
                  />
                </div>
              </div>
            )}

            <button 
              type="submit" 
              disabled={loading}
              className="w-full mt-2 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold rounded-xl py-3.5 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : (isLogin ? 'Sign In' : 'Create Account')}
            </button>
          </form>

          <div className="mt-6 flex flex-col items-center gap-4">
            <p className="text-on-surface-variant text-sm">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button onClick={() => { setIsLogin(!isLogin); setError(''); }} className="text-primary font-bold hover:underline">
                {isLogin ? 'Sign Up' : 'Sign In'}
              </button>
            </p>

            <div className="w-full border-t border-outline-variant/30 relative">
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface px-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">OR</span>
            </div>

            <button 
              onClick={handleGuestAccess}
              className="w-full flex items-center justify-center gap-2 py-3 bg-surface border border-outline-variant/40 rounded-xl font-label-md text-on-surface hover:bg-surface-variant/50 transition-colors"
            >
              Continue as Guest <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
