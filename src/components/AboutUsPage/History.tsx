import React from 'react'

const History = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="grid gap-10 md:grid-cols-2 items-start">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Our Story & Founder's Vision
          </h2>
        </div>
        <div className="text-base sm:text-lg leading-relaxed text-gray-300">
          <p>
            CodeNexo is a focused, technical studio that works closely with clients to solve real problems through
            software. We're not just a development shop; we're problem solvers who bring product thinking and
            engineering discipline to every project.
          </p>
          <p className='mt-4'>
            Founded by experienced software engineers, CodeNexo specializes in AI, automation, and full-stack
            development. We combine deep technical expertise with clear communication and transparent processes. Whether
            it's building intelligent automation workflows, designing scalable web applications, or integrating complex
            APIs, we focus on outcomes that matter: systems that are reliable, maintainable, and built for growth.
          </p>
          <p className='mt-4'>
            We believe in hands-on delivery and long-term partnerships. Our team stays involved from discovery to
            deployment, ensuring every solution aligns with your business goals and technical requirements. We've
            delivered production-ready systems for startups and growing businesses, helping them scale efficiently and
            confidently.
          </p>
          <p className='mt-8'>
          <strong>Mubashir Babar</strong><br />
          CEO & Founder
          </p>
        </div>
      </div>
    </section>
  )
}

export default History
