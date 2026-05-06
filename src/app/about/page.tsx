import History from "@/components/AboutUsPage/History";
import Landing from "@/components/AboutUsPage/Landing";
import WhyUs from "@/components/AboutUsPage/WhyUs";
import Navbar from "@/components/Navbar/Navbar";
import TeamSection from "@/components/TeamSection/TeamSection";
import Footer from "@/components/Footer/Footer";
import { bitter } from "@/fonts/fonts";
import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { COMPANY } from "@/constants/company";

export function generateMetadata(): Metadata {
  const title = "About CodeNexo - Software and Automation Company";
  const description =
    "Learn how CodeNexo builds automation systems, scraping pipelines, API integrations, and custom software for real business operations.";
  const url = `${COMPANY.website}/about`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, images: [COMPANY.ogImage] },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [COMPANY.ogImage],
    },
  };
}

const page = () => {
  return (
    <div className={`${bitter.className}`}>
      <Navbar />
      <section className="py-16">
        <Container>
          <Landing />
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <History />
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <WhyUs />
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <TeamSection />
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <nav aria-label="Internal links" className="sr-only">
            <Link href="/services">Our Services</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default page;
