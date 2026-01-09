import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import ContactHero from '@/components/ContactPage/ContactHero'
import ConsultationForm from '@/components/ContactPage/ConsultationForm'
import ContactInfo from '@/components/ContactPage/ContactInfo'
import WhyContact from '@/components/ContactPage/WhyContact'
import ContactFAQ from '@/components/ContactPage/ContactFAQ'
import { bitter } from '@/fonts/fonts'
import type { Metadata } from 'next'
import Link from 'next/link'

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
      <ContactHero />
      <ConsultationForm />
      <WhyContact />
      <ContactInfo />
      <ContactFAQ />
      <nav aria-label="Internal links" className="sr-only">
        <Link href="/services">Services</Link>
        <Link href="/about">About</Link>
      </nav>
      <Footer />
    </div>
  )
}

export default ContactPage
