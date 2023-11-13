import React from "react";
import Sidebar from "./Sidebar";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

function AppLayout({ children }: Props) {
  return (
    <div className="flex h-screen w-screen gap-2 relative">
      <Sidebar />
      {children}
    </div>
  );
}

export default AppLayout;
