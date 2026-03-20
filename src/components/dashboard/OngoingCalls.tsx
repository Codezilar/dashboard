import { Phone, Clock, User } from "lucide-react";

interface CallAgent {
  name: string;
  id: string;
  score: number;
  duration: string;
  partner: string;
  partnerCount: number;
  activity: boolean[];
  callId: string;
}

const agents: CallAgent[] = [
  {
    name: "Sophia Hayes",
    id: "01:54:15",
    score: 34,
    duration: "2h 45m",
    partner: "David Barr",
    partnerCount: 2,
    activity: [true, true, false, true, true, true, false, true, true, true, true, false, true, true, true, false],
    callId: "ID 35774",
  },
  {
    name: "Owen Darnell",
    id: "01:54:15",
    score: 10,
    duration: "3h 10m",
    partner: "Kilian Schönberger",
    partnerCount: 4,
    activity: [true, false, true, true, true, true, true, false, true, false, true, true, true, true, false, true],
    callId: "ID 98745",
  },
  {
    name: "Emma Larkin",
    id: "01:51:43",
    score: 29,
    duration: "6h 29m",
    partner: "Jørgen Petersen",
    partnerCount: 8,
    activity: [true, true, true, false, true, true, false, true, true, true, false, true, true, true, true, true],
    callId: "ID 85427",
  },
];

export function OngoingCalls() {
  return (
    <section className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
      <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-4">Ongoing Calls</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
        {agents.map((agent) => (
          <div
            key={agent.callId}
            className="bg-card rounded-2xl p-4 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-semibold text-foreground">
                  {agent.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground leading-tight">{agent.name}</p>
                </div>
              </div>
              <span className="text-[10px] font-mono bg-secondary px-2 py-0.5 rounded-md text-muted-foreground">
                {agent.id}
              </span>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-4 mb-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-success" />
                <span className="text-foreground font-semibold">{agent.score}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{agent.duration}</span>
              </div>
            </div>

            {/* Partner */}
            <div className="flex items-center gap-2 mb-3 text-xs">
              <User className="w-3 h-3 text-muted-foreground" />
              <span className="text-muted-foreground truncate">{agent.partner}</span>
              <span className="bg-secondary text-muted-foreground px-1.5 py-0.5 rounded text-[10px]">
                {agent.partnerCount}
              </span>
            </div>

            {/* Activity dots */}
            <div className="flex gap-[3px] mb-3">
              {agent.activity.map((active, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    active ? "bg-primary" : "bg-orange"
                  }`}
                />
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-muted-foreground font-mono">{agent.callId}</span>
              <div className="flex gap-1">
                <button className="w-6 h-6 rounded-md bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors active:scale-95">
                  <Phone className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
