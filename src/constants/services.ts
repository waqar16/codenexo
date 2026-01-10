export type Service = {
  slug: string
  title: string
  short: string
  tagline: string
  features: string[]
  problem: string
  solution: string
}

export const SERVICES: Service[] = [
  {
    slug: 'ai-automation-solutions',
    title: 'AI & Automation Solutions',
    short:
      'Custom AI chatbots, automated workflows, and API integrations that reduce manual work and accelerate operations.',
    tagline: 'Automate intelligently: faster workflows, happier teams.',
    features: [
      'Custom conversational AI and chatbots',
      'Workflow automation (Make, Zapier, GoHighLevel)',
      'API integrations and orchestration',
      'Monitoring, logging and iterative improvement'
    ],
    problem:
      'Many teams waste time on repetitive tasks, lose context across tools, and miss opportunities to scale because they rely on manual processes.',
    solution:
      'We design intelligent automation and AI assistants that connect your tools, reduce manual effort, and surface the right information at the right time, freeing your team to focus on high‑value work.'
  },
  {
    slug: 'web-and-app-development',
    title: 'Web & App Development',
    short:
      'Full‑stack web and mobile-ready applications built with modern frameworks for performance and scale.',
    tagline: 'Fast, scalable, delightful digital experiences.',
    features: [
      'Next.js & React frontends',
      'Django and Node backends',
      'Firebase and serverless integrations',
      'Performance optimization and accessibility'
    ],
    problem:
      'Products that ship slowly or degrade in performance fail to retain users and slow growth.',
    solution:
      'We build resilient, maintainable applications with clear product thinking, delivering interfaces and APIs that grow with your business.'
  },
  {
    slug: 'custom-software-development',
    title: 'Custom Software Development',
    short:
      'Tailored business software: CRMs, dashboards, and management systems that map to how you work.',
    tagline: 'Bespoke systems that shape your business, not the other way around.',
    features: [
      'Custom CRMs and dashboards',
      'Integrations with existing tools',
      'Secure data models and role management',
      'Change management and training support'
    ],
    problem:
      'Off‑the‑shelf tools often force businesses to adapt their processes instead of supporting them.',
    solution:
      'Our bespoke software mirrors your workflows, removes friction, and connects data across your organization to unlock measurable efficiency.'
  },
  {
    slug: 'embedded-and-iot-systems',
    title: 'Embedded & IoT Systems',
    short:
      'Hardware and firmware solutions, Raspberry Pi prototypes, and sensor integrations for real‑world automation.',
    tagline: 'From sensors to dashboards: connected devices that work reliably.',
    features: [
      'Raspberry Pi & microcontroller solutions',
      'Sensor integrations and telemetry pipelines',
      'Edge software and remote management',
      'Hardware prototypes and production support'
    ],
    problem:
      'Physical systems are hard to prototype and scale. Hardware, connectivity and software must all align.',
    solution:
      'We create robust IoT systems with reliable connectivity, real‑time data, and easy user interfaces so devices become dependable business assets.'
  },
  {
    slug: 'data-and-ai-analytics',
    title: 'Data & AI Analytics',
    short:
      'Machine learning, data pipelines, and dashboards that turn raw data into actionable insights.',
    tagline: 'Make confident decisions with data‑driven intelligence.',
    features: [
      'ML model development and deployment',
      'ETL pipelines and data engineering',
      'Interactive analytics dashboards',
      'Predictive models and forecasting'
    ],
    problem:
      'Organizations often collect more data than they can use, lacking tools to extract meaningful signals.',
    solution:
      'We build pipelines, models and visualizations that deliver reliable insights and integrate into your daily decision workflows.'
  },
  {
    slug: 'api-integrations-workflow-automation',
    title: 'API Integrations & Workflow Automation',
    short:
      'Reliable backends and connectors that let disparate systems communicate and automate core processes.',
    tagline: 'Connect, automate, and scale your ecosystem.',
    features: [
      'Custom API development',
      'Connectors for Hunter.io, PipelineCRM, Google Cloud',
      'Event‑driven architectures and webhooks',
      'Security, retries and observability'
    ],
    problem:
      'Disconnected tools create manual handoffs and data drift across teams.',
    solution:
      'We build durable integrations and workflow engines that keep data in sync and automate business processes end‑to‑end.'
  }
]

export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug)
}
