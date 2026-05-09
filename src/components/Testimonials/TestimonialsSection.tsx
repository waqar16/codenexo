"use client";

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/constants/testimonials';
import { TestimonialCard } from './TestimonialCard';

export const TestimonialsSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.8; // Scroll by 80% of the container width
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative w-full bg-[#030712] py-20 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl mb-6">
            Trusted by Clients <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Worldwide</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            Real feedback from founders, startups, and businesses we&apos;ve helped build and scale.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 sm:gap-8 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="flex-shrink-0 w-[90vw] sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] snap-start flex h-full"
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button 
            onClick={() => scroll('left')}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-800 bg-gray-900/50 text-gray-400 transition-all hover:border-yellow-500/50 hover:text-yellow-500 hover:shadow-[0_0_15px_rgba(234,179,8,0.1)] focus:outline-none"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-800 bg-gray-900/50 text-gray-400 transition-all hover:border-yellow-500/50 hover:text-yellow-500 hover:shadow-[0_0_15px_rgba(234,179,8,0.1)] focus:outline-none"
            aria-label="Next testimonials"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};
