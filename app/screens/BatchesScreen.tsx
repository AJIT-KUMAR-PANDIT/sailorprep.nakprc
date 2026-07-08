import { Anchor, Bell, Flame, Check, ArrowRight, ChevronRight, Headset } from "lucide-react";
import BottomNav from "../components/BottomNav";
import { Link } from "react-router";

export default function BatchesScreen() {
  const filled = '"FILL" 1';
  return (
    <>
      <div className="min-h-screen ambient-wave-bg flex flex-col md:pb-0 pb-[80px] bg-background text-on-background antialiased">
        {/* Top App Bar */}
        <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile h-16 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30">
          <div className="flex items-center gap-4">
            <Anchor className="text-primary" style={{ fontVariationSettings: filled }} />
            <span className="font-headline-md text-headline-md font-bold text-primary tracking-tight">Sailor Prep</span>
          </div>
          <div className="flex items-center gap-4">
            {/* Navigation links for Web (hidden on mobile) */}
            <nav className="hidden md:flex gap-6 items-center pr-6">
              <Link to="/welcome" className="text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-low px-3 py-2 rounded-lg transition-colors">Home</Link>
              <Link to="/mock-tests" className="text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-low px-3 py-2 rounded-lg transition-colors">Tests</Link>
              <Link to="/pyq" className="text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-low px-3 py-2 rounded-lg transition-colors">PYQ</Link>
              <span className="text-primary font-bold font-label-md text-label-md bg-secondary-container/20 px-3 py-2 rounded-lg">Batches</span>
              <Link to="/study-notes" className="text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-low px-3 py-2 rounded-lg transition-colors">Notes</Link>
              <Link to="/my-progress" className="text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-low px-3 py-2 rounded-lg transition-colors">Profile</Link>
            </nav>
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-colors text-on-surface-variant">
              <Bell />
            </button>
          </div>
        </header>

        {/* Main Content Canvas */}
        <main className="flex-grow pt-24 pb-8 px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto relative z-10">
          {/* Page Header */}
          <div className="mb-12 text-center md:text-left mt-4 md:mt-8 flex flex-col md:flex-row md:justify-between md:items-end gap-6">
            <div>
              <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface tracking-tight">Upcoming Training Batches</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-2 max-w-2xl">Prepare for your next rank with structured, intensive maritime courses led by industry veterans.</p>
            </div>
            {/* Filter/Sort Chips */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0 shrink-0">
              <button className="bg-primary text-on-primary font-label-sm text-label-sm px-5 py-2.5 rounded-full whitespace-nowrap shadow-sm hover:bg-primary/90 transition-colors">All Batches</button>
              <button className="bg-surface text-on-surface font-label-sm text-label-sm px-5 py-2.5 rounded-full whitespace-nowrap hover:bg-surface-container-low transition-colors border border-outline-variant/40 shadow-sm">MEO Class IV</button>
              <button className="bg-surface text-on-surface font-label-sm text-label-sm px-5 py-2.5 rounded-full whitespace-nowrap hover:bg-surface-container-low transition-colors border border-outline-variant/40 shadow-sm">2nd Mate FG</button>
            </div>
          </div>

          {/* Bento Grid Layout for Batches */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Primary Featured Batch - spans 8 columns */}
            <div className="lg:col-span-8 bg-surface-container-lowest border border-outline-variant/20 rounded-2xl overflow-hidden group premium-card relative flex flex-col md:flex-row h-full">
              {/* Urgency Badge */}
              <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md text-error font-label-sm text-label-sm px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm border border-error/10">
                <Flame className="text-[14px] text-error" />
                Only 5 seats left!
              </div>

              {/* Image Section */}
              <div className="md:w-5/12 h-56 md:h-auto relative overflow-hidden bg-surface-variant shrink-0">
                <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCyQAQXc-e3I-G2GNmvgWw70A0xiodb4znOGyV7RRgD1WqnjqrG1I5nipHfkLVK48cbSzfZvgkOlInk21YZZRQWU-A-2bbdScA47X_7xoxCdhZtuygyEODXpHtvE-JPMTftEysM8e_OLMwu9SqQuFLZnPeZD4faZVRlVxxiUmSY89zqJClOH5bNjRfdEQQAUa7Ubh0pDF_tj7Sr1Zcw8FPiglU36sEFNjxOCauVKQ8SnYCSXuZcJRD2iA')" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-5">
                  <span className="bg-white/20 text-white font-label-sm text-label-sm px-4 py-1.5 rounded-full backdrop-blur-md border border-white/30 shadow-sm">Engineering</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8 md:w-7/12 flex flex-col justify-between bg-surface-container-lowest">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <h2 className="font-headline-lg text-headline-md text-on-surface">MEO Class IV Preparatory</h2>
                    <div className="text-right bg-primary/5 px-3 py-1.5 rounded-lg border border-primary/10">
                      <span className="block font-headline-md text-body-lg font-bold text-primary">$1,250</span>
                    </div>
                  </div>
                  <p className="font-body-md text-[15px] text-on-surface-variant mb-6 line-clamp-2 leading-relaxed">Comprehensive syllabus covering Marine Engineering Knowledge, Motor, and Safety for aspiring 4th Engineers.</p>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-y-5 gap-x-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-secondary-container/30 flex items-center justify-center shrink-0">
                        <Anchor className="text-secondary text-[20px]" />
                      </div>
                      <div>
                        <span className="block font-label-sm text-[11px] text-outline uppercase tracking-wider">Starts</span>
                        <span className="block font-label-md text-label-md text-on-surface font-semibold">July 1, 2024</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-secondary-container/30 flex items-center justify-center shrink-0">
                        <Flame className="text-secondary text-[20px]" />
                      </div>
                      <div>
                        <span className="block font-label-sm text-[11px] text-outline uppercase tracking-wider">Duration</span>
                        <span className="block font-label-md text-label-md text-on-surface font-semibold">3 Months</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-secondary-container/30 flex items-center justify-center shrink-0">
                        <ArrowRight className="text-secondary text-[20px]" />
                      </div>
                      <div>
                        <span className="block font-label-sm text-[11px] text-outline uppercase tracking-wider">Mode</span>
                        <span className="block font-label-md text-label-md text-on-surface font-semibold">Hybrid</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-secondary-container/30 flex items-center justify-center shrink-0">
                        <Anchor className="text-secondary text-[20px]" />
                      </div>
                      <div>
                        <span className="block font-label-sm text-[11px] text-outline uppercase tracking-wider">Instructor</span>
                        <span className="block font-label-md text-label-md text-on-surface font-semibold">Ch. Eng. Sharma</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action */}
                <button className="w-full bg-primary text-on-primary font-label-md text-[15px] font-semibold py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg flex justify-center items-center gap-2 group-hover:bg-primary-container group-hover:text-on-primary-container btn-pro-pulse">
                  Enroll Now
                  <ArrowRight className="text-[20px] transition-transform group-hover:translate-x-1.5" />
                </button>
              </div>
            </div>

            {/* Secondary Batch - spans 4 columns */}
            <div className="lg:col-span-4 bg-surface-container-lowest border border-outline-variant/20 rounded-2xl overflow-hidden group premium-card flex flex-col relative h-full">
              {/* Image Section */}
              <div className="h-48 relative overflow-hidden bg-surface-variant shrink-0">
                <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCYl25nYFsMbQzYAX4uuERoM1VwVU7R_UDHZGrT3Th_jkyvyY0Rl052w-LIPvi_LLxpv5TRRcRYjQLn2KG4sg3-ciRcc1M0-Ac9RgCRab_vcXssBHw2UkDofwMUhfqDvH5QpUAyuqWMdYZ5kE9CCqD3T4N7dcCSNCkP_i1U71grthfA-R9ELQ8RJtoXTO0ZOZCN8xQ4V9sA0Z9NJkz2XjdFYrHEELsA09oYpzbIvYJc0LyB51mP5XXBDA')" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-5">
                  <span className="bg-white/20 text-white font-label-sm text-label-sm px-4 py-1.5 rounded-full backdrop-blur-md border border-white/30 shadow-sm">Navigation</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow bg-surface-container-lowest">
                <h2 className="font-headline-lg text-[22px] leading-[30px] font-semibold text-on-surface mb-2">2nd Mate FG Foundation</h2>
                <p className="font-body-md text-[14px] leading-relaxed text-on-surface-variant mb-6 line-clamp-2">Master celestial navigation, stability, and rule of the road for your operational level certification.</p>
                <div className="bg-surface-bright rounded-xl p-4 mb-6 border border-outline-variant/30 flex-grow grid grid-cols-2 gap-4">
                  <div>
                    <span className="block font-label-sm text-[10px] text-outline uppercase tracking-wider mb-1">Starts</span>
                    <span className="font-label-md text-[14px] font-semibold text-on-surface flex items-center gap-1.5">
                      <Flame className="text-[18px] text-primary" /> June 15
                    </span>
                  </div>
                  <div>
                    <span className="block font-label-sm text-[10px] text-outline uppercase tracking-wider mb-1">Duration</span>
                    <span className="font-label-md text-[14px] font-semibold text-on-surface flex items-center gap-1.5">
                      <Anchor className="text-[18px] text-primary" /> 4 Months
                    </span>
                  </div>
                  <div className="col-span-2">
                    <span className="block font-label-sm text-[10px] text-outline uppercase tracking-wider mb-1">Instructor</span>
                    <span className="font-label-md text-[14px] font-semibold text-on-surface flex items-center gap-1.5">
                      <Anchor className="text-[18px] text-primary" /> Capt. V. Kumar
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-auto pt-2 border-t border-outline-variant/20">
                  <span className="font-headline-md text-[22px] font-bold text-primary">$1,400</span>
                  <button className="text-primary hover:text-primary-container font-label-md text-[14px] font-semibold px-4 py-2 transition-colors flex items-center gap-1">
                    Details <ChevronRight className="text-[16px]" />
                  </button>
                </div>
              </div>
            </div>

            {/* Informational Bento Box - spans 4 columns */}
            <div className="lg:col-span-4 bg-primary text-white rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between h-full min-h-[220px] shadow-lg">
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <h3 className="font-headline-md text-[24px] font-semibold mb-6">Why join our batches?</h3>
                <ul className="space-y-4 font-body-md text-[15px]">
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <Check className="text-[16px] text-white" style={{ fontVariationSettings: '"FILL" 1' }} />
                    </div>
                    <span>95% first-attempt clearance</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <Check className="text-[16px] text-white" style={{ fontVariationSettings: '"FILL" 1' }} />
                    </div>
                    <span>Recorded MMD Orals</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <Check className="text-[16px] text-white" style={{ fontVariationSettings: '"FILL" 1' }} />
                    </div>
                    <span>1-on-1 doubt clearing</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Link Bento Box - spans 8 columns */}
            <div className="lg:col-span-8 border border-outline-variant/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 bg-surface-container-lowest justify-between premium-card">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-secondary-container/40 flex items-center justify-center shrink-0 border border-secondary-container/50">
                  <Headset className="text-secondary text-[28px]" />
                </div>
                <div>
                  <h4 className="font-headline-md text-[18px] font-semibold text-on-surface mb-1">Need help choosing a batch?</h4>
                  <p className="font-body-md text-[14px] text-on-surface-variant max-w-md leading-relaxed">Speak to our academic counselors for guidance on your specific career path and sea-time requirements.</p>
                </div>
              </div>
              <button className="shrink-0 w-full md:w-auto bg-surface-bright border border-outline-variant/60 text-on-surface hover:bg-surface-container-low font-label-md text-[14px] font-semibold px-6 py-3 rounded-xl transition-colors shadow-sm">
                Contact Counselor
              </button>
            </div>
          </div>
        </main>

        {/* Bottom Nav (mobile only) */}
        <BottomNav />
      </div>
    </>
  );
}
