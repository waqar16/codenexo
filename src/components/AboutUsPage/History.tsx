import React from "react";

const History = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="grid items-start gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
            Who We Are
          </h2>
        </div>
        <div className="text-base leading-relaxed text-gray-300 sm:text-lg">
          <p>
            CodeNexo is a software and automation company focused on solving
            operational bottlenecks with custom systems. We work with founders,
            operators, and growing teams that need engineering partners who can
            ship dependable solutions instead of surface-level demos.
          </p>
          <p className="mt-4">
            Our work spans automation, scraping and data pipelines, API
            integrations, AI systems, and custom business software. That
            includes internal tools for operations teams, lead-generation
            systems for real estate businesses, workflow automation for service
            companies, and AI-assisted platforms that reduce manual work.
          </p>
          <p className="mt-4">
            We care about practical outcomes: systems that are secure,
            maintainable, and useful in everyday business operations. From
            requirement discovery to deployment and support, we stay hands-on so
            clients get a working solution that fits their actual workflow.
          </p>
          <p className="mt-8">
            <strong>Mubashir Babar</strong>
            <br />
            CEO & Founder
          </p>
        </div>
      </div>
    </section>
  );
};

export default History;
