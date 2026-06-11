import React from 'react'
import {
  ShieldCheck,
  Terminal,
  Zap,
  BrainCircuit,
  Handshake,
  Wrench,
} from 'lucide-react'

const choices = [
  {
    title: "Production-Ready Solutions",
    description: "Not prototypes. Systems built for real-world usage.",
    icon: ShieldCheck,
    accent: '#34d399',
    glow: 'from-emerald-400/20 via-emerald-300/5 to-transparent',
  },
  {
    title: "Direct Access To Developers",
    description: "No account managers between you and the engineering team.",
    icon: Terminal,
    accent: '#67e8f9',
    glow: 'from-cyan-400/20 via-cyan-300/5 to-transparent',
  },
  {
    title: "Fast Communication",
    description: "Quick updates and transparent progress tracking.",
    icon: Zap,
    accent: '#fb7185',
    glow: 'from-rose-400/20 via-rose-300/5 to-transparent',
  },
  {
    title: "AI + Software Expertise",
    description: "Automation, AI agents, SaaS platforms and integrations.",
    icon: BrainCircuit,
    accent: '#f39c12',
    glow: 'from-[#f39c12]/20 via-[#f39c12]/5 to-transparent',
  },
  {
    title: "Flexible Engagement",
    description: "Project based, hourly, dedicated team or consulting.",
    icon: Handshake,
    accent: '#c084fc',
    glow: 'from-purple-400/20 via-purple-300/5 to-transparent',
  },
  {
    title: "Long-Term Support",
    description: "Maintenance and improvements after launch.",
    icon: Wrench,
    accent: '#facc15',
    glow: 'from-yellow-300/20 via-yellow-200/5 to-transparent',
  },
]

export default function ChooseUsSection() {
  return (
    <section className="w-full py-4 text-white">
      <div className="mb-12 flex flex-col items-center text-center">
        <div className="inline-flex items-center rounded-full border border-[#f39c12]/30 bg-[#f39c12]/10 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#f6c35b]">
          Why Us
        </div>
        <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
          Why Businesses Choose CodeNexo
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {choices.map((choice, index) => {
          const Icon = choice.icon
          return (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#101010] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.24)] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_28px_80px_rgba(0,0,0,0.34)] sm:p-7"
            >
              {/* Glow background effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${choice.glow} opacity-100`} />
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border border-white/10 bg-white/[0.03]" />
              <div className="absolute bottom-4 right-4 h-20 w-20 rounded-full border border-white/5 bg-black/10 blur-2xl" />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div
                    className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/25 backdrop-blur-sm"
                    style={{ boxShadow: `0 0 0 1px rgba(255,255,255,0.04), 0 18px 50px ${choice.accent}22` }}
                  >
                    <Icon className="h-6 w-6" style={{ color: choice.accent }} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold leading-tight text-white sm:text-2xl">
                    {choice.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-300 sm:text-base">
                    {choice.description}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
