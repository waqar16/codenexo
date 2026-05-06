export const COMPANY = {
  name: "CodeNexo",
  email: "contact@codenexo.tech",
  phone: "+92 322 626 4566",
  phoneHref: "tel:+923226264566",
  whatsappHref: "https://wa.me/923226264566",
  city: "Karachi",
  country: "Pakistan",
  website: "https://codenexo.tech",
  ogImage: "/og-image.png",
} as const;

export const TRUST_BULLETS = [
  "Custom-built solutions, not templates",
  "Production-ready systems",
  "Secure and scalable architecture",
  "Ongoing support and iteration",
  "Experience with automation, scraping, APIs, and AI systems",
] as const;

export const HOW_IT_WORKS_STEPS = [
  {
    title: "Requirement understanding",
    description:
      "We map your business process, constraints, and success criteria before proposing a solution.",
  },
  {
    title: "System design",
    description:
      "We define the architecture, integrations, data flow, and delivery plan needed for a reliable rollout.",
  },
  {
    title: "Development",
    description:
      "We build the system around your workflow with practical engineering and clear implementation milestones.",
  },
  {
    title: "Testing",
    description:
      "We validate functionality, edge cases, and operational readiness before anything goes live.",
  },
  {
    title: "Delivery + support",
    description:
      "We launch, document, and keep improving the system with post-delivery iteration and support.",
  },
] as const;
