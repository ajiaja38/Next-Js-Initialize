import React, { PropsWithChildren } from "react";
import Navbar from "../Navbar";

const AppShell = ({ children }: PropsWithChildren) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default AppShell;
