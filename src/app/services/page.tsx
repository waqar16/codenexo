import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import { bitter } from '@/fonts/fonts'
import Link from 'next/link'
import { SERVICES } from '@/constants/services'
import { Button } from '@/components/ui/button'
import type { Metadata } from 'next'
import Container from '@/components/layout/Container'

export function generateMetadata(): Metadata {
  const title = 'Services | CodeNexo';
  const description = 'Explore AI automation, web & app development, custom software, IoT systems, data & analytics, and workflow integrations.';
  const url = 'https://codenexo.tech/services';
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: ['/og-image.png'],
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.png']
    }
  };
}

const ServicesPage = () => {
  return (
    <div className={`${bitter.className} antialiased`}>
      <Navbar />

      <section className="relative w-full bg-gradient-to-b from-[#0b1020] via-[#071228] to-[#041025] text-white py-20">
        <Container>
          <div className="text-center mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">Services</h1>
            <p className="mt-4 text-gray-300">
              Practical engineering, intelligent automation and scalable products built to grow your business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <article key={s.slug} className="group bg-white/5 hover:bg-white/7 border border-white/5 p-6 rounded-xl transition-shadow shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      <Link href={`/services/${s.slug}`} className="no-underline hover:underline">{s.title}</Link>
                    </h3>
                    <p className="mt-2 text-sm text-gray-300">{s.short}</p>
                  </div>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-gray-300">
                  {s.features.slice(0, 3).map((f, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded bg-yellow-400 text-black font-semibold">{idx + 1}</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center justify-between">
                  <Link href={`/services/${s.slug}`} className="no-underline">
                    <Button variant="custom1">Explore</Button>
                  </Link>
                  <span className="text-xs text-gray-400">Learn more →</span>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="bg-gradient-to-r from-[#0f1724] to-[#071127] p-8 rounded-xl text-white">
            <h3 className="text-2xl font-bold">Ready to build?</h3>
            <p className="mt-2 text-gray-300">Tell us about your project and we'll match the right team and solution.</p>
            <div className="mt-4">
              <Link href="/contact">
                <Button variant="custom1">Let's Build Together</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  )
}

export default ServicesPage
