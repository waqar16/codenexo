import React from 'react'

const Landing = () => {
  return (
     <section
      className="relative w-full h-[280px] sm:h-[380px] md:h-[80vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/about-bg.jpg')" }} // <-- Replace with your image
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Text Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h2 className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
          Building AI-Powered Products and Automation for Modern Businesses
        </h2>
        <p className="text-gray-200 mt-4 text-base sm:text-lg leading-relaxed">
         We specialize in AI & automation, full-stack web and app development, custom software solutions, and seamless API integrations. From concept to deployment, we deliver production-ready systems that scale with your business.
        </p>
        <p className="text-gray-300 mt-3 text-base sm:text-lg leading-relaxed font-medium">
          We help founders and teams turn complex ideas into reliable, scalable products.
        </p>
      </div>
    </section>
  )
}

export default Landing
