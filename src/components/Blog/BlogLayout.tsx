import type { ReactNode } from "react";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { bitter } from "@/fonts/fonts";

type BlogLayoutProps = {
  children: ReactNode;
};

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <div className={`${bitter.className} min-h-screen bg-[#040b17] text-white`}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
