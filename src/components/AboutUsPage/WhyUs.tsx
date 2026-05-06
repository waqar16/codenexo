import { ArrowRightIcon } from "lucide-react";
import React from "react";
import Image from "next/image";

const points = [
  "Automation systems designed around your workflow",
  "Scraping, APIs, and data pipelines built for production use",
  "AI systems with clear operational goals and guardrails",
  "Custom software that replaces manual business bottlenecks",
  "Long-term support for iteration, maintenance, and growth",
];

const WhyUs = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="grid items-start gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
            What We Specialize In
          </h2>
        </div>
        <div className="space-y-4 text-base leading-relaxed text-gray-300 sm:text-lg">
          <p>
            We build systems for real-world use, not generic agency decks.
            Recent work includes automation for lead management, scraping
            workflows for structured business data, API-led integrations between
            operational tools, and AI-enabled systems that help teams move
            faster with better visibility.
          </p>
          <div className="space-y-2">
            {points.map((point) => (
              <div key={point} className="flex flex-row items-center justify-start">
                <ArrowRightIcon className="h-auto w-4" />
                <p className="ml-2 font-bold">{point}</p>
              </div>
            ))}
          </div>
          <div className="w-full max-w-xl rounded-lg bg-black/90 p-4 shadow-[0_0_90px_rgba(150,150,150,0.1)] sm:p-8">
            <Image
              src="/why-us.jpg"
              alt="Why choose CodeNexo"
              width={1200}
              height={800}
              className="h-auto w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
