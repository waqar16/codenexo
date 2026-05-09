import React from 'react';
import { testimonials } from '@/constants/testimonials';
import { TestimonialCard } from './TestimonialCard';

export const TestimonialsSection: React.FC = () => {
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex h-full">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
