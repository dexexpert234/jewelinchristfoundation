import { ReactNode } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useReveal } from "@/hooks/use-reveal";

const SiteLayout = ({ children }: { children: ReactNode }) => {
  useReveal();
  return (
  <div className="min-h-screen bg-background flex flex-col">
    <TopBar />
    <Navbar />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
  );
};

export default SiteLayout;