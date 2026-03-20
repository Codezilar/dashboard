import { StatisticsChart } from "@/components/dashboard/StatisticsChart";
import { OngoingCalls } from "@/components/dashboard/OngoingCalls";
import { RightPanel } from "@/components/dashboard/RightPanel";

const Index = () => {
  return (
    <div className="flex-1 flex flex-col xl:flex-row overflow-hidden">
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-6 pb-20 md:pb-6">
        <StatisticsChart />
        <OngoingCalls />
      </main>

      {/* Right Panel */}
      <div className="xl:border-l xl:border-border overflow-y-auto p-4 lg:p-6 xl:pb-6">
        <RightPanel />
      </div>
    </div>
  );
};

export default Index;