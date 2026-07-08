import { Anchor, Bell, Ship, Smile, Heart, Frown, Home, ClipboardList, BookOpen, Bookmark as BookmarkIcon, User } from "lucide-react";
import BottomNav from "../components/BottomNav";

export default function StudyNotesScreen() {
  const filled = '"FILL" 1';
  return (
    <>
      <div className="min-h-screen flex flex-col maritime-bg text-on-background antialiased overflow-hidden bg-background">
        {/* Top App Bar */}
        <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile h-16 glass-panel border-b border-outline-variant/30">
          <button className="text-on-surface-variant hover:bg-surface-container-low p-2 rounded-full transition-all active:scale-95 duration-200 ease-in-out flex items-center justify-center">
            <Anchor className="text-[24px]" />
          </button>
          <h1 className="text-headline-md font-headline-md font-bold text-primary">Sailor Prep</h1>
          <button className="text-on-surface-variant hover:bg-surface-container-low p-2 rounded-full transition-all active:scale-95 duration-200 ease-in-out flex items-center justify-center">
            <Bell className="text-[24px]" />
          </button>
        </header>

        {/* Main Content */}
        <main className="flex-grow flex flex-col pt-20 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full h-[calc(100vh-80px)] overflow-hidden relative z-10">
          {/* Header Section */}
          <div className="mb-6 flex flex-col items-center justify-center text-center">
            <span className="glass-panel text-primary px-4 py-1.5 rounded-full font-label-md text-label-md mb-3 inline-flex items-center gap-1.5 shadow-sm border border-primary/20">
              <Ship className="text-[16px]" />
              Ship Stability
            </span>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-1 tracking-tight">Metacentric Height</h2>
            <div className="flex items-center gap-3 w-full max-w-xs mx-auto mt-3">
              <span className="font-label-sm text-label-sm text-on-surface-variant/70 font-semibold w-12 text-right">12</span>
              <div className="flex-grow h-1.5 bg-surface-variant rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-inverse-primary rounded-full w-[26%]" />
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant/70 font-semibold w-12 text-left">45</span>
            </div>
          </div>

          {/* Flashcard Area */}
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
                <div className="flex-grow flex items-center justify-center text-center px-4">
                  <h3 className="font-headline-md md:font-display-lg text-[28px] leading-tight md:text-display-lg text-on-surface font-semibold text-balance">What is the formula for calculating GM?</h3>
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
                <div className="flex-grow flex flex-col items-center justify-center text-center gap-8">
                  <div className="bg-gradient-to-br from-primary-container/20 to-primary/5 p-8 rounded-3xl w-full border border-primary/10 shadow-inner">
                    <h3 className="font-display-lg text-display-lg text-primary tracking-tight">GM = KM - KG</h3>
                  </div>
                  <div className="font-body-md text-body-md text-on-surface-variant text-left w-full max-w-sm space-y-3 bg-surface-container-low/50 p-6 rounded-2xl border border-outline-variant/20">
                    <div className="flex gap-3"><strong className="text-primary w-8">GM</strong> <span>Metacentric Height</span></div>
                    <div className="flex gap-3"><strong className="text-primary w-8">KM</strong> <span>Height of Metacenter above Keel</span></div>
                    <div className="flex gap-3"><strong className="text-primary w-8">KG</strong> <span>Height of Center of Gravity above Keel</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Controls (shown after flip) */}
          <div className="w-full max-w-md mx-auto grid grid-cols-3 gap-4 opacity-0 translate-y-4 pointer-events-none transition-all duration-500 ease-out" id="controls-area">
            <button className="glass-panel text-on-surface-variant py-4 rounded-2xl font-label-md text-label-md hover:bg-white/80 transition-all flex flex-col items-center justify-center gap-2 active:scale-95 shadow-sm border border-outline-variant/20">
              <div className="w-10 h-10 rounded-full bg-error/10 flex items-center justify-center mb-1">
                <Frown className="text-error text-[24px]" />
              </div>
              Hard
            </button>
            <button className="bg-primary text-on-primary py-4 rounded-2xl font-label-md text-label-md hover:bg-primary/90 transition-all flex flex-col items-center justify-center gap-2 active:scale-95 shadow-lg shadow-primary/30 border border-primary/20">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-1">
                <Smile className="text-white text-[24px]" />
              </div>
              Good
            </button>
            <button className="glass-panel text-on-surface-variant py-4 rounded-2xl font-label-md text-label-md hover:bg-white/80 transition-all flex flex-col items-center justify-center gap-2 active:scale-95 shadow-sm border border-outline-variant/20">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-1">
                <Heart className="text-primary text-[24px]" />
              </div>
              Easy
            </button>
          </div>
        </main>

        {/* Bottom Nav (mobile only) */}
        <BottomNav />

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
            <a href="/my-progress" className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-low transition-colors font-label-md text-label-md">
              <User className="text-[20px]" /> Profile
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
