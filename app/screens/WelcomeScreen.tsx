import { Link } from "react-router";

export default function WelcomeScreen() {
  return (
    <>
      <div>
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary-fixed rounded-full mix-blend-multiply filter blur-[100px] opacity-50 animate-blob" />
    <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-secondary-fixed rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob" style={{animationDelay: '2s'}} />
    <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] bg-primary-fixed-dim rounded-full mix-blend-multiply filter blur-[120px] opacity-30 animate-blob" style={{animationDelay: '4s'}} />
  </div>
  <div className="absolute bottom-0 inset-x-0 z-0 overflow-hidden flex items-end pointer-events-none opacity-40">
    <svg className="w-full h-auto text-primary-fixed" preserveAspectRatio="none" viewBox="0 0 1440 320">
      <path d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="currentColor" />
    </svg>
  </div>
  <main className="flex-grow flex flex-col items-center justify-center relative px-margin-mobile md:px-margin-desktop z-10 w-full max-w-container-max mx-auto h-full">
    <div className="z-10 flex flex-col items-center text-center w-full max-w-md animate-fade-in-up">
      <div className="mb-10 relative group">
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-all duration-500 scale-110" />
        <div className="w-32 h-32 md:w-36 md:h-36 rounded-full glass-panel flex items-center justify-center relative z-10">
          <span className="material-symbols-outlined text-primary text-6xl md:text-7xl" style={{fontVariationSettings: '"FILL" 1'}}>
            sailing
          </span>
        </div>
      </div>
      <div className="space-y-4 mb-12 glass-panel p-8 rounded-3xl w-full">
        <h1 className="font-display-lg text-display-lg md:font-display-lg md:text-display-lg text-on-surface bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-container">
          Master Your Maritime Exams
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xs mx-auto">
          The comprehensive study companion for merchant navy professionals.
        </p>
      </div>
      <div className="w-full flex flex-col space-y-4">
        <Link to="/batches" className="w-full bg-primary hover:bg-surface-tint text-on-primary font-label-md text-label-md py-4 px-6 rounded-xl shadow-lg shadow-primary/20 transition-all duration-300 flex items-center justify-center space-x-2 animate-pulse-glow hover:scale-[1.02]">
          <span>Set Sail</span>
          <span className="material-symbols-outlined text-[18px]">
            arrow_forward
          </span>
        </Link>
        <Link to="/batches" className="w-full text-center glass-panel hover:bg-surface-container-low text-primary font-label-md text-label-md py-4 px-6 rounded-xl transition-all duration-200">
          Log In
        </Link>
      </div>
    </div>
  </main>
</div>

    </>
  );
}
