import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import { bitter } from '@/fonts/fonts'
import Link from 'next/link'
import { getServiceBySlug, SERVICES } from '@/constants/services'
import { Button } from '@/components/ui/button'
import type { Metadata } from 'next'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServiceBySlug(params.slug)
  if (!service) {
    return {
      title: 'Service Not Found | CodeNexo',
      description: 'The requested service could not be found.',
      alternates: { canonical: `https://codenexo.tech/services/${params.slug}` },
    }
  }
  const baseUrl = 'https://codenexo.tech/services/' + service.slug
  return {
    title: `${service.title} | CodeNexo`,
    description: service.short,
    alternates: { canonical: baseUrl },
    openGraph: {
      title: `${service.title} | CodeNexo`,
      description: service.short,
      url: baseUrl,
      type: 'article',
      images: ['/og-image.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | CodeNexo`,
      description: service.short,
      images: ['/og-image.png'],
    },
  }
}

const ServicePage = ({ params }: Props) => {
  const service = getServiceBySlug(params.slug)
  const isAiAutomation = service?.slug === 'ai-automation-solutions'

  if (!service) {
    return (
      <div className={`${bitter.className}`}>
        <Navbar />
        <main className="max-w-4xl mx-auto p-8">
          <h2 className="text-2xl font-bold">Service not found</h2>
          <p className="mt-4">We couldn&apos;t find the service you&apos;re looking for.</p>
          <Link href="/services" className="underline mt-4 block">Back to services</Link>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className={`${bitter.className}`}>
      <Navbar />

      <header className="bg-gradient-to-r from-[#061027] to-[#08142a] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                {isAiAutomation
                  ? 'Custom AI & Business Process Automation Systems That Eliminate Manual Work'
                  : service.title}
              </h1>
              <p className="mt-4 text-gray-300 max-w-2xl">
                {isAiAutomation
                  ? 'We design and build intelligent automation platforms, AI agents, and scalable workflow systems that reduce operational costs and increase execution speed.'
                  : service.tagline}
              </p>
              <div className="mt-6 flex items-center gap-4">
                <Link href={isAiAutomation ? '/contact#schedule-call' : '/contact'}>
                  <Button variant="custom1">{isAiAutomation ? 'Book a Strategy Call' : "Let's Build Together"}</Button>
                </Link>
                <Link href="/services" className="text-sm text-gray-400 underline">Back to services</Link>
              </div>
            </div>

            <div className="w-full lg:w-1/3">
              <div className="p-6 bg-white/5 rounded-xl">
                <svg viewBox="0 0 120 120" className="w-full h-44" xmlns="http://www.w3.org/2000/svg">
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

      <main className="max-w-6xl mx-auto px-6 py-12">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: service.title,
              description: service.short,
              provider: {
                '@type': 'Organization',
                name: 'CodeNexo',
                url: 'https://codenexo.tech',
              },
            }),
          }}
        />

        {isAiAutomation ? (
          <section className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold">Who We Work With</h2>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <article className="p-5 bg-white/5 rounded-md">
                  <h3 className="font-semibold text-white">Operations-heavy companies</h3>
                  <p className="mt-2 text-gray-700">
                    Teams buried in repetitive tasks and fragmented workflows. We implement workflow automation solutions that replace manual handoffs with reliable execution paths.
                  </p>
                </article>
                <article className="p-5 bg-white/5 rounded-md">
                  <h3 className="font-semibold text-white">Agencies managing multi-client workflows</h3>
                  <p className="mt-2 text-gray-700">
                    Delivery breaks when processes depend on tribal knowledge. We build business process automation systems that standardize fulfillment and improve client throughput.
                  </p>
                </article>
                <article className="p-5 bg-white/5 rounded-md">
                  <h3 className="font-semibold text-white">Startups building AI-driven products</h3>
                  <p className="mt-2 text-gray-700">
                    Product teams need AI systems development without fragile prototypes. We ship custom AI software that is production-ready from architecture to deployment.
                  </p>
                </article>
                <article className="p-5 bg-white/5 rounded-md">
                  <h3 className="font-semibold text-white">Enterprises modernizing legacy processes</h3>
                  <p className="mt-2 text-gray-700">
                    Legacy systems block speed, visibility, and integration. We create API-led modernization roadmaps and automation layers that scale across business units.
                  </p>
                </article>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold">Problem & Solution</h2>
              <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-5 text-gray-700">
                <div className="p-5 bg-white/5 rounded-md">
                  <h3 className="text-xl font-semibold text-white">Problem</h3>
                  <p className="mt-2">Companies lose time and money due to:</p>
                  <ul className="mt-3 list-disc pl-5 space-y-1">
                    <li>Repetitive manual workflows</li>
                    <li>Disconnected tools</li>
                    <li>Human bottlenecks</li>
                    <li>Poor system integration</li>
                  </ul>
                </div>
                <div className="p-5 bg-white/5 rounded-md">
                  <h3 className="text-xl font-semibold text-white">Solution</h3>
                  <p className="mt-2">We architect and implement:</p>
                  <ul className="mt-3 list-disc pl-5 space-y-1">
                    <li>AI-powered internal tools</li>
                    <li>Automated workflow orchestration systems</li>
                    <li>Custom API-based integrations</li>
                    <li>Data-driven operational automation platforms</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold">Core AI & Automation Capabilities</h2>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <article className="p-5 bg-white/5 rounded-md">
                  <h3 className="font-semibold text-white">AI Agent Development</h3>
                  <p className="mt-2 text-gray-700">
                    We design LLM-based agents with prompt strategy, tool use, and guardrails for production reliability. Retrieval pipelines are implemented for grounded outputs across internal knowledge and external systems.
                  </p>
                </article>
                <article className="p-5 bg-white/5 rounded-md">
                  <h3 className="font-semibold text-white">Business Process Automation</h3>
                  <p className="mt-2 text-gray-700">
                    We deliver business process automation using Zapier, Make, and custom orchestration engines based on process complexity. Flows are versioned and observable so teams can improve operations without disruption.
                  </p>
                </article>
                <article className="p-5 bg-white/5 rounded-md">
                  <h3 className="font-semibold text-white">Custom Internal Tools</h3>
                  <p className="mt-2 text-gray-700">
                    We build role-aware internal platforms for approvals, reporting, and execution management. These systems remove spreadsheet dependence and centralize operational control for faster decisions.
                  </p>
                </article>
                <article className="p-5 bg-white/5 rounded-md">
                  <h3 className="font-semibold text-white">Data Pipeline Automation</h3>
                  <p className="mt-2 text-gray-700">
                    We automate ingestion, transformation, and synchronization across operational and analytics systems. Pipelines include validation and retry patterns to keep downstream automation accurate.
                  </p>
                </article>
                <article className="p-5 bg-white/5 rounded-md">
                  <h3 className="font-semibold text-white">API Integration & System Orchestration</h3>
                  <p className="mt-2 text-gray-700">
                    We implement API-first integrations that connect CRMs, ERPs, support tools, and proprietary systems. Orchestration logic is built for idempotency and fault tolerance under real-world load.
                  </p>
                </article>
                <article className="p-5 bg-white/5 rounded-md">
                  <h3 className="font-semibold text-white">Monitoring & Observability</h3>
                  <p className="mt-2 text-gray-700">
                    Every automation layer is instrumented with logs, alerts, and performance metrics tied to business outcomes. This gives leadership clear visibility into reliability, cost, and execution speed.
                  </p>
                </article>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold">Why CodeNexo?</h2>
              <div className="mt-4 space-y-3 text-gray-700">
                <p>
                  Our AI automation development work is designed for production from day one. We focus on secure architecture, backend-first engineering, and long-term maintainability so your systems keep delivering value as scale increases.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Production-grade systems with clear failure handling and operational controls.</li>
                  <li>Security-first implementation with controlled access patterns and auditability.</li>
                  <li>Scalable SaaS-ready infrastructure for multi-tenant and high-growth environments.</li>
                  <li>Maintainable codebases built for iteration, reliability, and team handoff.</li>
                </ul>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-b from-white/5 to-white/3 rounded-xl">
              <h2 className="text-2xl font-bold">Ready to Automate Your Operations?</h2>
              <p className="mt-2 text-gray-300">Schedule a strategy call and let&apos;s map your automation architecture.</p>
              <div className="mt-4">
                <Link href="/contact#schedule-call">
                  <Button variant="custom1">Book a Free Strategy Call</Button>
                </Link>
              </div>
            </div>
          </section>
        ) : (
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold">Problem & Solution</h2>
              <div className="mt-4 space-y-4 text-gray-700">
                <p><strong>Problem:</strong> {service.problem}</p>
                <p><strong>Solution:</strong> {service.solution}</p>
              </div>

              <h3 className="mt-8 text-xl font-semibold">Features & Capabilities</h3>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((f, i) => (
                  <li key={i} className="p-4 bg-white/5 rounded-md">
                    <div className="font-medium text-white">{f}</div>
                  </li>
                ))}
              </ul>

              <h3 className="mt-8 text-xl font-semibold">Why CodeNexo?</h3>
              <div className="mt-4 space-y-3 text-gray-700">
                <p>We pair pragmatic engineering with product sensibilities. Our teams ship fast, keep systems maintainable, and design for long-term growth.</p>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Proven delivery across web, mobile and embedded platforms.</li>
                  <li>Strong emphasis on security, observability and testability.</li>
                  <li>Close collaboration and transparent roadmaps.</li>
                </ul>
              </div>
            </div>

            <aside className="p-6 bg-gradient-to-b from-white/5 to-white/3 rounded-xl">
              <h4 className="font-bold">Get Started</h4>
              <p className="mt-2 text-sm text-gray-300">Ready to explore how {service.title} can help your business?</p>
              <div className="mt-4">
                <Link href="/contact">
                  <Button variant="custom1">Let&apos;s Build Together</Button>
                </Link>
              </div>
            </aside>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default ServicePage


