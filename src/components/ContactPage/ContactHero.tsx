'use client'

import React from "react";
import { Button } from "@/components/ui/button";

const ContactHero = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("contact-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      className="relative flex h-[280px] w-full items-center justify-center bg-cover bg-center bg-no-repeat text-center sm:h-[400px] md:h-[85vh]"
      style={{ backgroundImage: "url('/contact-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 max-w-4xl px-6">
        <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Talk to CodeNexo About Your Next System
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-200 md:text-lg">
          Whether you need workflow automation, a custom scraping pipeline, an
          AI-enabled platform, or dependable software delivery, we can help you
          scope the right solution.
        </p>
        <p className="mt-4 text-sm font-semibold text-yellow-400 md:text-base">
          We typically reply within 24 hours.
        </p>
        <div className="mt-8">
          <Button
            variant="custom1"
            size="lg"
            onClick={scrollToForm}
            className="px-8 py-6 text-base"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
