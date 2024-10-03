import { ReactNode } from "react";
import Navbar from "../components/Navbar";

export default function RegretLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8">
        {children}
      </main>
    </>
  );
}
