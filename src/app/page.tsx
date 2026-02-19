 
import AboutUsSection from "@/components/AboutUsSection/AboutUsSection";
import ContactUsSection from "@/components/ContactUsSection/ContactUsSection";
import Footer from "@/components/Footer/Footer";
import Landing from "@/components/Landing/Landing";
import Navbar from "@/components/Navbar/Navbar";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import TeamSection from "@/components/TeamSection/TeamSection";
import { bitter } from "@/fonts/fonts"; 
import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";

export function generateMetadata(): Metadata {
  const title = "High-Performance AI & Software Solutions";
  const description = "AI automation, Next.js apps, custom software, IoT & data intelligence for scalable growth.";
  const url = "https://codenexo.tech";
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: ["/og-image.png"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}

export default function Home() {
  return (
    <div className={`${bitter.className}`}>
      <Navbar/>
      <section className="py-16">
        <Container>
          <Landing/>
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <AboutUsSection/>
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <ServicesSection/>
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <TeamSection/>
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <ContactUsSection/>
        </Container>
      </section>
      <section className="py-16">
        <Container>
          {/* Simple internal link cluster for SEO without changing visible design */}
          <nav aria-label="Internal navigation" className="sr-only">
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </Container>
      </section>
      <Footer/>
    </div>
  );
}
