import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { bitter } from "@/fonts/fonts";
import Link from "next/link";
import { getServiceBySlug, SERVICES } from "@/constants/services";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import ServiceTrustSection from "@/components/Trust/ServiceTrustSection";
import HowItWorksSection from "@/components/Trust/HowItWorksSection";
import SocialProofBand from "@/components/Trust/SocialProofBand";
import { COMPANY } from "@/constants/company";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) {
    return {
      title: "Service Not Found | CodeNexo",
      description: "The requested service could not be found.",
      alternates: { canonical: `${COMPANY.website}/services/${params.slug}` },
    };
  }
  const baseUrl = `${COMPANY.website}/services/${service.slug}`;
  return {
    title: `${service.title} | CodeNexo`,
    description: service.short,
    alternates: { canonical: baseUrl },
    openGraph: {
      title: `${service.title} | CodeNexo`,
      description: service.short,
      url: baseUrl,
      type: "article",
      images: [COMPANY.ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | CodeNexo`,
      description: service.short,
      images: [COMPANY.ogImage],
    },
  };
}

const ServicePage = ({ params }: Props) => {
  const service = getServiceBySlug(params.slug);
  const isAiAutomation = service?.slug === "ai-automation-solutions";

  if (!service) {
    return (
      <div className={`${bitter.className}`}>
        <Navbar />
        <main className="mx-auto max-w-4xl p-8">
          <h2 className="text-2xl font-bold">Service not found</h2>
          <p className="mt-4">We couldn&apos;t find the service you&apos;re looking for.</p>
          <Link href="/services" className="mt-4 block underline">
            Back to services
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className={`${bitter.className}`}>
      <Navbar />

      <header className="bg-gradient-to-r from-[#061027] to-[#08142a] py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center gap-8 lg:flex-row">
            <div className="flex-1">
              <h1 className="text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
                {isAiAutomation
                  ? "Custom AI and Business Automation Systems That Reduce Manual Work"
                  : service.title}
              </h1>
              <p className="mt-4 max-w-2xl text-gray-300">
                {isAiAutomation
                  ? "We design and build production-ready automation platforms, AI agents, and connected workflows that help teams move faster with better control."
                  : service.tagline}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link href={isAiAutomation ? "/contact#schedule-call" : "/contact"}>
                  <Button variant="custom1">
                    {isAiAutomation ? "Book a Call" : "Contact Us"}
                  </Button>
                </Link>
                {isAiAutomation ? (
                  <Link href="/contact">
                    <Button variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white">
                      Request a Sample
                    </Button>
                  </Link>
                ) : null}
                <Link href="/services" className="text-sm text-gray-400 underline">
                  Back to services
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-1/3">
              <div className="rounded-xl bg-white/5 p-6">
                <svg viewBox="0 0 120 120" className="h-44 w-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="g" x1="0" x2="1">
                      <stop offset="0%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#f97316" />
                    </linearGradient>
                  </defs>
                  <rect x="10" y="10" width="100" height="100" rx="14" fill="url(#g)" opacity="0.12" />
                  <g transform="translate(30,30)" fill="#f59e0b">
                    <circle cx="10" cy="10" r="6" />
                    <rect x="28" y="6" width="34" height="8" rx="3" />
                    <rect x="0" y="34" width="80" height="10" rx="4" opacity="0.6" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: service.title,
              description: service.short,
              provider: {
                "@type": "Organization",
                name: COMPANY.name,
                url: COMPANY.website,
              },
            }),
          }}
        />

        {isAiAutomation ? (
          <section className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold">Who We Work With</h2>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <article className="rounded-md bg-white/5 p-5">
                  <h3 className="font-semibold text-white">Operations-heavy companies</h3>
                  <p className="mt-2 text-gray-700">
                    Teams buried in repetitive tasks and fragmented workflows. We implement automation systems that replace manual handoffs with dependable execution paths.
                  </p>
                </article>
                <article className="rounded-md bg-white/5 p-5">
                  <h3 className="font-semibold text-white">Agencies managing multi-client delivery</h3>
                  <p className="mt-2 text-gray-700">
                    Delivery breaks when fulfillment depends on tribal knowledge. We build workflow systems that standardize execution and improve throughput.
                  </p>
                </article>
                <article className="rounded-md bg-white/5 p-5">
                  <h3 className="font-semibold text-white">Startups building AI-driven products</h3>
                  <p className="mt-2 text-gray-700">
                    Product teams need AI systems without fragile prototypes. We ship custom software that is designed for production from architecture to deployment.
                  </p>
                </article>
                <article className="rounded-md bg-white/5 p-5">
                  <h3 className="font-semibold text-white">Enterprises modernizing legacy processes</h3>
                  <p className="mt-2 text-gray-700">
                    Legacy systems slow execution and visibility. We create API-led automation layers that scale across teams and business units.
                  </p>
                </article>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold">Problem and Solution</h2>
              <div className="mt-4 grid grid-cols-1 gap-5 text-gray-700 lg:grid-cols-2">
                <div className="rounded-md bg-white/5 p-5">
                  <h3 className="text-xl font-semibold text-white">Problem</h3>
                  <p className="mt-2">Companies lose time and momentum because of:</p>
                  <ul className="mt-3 list-disc space-y-1 pl-5">
                    <li>Repetitive manual workflows</li>
                    <li>Disconnected tools and data silos</li>
                    <li>Human bottlenecks in operations</li>
                    <li>Poor system integration and visibility</li>
                  </ul>
                </div>
                <div className="rounded-md bg-white/5 p-5">
                  <h3 className="text-xl font-semibold text-white">Solution</h3>
                  <p className="mt-2">We architect and implement:</p>
                  <ul className="mt-3 list-disc space-y-1 pl-5">
                    <li>AI-powered internal tools</li>
                    <li>Automated workflow orchestration systems</li>
                    <li>Custom API-based integrations</li>
                    <li>Data-driven operational automation platforms</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold">Core AI and Automation Capabilities</h2>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <article className="rounded-md bg-white/5 p-5">
                  <h3 className="font-semibold text-white">AI Agent Development</h3>
                  <p className="mt-2 text-gray-700">
                    We design LLM-based agents with prompt strategy, tool use, and guardrails for production reliability. Retrieval pipelines are implemented for grounded outputs across internal knowledge and external systems.
                  </p>
                </article>
                <article className="rounded-md bg-white/5 p-5">
                  <h3 className="font-semibold text-white">Business Process Automation</h3>
                  <p className="mt-2 text-gray-700">
                    We deliver automation using Zapier, Make, and custom orchestration engines based on process complexity. Flows are versioned and observable so teams can improve operations without disruption.
                  </p>
                </article>
                <article className="rounded-md bg-white/5 p-5">
                  <h3 className="font-semibold text-white">Custom Internal Tools</h3>
                  <p className="mt-2 text-gray-700">
                    We build role-aware internal platforms for approvals, reporting, and execution management. These systems remove spreadsheet dependence and centralize operational control.
                  </p>
                </article>
                <article className="rounded-md bg-white/5 p-5">
                  <h3 className="font-semibold text-white">Data Pipeline Automation</h3>
                  <p className="mt-2 text-gray-700">
                    We automate ingestion, transformation, and synchronization across operational and analytics systems with validation, monitoring, and retry handling.
                  </p>
                </article>
                <article className="rounded-md bg-white/5 p-5">
                  <h3 className="font-semibold text-white">API Integration and Orchestration</h3>
                  <p className="mt-2 text-gray-700">
                    We implement API-first integrations that connect CRMs, ERPs, support tools, and proprietary systems. Orchestration logic is built for reliability under real-world load.
                  </p>
                </article>
                <article className="rounded-md bg-white/5 p-5">
                  <h3 className="font-semibold text-white">Monitoring and Observability</h3>
                  <p className="mt-2 text-gray-700">
                    Every automation layer is instrumented with logs, alerts, and performance metrics tied to business outcomes, so teams can keep improving after launch.
                  </p>
                </article>
              </div>
            </div>

            <ServiceTrustSection description="Businesses choose CodeNexo when they need automation systems that are tailored to their workflow, engineered for production use, and supported after delivery." />

            <SocialProofBand text="Built for real-world business workflows and used by growing businesses that need automation, integrations, and dependable execution." />

            <HowItWorksSection description="Our process keeps delivery practical, structured, and transparent from discovery through support." />

            <div className="rounded-xl bg-gradient-to-b from-white/5 to-white/3 p-6">
              <h2 className="text-2xl font-bold">Ready to Automate Your Operations?</h2>
              <p className="mt-2 text-gray-300">
                Book a call to review your workflow, identify the right system design, and plan the fastest path to production.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="/contact#schedule-call">
                  <Button variant="custom1">Book a Call</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        ) : (
          <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold">Problem and Solution</h2>
              <div className="mt-4 space-y-4 text-gray-700">
                <p>
                  <strong>Problem:</strong> {service.problem}
                </p>
                <p>
                  <strong>Solution:</strong> {service.solution}
                </p>
              </div>

              <h3 className="mt-8 text-xl font-semibold">Features and Capabilities</h3>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {service.features.map((f, i) => (
                  <li key={i} className="rounded-md bg-white/5 p-4">
                    <div className="font-medium text-white">{f}</div>
                  </li>
                ))}
              </ul>

              <h3 className="mt-8 text-xl font-semibold">Why CodeNexo?</h3>
              <div className="mt-4 space-y-3 text-gray-700">
                <p>
                  We pair pragmatic engineering with product sensibilities. Our teams ship fast, keep systems maintainable, and design for long-term growth.
                </p>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Proven delivery across web, mobile, and embedded platforms.</li>
                  <li>Strong emphasis on security, observability, and testability.</li>
                  <li>Close collaboration and transparent roadmaps.</li>
                </ul>
              </div>
            </div>

            <aside className="rounded-xl bg-gradient-to-b from-white/5 to-white/3 p-6">
              <h4 className="font-bold">Get Started</h4>
              <p className="mt-2 text-sm text-gray-300">
                Ready to explore how {service.title} can help your business?
              </p>
              <div className="mt-4">
                <Link href="/contact">
                  <Button variant="custom1">Contact Us</Button>
                </Link>
              </div>
            </aside>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ServicePage;
