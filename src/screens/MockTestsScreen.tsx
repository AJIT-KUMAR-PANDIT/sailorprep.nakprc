import { LifeBuoy, Globe, Ship, Clock, BookOpen } from "lucide-react";
export default function MockTestsScreen() {
  return (
    <>
      <div className="min-h-screen bg-background text-on-background font-body-md relative maritime-bg-pattern antialiased flex flex-col">
        {/* Top App Bar */}
        {/* Main Content */}
        <main className="flex-grow pt-28 pb-32 px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface mb-2 tracking-tight">Mock Exam Library</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Prepare for your next voyage with comprehensive practice tests.</p>
          </div>

          {/* Filter Chips */}
          <div className="flex overflow-x-auto pb-4 mb-6 gap-3 no-scrollbar scroll-smooth">
            <button className="whitespace-nowrap px-5 py-2.5 rounded-full bg-primary text-on-primary font-label-md text-label-md shadow-sm transition-transform hover:scale-[0.98] duration-200">All</button>
            <button className="whitespace-nowrap px-5 py-2.5 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm border border-outline-variant/30 text-on-surface-variant font-label-md text-label-md hover:bg-surface-container transition-colors shadow-sm">Deck</button>
            <button className="whitespace-nowrap px-5 py-2.5 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm border border-outline-variant/30 text-on-surface-variant font-label-md text-label-md hover:bg-surface-container transition-colors shadow-sm">Engine</button>
            <button className="whitespace-nowrap px-5 py-2.5 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm border border-outline-variant/30 text-on-surface-variant font-label-md text-label-md hover:bg-surface-container transition-colors shadow-sm">Safety</button>
          </div>

          {/* Test Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: BST */}
            <div className="bg-surface/60 backdrop-blur-xl border border-white/40 rounded-2xl p-6 flex flex-col justify-between shadow-[0_8px_32px_rgba(34,100,114,0.06)] transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(34,100,114,0.12)] active:scale-[0.98] group">
              <div>
                <div className="flex justify-between items-start mb-5">
                  <div className="p-3.5 bg-secondary-container/80 backdrop-blur-sm rounded-xl text-on-secondary-container shadow-inner">
                    <LifeBuoy className="text-[24px]" />
                  </div>
                  <span className="px-3 py-1.5 bg-tertiary-container/10 border border-tertiary-container/20 rounded-full font-label-sm text-label-sm text-tertiary font-bold tracking-wide">MEDIUM</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2 leading-tight">Basic Safety Training (BST)</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">Essential safety protocols and emergency procedures for all seafarers.</p>
              </div>
              <div className="space-y-5 mt-auto">
                <div className="flex items-center gap-5 text-on-surface-variant font-label-md text-label-md">
                  <div className="flex items-center gap-1.5 bg-surface-container-low/50 px-2.5 py-1 rounded-md">
                    <Clock className="text-[18px]" /> 30m
                  </div>
                  <div className="flex items-center gap-1.5 bg-surface-container-low/50 px-2.5 py-1 rounded-md">
                    <BookOpen className="text-[18px]" /> 50 Qs
                  </div>
                </div>
                <a href="#" className="w-full py-3.5 bg-primary text-on-primary rounded-xl font-label-md text-label-md font-bold shadow-md hover:shadow-lg hover:bg-surface-tint transition-all active:scale-[0.98] duration-200 text-center">Take Test</a>
              </div>
            </div>

            {/* Card 2: GMDSS */}
            <div className="bg-surface/60 backdrop-blur-xl border border-white/40 rounded-2xl p-6 flex flex-col justify-between shadow-[0_8px_32px_rgba(34,100,114,0.06)] transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(34,100,114,0.12)] active:scale-[0.98] group">
              <div>
                <div className="flex justify-between items-start mb-5">
                  <div className="p-3.5 bg-secondary-container/80 backdrop-blur-sm rounded-xl text-on-secondary-container shadow-inner">
                    <Globe className="text-[24px]" />
                  </div>
                  <span className="px-3 py-1.5 bg-error/10 border border-error/20 rounded-full font-label-sm text-label-sm text-error font-bold tracking-wide">HARD</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2 leading-tight">GMDSS General</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">Global Maritime Distress and Safety System operational procedures.</p>
              </div>
              <div className="space-y-5 mt-auto">
                <div className="flex items-center gap-5 text-on-surface-variant font-label-md text-label-md">
                  <div className="flex items-center gap-1.5 bg-surface-container-low/50 px-2.5 py-1 rounded-md">
                    <Clock className="text-[18px]" /> 45m
                  </div>
                  <div className="flex items-center gap-1.5 bg-surface-container-low/50 px-2.5 py-1 rounded-md">
                    <BookOpen className="text-[18px]" /> 60 Qs
                  </div>
                </div>
                <a href="#" className="w-full py-3.5 bg-primary text-on-primary rounded-xl font-label-md text-label-md font-bold shadow-md hover:shadow-lg hover:bg-surface-tint transition-all active:scale-[0.98] duration-200 text-center">Take Test</a>
              </div>
            </div>

            {/* Card 3: PSSC */}
            <div className="bg-surface/60 backdrop-blur-xl border border-white/40 rounded-2xl p-6 flex flex-col justify-between shadow-[0_8px_32px_rgba(34,100,114,0.06)] transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(34,100,114,0.12)] active:scale-[0.98] group">
              <div>
                <div className="flex justify-between items-start mb-5">
                  <div className="p-3.5 bg-secondary-container/80 backdrop-blur-sm rounded-xl text-on-secondary-container shadow-inner">
                    <Ship className="text-[24px]" />
                  </div>
                  <span className="px-3 py-1.5 bg-tertiary-container/10 border border-tertiary-container/20 rounded-full font-label-sm text-label-sm text-tertiary font-bold tracking-wide">MEDIUM</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2 leading-tight">Proficiency in Survival Craft (PSSC)</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">Operation of lifeboats, liferafts, and rescue boats.</p>
              </div>
              <div className="space-y-5 mt-auto">
                <div className="flex items-center gap-5 text-on-surface-variant font-label-md text-label-md">
                  <div className="flex items-center gap-1.5 bg-surface-container-low/50 px-2.5 py-1 rounded-md">
                    <Clock className="text-[18px]" /> 40m
                  </div>
                  <div className="flex items-center gap-1.5 bg-surface-container-low/50 px-2.5 py-1 rounded-md">
                    <BookOpen className="text-[18px]" /> 50 Qs
                  </div>
                </div>
                <a href="#" className="w-full py-3.5 bg-primary text-on-primary rounded-xl font-label-md text-label-md font-bold shadow-md hover:shadow-lg hover:bg-surface-tint transition-all active:scale-[0.98] duration-200 text-center">Take Test</a>
              </div>
            </div>
          </div>
        </main>

        {/* Bottom Nav */}
        </div>
    </>
  );
}
