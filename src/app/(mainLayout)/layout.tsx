import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default layout;
