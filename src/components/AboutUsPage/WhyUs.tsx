import { ArrowRightIcon } from 'lucide-react'
import React from 'react'
import Image from 'next/image'

const WhyUs = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="grid gap-10 md:grid-cols-2 items-start">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Why Choose Us
          </h2>
        </div>
        <div className="space-y-4 text-base sm:text-lg leading-relaxed text-gray-300">
          <p>
            We bring technical depth and product clarity to every project. From AI automation to full-stack
            development, we deliver production-ready systems that are scalable, secure, and built to last. Our team
            stays hands-on throughout the entire process, ensuring clear communication, honest timelines, and
            solutions tailored to your business goals.
          </p>
          <div className='space-y-2'>
            <div className='flex flex-row items-center justify-start'>
              <ArrowRightIcon className='w-4 h-auto' />
              <p className='ml-2 font-bold'>Deep Technical Expertise</p>
            </div>
            <div className='flex flex-row items-center justify-start'>
              <ArrowRightIcon className='w-4 h-auto' />
              <p className='ml-2 font-bold'>Product Thinking</p>
            </div>
            <div className='flex flex-row items-center justify-start'>
              <ArrowRightIcon className='w-4 h-auto' />
              <p className='ml-2 font-bold'>Transparent & Collaborative</p>
            </div>
            <div className='flex flex-row items-center justify-start'>
              <ArrowRightIcon className='w-4 h-auto' />
              <p className='ml-2 font-bold'>Quality & Reliability</p>
            </div>
            <div className='flex flex-row items-center justify-start'>
              <ArrowRightIcon className='w-4 h-auto' />
              <p className='ml-2 font-bold'>Production-Ready Systems</p>
            </div>
          </div>
          <div className="w-full max-w-xl p-4 sm:p-8 bg-black/90 shadow-[0_0_90px_rgba(150,150,150,0.1)] rounded-lg">
            <Image src={'/why-us.jpg'} alt="Why choose CodeNexo" width={1200} height={800} className="w-full h-auto" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
