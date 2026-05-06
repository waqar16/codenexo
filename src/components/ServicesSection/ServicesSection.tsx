import React from 'react'
import Link from 'next/link'
import {
  Bot,
  BrainCircuit,
  Cable,
  Code2,
  Cpu,
  PenTool,
  Sparkles,
  ArrowRight,
} from 'lucide-react'
import { SERVICES } from '@/constants/services'

const serviceVisuals = [
  {
    icon: Bot,
    accent: '#f39c12',
    glow: 'from-[#f39c12]/30 via-[#f39c12]/12 to-transparent',
    sticker: 'Automation',
    orbit: ['AI', 'Flows'],
  },
  {
    icon: Code2,
    accent: '#67e8f9',
    glow: 'from-cyan-400/25 via-cyan-300/10 to-transparent',
    sticker: 'Build',
    orbit: ['React', 'Scale'],
  },
  {
    icon: Cpu,
    accent: '#c084fc',
    glow: 'from-fuchsia-400/25 via-purple-300/10 to-transparent',
    sticker: 'Systems',
    orbit: ['Custom', 'Ops'],
  },
  {
    icon: Cable,
    accent: '#fb7185',
    glow: 'from-rose-400/25 via-rose-300/10 to-transparent',
    sticker: 'Connected',
    orbit: ['Devices', 'Telemetry'],
  },
  {
    icon: BrainCircuit,
    accent: '#34d399',
    glow: 'from-emerald-400/25 via-emerald-300/10 to-transparent',
    sticker: 'Insights',
    orbit: ['Data', 'Models'],
  },
  {
    icon: PenTool,
    accent: '#facc15',
    glow: 'from-yellow-300/25 via-yellow-200/10 to-transparent',
    sticker: 'Integrate',
    orbit: ['APIs', 'Sync'],
  },
]

const ServicesSection = () => {
  return (
    <section className="w-full py-4 text-white">
      <div className="mb-12 flex flex-col items-center text-center">
        <div className="inline-flex items-center rounded-full border border-[#f39c12]/30 bg-[#f39c12]/10 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#f6c35b]">
          What we build
        </div>
        <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
          Services with more signal, less filler
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg">
          We turned this section into a more visual product wall so each capability feels distinct,
          memorable, and easier to explore at a glance.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {SERVICES.map((service, index) => {
          const visual = serviceVisuals[index]
          const Icon = visual.icon

          return (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#101010] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.24)] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_28px_80px_rgba(0,0,0,0.34)] sm:p-7"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${visual.glow} opacity-100`} />
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border border-white/10 bg-white/[0.03]" />
              <div className="absolute bottom-4 right-4 h-20 w-20 rounded-full border border-white/5 bg-black/10 blur-2xl" />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div
                    className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/25 backdrop-blur-sm"
                    style={{ boxShadow: `0 0 0 1px rgba(255,255,255,0.04), 0 18px 50px ${visual.accent}22` }}
                  >
                    <Icon className="h-6 w-6" style={{ color: visual.accent }} />
                  </div>

                  <div className="flex gap-2">
                    {visual.orbit.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex items-start justify-between gap-4">
                  <div>
                    <span
                      className="inline-flex rotate-[-6deg] rounded-full px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-black shadow-[0_8px_20px_rgba(0,0,0,0.24)]"
                      style={{ backgroundColor: visual.accent }}
                    >
                      {visual.sticker}
                    </span>
                    <h3 className="mt-5 max-w-[14ch] text-2xl font-extrabold leading-tight sm:text-3xl">
                      {service.title}
                    </h3>
                  </div>
                  <Sparkles className="mt-1 h-5 w-5 text-white/35 transition-transform duration-300 group-hover:rotate-12 group-hover:text-white/70" />
                </div>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
                  {service.short}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {service.features.slice(0, 2).map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-white/10 bg-black/25 px-3 py-1.5 text-xs text-white/75"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between pt-3">
                  <span className="text-sm font-semibold text-white/80">Explore service</span>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default ServicesSection
