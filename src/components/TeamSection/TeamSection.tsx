import React from 'react'
import TeamCard from './TeamCard';
import type { TeamMember } from './TeamCard';

export const teamData: TeamMember[] = [
  {
    role: "CEO / Founder",
    name: "Mubashir Babar",
    image: "/mubashir.jpg",
    experience: "5+ years",
    description:
      "Visionary leader focused on building high-impact products, scaling talented engineering teams, and driving innovation across AI, Web, and Mobile platforms.",
    socials: {
      linkedin: "https://linkedin.com/in/mubashir-babar",
      github: "https://github.com/mubaxhir",
    },
    skills: ["AI Systems", "Full Stack", "Product Strategy", "Team Leadership"],
  },
  {
    role: "Business Head / Co-Founder",
    name: "Hamza Khan",
    image: "/hamza.jpeg",
    experience: "4+ years",
    description:
      "Business development leader focusing on strategic partnerships and digital growth, with a strong software engineering background to bridge technical concepts and user-friendly solutions.",
    socials: {
      linkedin: "https://linkedin.com/in/muhammad-hamza-khan-328483223/",
      github: "https://github.com/HamzaKhan-codes",
    },
    skills: ["Business Development", "Partnerships", "Software Strategy", "Growth"],
  },
  {
    role: "Python / Django Developer",
    name: "Waqar Ahmed Khan",
    image: "/waqar.jpg",
    experience: "3+ years",
    description:
      "Backend engineer specializing in Python, Django, REST APIs, and scalable backend architecture with strong focus on security and data-driven systems.",
    socials: {
    },
    skills: ["Python", "Django", "REST APIs", "Backend Architecture"],
  },
  {
    role: "Full Stack MERN / Next.js Developer",
    name: "Saim Shahzad",
    image: "/saim.jpg",
    experience: "3+ years",
    description:
      "Full stack engineer building modern, fast and scalable applications using React, Next.js, Node.js and MongoDB. Delivering seamless frontend and backend solutions.",
    socials: {
    },
    skills: ["React", "Next.js", "Node.js", "MongoDB"],
  }
];

export default function TeamSection() {
  return (
    <div className='flex flex-col items-center w-full p-12'>
      <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-2'>The People Behind CodeNexo</h1>
      <p className='text-base sm:text-lg leading-relaxed text-gray-400 text-center mb-8 max-w-xl'>Meet the talented engineers and problem solvers who bring technical expertise and product thinking to every project.</p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full will-change-transform">
        {teamData.map((data, index) => (
          <TeamCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
}
