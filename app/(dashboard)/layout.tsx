"use client";

import MainNav from "@/components/ui/main-nav";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <main className="h-full w-full">
      <div className="flex-1 h-screen w-full">
        <div className="absolute z-10 text-white font-signature h-16 flex items-center md:pl-28 pl-8">Joshua Kahlbaugh</div>
        <MainNav />
        {children}
      </div>
    </main>
  );
};

export default DashboardLayout;