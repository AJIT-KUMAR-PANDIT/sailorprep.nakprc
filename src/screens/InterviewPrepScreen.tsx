import { BadgeCheck, Timer, Mic, CircleDot } from "lucide-react";
import { useEffect, useState } from "react";
import { pb } from "../lib/pb";

export default function InterviewPrepScreen() {
  const [preps, setPreps] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPreps() {
      try {
        const records = await pb.collection('interview_prep').getList(1, 20);
        setPreps(records.items);
      } catch (error) {
        console.error("Error fetching interview prep:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPreps();
  }, []);
  return (
    <>
      <div className="min-h-screen bg-background text-on-background antialiased relative">
        {/* Subtle wave pattern background */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(to bottom, rgba(34,100,114,0.08) 1px, transparent 1px)", backgroundSize: "100% 24px" }} />

        {/* Top App Bar */}
        {/* Main Content */}
        <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-28 pb-24 md:pt-20 md:pb-16">
          {/* Hero Section */}
          <div className="mb-10 relative overflow-hidden rounded-[24px] bg-surface border border-surface-variant p-8 md:p-10 flex flex-col md:flex-row items-center gap-10 shadow-sm">
            {/* Subtle wave pattern SVG in background */}
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
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4 tracking-tight font-bold leading-tight">Interview Ready</h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mb-8 leading-relaxed">Master the critical scenarios required for maritime certification. Practice articulating procedures for Port State Control, emergencies, and cargo operations to ensure confidence and compliance.</p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-secondary-container/60 text-on-secondary-container px-4 py-2 rounded-lg font-label-sm text-label-sm inline-flex items-center gap-1.5 border border-secondary-container">
                  <BadgeCheck className="text-[18px]" /> 45 Scenarios
                </span>
                <span className="bg-surface-container-low text-on-surface-variant px-4 py-2 rounded-lg font-label-sm text-label-sm inline-flex items-center gap-1.5 border border-surface-variant">
                  <Timer className="text-[18px]" /> 2h 30m avg
                </span>
              </div>
            </div>
            <div className="w-full md:w-5/12 aspect-video md:aspect-[4/3] relative rounded-2xl overflow-hidden shadow-md z-10 border border-surface-variant">
              <img className="w-full h-full object-cover" alt="A professional maritime officer in uniform, standing on the bridge of a modern cargo ship, looking confidently towards the horizon during golden hour." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu6BcM8MZBMtZoiuXE-rvFVwaRcKAUiyaFMUg6DWr6nrIaIZ1ddjrpeFLefMSwooYd3FxH16s3VjhXhgRgqJGOJkNUBjl0SWly8qogcWYvj-vhq6YBIqsRvWEsop5a3KDVqOiop9XaKv9o5D89GVNQXOsSLE8rPvod2KS7qneqdSkP9K_fwCqHwwtXDd_UIJsOyDC3qaqfsHwCFcU8_RhUII8gBVrc6pKxvf4bSr1n9rXOZPHuKBMCqw" />
            </div>
          </div>

          {/* Scenarios Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
            {loading ? (
              <div className="col-span-full text-center py-10 text-on-surface-variant">Loading prep questions...</div>
            ) : preps.length > 0 ? (
              preps.map((prep) => (
                <div key={prep.id} className="col-span-1 md:col-span-6 bg-surface border border-surface-variant rounded-[24px] p-8 hover:shadow-md transition-shadow flex flex-col h-full group">
                  <div className="flex items-start justify-between mb-6">
                    <div className="bg-primary-container/20 p-3.5 rounded-2xl text-primary group-hover:bg-primary-container/30 transition-colors">
                      <Mic className="text-[28px]" />
                    </div>
                    <span className="bg-surface-container-low border border-surface-variant px-3 py-1.5 rounded-lg font-label-sm text-label-sm text-on-surface-variant uppercase">{prep.category || 'General'}</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-3 tracking-tight font-semibold">Scenario Practice</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow leading-relaxed" dangerouslySetInnerHTML={{ __html: prep.answer || "Formulate an answer for this scenario." }}></p>
                  <div className="space-y-5 bg-surface-container-low/50 rounded-2xl p-5 border border-surface-variant/50">
                    <p className="font-label-md text-label-md text-on-surface font-medium leading-relaxed">Q: "{prep.question}"</p>
                    <button className="text-primary font-label-md text-label-md flex items-center gap-2 hover:text-primary-container transition-colors group/btn hover-pulse-ring rounded-full px-4 py-2 bg-primary/10 border border-primary/20 hover:bg-primary/15 self-start cursor-pointer">
                      <CircleDot className="text-[20px] group-hover/btn:scale-110 transition-transform" /> Record Response
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-10 text-on-surface-variant">No interview prep scenarios found.</div>
            )}
          </div>
        </main>

        {/* Bottom Nav */}
        </div>
    </>
  );
}
