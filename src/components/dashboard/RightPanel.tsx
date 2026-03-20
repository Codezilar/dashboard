import { Phone } from "lucide-react";

interface Person {
  name: string;
  initials: string;
  detail?: string;
  time?: string;
}

const startingCalls: Person[] = [
  { name: "Liam Grayson", initials: "LG" },
  { name: "Mia Jennings", initials: "MJ" },
];

const onBreak: Person[] = [
  { name: "Jack Linton", initials: "JL", detail: "Cigarette break", time: "00:19" },
  { name: "Samuel Waters", initials: "SW", detail: "Lunch break", time: "00:19" },
  { name: "Henry Mercer", initials: "HM", detail: "Lunch break", time: "10:11" },
  { name: "Amelia Rowann", initials: "AR", detail: "Cigarette break", time: "30:43" },
];

export function RightPanel() {
  return (
    <aside className="w-full xl:w-64 2xl:w-72 shrink-0 space-y-6 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
      {/* Starting Calls */}
      <section>
        <h3 className="text-lg font-semibold text-foreground mb-3">Starting calls</h3>
        <div className="space-y-2">
          {startingCalls.map((p) => (
            <div
              key={p.name}
              className="flex items-center gap-3 p-2.5 rounded-xl bg-card border border-border hover:border-primary/20 transition-all duration-200 group"
            >
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-semibold text-foreground">
                {p.initials}
              </div>
              <span className="text-sm font-medium text-foreground flex-1">{p.name}</span>
              <button className="w-7 h-7 rounded-lg bg-success/20 text-success flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity active:scale-95">
                <Phone className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Break */}
      <section>
        <h3 className="text-lg font-semibold text-foreground mb-3">Break</h3>
        <div className="space-y-2">
          {onBreak.map((p) => (
            <div
              key={p.name}
              className="flex items-center gap-3 p-2.5 rounded-xl bg-card border border-border hover:border-primary/20 transition-all duration-200"
            >
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-semibold text-foreground">
                {p.initials}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground leading-tight">{p.name}</p>
                <p className="text-[11px] text-muted-foreground truncate">{p.detail}</p>
              </div>
              {p.time && (
                <span className="text-[11px] font-mono text-orange shrink-0">{p.time}</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Stats Card */}
      <div className="rounded-2xl p-4 relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(30 100% 55%), hsl(45 100% 60%), hsl(270 60% 58%))" }}>
        <div className="flex -space-x-2 mb-3">
          {["E1", "E2", "E3"].map((e, i) => (
            <div key={i} className="w-7 h-7 rounded-full bg-background/30 border-2 border-background/20 flex items-center justify-center text-[10px] font-medium text-foreground">
              {e}
            </div>
          ))}
        </div>
        <p className="text-3xl font-bold text-foreground leading-none">+278k</p>
        <p className="text-sm text-foreground/70 mt-1">Outsourced employees</p>
      </div>
    </aside>
  );
}
