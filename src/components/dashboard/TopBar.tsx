import { Search } from "lucide-react";

const teamAvatars = [
  { name: "A", color: "bg-primary" },
  { name: "B", color: "bg-pink" },
  { name: "C", color: "bg-orange" },
  { name: "D", color: "bg-success" },
];

export function TopBar() {
  return (
    <header className="flex items-center justify-between px-4 lg:px-6 h-14 lg:h-16 border-b border-border shrink-0">
      {/* Left: Logo text (mobile) + Search */}
      <div className="flex items-center gap-3">
        <span className="md:hidden text-foreground font-bold text-lg tracking-tight">nixto</span>
        <button className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors active:scale-95">
          <Search className="w-4 h-4" />
        </button>
      </div>

      {/* Center: Team status */}
      <div className="hidden sm:flex items-center gap-3">
        <div className="flex -space-x-2">
          {teamAvatars.map((a, i) => (
            <div
              key={i}
              className={`w-7 h-7 rounded-full ${a.color} border-2 border-background flex items-center justify-center text-xs font-medium text-primary-foreground`}
            >
              {a.name}
            </div>
          ))}
        </div>
        <span className="text-sm text-muted-foreground">
          <span className="text-foreground font-medium">12 of 15</span> on work
        </span>
        <span className="px-2 py-0.5 rounded-full bg-orange/20 text-orange text-xs font-medium">
          2 on break
        </span>
      </div>

      {/* Right: User */}
      <div className="flex items-center gap-2">
        <div className="hidden lg:block text-right">
          <p className="text-sm font-medium text-foreground leading-tight">James Radcliffe</p>
          <p className="text-xs text-muted-foreground">Admin</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-primary/30 border-2 border-primary flex items-center justify-center text-xs font-semibold text-primary-foreground">
          JR
        </div>
      </div>
    </header>
  );
}
