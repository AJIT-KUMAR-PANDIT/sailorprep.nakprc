import { Anchor, Home, ClipboardList, BookOpen, Bookmark, User, Bell, BadgeCheck, Timer, Shield, Mic, AlertTriangle, Ship, CircleDot } from "lucide-react";
import BottomNav from "../components/BottomNav";
import { Link } from "react-router";

export default function InterviewPrepScreen() {
  return (
    <>
      <div>
  <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile h-16 bg-surface border-b border-surface-variant">
    <div className="flex items-center gap-4">
      <button className="text-on-surface-variant hover:bg-surface-container p-2 rounded-full transition-colors flex items-center justify-center">
        <Anchor className=" text-[24px]" />
      </button>
      <h1 className="text-headline-md font-headline-md font-bold text-on-surface tracking-tight">Sailor Prep</h1>
    </div>
    <nav className="hidden md:flex gap-6 items-center">
      <Link  className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md flex items-center gap-2" to="/welcome">
        <Home className=" text-[20px]" />
        Home
      </Link>
      <Link  className="text-primary font-label-md text-label-md font-bold flex items-center gap-2 border-b-2 border-primary pb-1" to="/mock-tests">
        <ClipboardList className=" text-[20px]" />
        Tests
      </Link>
      <Link  className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md flex items-center gap-2" to="/pyq">
        <BookOpen className=" text-[20px]" />
        PYQ
      </Link>
      <Link  className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md flex items-center gap-2" to="/study-notes">
        <Bookmark className=" text-[20px]" />
        Notes
      </Link>
      <Link  className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md flex items-center gap-2" to="/my-progress">
        <User className=" text-[20px]" />
        Profile
      </Link>
    </nav>
    <button className="text-on-surface-variant hover:bg-surface-container p-2 rounded-full transition-colors flex items-center justify-center">
      <Bell className=" text-[24px]" />
    </button>
  </header>
  <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8">
    <div className="mb-10 relative overflow-hidden rounded-[24px] bg-surface border border-surface-variant p-8 md:p-10 flex flex-col md:flex-row items-center gap-10 shadow-sm">
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern height={40} id="wave-pro" patternUnits="userSpaceOnUse" width={200} x={0} y={0}>
              <path d="M0 20 Q 50 40, 100 20 T 200 20" fill="none" stroke="currentColor" strokeWidth={2} />
            </pattern>
          </defs>
          <rect fill="url(#wave-pro)" height="100%" width="100%" x={0} y={0} />
        </svg>
      </div>
      <div className="flex-1 z-10">
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4 tracking-tight">Interview Ready</h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mb-8 leading-relaxed">Master the critical scenarios required for maritime certification. Practice articulating procedures for Port State Control, emergencies, and cargo operations to ensure confidence and compliance.</p>
        <div className="flex flex-wrap gap-3">
          <span className="bg-secondary-container/60 text-on-secondary-container px-4 py-2 rounded-lg font-label-sm text-label-sm inline-flex items-center gap-1.5 border border-secondary-container">
            <BadgeCheck className=" text-[18px]" /> 45 Scenarios
          </span>
          <span className="bg-surface-container-low text-on-surface-variant px-4 py-2 rounded-lg font-label-sm text-label-sm inline-flex items-center gap-1.5 border border-surface-variant">
            <Timer className=" text-[18px]" /> 2h 30m avg
          </span>
        </div>
      </div>
      <div className="w-full md:w-5/12 aspect-video md:aspect-[4/3] relative rounded-2xl overflow-hidden shadow-md z-10 border border-surface-variant">
        <img className="w-full h-full object-cover" data-alt="A professional maritime officer in uniform, standing on the bridge of a modern cargo ship, looking confidently towards the horizon during golden hour. Soft, clear lighting emphasizing leadership and readiness. Minimalist framing with a light blue sky and calm sea in the background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu6BcM8MZBMtZoiuXE-rvFVwaRcKAUiyaFMUg6DWr6nrIaIZ1ddjrpeFLefMSwooYd3FxH16s3VjhXhgRgqJGOJkNUBjl0SWly8qogcWYvj-vhq6YBIqsRvWEsop5a3KDVqOiop9XaKv9o5D89GVNQXOsSLE8rPvod2KS7qneqdSkP9K_fwCqHwwtXDd_UIJsOyDC3qaqfsHwCFcU8_RhUII8gBVrc6pKxvf4bSr1n9rXOZPHuKBMCqw" />
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
      <div className="col-span-1 md:col-span-6 bg-surface border border-surface-variant rounded-[24px] p-8 hover:shadow-md transition-shadow flex flex-col h-full group">
        <div className="flex items-start justify-between mb-6">
          <div className="bg-primary-container/20 p-3.5 rounded-2xl text-primary group-hover:bg-primary-container/30 transition-colors">
            <Shield className=" text-[28px]" />
          </div>
          <span className="bg-surface-container-low border border-surface-variant px-3 py-1.5 rounded-lg font-label-sm text-label-sm text-on-surface-variant">Regulatory</span>
        </div>
        <h3 className="font-headline-md text-headline-md text-on-surface mb-3 tracking-tight">Port State Control</h3>
        <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow leading-relaxed">Prepare for inspections. Demonstrate knowledge of SOLAS, MARPOL, and STCW compliance requirements during external audits.</p>
        <div className="space-y-5 bg-surface-container-low/50 rounded-2xl p-5 border border-surface-variant/50">
          <p className="font-label-md text-label-md text-on-surface font-medium leading-relaxed">Q: "Walk me through your preparation checklist before a scheduled PSC inspection."</p>
          <button className="text-primary font-label-md text-label-md flex items-center gap-2 hover:text-primary-container transition-colors group/btn hover-pulse-ring rounded-full px-4 py-2 bg-primary/10 border border-primary/20 hover:bg-primary/15 self-start">
            <Mic className=" text-[20px] group-hover/btn:scale-110 transition-transform" /> Record Response
          </button>
        </div>
      </div>
      <div className="col-span-1 md:col-span-6 bg-surface border border-surface-variant rounded-[24px] p-8 hover:shadow-md transition-shadow flex flex-col h-full group">
        <div className="flex items-start justify-between mb-6">
          <div className="bg-error-container/40 p-3.5 rounded-2xl text-error group-hover:bg-error-container/60 transition-colors">
            <AlertTriangle className=" text-[28px]" />
          </div>
          <span className="bg-surface-container-low border border-surface-variant px-3 py-1.5 rounded-lg font-label-sm text-label-sm text-on-surface-variant">Safety Critical</span>
        </div>
        <h3 className="font-headline-md text-headline-md text-on-surface mb-3 tracking-tight">Emergency Drills</h3>
        <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow leading-relaxed">Articulate rapid response protocols for critical situations onboard.</p>
        <div className="space-y-5 bg-surface-container-low/50 rounded-2xl p-5 border border-surface-variant/50">
          <p className="font-label-md text-label-md text-on-surface font-medium leading-relaxed">Q: "Describe the procedure and immediate actions for an Oil Spill drill on deck."</p>
          <button className="text-primary font-label-md text-label-md flex items-center gap-2 hover:text-primary-container transition-colors group/btn hover-pulse-ring rounded-full px-4 py-2 bg-primary/10 border border-primary/20 hover:bg-primary/15 self-start">
            <Mic className=" text-[20px] group-hover/btn:scale-110 transition-transform" /> Record Response
          </button>
        </div>
      </div>
      <div className="col-span-1 md:col-span-12 bg-surface border border-surface-variant rounded-[24px] p-8 hover:shadow-md transition-shadow group">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-5">
            <div className="bg-secondary-container/40 p-4 rounded-2xl text-on-secondary-container group-hover:bg-secondary-container/60 transition-colors">
              <Ship className=" text-[32px]" />
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-1 tracking-tight">Cargo Operations</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Safe handling, loading, and discharging procedures specific to vessel type.</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-5 p-6 rounded-2xl bg-surface-container-lowest border border-surface-variant hover:border-outline-variant transition-colors shadow-sm">
            <p className="font-label-md text-label-md text-on-surface font-medium leading-relaxed">Q: "What are the stability considerations and required calculations before loading heavy lift cargo?"</p>
            <div className="mt-auto pt-2">
              <button className="bg-primary text-on-primary px-5 py-2.5 rounded-full font-label-md text-label-md hover:bg-surface-tint transition-all hover-pulse-ring flex items-center gap-2 w-fit">
                <CircleDot className=" text-[20px]" /> Record Response
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-5 p-6 rounded-2xl bg-surface-container-lowest border border-surface-variant hover:border-outline-variant transition-colors shadow-sm">
            <p className="font-label-md text-label-md text-on-surface font-medium leading-relaxed">Q: "Explain the atmosphere control procedures when preparing tanks for hazardous liquid cargo."</p>
            <div className="mt-auto pt-2">
              <button className="bg-primary text-on-primary px-5 py-2.5 rounded-full font-label-md text-label-md hover:bg-surface-tint transition-all hover-pulse-ring flex items-center gap-2 w-fit">
                <CircleDot className=" text-[20px]" /> Record Response
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <BottomNav />
</div>

    </>
  );
}
