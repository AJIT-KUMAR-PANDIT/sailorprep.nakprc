import { Home, ClipboardList, BookOpen, Bookmark, User } from "lucide-react";
import { NavLink } from "react-router";

export default function BottomNav() {
  const filled = '"FILL" 1';

  const getNavClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "flex flex-col items-center justify-center text-primary font-bold hover:bg-secondary-container/50 rounded-xl px-4 py-2 scale-95 duration-150 w-full h-full bg-secondary-container/50"
      : "flex flex-col items-center justify-center text-on-surface-variant hover:bg-secondary-container/50 rounded-xl px-4 py-2 w-full h-full transition-colors";

  const getIconStyle = ({ isActive }: { isActive: boolean }) =>
    isActive ? { fontVariationSettings: filled } : {};

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-safe h-20 bg-surface/90 backdrop-blur-md border-t border-outline-variant/30">
      <NavLink className={getNavClass} to="/welcome">
        {({ isActive }) => (
          <>
            <Home className="mb-1" style={getIconStyle({ isActive })} />
            <span className="font-label-sm text-[10px] font-medium">Home</span>
          </>
        )}
      </NavLink>
      <NavLink className={getNavClass} to="/mock-tests">
        {({ isActive }) => (
          <>
            <ClipboardList className="mb-1" style={getIconStyle({ isActive })} />
            <span className="font-label-sm text-[10px] font-medium">Tests</span>
          </>
        )}
      </NavLink>
      <NavLink className={getNavClass} to="/pyq">
        {({ isActive }) => (
          <>
            <BookOpen className="mb-1" style={getIconStyle({ isActive })} />
            <span className="font-label-sm text-[10px] font-medium">PYQ</span>
          </>
        )}
      </NavLink>
      <NavLink className={getNavClass} to="/study-notes">
        {({ isActive }) => (
          <>
            <Bookmark className="mb-1" style={getIconStyle({ isActive })} />
            <span className="font-label-sm text-[10px] font-medium">Notes</span>
          </>
        )}
      </NavLink>
      <NavLink className={getNavClass} to="/my-progress">
        {({ isActive }) => (
          <>
            <User className="mb-1" style={getIconStyle({ isActive })} />
            <span className="font-label-sm text-[10px] font-medium">Profile</span>
          </>
        )}
      </NavLink>
    </nav>
  );
}
