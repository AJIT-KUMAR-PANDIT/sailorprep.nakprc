import nakprcLogo from "../welcome/logo.webp";
import { Anchor, Bell, BookOpen, BadgeCheck, Star, ArrowUpRight, Flame, ChevronDown, FileText, HelpCircle, Ship, Scale, Home, ClipboardList, Bookmark, User } from "lucide-react";
import BottomNav from "../components/BottomNav";
import { Link } from "react-router";

export default function PyqScreen() {
  const filled = '"FILL" 1';
  return (
    <>
      <div className="flex flex-col min-h-screen relative overflow-x-hidden bg-background text-on-background antialiased">
        {/* Ambient Background */}
        <div className="fixed inset-0 wave-bg -z-10 pointer-events-none" />
        <div className="fixed top-0 inset-x-0 h-64 bg-gradient-to-b from-primary/5 to-transparent -z-10 pointer-events-none" />

        {/* Top App Bar */}
        <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 bg-surface/80 backdrop-blur-md pt-safe border-b border-outline-variant/30">
          <div className="flex items-center gap-3">
            <Anchor className="text-primary" style={{ fontVariationSettings: filled }} />
            <div className="flex flex-col">
        <span className="font-headline-md text-headline-md font-bold text-primary">Sailor Prep</span>
        <div className="flex items-center gap-1 text-[10px] text-on-surface-variant font-medium mt-0.5">
          A Product of <img src={nakprcLogo} alt="NAKPRC Logo" className="h-3 w-auto object-contain" /> NAKPRC
        </div>
      </div>
          </div>
          <div className="flex items-center">
            <button className="p-2 rounded-full hover:bg-surface-container-low text-on-surface-variant transition-colors active:scale-95 duration-200 ease-in-out">
              <Bell />
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow pt-[88px] pb-[100px] px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
          {/* Header Section */}
          <div className="mb-10 mt-6 md:mt-10 flex flex-col items-start gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-sm uppercase tracking-widest">
              <BookOpen className="text-[16px]" />
              Past Year Questions
            </div>
            <h1 className="font-display-lg text-[40px] md:text-display-lg leading-tight text-on-surface tracking-tight font-bold">Archive of Excellence</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl opacity-90">
              Navigate through previous year questions to chart your course for upcoming maritime examinations.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="mb-10 flex gap-3 overflow-x-auto no-scrollbar pb-2">
            <button className="chip-active rounded-full px-5 py-2 font-label-md text-label-md whitespace-nowrap transition-colors flex items-center gap-2 shadow-sm">
              <BadgeCheck className="text-[18px]" />
              All Topics
            </button>
            <button className="chip-inactive rounded-full px-5 py-2 font-label-md text-label-md whitespace-nowrap transition-colors shadow-sm">General Mechanics</button>
            <button className="chip-inactive rounded-full px-5 py-2 font-label-md text-label-md whitespace-nowrap transition-colors shadow-sm">Electrical Power Plant</button>
            <button className="chip-inactive rounded-full px-5 py-2 font-label-md text-label-md whitespace-nowrap transition-colors shadow-sm">Maritime Regs</button>
            <button className="chip-inactive rounded-full px-5 py-2 font-label-md text-label-md whitespace-nowrap transition-colors shadow-sm">Ship Stability</button>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Featured Highlight Card */}
            <div className="md:col-span-8 tonal-card rounded-2xl overflow-hidden relative group cursor-pointer flex flex-col justify-between p-8 min-h-[320px]">
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700 pointer-events-none" />
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <span className="bg-primary-container text-on-primary-container px-4 py-1.5 rounded-full font-label-sm text-label-sm shadow-sm flex items-center gap-1.5">
                    <Star className="text-[16px]" style={{ fontVariationSettings: filled }} />
                    Highly Recommended
                  </span>
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
                    <ArrowUpRight className="text-[20px]" />
                  </div>
                </div>
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-[36px] leading-tight font-bold text-on-surface mb-3">2023 Deck Officer Phase 1</h2>
                <p className="font-body-md text-body-lg text-on-surface-variant max-w-lg opacity-90 leading-relaxed">Comprehensive review of navigation, stability, and maritime law questions from the latest examination cycle.</p>
              </div>
              <div className="relative z-10 mt-10">
                <div className="flex justify-between font-label-md text-label-md text-on-surface-variant mb-3">
                  <span className="uppercase tracking-wider text-xs font-semibold">Progress</span>
                  <span className="font-bold text-primary">65% Completed</span>
                </div>
                {/* Wave Progress Bar */}
                <div className="w-full h-3 bg-surface-container rounded-full overflow-hidden relative shadow-inner">
                  <div className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-1000 ease-out" style={{ width: "65%" }}>
                    <div className="absolute right-0 top-0 w-8 h-full bg-gradient-to-l from-white/40 to-transparent" />
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="md:col-span-4 tonal-card rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden bg-primary text-on-primary shadow-lg border-none">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-bl-full pointer-events-none blur-sm" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-tr-full pointer-events-none blur-sm" />
              <BookOpen className="text-[48px] mb-6 text-primary-fixed" style={{ fontVariationSettings: filled }} />
              <div className="font-display-lg text-[64px] leading-none mb-2 text-on-primary font-bold">124</div>
              <div className="font-label-md text-label-md text-primary-fixed mb-8 uppercase tracking-widest font-semibold">Total Questions Solved</div>
              <div className="h-px w-full bg-white/20 mb-6" />
              <div className="flex justify-between items-center text-on-primary">
                <span className="font-body-md text-body-md opacity-90">Current Streak</span>
                <div className="flex items-center gap-2 font-headline-md text-headline-md bg-white/10 px-3 py-1 rounded-lg backdrop-blur-sm">
                  <Flame className="text-[28px] text-tertiary-fixed" style={{ fontVariationSettings: filled }} />
                  12 Days
                </div>
              </div>
            </div>

            {/* Section Header */}
            <div className="md:col-span-12 mt-8 mb-4 flex justify-between items-end border-b border-outline-variant/30 pb-4">
              <h3 className="font-headline-md text-headline-md text-on-surface font-bold">Past Years Archive</h3>
              <button className="font-label-md text-label-md text-primary hover:text-surface-tint transition-colors flex items-center gap-1 bg-surface-container-low px-3 py-1.5 rounded-full hover:bg-surface-container">Sort by Year <ChevronDown className="text-[16px]" /></button>
            </div>

            {/* Archive Items */}
            <div className="md:col-span-6 lg:col-span-4 tonal-card rounded-2xl p-6 cursor-pointer group">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-surface-container-low rounded-xl text-on-surface-variant group-hover:bg-primary/10 group-hover:text-primary transition-colors shadow-sm">
                  <FileText className="text-[24px]" />
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant px-3 py-1 bg-surface-container rounded-full border border-outline-variant/20 shadow-sm">2022</span>
              </div>
              <h4 className="font-headline-md text-[22px] leading-tight font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">Chief Engineer Part A</h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 text-sm opacity-90">Focus on thermodynamics and fluid mechanics.</p>
              <div className="mt-auto">
                <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant mb-2">
                  <span className="uppercase tracking-wider text-[10px] font-bold">Progress</span>
                  <span className="text-primary font-bold">100% Completed</span>
                </div>
                <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden shadow-inner">
                  <div className="h-full bg-secondary rounded-full" style={{ width: "100%" }} />
                </div>
              </div>
            </div>

            <div className="md:col-span-6 lg:col-span-4 tonal-card rounded-2xl p-6 cursor-pointer group">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-surface-container-low rounded-xl text-on-surface-variant group-hover:bg-primary/10 group-hover:text-primary transition-colors shadow-sm">
                  <HelpCircle className="text-[24px]" />
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant px-3 py-1 bg-surface-container rounded-full border border-outline-variant/20 shadow-sm">2021</span>
              </div>
              <h4 className="font-headline-md text-[22px] leading-tight font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">Electro-Technical Officer</h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 text-sm opacity-90">Control systems and high voltage procedures.</p>
              <div className="mt-auto">
                <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant mb-2">
                  <span className="uppercase tracking-wider text-[10px] font-bold">Progress</span>
                  <span className="text-primary font-bold">40% Completed</span>
                </div>
                <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden shadow-inner">
                  <div className="h-full bg-primary rounded-full relative" style={{ width: "40%" }}>
                    <div className="absolute right-0 top-0 w-4 h-full bg-gradient-to-l from-white/40 to-transparent" />
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-6 lg:col-span-4 tonal-card rounded-2xl p-6 cursor-pointer group">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-surface-container-low rounded-xl text-on-surface-variant group-hover:bg-primary/10 group-hover:text-primary transition-colors shadow-sm">
                  <Ship className="text-[24px]" />
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant px-3 py-1 bg-surface-container rounded-full border border-outline-variant/20 shadow-sm">2020</span>
              </div>
              <h4 className="font-headline-md text-[22px] leading-tight font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">Second Mate Navigational</h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 text-sm opacity-90">Celestial navigation and passage planning.</p>
              <div className="mt-auto">
                <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant mb-2">
                  <span className="uppercase tracking-wider text-[10px] font-bold">Progress</span>
                  <span className="text-on-surface-variant font-medium">Not Started</span>
                </div>
                <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden shadow-inner">
                  <div className="h-full bg-primary rounded-full" style={{ width: "0%" }} />
                </div>
              </div>
            </div>

            <div className="md:col-span-6 lg:col-span-4 tonal-card rounded-2xl p-6 cursor-pointer group">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-surface-container-low rounded-xl text-on-surface-variant group-hover:bg-primary/10 group-hover:text-primary transition-colors shadow-sm">
                  <Scale className="text-[24px]" />
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant px-3 py-1 bg-surface-container rounded-full border border-outline-variant/20 shadow-sm">2019</span>
              </div>
              <h4 className="font-headline-md text-[22px] leading-tight font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">Maritime Law &amp; Commercial</h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 text-sm opacity-90">International conventions and charter parties.</p>
              <div className="mt-auto">
                <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant mb-2">
                  <span className="uppercase tracking-wider text-[10px] font-bold">Progress</span>
                  <span className="text-primary font-bold">15% Completed</span>
                </div>
                <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden shadow-inner">
                  <div className="h-full bg-primary rounded-full relative" style={{ width: "15%" }}>
                    <div className="absolute right-0 top-0 w-2 h-full bg-gradient-to-l from-white/40 to-transparent" />
                  </div>
                </div>
              </div>
            </div>

            {/* View More */}
            <div className="md:col-span-12 flex justify-center mt-8">
              <button className="px-8 py-3.5 bg-surface-container-lowest border border-outline-variant/40 rounded-full font-label-md text-label-md text-on-surface hover:bg-surface-container-low transition-all shadow-sm hover:shadow-md flex items-center gap-2 group font-semibold">
                Load More Archives
                <ChevronDown className="text-[18px] group-hover:translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </main>

        {/* Bottom Nav (mobile only) */}
        <BottomNav />

        {/* Desktop Side Nav */}
        <nav className="hidden md:flex fixed top-16 left-0 h-[calc(100vh-64px)] w-[80px] flex-col items-center py-8 gap-8 border-r border-outline-variant/20 bg-surface/50 backdrop-blur-sm z-40">
          <Link to="/welcome" className="flex flex-col items-center text-on-surface-variant hover:text-primary transition-colors p-2 rounded-lg hover:bg-surface-container-low" title="Home">
            <Home className="text-[20px]" />
          </Link>
          <Link to="/mock-tests" className="flex flex-col items-center text-on-surface-variant hover:text-primary transition-colors p-2 rounded-lg hover:bg-surface-container-low" title="Tests">
            <ClipboardList className="text-[20px]" />
          </Link>
          <button className="flex flex-col items-center text-primary bg-secondary-container/50 p-2 rounded-xl transition-colors" title="PYQ">
            <BookOpen className="text-[20px]" style={{ fontVariationSettings: filled }} />
          </button>
          <Link to="/study-notes" className="flex flex-col items-center text-on-surface-variant hover:text-primary transition-colors p-2 rounded-lg hover:bg-surface-container-low" title="Notes">
            <Bookmark className="text-[20px]" />
          </Link>
          <div className="flex-grow" />
          <Link to="/my-progress" className="flex flex-col items-center text-on-surface-variant hover:text-primary transition-colors p-2 rounded-lg hover:bg-surface-container-low" title="Profile">
            <User className="text-[20px]" />
          </Link>
        </nav>
      </div>
    </>
  );
}
