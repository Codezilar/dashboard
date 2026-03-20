import { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { time: "7am", calls: 0.5, target: 1.2 },
  { time: "8am", calls: 0.8, target: 1.5 },
  { time: "9am", calls: 1.2, target: 2.0 },
  { time: "10am", calls: 1.0, target: 2.3 },
  { time: "11am", calls: 1.5, target: 2.5 },
  { time: "12pm", calls: 1.8, target: 2.8 },
  { time: "1pm", calls: 2.2, target: 3.0 },
  { time: "2pm", calls: 2.0, target: 3.2 },
  { time: "3pm", calls: 2.8, target: 3.0 },
  { time: "4pm", calls: 2.3, target: 2.8 },
  { time: "5pm", calls: 1.8, target: 2.5 },
  { time: "6pm", calls: 1.5, target: 2.2 },
  { time: "7pm", calls: 1.0, target: 2.0 },
];

const days = [
  { num: "01", day: "Sat" }, { num: "02", day: "Sun" }, { num: "03", day: "Mon" },
  { num: "04", day: "Tue" }, { num: "05", day: "Wed" }, { num: "06", day: "Thu" },
  { num: "07", day: "Fri" }, { num: "08", day: "Sat" }, { num: "09", day: "Sun" },
  { num: "10", day: "Mon" }, { num: "11", day: "Tue" }, { num: "12", day: "Wed" },
  { num: "13", day: "Thu" },
];

const periods = ["Days", "Weeks", "Months"];

export function StatisticsChart() {
  const [selectedDay, setSelectedDay] = useState(9);
  const [selectedPeriod, setSelectedPeriod] = useState(0);

  return (
    <section className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl lg:text-2xl font-semibold text-foreground">Statistics</h2>
        <div className="hidden sm:flex items-center gap-1 bg-secondary rounded-lg p-0.5">
          {periods.map((p, i) => (
            <button
              key={p}
              onClick={() => setSelectedPeriod(i)}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-all duration-200 active:scale-95 ${
                selectedPeriod === i
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Day Selector */}
      <div className="flex gap-1 overflow-x-auto scrollbar-hide pb-3 -mx-1 px-1">
        {days.map((d, i) => (
          <button
            key={i}
            onClick={() => setSelectedDay(i)}
            className={`flex flex-col items-center min-w-[40px] px-2 py-2 rounded-xl text-xs transition-all duration-200 active:scale-95 ${
              selectedDay === i
                ? "bg-accent text-accent-foreground font-semibold shadow-md shadow-accent/20"
                : "text-muted-foreground hover:bg-secondary"
            }`}
          >
            <span className="font-semibold text-sm">{d.num}</span>
            <span className="text-[10px] mt-0.5">{d.day}</span>
          </button>
        ))}
      </div>

      {/* Chart */}
      <div className="h-40 lg:h-52 mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(270 60% 58%)" stopOpacity={0.4} />
                <stop offset="100%" stopColor="hsl(270 60% 58%)" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(260 8% 55%)", fontSize: 10 }}
              interval="preserveStartEnd"
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(260 8% 55%)", fontSize: 10 }}
              tickFormatter={(v) => `${v}h`}
            />
            <Tooltip
              contentStyle={{
                background: "hsl(260 18% 12%)",
                border: "1px solid hsl(260 12% 20%)",
                borderRadius: "8px",
                color: "hsl(0 0% 95%)",
                fontSize: "12px",
              }}
            />
            <Area
              type="monotone"
              dataKey="calls"
              stroke="hsl(270 60% 58%)"
              strokeWidth={2}
              fill="url(#chartFill)"
            />
            <Area
              type="monotone"
              dataKey="target"
              stroke="hsl(45 100% 60%)"
              strokeWidth={1.5}
              strokeDasharray="6 4"
              fill="none"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
