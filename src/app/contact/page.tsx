import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import ContactHero from '@/components/ContactPage/ContactHero'
import ConsultationForm from '@/components/ContactPage/ConsultationForm'
import ContactInfo from '@/components/ContactPage/ContactInfo'
import WhyContact from '@/components/ContactPage/WhyContact'
import ContactFAQ from '@/components/ContactPage/ContactFAQ'
import CalendlyInline from '@/components/Calendly/CalendlyInline'
import { bitter } from '@/fonts/fonts'
import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/layout/Container'

export function generateMetadata(): Metadata {
  const title = 'Contact CodeNexo – Start Your Project';
  const description = 'Reach CodeNexo for AI automation, Next.js development, custom software and IoT solutions. Replies within 24 hours.';
  const url = 'https://codenexo.tech/contact';
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, images: ['/og-image.png'] },
    twitter: { card: 'summary_large_image', title, description, images: ['/og-image.png'] }
  }
}

const ContactPage = () => {
  return (
    <div className={`${bitter.className} antialiased`}>
      <Navbar />
      {/* ContactPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact CodeNexo',
            url: 'https://codenexo.tech/contact'
          })
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
      <section id="schedule-call" className="py-16">
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4">Schedule a Free Consultation</h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              Book a 30-minute call to discuss your project requirements
            </p>
          </div>
          <CalendlyInline />
        </Container>
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
  )
}

export default ContactPage
