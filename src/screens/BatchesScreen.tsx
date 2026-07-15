import { Flame, Check, ArrowRight, ChevronRight, Headset, Anchor } from "lucide-react";
import { useEffect, useState } from "react";
import { pb } from "../lib/pb";
import AuthGuard from "../components/AuthGuard";

export default function BatchesScreen() {
  const [batches, setBatches] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBatches() {
      try {
        const records = await pb.collection('batches').getList(1, 10, {
          sort: '-created',
        });
        setBatches(records.items);
      } catch (error) {
        console.error("Error fetching batches:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchBatches();
  }, []);

  return (
    <>
      <div className="min-h-screen ambient-wave-bg flex flex-col md:pb-0 pb-[80px] bg-background text-on-background antialiased">
        {/* Top App Bar */}
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
            {loading ? (
              <div className="lg:col-span-12 text-center py-10 text-on-surface-variant">Loading batches...</div>
            ) : batches.length > 0 ? (
              batches.map((batch, index) => {
                const isFeatured = index === 0; // First one gets col-span-8
                
                if (isFeatured) {
                  return (
                    <div key={batch.id} className="lg:col-span-8 bg-surface-container-lowest border border-outline-variant/20 rounded-2xl overflow-hidden group premium-card relative flex flex-col md:flex-row h-full">
                      {batch.seats_left <= 5 && batch.seats_left > 0 && (
                        <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md text-error font-label-sm text-label-sm px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm border border-error/10">
                          <Flame className="text-[14px] text-error" />
                          Only {batch.seats_left} seats left!
                        </div>
                      )}
                      
                      <div className="md:w-5/12 h-56 md:h-auto relative overflow-hidden bg-surface-variant shrink-0">
                        <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${batch.image_url || "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}')` }} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-5">
                          <span className="bg-white/20 text-white font-label-sm text-label-sm px-4 py-1.5 rounded-full backdrop-blur-md border border-white/30 shadow-sm">{batch.category}</span>
                        </div>
                      </div>

                      <div className="p-6 md:p-8 md:w-7/12 flex flex-col justify-between bg-surface-container-lowest">
                        <div>
                          <div className="flex justify-between items-start mb-3">
                            <h2 className="font-headline-lg text-headline-md text-on-surface">{batch.title}</h2>
                            <div className="text-right bg-primary/5 px-3 py-1.5 rounded-lg border border-primary/10">
                              <span className="block font-headline-md text-body-lg font-bold text-primary">${batch.price}</span>
                            </div>
                          </div>
                          <p className="font-body-md text-[15px] text-on-surface-variant mb-6 line-clamp-2 leading-relaxed">{batch.description}</p>

                          <div className="grid grid-cols-2 gap-y-5 gap-x-4 mb-8">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-secondary-container/30 flex items-center justify-center shrink-0"><Anchor className="text-secondary text-[20px]" /></div>
                              <div>
                                <span className="block font-label-sm text-[11px] text-outline uppercase tracking-wider">Starts</span>
                                <span className="block font-label-md text-label-md text-on-surface font-semibold">{batch.start_date ? new Date(batch.start_date).toLocaleDateString() : 'TBD'}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-secondary-container/30 flex items-center justify-center shrink-0"><Flame className="text-secondary text-[20px]" /></div>
                              <div>
                                <span className="block font-label-sm text-[11px] text-outline uppercase tracking-wider">Duration</span>
                                <span className="block font-label-md text-label-md text-on-surface font-semibold">{batch.duration_months} Months</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-secondary-container/30 flex items-center justify-center shrink-0"><ArrowRight className="text-secondary text-[20px]" /></div>
                              <div>
                                <span className="block font-label-sm text-[11px] text-outline uppercase tracking-wider">Mode</span>
                                <span className="block font-label-md text-label-md text-on-surface font-semibold">{batch.mode}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-secondary-container/30 flex items-center justify-center shrink-0"><Anchor className="text-secondary text-[20px]" /></div>
                              <div>
                                <span className="block font-label-sm text-[11px] text-outline uppercase tracking-wider">Instructor</span>
                                <span className="block font-label-md text-label-md text-on-surface font-semibold">{batch.instructor}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <AuthGuard>
                          <button className="w-full bg-primary text-on-primary font-label-md text-[15px] font-semibold py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg flex justify-center items-center gap-2 group-hover:bg-primary-container group-hover:text-on-primary-container btn-pro-pulse">
                            Enroll Now <ArrowRight className="text-[20px] transition-transform group-hover:translate-x-1.5" />
                          </button>
                        </AuthGuard>
                      </div>
                    </div>
                  );
                }

                return (
                  <div key={batch.id} className="lg:col-span-4 bg-surface-container-lowest border border-outline-variant/20 rounded-2xl overflow-hidden group premium-card flex flex-col relative h-full">
                    <div className="h-48 relative overflow-hidden bg-surface-variant shrink-0">
                      <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${batch.image_url || "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}')` }} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-5">
                        <span className="bg-white/20 text-white font-label-sm text-label-sm px-4 py-1.5 rounded-full backdrop-blur-md border border-white/30 shadow-sm">{batch.category}</span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow bg-surface-container-lowest">
                      <h2 className="font-headline-lg text-[22px] leading-[30px] font-semibold text-on-surface mb-2">{batch.title}</h2>
                      <p className="font-body-md text-[14px] leading-relaxed text-on-surface-variant mb-6 line-clamp-2">{batch.description}</p>
                      <div className="bg-surface-bright rounded-xl p-4 mb-6 border border-outline-variant/30 flex-grow grid grid-cols-2 gap-4">
                        <div>
                          <span className="block font-label-sm text-[10px] text-outline uppercase tracking-wider mb-1">Starts</span>
                          <span className="font-label-md text-[14px] font-semibold text-on-surface flex items-center gap-1.5"><Flame className="text-[18px] text-primary" /> {batch.start_date ? new Date(batch.start_date).toLocaleDateString() : 'TBD'}</span>
                        </div>
                        <div>
                          <span className="block font-label-sm text-[10px] text-outline uppercase tracking-wider mb-1">Duration</span>
                          <span className="font-label-md text-[14px] font-semibold text-on-surface flex items-center gap-1.5"><Anchor className="text-[18px] text-primary" /> {batch.duration_months} M</span>
                        </div>
                        <div className="col-span-2">
                          <span className="block font-label-sm text-[10px] text-outline uppercase tracking-wider mb-1">Instructor</span>
                          <span className="font-label-md text-[14px] font-semibold text-on-surface flex items-center gap-1.5"><Anchor className="text-[18px] text-primary" /> {batch.instructor}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-auto pt-2 border-t border-outline-variant/20">
                        <span className="font-headline-md text-[22px] font-bold text-primary">${batch.price}</span>
                        <button className="text-primary hover:text-primary-container font-label-md text-[14px] font-semibold px-4 py-2 transition-colors flex items-center gap-1">
                          Details <ChevronRight className="text-[16px]" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="lg:col-span-12 text-center py-10 text-on-surface-variant">No batches found.</div>
            )}

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
        </div>
    </>
  );
}
