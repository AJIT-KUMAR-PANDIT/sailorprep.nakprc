import { Diamond, Medal, Ship, Pencil, TrendingUp, Sliders, ArrowRight, Award, Flame, Scale, IdCard, ChevronRight, BellRing, HelpCircle, LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { pb } from "../lib/pb";
import AuthGuard from "../components/AuthGuard";

export default function MyProgressScreen() {
  const [progress, setProgress] = useState<any>(null);

  useEffect(() => {
    async function fetchProgress() {
      try {
        const records = await pb.collection('user_progress').getList(1, 1);
        if (records.items.length > 0) {
          setProgress(records.items[0]);
        }
      } catch (error) {
        console.error("Error fetching user progress:", error);
      }
    }
    fetchProgress();
  }, []);
  return (
    <>
      <div>
  <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px] pointer-events-none -z-10" />
  <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/5 blur-[120px] pointer-events-none -z-10" />
  <main className="pt-24 pb-28 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full grid grid-cols-4 md:grid-cols-12 gap-6 md:gap-8">
    <AuthGuard type="replace">
    <section className="col-span-4 md:col-span-12 mb-2">
      <div className="glass-card rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-gradient-to-bl from-primary to-primary-container text-on-primary font-label-sm px-6 py-1.5 rounded-bl-xl font-bold tracking-wider uppercase shadow-md flex items-center gap-1">
          <Diamond className=" filled text-[14px]" /> Pro
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full p-[3px] shadow-lg">
            <div className="w-full h-full bg-surface rounded-full" />
          </div>
          <img className="w-28 h-28 rounded-full object-cover relative z-10 m-[3px] border-4 border-surface" data-alt="A professional headshot of a young merchant navy cadet in a pristine white uniform. The lighting is bright and clear, reflecting a light-mode maritime aesthetic. The background is a soft, minimal studio grey. The cadet has a calm, focused expression, embodying a sense of duty and preparation." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDehApe1Y4mFzEz-c_Xsv1r7aCIp6LDrst7KkrszP4UJAulQele7i61cnMtc_rSud40AhgMzxe05zGROJLgbXPzfCETiOCD-_EXwnnaPB5Ly2rIpAqftvqNjfS9xRZNH9vMwJblZHPA2u-jHp6P8oAJBT1UakBF6kOz2k34_YCo815RO6BhdP27MyhJ27IwKf9LStGKWnraGj2PUDQFOFhtUivbe34yrA1Bt_T_k1tFZqp8Ydm2HvecOw" />
          <div className="absolute -bottom-3 -right-3 bg-inverse-surface text-inverse-on-surface font-label-sm px-3 py-1.5 rounded-xl border-2 border-surface z-20 shadow-sm flex items-center gap-1">
            Lvl {progress?.current_level || 4} <Medal className=" text-[14px] text-primary-fixed" />
          </div>
        </div>
        <div className="flex-1 text-center md:text-left z-10 flex flex-col justify-center">
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-extrabold mb-2 tracking-tight">Alex Mercer</h2>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-4">
            <span className="bg-secondary-container/50 text-on-secondary-container font-label-md px-4 py-1.5 rounded-full border border-secondary/20 shadow-sm backdrop-blur-sm">Cadet</span>
            <span className="bg-surface/50 text-on-surface-variant font-label-md px-4 py-1.5 rounded-full border border-outline-variant/30 flex items-center gap-1.5 shadow-sm backdrop-blur-sm">
              <Ship className=" text-[18px]" /> Deck Dept.
            </span>
          </div>
          <p className="text-on-surface-variant text-body-md max-w-xl mx-auto md:mx-0 leading-relaxed">Focusing on Navigation and Stability modules for upcoming MMD examinations.</p>
        </div>
        <button className="mt-4 md:mt-0 px-6 py-2.5 bg-surface text-primary border border-primary/20 hover:bg-primary hover:text-on-primary font-label-md rounded-xl transition-all duration-300 self-center md:self-start shadow-sm hover:shadow-md flex items-center gap-2">
          <Pencil className=" text-[18px]" /> Edit Profile
        </button>
      </div>
    </section>
    <section className="col-span-4 md:col-span-7 flex flex-col gap-6">
      <div className="glass-card rounded-3xl p-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary-container opacity-50" />
        <div className="flex justify-between items-start mb-8">
          <div>
            <h3 className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight mb-1">Performance Analytics</h3>
            <p className="text-on-surface-variant font-label-sm uppercase tracking-wider">Last 7 Days</p>
          </div>
          <div className="bg-primary/10 text-primary font-label-sm px-3 py-1 rounded-lg flex items-center gap-1">
            <TrendingUp className=" text-[16px]" /> +12%
          </div>
        </div>
        <div className="flex items-end justify-between h-48 gap-3 px-2">
          <div className="flex flex-col items-center gap-3 w-full group">
            <div className="w-full bg-surface-variant/50 rounded-lg relative h-full flex items-end overflow-hidden backdrop-blur-sm border border-white/40">
              <div className="w-full bg-gradient-to-t from-primary/40 to-primary/60 group-hover:from-primary/60 group-hover:to-primary/80 transition-all rounded-lg" style={{height: '45%'}} />
            </div>
            <span className="font-label-sm text-on-surface-variant group-hover:text-primary transition-colors">M</span>
          </div>
          <div className="flex flex-col items-center gap-3 w-full group">
            <div className="w-full bg-surface-variant/50 rounded-lg relative h-full flex items-end overflow-hidden backdrop-blur-sm border border-white/40">
              <div className="w-full bg-gradient-to-t from-primary/40 to-primary/60 group-hover:from-primary/60 group-hover:to-primary/80 transition-all rounded-lg" style={{height: '60%'}} />
            </div>
            <span className="font-label-sm text-on-surface-variant group-hover:text-primary transition-colors">T</span>
          </div>
          <div className="flex flex-col items-center gap-3 w-full group">
            <div className="w-full bg-surface-variant/50 rounded-lg relative h-full flex items-end overflow-hidden backdrop-blur-sm border border-white/40">
              <div className="w-full bg-gradient-to-t from-primary/40 to-primary/60 group-hover:from-primary/60 group-hover:to-primary/80 transition-all rounded-lg" style={{height: '80%'}} />
            </div>
            <span className="font-label-sm text-on-surface-variant group-hover:text-primary transition-colors">W</span>
          </div>
          <div className="flex flex-col items-center gap-3 w-full group">
            <div className="w-full bg-surface-variant/50 rounded-lg relative h-full flex items-end overflow-hidden backdrop-blur-sm border border-white/40 shadow-[0_0_15px_rgba(34,100,114,0.3)]">
              <div className="w-full bg-gradient-to-t from-primary to-primary-container group-hover:brightness-110 transition-all rounded-lg relative" style={{height: '95%'}}>
                <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-white rounded-full opacity-50" />
              </div>
            </div>
            <span className="font-label-sm text-primary font-bold">T</span>
          </div>
          <div className="flex flex-col items-center gap-3 w-full group">
            <div className="w-full bg-surface-variant/50 rounded-lg relative h-full flex items-end overflow-hidden backdrop-blur-sm border border-white/40">
              <div className="w-full bg-gradient-to-t from-primary/40 to-primary/60 group-hover:from-primary/60 group-hover:to-primary/80 transition-all rounded-lg" style={{height: '70%'}} />
            </div>
            <span className="font-label-sm text-on-surface-variant group-hover:text-primary transition-colors">F</span>
          </div>
          <div className="flex flex-col items-center gap-3 w-full group">
            <div className="w-full bg-surface-variant/50 rounded-lg relative h-full flex items-end overflow-hidden backdrop-blur-sm border border-white/40">
              <div className="w-full bg-gradient-to-t from-primary/40 to-primary/60 group-hover:from-primary/60 group-hover:to-primary/80 transition-all rounded-lg" style={{height: '50%'}} />
            </div>
            <span className="font-label-sm text-on-surface-variant group-hover:text-primary transition-colors">S</span>
          </div>
          <div className="flex flex-col items-center gap-3 w-full group">
            <div className="w-full bg-surface-variant/50 rounded-lg relative h-full flex items-end overflow-hidden backdrop-blur-sm border border-white/40">
              <div className="w-full bg-gradient-to-t from-primary/40 to-primary/60 group-hover:from-primary/60 group-hover:to-primary/80 transition-all rounded-lg" style={{height: '30%'}} />
            </div>
            <span className="font-label-sm text-on-surface-variant group-hover:text-primary transition-colors">S</span>
          </div>
        </div>
      </div>
      <div className="glass-card rounded-3xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight">Subject Mastery</h3>
          <button className="p-2 bg-surface rounded-full shadow-sm hover:shadow-md transition-shadow text-on-surface-variant border border-white/40">
            <Sliders className=" text-[20px]" />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center p-4 bg-surface/40 rounded-2xl border border-white/30 shadow-sm backdrop-blur-sm hover:-translate-y-1 transition-transform">
            <div className="relative w-24 h-24 mb-3">
              <svg className="circular-chart text-primary w-full h-full" viewBox="0 0 36 36">
                <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="circle stroke-current" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" strokeDasharray="78, 100" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-headline-md text-[20px] font-bold text-on-surface">78%</span>
              </div>
            </div>
            <span className="font-label-sm text-on-surface text-center leading-tight">Celestial<br />Navigation</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-primary/5 rounded-2xl border border-primary/20 shadow-sm backdrop-blur-sm hover:-translate-y-1 transition-transform relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-12 h-12 bg-primary/10 rounded-full blur-xl" />
            <div className="relative w-24 h-24 mb-3">
              <svg className="circular-chart text-primary w-full h-full" viewBox="0 0 36 36">
                <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="circle stroke-current" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" strokeDasharray="92, 100" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-headline-md text-[20px] font-bold text-primary">92%</span>
              </div>
            </div>
            <span className="font-label-sm text-on-surface text-center leading-tight font-bold">Ship<br />Stability</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-surface/40 rounded-2xl border border-white/30 shadow-sm backdrop-blur-sm hover:-translate-y-1 transition-transform col-span-2 md:col-span-1">
            <div className="relative w-24 h-24 mb-3">
              <svg className="circular-chart text-secondary w-full h-full" viewBox="0 0 36 36">
                <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="circle stroke-current" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" strokeDasharray="45, 100" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-headline-md text-[20px] font-bold text-on-surface">45%</span>
              </div>
            </div>
            <span className="font-label-sm text-on-surface text-center leading-tight">Cargo<br />Handling</span>
          </div>
        </div>
      </div>
    </section>
    <section className="col-span-4 md:col-span-5 flex flex-col gap-6">
      <div className="glass-card rounded-3xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight">Achievements</h3>
          <a className="text-primary font-label-sm flex items-center hover:underline" href="#">
            View All <ArrowRight className=" text-[16px]" />
          </a>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="group relative flex flex-col items-center text-center p-4 rounded-2xl bg-gradient-to-b from-surface/80 to-surface/40 border border-white/50 shadow-sm hover:shadow-md transition-all">
            <div className="absolute inset-0 bg-secondary-container/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative w-14 h-14 bg-gradient-to-br from-secondary-container to-secondary text-on-secondary-container rounded-full flex items-center justify-center mb-3 shadow-inner border border-white/40">
              <Award className=" filled text-[28px] drop-shadow-sm text-white" />
            </div>
            <span className="font-label-sm text-on-surface font-bold leading-tight">First 100</span>
          </div>
          <div className="group relative flex flex-col items-center text-center p-4 rounded-2xl bg-gradient-to-b from-surface/80 to-surface/40 border border-white/50 shadow-sm hover:shadow-md transition-all">
            <div className="absolute inset-0 bg-tertiary-container/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative w-14 h-14 bg-gradient-to-br from-tertiary-container to-tertiary text-white rounded-full flex items-center justify-center mb-3 shadow-inner border border-white/40">
              <Flame className=" filled text-[28px] drop-shadow-sm text-white" />
            </div>
            <span className="font-label-sm text-on-surface font-bold leading-tight">Streak<br />Master</span>
          </div>
          <div className="group relative flex flex-col items-center text-center p-4 rounded-2xl bg-gradient-to-b from-surface/80 to-surface/40 border border-white/50 shadow-sm hover:shadow-md transition-all">
            <div className="absolute inset-0 bg-primary-container/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative w-14 h-14 bg-gradient-to-br from-primary-container to-primary text-white rounded-full flex items-center justify-center mb-3 shadow-inner border border-white/40">
              <Scale className=" filled text-[28px] drop-shadow-sm text-white" />
            </div>
            <span className="font-label-sm text-on-surface font-bold leading-tight">Stability<br />Expert</span>
          </div>
        </div>
      </div>
      <div className="glass-card rounded-3xl overflow-hidden p-2">
        <ul className="flex flex-col gap-1">
          <li>
            <button className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-surface/60 transition-colors text-left group">
              <div className="w-10 h-10 rounded-full bg-surface-container-high/50 flex items-center justify-center text-on-surface-variant group-hover:bg-primary/10 group-hover:text-primary transition-colors border border-white/30">
                <IdCard className=" text-[20px]" />
              </div>
              <div className="flex-1">
                <span className="font-label-md text-on-surface font-bold block mb-0.5">Subscription</span>
                <span className="font-label-sm text-primary flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-primary inline-block" /> Pro Plan Active
                </span>
              </div>
              <ChevronRight className=" text-outline-variant group-hover:text-primary transition-colors" />
            </button>
          </li>
          <li>
            <button className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-surface/60 transition-colors text-left group">
              <div className="w-10 h-10 rounded-full bg-surface-container-high/50 flex items-center justify-center text-on-surface-variant group-hover:bg-primary/10 group-hover:text-primary transition-colors border border-white/30">
                <BellRing className=" text-[20px]" />
              </div>
              <div className="flex-1">
                <span className="font-label-md text-on-surface font-bold block mb-0.5">Notifications</span>
                <span className="font-label-sm text-on-surface-variant">Daily Reminders</span>
              </div>
              <ChevronRight className=" text-outline-variant group-hover:text-primary transition-colors" />
            </button>
          </li>
          <li>
            <button className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-surface/60 transition-colors text-left group">
              <div className="w-10 h-10 rounded-full bg-surface-container-high/50 flex items-center justify-center text-on-surface-variant group-hover:bg-primary/10 group-hover:text-primary transition-colors border border-white/30">
                <HelpCircle className=" text-[20px]" />
              </div>
              <div className="flex-1">
                <span className="font-label-md text-on-surface font-bold block mb-0.5">Help &amp; Support</span>
                <span className="font-label-sm text-on-surface-variant">FAQs &amp; Contact</span>
              </div>
              <ChevronRight className=" text-outline-variant group-hover:text-primary transition-colors" />
            </button>
          </li>
          <li className="mt-2 pt-2 border-t border-outline-variant/20 mx-2">
            <button className="w-full flex items-center gap-4 p-3 rounded-2xl hover:bg-error/10 text-error transition-colors text-left group">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <LogOut className=" text-[20px]" />
              </div>
              <span className="font-label-md font-bold flex-1">Log Out</span>
            </button>
          </li>
        </ul>
      </div>
    </section>
    </AuthGuard>
  </main>
  </div>

    </>
  );
}
