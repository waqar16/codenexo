import React from 'react'
import { FaRocket, FaCode, FaComments, FaCogs } from 'react-icons/fa'

const WhyContact = () => {
  const benefits = [
    {
      icon: <FaCode className="text-xl sm:text-2xl md:text-3xl" />,
      title: "Technical Depth Across Stack",
      description: "Expertise in AI, automation, full-stack development, embedded systems, and cloud infrastructure."
    },
    {
      icon: <FaRocket className="text-xl sm:text-2xl md:text-3xl" />,
      title: "Real Production Experience",
      description: "We build systems that handle real traffic and scale. Not just demos or proof-of-concepts."
    },
    {
      icon: <FaComments className="text-xl sm:text-2xl md:text-3xl" />,
      title: "Transparent Communication",
      description: "From discovery to delivery, we keep you informed with clear updates and honest timelines."
    },
    {
      icon: <FaCogs className="text-xl sm:text-2xl md:text-3xl" />,
      title: "Flexible Engagement Models",
      description: "Whether you need a full team, project-based delivery, or ongoing support, we adapt to your needs."
    }
  ]

  return (
    <section className="w-full bg-[#0b1020] text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight">Why Reach Out to CodeNexo?</h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-300 max-w-xl mx-auto">
            We're not just another development agency. Here's what sets us apart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all group"
            >
              <div className="w-14 h-14 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-4 text-yellow-400 group-hover:bg-yellow-400/20 transition-colors">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyContact
