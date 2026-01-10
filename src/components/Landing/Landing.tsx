"use client"
import React from 'react'
import RotatingText from '../RotatingText'
import { bitter } from '@/fonts/fonts'
import SplitText from '../SplitText'
import FadeContent from '../FadeContent'
import RippleGrid from '../RippleGrid'

const Landing = () => {

  return (
    <div className={`relative flex flex-col items-center justify-center w-full h-[90vh] ${bitter.className} px-8`}>

      <div className="absolute inset-0 z-0"><RippleGrid
        enableRainbow={false}
        gridColor="#f5f119ff"
        rippleIntensity={0.05}
        gridSize={10}
        gridThickness={15}
        mouseInteraction={true}
        mouseInteractionRadius={1.2}
        opacity={0.8}
      /></div>
      <div className='flex flex-row items-center justify-start  w-full'>

        <SplitText
          text="CodeNexo"
          className="text-[70px] font-extrabold  text-center"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        /></div>
      <div className='flex flex-row items-center justify-start mt-1 w-full'>
        <h1 className='text-3xl font-extrabold mr-2'>The Name of</h1>
        <RotatingText
          texts={['Excellence', 'Experience', 'Skills', 'Commitment']}
          mainClassName="px-2 sm:px-2 md:px-3 text-3xl font-extrabold bg-[#f39c12] text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </div>
      <div className='flex flex-row items-center justify-start  w-full'>

        <FadeContent blur={true} duration={1000} className='mt-2' easing="ease-out" initialOpacity={0}>
          <p className='text-start w-7/12 text-xl'>At CodeNexo, we craft powerful digital solutions: from modern web development and AI integration to advanced web scraping and automation.</p>
        </FadeContent>
      </div>

    </div>
  )
}

export default Landing