import History from '@/components/AboutUsPage/History'
import Landing from '@/components/AboutUsPage/Landing'
import WhyUs from '@/components/AboutUsPage/WhyUs'
import Navbar from '@/components/Navbar/Navbar'
import TeamSection from '@/components/TeamSection/TeamSection'
import Footer from '@/components/Footer/Footer'
import { bitter } from '@/fonts/fonts'
import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'

export function generateMetadata(): Metadata {
  const title = 'About CodeNexo – Team & Vision';
  const description = 'Learn about CodeNexo’s engineering culture, product mindset and team delivering AI automation, custom software and scalable systems.';
  const url = 'https://codenexo.tech/about';
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, images: ['/og-image.png'] },
    twitter: { card: 'summary_large_image', title, description, images: ['/og-image.png'] }
  }
}

const page = () => {
  return (
    <div className={`${bitter.className}`}>
       <Navbar/>
        <Landing/>
        <History/>
        <WhyUs/>
        <TeamSection/>
        <nav aria-label="Internal links" className="sr-only">
          <Link href="/services">Our Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Footer/>
        </div>
  )
}

export default page