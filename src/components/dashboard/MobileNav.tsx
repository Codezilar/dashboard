import { Phone, Users, BarChart3, Settings } from "lucide-react";
import { useState } from "react";

const items = [
  { icon: Phone, label: "Calls" },
  { icon: Users, label: "Team" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Settings, label: "Settings" },
];

export function MobileNav() {
  const [active, setActive] = useState(0);

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-sidebar border-t border-sidebar-border px-4 pb-[env(safe-area-inset-bottom)]">
      <div className="flex items-center justify-around h-14">
        {items.map((item, i) => (
          <button
            key={item.label}
            onClick={() => setActive(i)}
            className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all active:scale-90 ${
              active === i
                ? "text-primary"
                : "text-sidebar-foreground"
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="text-[10px] font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
