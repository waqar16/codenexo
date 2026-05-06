import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ContactHero from "@/components/ContactPage/ContactHero";
import ConsultationForm from "@/components/ContactPage/ConsultationForm";
import ContactInfo from "@/components/ContactPage/ContactInfo";
import WhyContact from "@/components/ContactPage/WhyContact";
import ContactFAQ from "@/components/ContactPage/ContactFAQ";
import CalendlyInline from "@/components/CalendlyInline";
import { bitter } from "@/fonts/fonts";
import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { COMPANY } from "@/constants/company";

export function generateMetadata(): Metadata {
  const title = "Contact CodeNexo - Book a Call";
  const description =
    "Contact CodeNexo for automation systems, AI development, scraping workflows, and custom software. We reply within 24 hours.";
  const url = `${COMPANY.website}/contact`;
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

const ContactPage = () => {
  return (
    <div className={`${bitter.className} antialiased`}>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact CodeNexo",
            url: `${COMPANY.website}/contact`,
          }),
        }}
      />
      <section className="py-16">
        <Container>
          <ContactHero />
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <ConsultationForm />
        </Container>
      </section>
      <section id="schedule-call" className="px-4 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl">
            Book a Call
          </h2>
          <p className="mb-4 text-gray-400">
            Schedule a consultation to discuss your workflow, project scope, and
            the fastest path to delivery.
          </p>
          <p className="mb-12 text-sm text-gray-500">
            Prefer email or phone first? Reach us at{" "}
            <a href={`mailto:${COMPANY.email}`} className="underline">
              {COMPANY.email}
            </a>{" "}
            or{" "}
            <a href={COMPANY.phoneHref} className="underline">
              {COMPANY.phone}
            </a>
            .
          </p>
          <CalendlyInline />
        </div>
      </section>
      <section className="py-16">
        <Container>
          <WhyContact />
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <ContactInfo />
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <ContactFAQ />
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <nav aria-label="Internal links" className="sr-only">
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
          </nav>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;
