"use client"
import React from 'react'
import { bitter } from '@/fonts/fonts'

const aboutCards = [
  {
    title: "Our Vision",
    body:
      "At CodeNexo, our vision is to empower businesses through cutting-edge digital solutions that drive innovation and real results. We combine AI, automation, and full-stack engineering to deliver systems that are scalable, reliable, and built to last.",
    tone:
      "border-[#f39c12]/30 bg-[linear-gradient(180deg,rgba(243,156,18,0.18),rgba(255,255,255,0.03))] text-white",
    label: "North Star",
  },
  {
    title: "Our Mission",
    body:
      "We help founders and teams transform complex ideas into production-ready products. With hands-on delivery, transparent communication, and deep technical expertise, we build solutions that align with your business goals and grow with you.",
    tone: "border-white/10 bg-white text-black",
    label: "Delivery",
  },
  {
    title: "Our Approach",
    body:
      "We focus on outcomes, not just features. Every project starts with understanding your challenges and goals. We then architect, design, and develop with precision, delivering systems that are secure, maintainable, and ready for scale.",
    tone: "border-white/10 bg-[#111111] text-white",
    label: "Process",
  },
  {
    title: "Our Commitment",
    body:
      "Quality and reliability are at the core of everything we build. We deliver production-ready systems, not prototypes. Our team stays involved from discovery to deployment, ensuring clear updates, honest timelines, and long-term partnerships.",
    tone: "border-white/10 bg-[#f3efe7] text-black",
    label: "Partnership",
  },
]

const AboutUsSection = () => {
  return (
    <section className={`${bitter.className}`}>
      <div className="grid items-start gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
        <div className="max-w-2xl pt-2">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#f39c12]">
            About CodeNexo
          </p>
          <p className="max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl sm:leading-[1.75]">
            With deep technical expertise and a commitment to quality, our team delivers AI-powered solutions,
            full-stack applications, and custom integrations that drive real business results. We work closely
            with clients to build scalable, production-ready systems designed for long-term success.
          </p>
          <p className="mt-6 max-w-lg text-sm leading-7 text-white/60 sm:text-base">
            Our principles are simple: build useful systems, communicate clearly, and stay accountable from
            discovery through long-term support.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {aboutCards.map((card) => (
            <article
              key={card.title}
              className={`group relative overflow-hidden rounded-[2rem] border p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:-translate-y-1 sm:p-7 ${card.tone}`}
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f39c12]/60 to-transparent" />
              </div>

              <div className="relative">
                <span className="mb-5 inline-flex w-fit items-center rounded-full border border-current/15 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] opacity-70">
                  {card.label}
                </span>

                <h3 className="max-w-[14ch] text-2xl font-bold leading-tight sm:text-[2rem]">
                  {card.title}
                </h3>

                <p className="mt-4 text-sm leading-7 sm:text-base">
                  {card.body}
                </p>

                <div className="pt-8">
                  <div className="h-px w-full bg-current/10" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutUsSection
