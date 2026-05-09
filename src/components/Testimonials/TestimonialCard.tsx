import React from 'react';
import { Testimonial } from '@/constants/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4 text-yellow-500"
  >
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
      clipRule="evenodd"
    />
  </svg>
);

const PlatformBadge = ({ platform }: { platform: Testimonial['platform'] }) => {
  let bgColor = '';
  let textColor = '';

  switch (platform) {
    case 'Upwork':
      bgColor = 'bg-green-500/10';
      textColor = 'text-green-500';
      break;
    case 'Fiverr':
      bgColor = 'bg-green-600/10';
      textColor = 'text-green-600';
      break;
    case 'Direct':
    default:
      bgColor = 'bg-blue-500/10';
      textColor = 'text-blue-500';
      break;
  }

  return (
    <span
      className={`px-2 py-1 text-xs font-medium rounded-full border border-current ${bgColor} ${textColor}`}
    >
      {platform}
    </span>
  );
};

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  // Extract initial for avatar
  const initial = testimonial.clientName.charAt(0).toUpperCase();

  return (
    <div className="w-full rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-gray-950/50 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/30 hover:shadow-yellow-500/10">
      
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* Avatar Placeholder */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-800 text-sm font-semibold text-gray-300 ring-1 ring-gray-700">
            {initial}
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">{testimonial.clientName}</h4>
            <p className="text-xs text-gray-400">{testimonial.country}</p>
          </div>
        </div>
        <PlatformBadge platform={testimonial.platform} />
      </div>

      {/* Rating & Project Info */}
      <div className="mb-4">
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} />
          ))}
          <span className="ml-1 text-xs font-medium text-gray-300">{testimonial.rating.toFixed(1)}</span>
        </div>
        
        {testimonial.project && (
          <div className="text-xs font-medium text-yellow-500/90 mb-2">
            Project: {testimonial.project}
          </div>
        )}
      </div>

      {/* Review Text */}
      <blockquote className="mb-6 text-sm leading-relaxed text-gray-300">
        &quot;{testimonial.review}&quot;
      </blockquote>

      {/* Tags */}
      {testimonial.tags && testimonial.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto">
          {testimonial.tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-md bg-gray-800/50 px-2 py-1 text-[10px] font-medium text-gray-400 ring-1 ring-inset ring-gray-700/50"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
