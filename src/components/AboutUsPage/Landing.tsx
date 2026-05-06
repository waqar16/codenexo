import React from "react";

const Landing = () => {
  return (
    <section
      className="relative flex h-[280px] w-full items-center justify-center bg-cover bg-center bg-no-repeat text-center sm:h-[380px] md:h-[80vh]"
      style={{ backgroundImage: "url('/about-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 max-w-4xl px-6">
        <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
          Software and Automation Systems Built for Real Business Workflows
        </h2>
        <p className="mt-4 text-base leading-relaxed text-gray-200 sm:text-lg">
          CodeNexo helps companies automate operations, build custom internal
          tools, connect APIs, and deploy reliable AI-enabled systems without
          relying on off-the-shelf shortcuts.
        </p>
        <p className="mt-3 text-base font-medium leading-relaxed text-gray-300 sm:text-lg">
          Our mission is simple: improve business efficiency through automation,
          dependable engineering, and systems that support long-term growth.
        </p>
      </div>
    </section>
  );
};

export default Landing;
