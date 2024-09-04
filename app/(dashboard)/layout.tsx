"use client";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <main className="h-full">
      <div className="flex-1 h-full">
        {children}
      </div>
    </main>
  );
};

export default DashboardLayout;