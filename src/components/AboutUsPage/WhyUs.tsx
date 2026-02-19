import { ArrowRight, ArrowRightIcon } from 'lucide-react'
import React from 'react'
import Image from 'next/image'

const WhyUs = () => {
  return (
    <div className='p-24 flex flex-row items-center justify-between w-full bg-black/30'>
        <div className='w-5/12 flex flex-col items-start'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>Why Choose Us</h1>
        <p className='mt-6 text-md font-light leading-[30px]'>We bring technical depth and product clarity to every project. From AI automation to full-stack development, we deliver production-ready systems that are scalable, secure, and built to last. Our team stays hands-on throughout the entire process, ensuring clear communication, honest timelines, and solutions tailored to your business goals.</p>
        <div className='flex flex-col items-start w-full mt-6'>
            <div className='flex flex-row items-center my-1 justify-start'>
                <ArrowRightIcon className='w-4 h-auto'/>
                <p className='text-base sm:text-lg ml-2 font-bold'>
Deep Technical Expertise</p>
            </div>
             <div className='flex flex-row items-center my-1 justify-start'>
                <ArrowRightIcon className='w-4 h-auto'/>
                <p className='text-lg ml-2 font-bold'>
Product Thinking</p>
            </div>
             <div className='flex flex-row items-center my-1 justify-start'>
                <ArrowRightIcon className='w-4 h-auto'/>
                <p className='text-lg ml-2 font-bold'>
Transparent & Collaborative</p>
            </div>
             <div className='flex flex-row items-center my-1 justify-start'>
                <ArrowRightIcon className='w-4 h-auto'/>
                <p className='text-lg ml-2 font-bold'>
Quality & Reliability</p>
            </div>
             <div className='flex flex-row items-center my-1 justify-start'>
                <ArrowRightIcon className='w-4 h-auto'/>
                <p className='text-lg ml-2 font-bold'>
Production-Ready Systems</p>
            </div>
        </div>
        </div>
      <div className="w-full max-w-xl flex flex-col items-start p-4 sm:p-8 bg-black/90 shadow-[0_0_90px_rgba(150,150,150,0.1)] rounded-lg">
  <Image src={'/why-us.jpg'} alt="Why choose CodeNexo" width={1200} height={800} className="w-full h-auto" loading="lazy" />
</div>


    </div>
  )
}

export default WhyUs