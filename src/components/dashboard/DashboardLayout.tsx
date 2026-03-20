import { DashboardSidebar } from "./DashboardSidebar";
import { TopBar } from "./TopBar";
import { MobileNav } from "./MobileNav";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar />
        <Outlet /> {/* This renders the child route components */}
      </div>

      <MobileNav />
    </div>
  );
};

export default DashboardLayout;