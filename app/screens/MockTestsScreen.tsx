import BottomNav from "../components/BottomNav";
import { Link } from "react-router";

export default function MockTestsScreen() {
  return (
    <>
      <div>
  <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-[72px] bg-surface/70 dark:bg-surface-dim/70 backdrop-blur-xl border-b border-white/30 dark:border-outline-variant/20 shadow-sm">
    <button aria-label="Menu" className="flex items-center justify-center p-2.5 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors">
      <span className="material-symbols-outlined" data-icon="anchor" style={{fontVariationSettings: '"FILL" 0'}}>anchor</span>
    </button>
    <h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim tracking-tight">Sailor Prep</h1>
    <button aria-label="Notifications" className="flex items-center justify-center p-2.5 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors relative">
      <span className="material-symbols-outlined" data-icon="notifications" style={{fontVariationSettings: '"FILL" 0'}}>notifications</span>
      <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border border-surface" />
    </button>
  </header>
  <main className="flex-grow pt-28 pb-32 px-margin-mobile md:px-margin-desktop w-full max-w-[1120px] mx-auto">
    <div className="mb-8">
      <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface mb-2 tracking-tight">Mock Exam Library</h2>
      <p className="font-body-md text-body-md text-on-surface-variant">Prepare for your next voyage with comprehensive practice tests.</p>
    </div>
    <div className="flex overflow-x-auto pb-4 mb-6 gap-3 no-scrollbar scroll-smooth">
      <button className="whitespace-nowrap px-5 py-2.5 rounded-full bg-primary text-on-primary font-label-md text-label-md shadow-sm transition-transform hover:scale-95 duration-200">All</button>
      <button className="whitespace-nowrap px-5 py-2.5 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm border border-outline-variant/30 text-on-surface-variant font-label-md text-label-md hover:bg-surface-container transition-colors shadow-sm">Deck</button>
      <button className="whitespace-nowrap px-5 py-2.5 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm border border-outline-variant/30 text-on-surface-variant font-label-md text-label-md hover:bg-surface-container transition-colors shadow-sm">Engine</button>
      <button className="whitespace-nowrap px-5 py-2.5 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm border border-outline-variant/30 text-on-surface-variant font-label-md text-label-md hover:bg-surface-container transition-colors shadow-sm">Safety</button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-surface/60 dark:bg-surface-container-highest/40 backdrop-blur-xl border border-white/40 dark:border-outline-variant/20 rounded-2xl p-6 flex flex-col justify-between shadow-[0_8px_32px_rgba(34,100,114,0.06)] transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(34,100,114,0.12)] active:scale-[0.98] group">
        <div>
          <div className="flex justify-between items-start mb-5">
            <div className="p-3.5 bg-secondary-container/80 backdrop-blur-sm rounded-xl text-on-secondary-container shadow-inner">
              <span className="material-symbols-outlined">health_and_safety</span>
            </div>
            <span className="px-3 py-1.5 bg-tertiary-container/10 border border-tertiary-container/20 rounded-full font-label-sm text-label-sm text-tertiary font-bold tracking-wide">MEDIUM</span>
          </div>
          <h3 className="font-headline-md text-headline-md text-on-surface mb-2 leading-tight">Basic Safety Training (BST)</h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">Essential safety protocols and emergency procedures for all seafarers.</p>
        </div>
        <div className="space-y-5 mt-auto">
          <div className="flex items-center gap-5 text-on-surface-variant font-label-md text-label-md">
            <div className="flex items-center gap-1.5 bg-surface-container-low/50 px-2.5 py-1 rounded-md">
              <span className="material-symbols-outlined text-[18px]">schedule</span> 30m
            </div>
            <div className="flex items-center gap-1.5 bg-surface-container-low/50 px-2.5 py-1 rounded-md">
              <span className="material-symbols-outlined text-[18px]">help</span> 50 Qs
            </div>
          </div>
          <Link className="w-full py-3.5 bg-primary text-on-primary rounded-xl font-label-md text-label-md font-bold shadow-md hover:shadow-lg hover:bg-surface-tint transition-all active:scale-95 duration-200" to="/mock-tests">Take Test</Link>
        </div>
      </div>
      <div className="bg-surface/60 dark:bg-surface-container-highest/40 backdrop-blur-xl border border-white/40 dark:border-outline-variant/20 rounded-2xl p-6 flex flex-col justify-between shadow-[0_8px_32px_rgba(34,100,114,0.06)] transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(34,100,114,0.12)] active:scale-[0.98] group">
        <div>
          <div className="flex justify-between items-start mb-5">
            <div className="p-3.5 bg-secondary-container/80 backdrop-blur-sm rounded-xl text-on-secondary-container shadow-inner">
              <span className="material-symbols-outlined">satellite_alt</span>
            </div>
            <span className="px-3 py-1.5 bg-error/10 border border-error/20 rounded-full font-label-sm text-label-sm text-error font-bold tracking-wide">HARD</span>
          </div>
          <h3 className="font-headline-md text-headline-md text-on-surface mb-2 leading-tight">GMDSS General</h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">Global Maritime Distress and Safety System operational procedures.</p>
        </div>
        <div className="space-y-5 mt-auto">
          <div className="flex items-center gap-5 text-on-surface-variant font-label-md text-label-md">
            <div className="flex items-center gap-1.5 bg-surface-container-low/50 px-2.5 py-1 rounded-md">
              <span className="material-symbols-outlined text-[18px]">schedule</span> 45m
            </div>
            <div className="flex items-center gap-1.5 bg-surface-container-low/50 px-2.5 py-1 rounded-md">
              <span className="material-symbols-outlined text-[18px]">help</span> 60 Qs
            </div>
          </div>
          <Link className="w-full py-3.5 bg-primary text-on-primary rounded-xl font-label-md text-label-md font-bold shadow-md hover:shadow-lg hover:bg-surface-tint transition-all active:scale-95 duration-200" to="/mock-tests">Take Test</Link>
        </div>
      </div>
      <div className="bg-surface/60 dark:bg-surface-container-highest/40 backdrop-blur-xl border border-white/40 dark:border-outline-variant/20 rounded-2xl p-6 flex flex-col justify-between shadow-[0_8px_32px_rgba(34,100,114,0.06)] transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(34,100,114,0.12)] active:scale-[0.98] group">
        <div>
          <div className="flex justify-between items-start mb-5">
            <div className="p-3.5 bg-secondary-container/80 backdrop-blur-sm rounded-xl text-on-secondary-container shadow-inner">
              <span className="material-symbols-outlined">directions_boat</span>
            </div>
            <span className="px-3 py-1.5 bg-tertiary-container/10 border border-tertiary-container/20 rounded-full font-label-sm text-label-sm text-tertiary font-bold tracking-wide">MEDIUM</span>
          </div>
          <h3 className="font-headline-md text-headline-md text-on-surface mb-2 leading-tight">Proficiency in Survival Craft (PSSC)</h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">Operation of lifeboats, liferafts, and rescue boats.</p>
        </div>
        <div className="space-y-5 mt-auto">
          <div className="flex items-center gap-5 text-on-surface-variant font-label-md text-label-md">
            <div className="flex items-center gap-1.5 bg-surface-container-low/50 px-2.5 py-1 rounded-md">
              <span className="material-symbols-outlined text-[18px]">schedule</span> 40m
            </div>
            <div className="flex items-center gap-1.5 bg-surface-container-low/50 px-2.5 py-1 rounded-md">
              <span className="material-symbols-outlined text-[18px]">help</span> 50 Qs
            </div>
          </div>
          <Link className="w-full py-3.5 bg-primary text-on-primary rounded-xl font-label-md text-label-md font-bold shadow-md hover:shadow-lg hover:bg-surface-tint transition-all active:scale-95 duration-200" to="/mock-tests">Take Test</Link>
        </div>
      </div>
    </div>
  </main>
  <BottomNav />
  <style dangerouslySetInnerHTML={{__html: "\n        /* Safe area padding for modern mobile devices */\n        @supports (padding-bottom: env(safe-area-inset-bottom)) {\n            .pb-safe {\n                padding-bottom: calc(env(safe-area-inset-bottom) + 8px);\n            }\n        }\n        /* Hide scrollbar for filter chips */\n        .no-scrollbar::-webkit-scrollbar {\n            display: none;\n        }\n        .no-scrollbar {\n            -ms-overflow-style: none;  /* IE and Edge */\n            scrollbar-width: none;  /* Firefox */\n        }\n    " }} />
</div>

    </>
  );
}
