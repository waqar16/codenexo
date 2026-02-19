"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
export interface TeamMember {
  role: string;
  name: string;
  image: string;
  experience: string;
  description: string;
  socials: {
    facebook?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
  skills: string[];
}
interface TeamCardProps {
  data: TeamMember;
}

const TeamCard = React.memo(({ data }: TeamCardProps) => {
  return (
    <div className="w-full h-full border border-[#f39c12] rounded-2xl p-5 transition-all hover:border-yellow-300 hover:shadow-lg hover:shadow-yellow-300/10">
      <div className="flex flex-col items-start w-full">

        <p className="w-auto text-white text-xs bg-[#B2BEB5]/10 p-2 px-6 rounded-full">
          {data.role}
        </p>

        <h1 className="mt-2 font-bold text-2xl">{data.name}</h1>

        <p className="text-xs text-gray-400 mt-2">{data.description}</p>

        <div className="flex flex-row items-center w-full justify-center mt-4">
          <Image
            loading="lazy"
            src={data.image}
            width={128}
            height={128}
            className="w-32 h-32 rounded-full object-cover"
            alt={data.name}
          />
        </div>

        <div className="flex flex-wrap items-center w-full justify-start mt-4">
          {data.skills.map((d, i) => (
            <p
              key={i}
              className="w-auto text-white text-xs bg-[#B2BEB5]/10 p-1 px-2 rounded-full border border-gray-700 m-1"
            >
              {d}
            </p>
          ))}
        </div>

        <div className="flex flex-row items-center gap-3 mt-4">
          {data.socials.facebook && (
            <Link href={data.socials.facebook} target="_blank" className="p-2 bg-[#B2BEB5]/10 hover:bg-[#B2BEB5]/20 rounded-full border border-gray-700 transition">
              <FaFacebook className="text-blue-500 text-xl" />
            </Link>
          )}

          {data.socials.linkedin && (
            <Link href={data.socials.linkedin} target="_blank" className="p-2 bg-[#B2BEB5]/10 hover:bg-[#B2BEB5]/20 rounded-full border border-gray-700 transition">
              <FaLinkedin className="text-blue-400 text-xl" />
            </Link>
          )}

          {data.socials.github && (
            <Link href={data.socials.github} target="_blank" className="p-2 bg-[#B2BEB5]/10 hover:bg-[#B2BEB5]/20 rounded-full border border-gray-700 transition">
              <FaGithub className="text-white text-xl" />
            </Link>
          )}

          {data.socials.website && (
            <Link href={data.socials.website} target="_blank" className="p-2 bg-[#B2BEB5]/10 hover:bg-[#B2BEB5]/20 rounded-full border border-gray-700 transition">
              <FaGlobe className="text-green-400 text-xl" />
            </Link>
          )}
        </div>
      
      </div>
    </div>
  );
});

TeamCard.displayName = "TeamCard";
export default TeamCard;
