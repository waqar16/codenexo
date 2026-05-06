"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import RotatingText from '../RotatingText'
import { bitter } from '@/fonts/fonts'
import SplitText from '../SplitText'
import FadeContent from '../FadeContent'
import RippleGrid from '../RippleGrid'
import { Button } from '../ui/button'

const Landing = () => {
  const [isCompactViewport, setIsCompactViewport] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)')

    const updateViewport = () => {
      setIsCompactViewport(mediaQuery.matches)
    }

    updateViewport()
    mediaQuery.addEventListener('change', updateViewport)

    return () => {
      mediaQuery.removeEventListener('change', updateViewport)
    }
  }, [])

  return (
    <div className={`relative w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#050505] ${bitter.className}`}>

      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <RippleGrid
          enableRainbow={false}
          gridColor={isCompactViewport ? "#c9c9c9" : "#f5f119ff"}
          rippleIntensity={isCompactViewport ? 0.025 : 0.05}
          gridSize={isCompactViewport ? 8 : 10}
          gridThickness={isCompactViewport ? 9 : 15}
          mouseInteraction={!isCompactViewport}
          mouseInteractionRadius={1.2}
          opacity={isCompactViewport ? 0.28 : 0.8}
        />
      </div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(243,156,18,0.18),transparent_32%),linear-gradient(180deg,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0.52)_38%,rgba(0,0,0,0.78)_100%)]" />
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col justify-center px-5 pb-14 pt-24 sm:min-h-[calc(100svh-5rem)] sm:px-6 sm:pb-16 sm:pt-28 lg:px-8 lg:pb-20 lg:pt-32">
        <div className="flex w-full flex-col gap-6 md:max-w-3xl md:gap-7">
          <div className="inline-flex w-fit items-center rounded-full border border-[#f39c12]/30 bg-black/35 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#f5c268] sm:text-xs">
            CodeNexo
          </div>

          <SplitText
            text="High-performance software systems built for growth"
            tag="h1"
            className="max-w-3xl text-left text-[2.35rem] font-bold leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl"
            delay={45}
            duration={0.6}
            ease="power3.out"
            splitType="words, chars"
            from={{ opacity: 0, y: 28 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-80px"
            textAlign="left"
          />

          <div className="flex flex-col items-start gap-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70 sm:text-base">
              Built with
            </p>
            <RotatingText
              texts={['Commitment', 'Clarity', 'Experience', 'Execution']}
              mainClassName="relative inline-flex max-w-full items-center overflow-hidden rounded-xl border border-[#f39c12]/25 bg-[#f39c12] px-4 py-2 text-xl font-extrabold text-black shadow-[0_18px_48px_rgba(243,156,18,0.24)] sm:px-5 sm:py-2.5 sm:text-2xl"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.02}
              splitLevelClassName="overflow-hidden pb-0.5"
              transition={{ type: "spring", damping: 28, stiffness: 360 }}
              rotationInterval={2200}
            />
          </div>

          <FadeContent blur={true} duration={1000} className="max-w-xl" easing="ease-out" initialOpacity={0}>
            <p className="max-w-xl text-base leading-8 text-gray-200 sm:text-lg">
              We design modern web platforms, AI automations, and data systems that help businesses move faster, operate smarter, and scale with confidence.
            </p>
          </FadeContent>

          <div className="flex w-full flex-col gap-3 pt-2 sm:w-auto sm:flex-row">
            <Button
              asChild
              variant="custom1"
              size="lg"
              className="h-12 w-full rounded-xl px-6 text-base font-bold text-black hover:bg-[#f6ad27] sm:w-auto"
            >
              <Link href="/contact">Start a Project</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 w-full rounded-xl border-white/15 bg-white/5 px-6 text-base font-bold text-white hover:bg-white/10 hover:text-white sm:w-auto"
            >
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>

          <div className="grid gap-3 pt-3 text-sm text-gray-300 sm:grid-cols-3 sm:pt-4">
            <div className="rounded-xl border border-white/10 bg-black/25 px-4 py-3">
              AI integration and workflow automation
            </div>
            <div className="rounded-xl border border-white/10 bg-black/25 px-4 py-3">
              Modern web products with strong UX foundations
            </div>
            <div className="rounded-xl border border-white/10 bg-black/25 px-4 py-3">
              Data pipelines, scraping, and system support
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Landing
