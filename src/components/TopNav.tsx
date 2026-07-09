import nakprcLogo from "../welcome/logo.webp";
import { Anchor, Bell } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function TopNav() {
  const filled = '"FILL" 1';
  
  const navLinks = [
    { path: 'welcome', label: 'Home' },
    { path: 'mock-tests', label: 'Tests' },
    { path: 'pyq', label: 'PYQ' },
    { path: 'batches', label: 'Batches' },
    { path: 'study-notes', label: 'Notes' },
    { path: 'my-progress', label: 'Profile' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-8 h-16 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm">
      <div className="flex items-center gap-3 md:gap-4">
        <button aria-label="Menu" className="md:hidden flex items-center justify-center p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors">
          <Anchor className="text-[24px] text-primary" style={{ fontVariationSettings: filled }} />
        </button>
        <Anchor className="hidden md:block text-primary text-[24px]" style={{ fontVariationSettings: filled }} />
        <div className="flex flex-col">
          <span className="font-headline-md text-lg md:text-xl font-bold text-primary tracking-tight leading-tight">Sailor Prep</span>
          <div className="flex items-center gap-1 text-[9px] md:text-[10px] text-on-surface-variant font-medium">
            A Product of <img src={nakprcLogo} alt="NAKPRC Logo" className="h-2.5 md:h-3 w-auto object-contain" /> NAKPRC
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        {/* Navigation links for Web (hidden on mobile) */}
        <nav className="hidden md:flex gap-2 lg:gap-6 items-center pr-2 lg:pr-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={`/${link.path}`}
              className={({ isActive }) => 
                `font-label-md text-sm px-3 py-2 rounded-lg transition-colors ${
                  isActive 
                    ? 'text-primary font-bold bg-secondary-container/20' 
                    : 'text-on-surface-variant hover:bg-surface-container-low'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <button aria-label="Notifications" className="flex items-center justify-center p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors relative">
          <Bell className="text-[24px]" />
          <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-error rounded-full border-2 border-surface" />
        </button>
      </div>
    </header>
  );
}
