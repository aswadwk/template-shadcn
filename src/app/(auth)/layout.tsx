import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex justify-center place-items-center">
      {/* Layout Auth */}
      {children}
    </div>
  );
};

export default Layout;
