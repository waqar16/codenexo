import React from 'react'

const History = () => {
  return (
    <div className='w-full flex flex-row items-start justify-between p-24'>
      <h1 className="w-full max-w-xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
        Our Story & <br />Founder's Vision
      </h1>
      <div className='w-6/12  flex flex-col items-start'>
        <p className='text-md leading-[30px] font-light'>CodeNexo is a focused, technical studio that works closely with clients to solve real problems through software. We're not just a development shop; we're problem solvers who bring product thinking and engineering discipline to every project.

        </p>
        <p className='text-md leading-[30px] font-light mt-4'>Founded by experienced software engineers, CodeNexo specializes in AI, automation, and full-stack development. We combine deep technical expertise with clear communication and transparent processes. Whether it's building intelligent automation workflows, designing scalable web applications, or integrating complex APIs, we focus on outcomes that matter: systems that are reliable, maintainable, and built for growth.

        </p>
        <p className='text-md leading-[30px] font-light mt-4'>We believe in hands-on delivery and long-term partnerships. Our team stays involved from discovery to deployment, ensuring every solution aligns with your business goals and technical requirements. We've delivered production-ready systems for startups and growing businesses, helping them scale efficiently and confidently.

        </p>
        <p className='mt-8'>
          <strong>Mubashir Babar</strong><br />
          CEO & Founder
        </p>
      </div>
    </div>
  )
}

export default History