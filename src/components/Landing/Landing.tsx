"use client"
import React from 'react'
import RotatingText from '../RotatingText'
import { bitter } from '@/fonts/fonts'
import SplitText from '../SplitText'
import FadeContent from '../FadeContent'
import RippleGrid from '../RippleGrid'

const Landing = () => {

  return (
    <div className={`relative w-full overflow-hidden ${bitter.className}`}>

      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <RippleGrid
          enableRainbow={false}
          gridColor="#f5f119ff"
          rippleIntensity={0.05}
          gridSize={10}
          gridThickness={15}
          mouseInteraction={true}
          mouseInteractionRadius={1.2}
          opacity={0.8}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-full">
          <div className="flex-1">
            <SplitText
              text="CodeNexo"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight break-words text-center md:text-left"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
            <div className="flex flex-col sm:flex-row items-center gap-2 mt-3 sm:mt-0">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold mr-0 sm:mr-2">The Name of</h1>
              <RotatingText
                texts={['Excellence', 'Experience', 'Skills', 'Commitment']}
                mainClassName="relative inline-block mt-3 sm:mt-0 px-2 sm:px-2 md:px-3 text-xl sm:text-2xl md:text-3xl font-extrabold bg-[#f39c12] text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
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
            <FadeContent blur={true} duration={1000} className="mt-4" easing="ease-out" initialOpacity={0}>
              <p className="mt-4 max-w-xl text-base sm:text-lg leading-relaxed text-gray-300 text-start">
                At CodeNexo, we craft powerful digital solutions: from modern web development and AI integration to advanced web scraping and automation.
              </p>
            </FadeContent>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Landing
