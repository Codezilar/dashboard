import { Phone, Users, BarChart3, Settings, Headphones, UserPlus } from "lucide-react";
import { useState } from "react";

const navItems = [
  { icon: Phone, label: "Calls", active: true },
  { icon: Users, label: "Team", active: false },
  { icon: BarChart3, label: "Analytics", active: false },
  { icon: Headphones, label: "Support", active: false },
];

const bottomItems = [
  { icon: Settings, label: "Settings" },
  { icon: UserPlus, label: "Invite" },
];

export function DashboardSidebar() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <aside className="hidden md:flex flex-col items-center w-16 lg:w-[72px] bg-sidebar py-6 gap-2 border-r border-sidebar-border shrink-0">
      {/* Logo */}
      <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center mb-6">
        <span className="text-primary-foreground font-bold text-sm">N</span>
      </div>

      {/* Main Nav */}
      <nav className="flex flex-col items-center gap-1 flex-1">
        {navItems.map((item, i) => (
          <button
            key={item.label}
            onClick={() => setActiveIdx(i)}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 active:scale-95 ${
              activeIdx === i
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            }`}
            title={item.label}
          >
            <item.icon className="w-5 h-5" />
          </button>
        ))}
      </nav>

      {/* Bottom Nav */}
      <div className="flex flex-col items-center gap-1">
        {bottomItems.map((item) => (
          <button
            key={item.label}
            className="w-10 h-10 rounded-xl flex items-center justify-center text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-200 active:scale-95"
            title={item.label}
          >
            <item.icon className="w-5 h-5" />
          </button>
        ))}
      </div>
    </aside>
  );
}
