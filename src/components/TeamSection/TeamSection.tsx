import React from 'react'
import TeamCard from './TeamCard';
export const teamData = [
  {
    role: "CEO",
    name: "Mubashir Babar",
    image: "/mubashir.jpg",
    experience: "7+ Years Experience",
    description:
      "Visionary leader focused on building high-impact products, scaling talented engineering teams, and driving innovation across AI, Web, and Mobile platforms.",
    socials: {
      facebook: "",
      linkedin: "https://linkedin.com/in/mubashir-babar",
      github: "https://github.com/mubaxhir",
      website: "https://upwork.com/freelancers/mubashirbabar2"
    },
    skills: ["Leadership", "System Design", "Product Strategy", "AI", "Mobile & Web"]
  },
  {
    role: "Co-Founder / Backend Developer",
    name: "Hamza Khan",
    image: "/hamza.jpeg",

    experience: "4+ Years Experience",
    description:
      "Backend-focused engineer building reliable APIs, server-side systems, and integration workflows with strong attention to performance and maintainability.",
    socials: {
      facebook: "",
      linkedin: "https://linkedin.com/in/muhammad-hamza-khan-328483223/",
      github: "https://github.com/HamzaKhan-codes",
      website: ""
    },
    skills: ["Node.js", "Backend APIs", "System Integrations", "Databases", "Performance"]
  },
  {
    role: "Python / Django Developer",
    name: "Waqar Ahmed Khan",
    image: "/waqar.jpg",
    experience: "3+ Years Experience",
    description:
      "Backend engineer specializing in Python, Django, REST APIs, and scalable backend architecture with strong focus on security and data-driven systems.",
    socials: {
    },
    skills: ["Python", "Django", "PostgreSQL", "DRF", "Docker", "AWS"]
  },
  {
    role: "Full Stack MERN / Next.js Developer",
    name: "Saim Shahzad",
    image: "/saim.jpg",
    experience: "3+ Years Experience",
    description:
      "Full stack engineer building modern, fast and scalable applications using React, Next.js, Node.js and MongoDB. Delivering seamless frontend and backend solutions.",
    socials: {
    },
    skills: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind", "API Development"]
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
