'use client'

import React from 'react'
import { Button } from '@/components/ui/button'

const ContactHero = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form')
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      className="relative w-full h-[280px] sm:h-[400px] md:h-[85vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/contact-bg.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Text Content */}
      <div className="relative z-10 max-w-4xl px-6">
        <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
          Let's Build Something Exceptional Together
        </h1>
        <p className="text-gray-200 mt-6 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          Whether you need AI-powered automation, custom software development, or scalable web solutions,
          CodeNexo is here to transform your vision into reality.
        </p>
        <p className="text-yellow-400 mt-4 text-sm md:text-base font-semibold">
          ⚡ We typically reply within 24 hours
        </p>
        <div className="mt-8">
          <Button 
            variant="custom1" 
            size="lg" 
            onClick={scrollToForm}
            className="text-base px-8 py-6"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ContactHero
