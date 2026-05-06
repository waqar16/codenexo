import React from "react";
import { FaRocket, FaCode, FaComments, FaCogs } from "react-icons/fa";

const WhyContact = () => {
  const benefits = [
    {
      icon: <FaCode className="text-xl sm:text-2xl md:text-3xl" />,
      title: "Technical Depth Across Stack",
      description:
        "Experience across AI systems, automation workflows, scraping pipelines, APIs, and custom software delivery.",
    },
    {
      icon: <FaRocket className="text-xl sm:text-2xl md:text-3xl" />,
      title: "Production-Ready Execution",
      description:
        "We build systems for operational use, with architecture, testing, and delivery practices that support real teams.",
    },
    {
      icon: <FaComments className="text-xl sm:text-2xl md:text-3xl" />,
      title: "Clear Communication",
      description:
        "You get straightforward recommendations, realistic timelines, and direct collaboration from discovery through launch.",
    },
    {
      icon: <FaCogs className="text-xl sm:text-2xl md:text-3xl" />,
      title: "Support After Delivery",
      description:
        "We stay available for iteration, improvements, and operational support once the first version is live.",
    },
  ];

  return (
    <section className="w-full bg-[#0b1020] py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-xl font-extrabold leading-tight sm:text-2xl md:text-3xl lg:text-4xl">
            Why Businesses Contact CodeNexo
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
            We work best with teams that need custom systems, practical
            engineering guidance, and a reliable delivery partner.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-yellow-400/10 text-yellow-400 transition-colors group-hover:bg-yellow-400/20">
                {benefit.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold">{benefit.title}</h3>
              <p className="text-sm leading-relaxed text-gray-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyContact;
