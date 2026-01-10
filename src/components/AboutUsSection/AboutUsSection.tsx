"use client"
import React from 'react'
import CardSwap, { Card } from '../CardSwap'
import { bitter } from '@/fonts/fonts'
import BlurText from '../BlurText'

const AboutUsSection = () => {
  return (
    <div className={`flex flex-row items-center justify-between ${bitter.className} pl-8`}>
      <BlurText
        text="With deep technical expertise and a commitment to quality, our team delivers AI-powered solutions, full-stack applications, and custom integrations that drive real business results. We work closely with clients to build scalable, production-ready systems designed for long-term success."
        delay={150}
        animateBy="words"
        direction="top"
        className="w-6/12 text-2xl mb-8"
      />
      <div className='relative w-5/12 h-[600px] overflow-hidden' >
        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          delay={5000}
          pauseOnHover={false}
        >
          <Card className='p-8 '>
            <h3 className='font-bold text-3xl text-black'>Our Vision</h3>
            <p className='text-md'>
              At CodeNexo, our vision is to empower businesses through cutting-edge digital solutions that drive innovation and real results. We combine AI, automation, and full-stack engineering to deliver systems that are scalable, reliable, and built to last.
            </p>
          </Card>
          <Card className='p-8 '>
            <h3 className='font-bold text-3xl text-black'>Our Mission</h3>
            <p className='text-md'>
              We help founders and teams transform complex ideas into production-ready products. With hands-on delivery, transparent communication, and deep technical expertise, we build solutions that align with your business goals and grow with you.
            </p>
          </Card>
          <Card className='p-8 '>
            <h3 className='font-bold text-3xl text-black'>Our Approach</h3>
            <p className='text-md'>
              We focus on outcomes, not just features. Every project starts with understanding your challenges and goals. We then architect, design, and develop with precision, delivering systems that are secure, maintainable, and ready for scale.
            </p>
          </Card>
          <Card className='p-8 '>
            <h3 className='font-bold text-3xl text-black'>Our Commitment</h3>
            <p className='text-md'>
              Quality and reliability are at the core of everything we build. We deliver production-ready systems, not prototypes. Our team stays involved from discovery to deployment, ensuring clear updates, honest timelines, and long-term partnerships.
            </p>
          </Card>
        </CardSwap>
      </div>
    </div>

  )
}

export default AboutUsSection