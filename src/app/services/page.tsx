import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Building2,
  Cable,
  Code2,
  Cpu,
  Database,
  Sparkles,
} from 'lucide-react'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import { bitter } from '@/fonts/fonts'
import { SERVICES } from '@/constants/services'
import { Button } from '@/components/ui/button'
import Container from '@/components/layout/Container'

const REAL_ESTATE_SERVICE_CARD = {
  slug: 'real-estate-leads-automation',
  title: 'Real Estate Leads & Automation',
  short:
    'Fresh off-market lead data, probate and foreclosure records, CRM automation, and follow-up systems for real estate teams.',
  tagline: 'Lead systems that move from data to deal flow.',
  features: [
    'Probate and foreclosure lead data',
    'County record scraping pipelines',
    'CRM and follow-up automation',
  ],
  problem:
    'Real estate teams lose momentum when lead discovery, enrichment, and follow-up live across disconnected tools and spreadsheets.',
  solution:
    'We build structured lead pipelines and automation systems that keep property data flowing cleanly into outreach and CRM operations.',
}

const SERVICE_CARDS = [...SERVICES, REAL_ESTATE_SERVICE_CARD]

const SERVICE_VISUALS: Record<
  string,
  {
    icon: React.ComponentType<{ className?: string }>
    eyebrow: string
    accent: string
    glow: string
    tags: [string, string]
    span: string
  }
> = {
  'ai-automation-solutions': {
    icon: Bot,
    eyebrow: 'Automation Systems',
    accent: '#f39c12',
    glow: 'from-[#f39c12]/24 via-[#f39c12]/10 to-transparent',
    tags: ['AI', 'Workflows'],
    span: 'lg:col-span-7',
  },
  'web-and-app-development': {
    icon: Code2,
    eyebrow: 'Digital Products',
    accent: '#67e8f9',
    glow: 'from-cyan-400/22 via-cyan-300/10 to-transparent',
    tags: ['Web', 'Apps'],
    span: 'lg:col-span-5',
  },
  'custom-software-development': {
    icon: Database,
    eyebrow: 'Internal Systems',
    accent: '#c084fc',
    glow: 'from-fuchsia-400/18 via-purple-300/8 to-transparent',
    tags: ['CRM', 'Dashboards'],
    span: 'lg:col-span-4',
  },
  'embedded-and-iot-systems': {
    icon: Cpu,
    eyebrow: 'Connected Devices',
    accent: '#fb7185',
    glow: 'from-rose-400/18 via-rose-300/8 to-transparent',
    tags: ['Sensors', 'Telemetry'],
    span: 'lg:col-span-4',
  },
  'data-and-ai-analytics': {
    icon: BrainCircuit,
    eyebrow: 'Decision Intelligence',
    accent: '#34d399',
    glow: 'from-emerald-400/18 via-emerald-300/8 to-transparent',
    tags: ['Data', 'Models'],
    span: 'lg:col-span-4',
  },
  'api-integrations-workflow-automation': {
    icon: Cable,
    eyebrow: 'System Orchestration',
    accent: '#facc15',
    glow: 'from-yellow-300/18 via-yellow-200/8 to-transparent',
    tags: ['APIs', 'Sync'],
    span: 'lg:col-span-6',
  },
  'real-estate-leads-automation': {
    icon: Building2,
    eyebrow: 'Industry Systems',
    accent: '#60a5fa',
    glow: 'from-blue-400/20 via-sky-300/8 to-transparent',
    tags: ['Leads', 'CRM'],
    span: 'lg:col-span-6',
  },
}

const DELIVERY_POINTS = [
  {
    title: 'Operational clarity',
    description: 'We design around workflows, handoffs, and failure points before we write implementation code.',
  },
  {
    title: 'Production readiness',
    description: 'Architecture, integrations, and edge cases are treated as part of the product, not cleanup work.',
  },
  {
    title: 'Measured execution',
    description: 'Every service is shaped to reduce manual effort, improve visibility, or increase delivery velocity.',
  },
]

export function generateMetadata(): Metadata {
  const title = 'Services | CodeNexo'
  const description =
    'Explore AI automation, web & app development, custom software, IoT systems, data & analytics, and workflow integrations.'
  const url = 'https://codenexo.tech/services'
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: ['/og-image.png'],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.png'],
    },
  }
}

const ServicesPage = () => {
  return (
    <div className={`${bitter.className} antialiased`}>
      <Navbar />

      <section className="relative overflow-hidden bg-gradient-to-b from-[#0b1020] via-[#071228] to-[#041025] py-20 text-white md:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:42px_42px] opacity-20" />
        <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#f39c12]/12 blur-3xl" />
        <Container className="relative">
          <div className="grid items-end gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div className="max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-[#f39c12]/30 bg-[#f39c12]/10 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#f6c35b]">
                CodeNexo Services
              </div>
              <h1 className="mt-6 max-w-[11ch] text-4xl font-extrabold leading-[0.92] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                Systems for teams that need real execution
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
                Practical engineering, intelligent automation, and scalable product work shaped around how
                modern businesses actually operate, ship, and grow.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  variant="custom1"
                  size="lg"
                  className="h-12 rounded-xl px-6 text-base font-bold text-black hover:bg-[#f6ad27]"
                >
                  <Link href="/contact">Start a Conversation</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 rounded-xl border-white/15 bg-white/5 px-6 text-base font-bold text-white hover:bg-white/10 hover:text-white"
                >
                  <Link href="/contact#schedule-call">Book a Call</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.3)] backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f6c35b]">
                  Editorial overview
                </p>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                  7 service tracks
                </span>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-3xl font-extrabold text-white">AI</p>
                  <p className="mt-2 text-sm leading-6 text-gray-300">Assistants, orchestration, and workflow automation.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-3xl font-extrabold text-white">Build</p>
                  <p className="mt-2 text-sm leading-6 text-gray-300">Web products, internal systems, and delivery pipelines.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-3xl font-extrabold text-white">Data</p>
                  <p className="mt-2 text-sm leading-6 text-gray-300">Analytics, integrations, and structured operational insight.</p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-[#f39c12]/20 bg-[#f39c12]/10 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f6c35b]">
                      How we frame engagements
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/85">
                      Every service is delivered as a system: goals, tooling, implementation, and support tied
                      together so teams can actually use the result in production.
                    </p>
                  </div>
                  <Sparkles className="mt-1 h-5 w-5 text-[#f6c35b]" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-[#050b17] py-14 text-white md:py-16">
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
            {DELIVERY_POINTS.map((point) => (
              <article key={point.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f6c35b]">{point.title}</p>
                <p className="mt-4 text-sm leading-7 text-gray-300 sm:text-base">{point.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#061122] py-16 text-white md:py-20">
        <Container>
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f6c35b]">Service tracks</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
                Explore the work we build around modern operations
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-gray-300 sm:text-base">
              Each card is structured around a service lane with a clear focus, concise capabilities, and a direct
              path into the detailed page.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-12">
            {SERVICE_CARDS.map((service) => {
              const visual = SERVICE_VISUALS[service.slug]
              const Icon = visual.icon

              return (
                <article
                  key={service.slug}
                  className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#101827] shadow-[0_22px_70px_rgba(0,0,0,0.24)] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_28px_90px_rgba(0,0,0,0.34)] ${visual.span}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${visual.glow}`} />
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <div className="absolute right-0 top-0 h-36 w-36 translate-x-10 -translate-y-10 rounded-full border border-white/10 bg-white/[0.03]" />

                  <div className="relative flex h-full flex-col p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/25"
                        style={{ boxShadow: `0 18px 50px ${visual.accent}20` }}
                      >
                        <Icon className="h-6 w-6" style={{ color: visual.accent }} />
                      </div>
                      <div className="flex gap-2">
                        {visual.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/70"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f6c35b]">
                        {visual.eyebrow}
                      </p>
                      <h3 className="mt-4 max-w-[14ch] text-2xl font-extrabold leading-tight sm:text-[2rem]">
                        {service.title}
                      </h3>
                      <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
                        {service.short}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.features.slice(0, 2).map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-white/75"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#f6c35b]"
                      >
                        Explore service
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                      <span className="text-xs uppercase tracking-[0.18em] text-white/45">Detailed page</span>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="bg-[#050b17] py-16 text-white">
        <Container>
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-r from-[#0f1724] via-[#0a162b] to-[#071127]">
            <div className="grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-end md:p-10">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f6c35b]">
                  Ready to move forward?
                </p>
                <h3 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
                  Let’s shape the right service mix for your workflow
                </h3>
                <p className="mt-4 text-base leading-8 text-gray-300 sm:text-lg">
                  Tell us about your delivery goals, current bottlenecks, or system requirements and we’ll
                  recommend the most relevant path forward.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <Button
                  asChild
                  variant="custom1"
                  size="lg"
                  className="h-12 rounded-xl px-6 text-base font-bold text-black hover:bg-[#f6ad27]"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 rounded-xl border-white/15 bg-white/5 px-6 text-base font-bold text-white hover:bg-white/10 hover:text-white"
                >
                  <Link href="/contact#schedule-call">Book a Call</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  )
}

export default ServicesPage
