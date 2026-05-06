// import type { Metadata } from "next";
// import Link from "next/link";
// import type { ReactNode } from "react";
// import Navbar from "@/components/Navbar/Navbar";
// import Footer from "@/components/Footer/Footer";
// import Container from "@/components/layout/Container";
// import { Button } from "@/components/ui/button";
// import { bitter } from "@/fonts/fonts";

// const pageUrl = "https://codenexo.tech/services/real-estate-leads-automation";
// const pageTitle = "Real Estate Leads & Automation Services | CodeNexo";
// const pageDescription =
//   "Get probate leads, foreclosure data, county records, and automation systems for real estate investors, wholesalers, and agencies.";

// export const metadata: Metadata = {
//   title: {
//     absolute: pageTitle,
//   },
//   description: pageDescription,
//   alternates: {
//     canonical: pageUrl,
//   },
//   openGraph: {
//     title: pageTitle,
//     description: pageDescription,
//     url: pageUrl,
//     images: ["/og-image.png"],
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: pageTitle,
//     description: pageDescription,
//     images: ["/og-image.png"],
//   },
// };

// const audiences = [
//   {
//     title: "Real Estate Investors",
//     description: "Find off-market opportunities faster.",
//   },
//   {
//     title: "Wholesalers",
//     description: "Get consistent motivated seller pipelines.",
//   },
//   {
//     title: "Brokerages & Agencies",
//     description: "Automate inquiries and lead routing.",
//   },
//   {
//     title: "Acquisition Teams",
//     description: "Scale outreach with cleaner data systems.",
//   },
// ];

// const services = [
//   {
//     title: "Probate Leads",
//     description: "Fresh probate filings organized for outreach.",
//   },
//   {
//     title: "Foreclosure Leads",
//     description: "Target distressed opportunities faster.",
//   },
//   {
//     title: "County Record Scraping",
//     description: "Custom county/public source data pipelines.",
//   },
//   {
//     title: "Lead Follow-Up Automation",
//     description: "SMS, email, CRM workflows, reminders.",
//   },
//   {
//     title: "CRM Integrations",
//     description: "GoHighLevel, HubSpot, custom APIs.",
//   },
//   {
//     title: "Custom Dashboards",
//     description: "Track leads, sources, and conversion flow.",
//   },
// ];

// const problemBullets = [
//   "Manual lead research wastes time",
//   "Slow follow-up loses deals",
//   "Messy spreadsheets kill momentum",
//   "Teams lack reliable systems",
// ];

// const solutionBullets = [
//   "Automated lead sourcing pipelines",
//   "Instant lead routing & follow-up",
//   "Clean organized delivery in Sheets/CSV/CRM",
//   "Custom systems built around your workflow",
// ];

// const benefits = [
//   {
//     title: "Save Hours Weekly",
//     description: "Eliminate repetitive admin work.",
//   },
//   {
//     title: "Respond Faster",
//     description: "Automate first-touch follow-up.",
//   },
//   {
//     title: "Better Lead Quality",
//     description: "Use cleaner, fresher data.",
//   },
//   {
//     title: "Scale Smarter",
//     description: "Systems that grow with your business.",
//   },
// ];

// const steps = [
//   {
//     title: "Tell Us Your Market",
//     description: "State, county, niche, or workflow pain.",
//   },
//   {
//     title: "We Build Your System",
//     description: "Lead pipeline, automation, integrations.",
//   },
//   {
//     title: "You Focus on Deals",
//     description: "Close more opportunities with less chaos.",
//   },
// ];

// const faqs = [
//   {
//     question: "Which states or counties can you cover?",
//     answer:
//       "Custom coverage depends on source availability. We support many public-data workflows and custom regions.",
//   },
//   {
//     question: "Do you only sell lead lists?",
//     answer:
//       "No. We also build automation systems, CRM workflows, and custom acquisition pipelines.",
//   },
//   {
//     question: "Can you integrate with our CRM?",
//     answer: "Yes. We support common CRMs and custom API integrations.",
//   },
//   {
//     question: "Do you offer recurring monthly service?",
//     answer:
//       "Yes. Monthly lead delivery and maintenance plans are available.",
//   },
// ];

// function SectionHeading({
//   eyebrow,
//   title,
//   description,
// }: {
//   eyebrow?: string;
//   title: string;
//   description?: string;
// }) {
//   return (
//     <div className="mx-auto max-w-3xl text-center">
//       {eyebrow ? (
//         <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f39c12]">
//           {eyebrow}
//         </p>
//       ) : null}
//       <h2 className="mt-3 text-2xl font-extrabold leading-tight text-white sm:text-3xl md:text-4xl">
//         {title}
//       </h2>
//       {description ? (
//         <p className="mt-4 text-base leading-relaxed text-gray-300 sm:text-lg">
//           {description}
//         </p>
//       ) : null}
//     </div>
//   );
// }

// function CheckItem({ children }: { children: ReactNode }) {
//   return (
//     <li className="flex items-start gap-3 text-sm leading-relaxed text-gray-300 sm:text-base">
//       <span
//         aria-hidden="true"
//         className="mt-1 inline-flex size-5 flex-none items-center justify-center rounded-md bg-[#f39c12]"
//       >
//         <span className="size-2 rounded-full bg-black" />
//       </span>
//       <span>{children}</span>
//     </li>
//   );
// }

// function DashboardVisual() {
//   const pipeline = ["County data", "Clean records", "CRM sync", "Follow-up"];

//   return (
//     <div className="relative mx-auto w-full max-w-xl">
//       <div className="absolute -inset-4 rounded-lg bg-[#f39c12]/10 blur-3xl" />
//       <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#071127]/90 p-4 shadow-2xl shadow-black/30 sm:p-5">
//         <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
//           <div>
//             <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f39c12]">
//               Lead engine
//             </p>
//             <p className="mt-1 text-sm text-gray-300">Live acquisition pipeline</p>
//           </div>
//           <div className="rounded-md border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
//             Active
//           </div>
//         </div>

//         <div className="grid gap-3 sm:grid-cols-3">
//           <div className="rounded-lg border border-white/10 bg-white/5 p-4">
//             <p className="text-xs text-gray-400">New leads</p>
//             <p className="mt-2 text-3xl font-extrabold text-white">248</p>
//             <p className="mt-1 text-xs text-emerald-300">+32 this week</p>
//           </div>
//           <div className="rounded-lg border border-white/10 bg-white/5 p-4">
//             <p className="text-xs text-gray-400">Follow-ups</p>
//             <p className="mt-2 text-3xl font-extrabold text-white">91%</p>
//             <p className="mt-1 text-xs text-[#f39c12]">first-touch sent</p>
//           </div>
//           <div className="rounded-lg border border-white/10 bg-white/5 p-4">
//             <p className="text-xs text-gray-400">Markets</p>
//             <p className="mt-2 text-3xl font-extrabold text-white">12</p>
//             <p className="mt-1 text-xs text-sky-300">county sources</p>
//           </div>
//         </div>

//         <div className="mt-4 rounded-lg border border-white/10 bg-black/20 p-4">
//           <div className="mb-4 flex items-center justify-between">
//             <p className="text-sm font-semibold text-white">Data pipeline</p>
//             <p className="text-xs text-gray-400">Sheets, CSV, CRM</p>
//           </div>
//           <div className="grid gap-3 sm:grid-cols-4">
//             {pipeline.map((item, index) => (
//               <div key={item} className="relative">
//                 <div className="rounded-md border border-white/10 bg-white/5 p-3">
//                   <span className="inline-flex size-7 items-center justify-center rounded-md bg-[#f39c12] text-xs font-bold text-black">
//                     {index + 1}
//                   </span>
//                   <p className="mt-3 min-h-10 text-sm font-medium leading-snug text-white">
//                     {item}
//                   </p>
//                 </div>
//                 {index < pipeline.length - 1 ? (
//                   <div className="absolute left-full top-1/2 hidden h-px w-3 -translate-y-1/2 bg-[#f39c12]/60 sm:block" />
//                 ) : null}
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mt-4 space-y-3">
//           {[
//             "Probate lead batch validated",
//             "Foreclosure lead data queued",
//             "SMS and email workflow triggered",
//           ].map((item) => (
//             <div
//               key={item}
//               className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-4 py-3"
//             >
//               <span className="text-sm text-gray-200">{item}</span>
//               <span className="text-xs font-semibold text-emerald-300">Done</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function RealEstateLeadsAutomationPage() {
//   return (
//     <div className={`${bitter.className} antialiased`}>
//       <Navbar />
//       <main className="overflow-hidden bg-[#040814] text-white">
//         <section className="relative border-b border-white/10 bg-gradient-to-b from-[#0b1020] via-[#071228] to-[#041025] pb-20 pt-24 sm:pt-28 lg:pb-28">
//           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />
//           <Container className="relative">
//             <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
//               <div>
//                 <p className="inline-flex rounded-md border border-[#f39c12]/30 bg-[#f39c12]/10 px-4 py-2 text-sm font-semibold text-[#f39c12]">
//                   Real estate leads automation for faster acquisitions
//                 </p>
//                 <h1 className="mt-6 max-w-4xl text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
//                   Real Estate Leads & Automation Systems That Help You Close
//                   More Deals
//                 </h1>
//                 <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
//                   We help investors, wholesalers, and real estate teams get
//                   fresh off-market leads, automate follow-up, and scale
//                   acquisitions with custom systems.
//                 </p>

//                 <div className="mt-8 flex flex-col gap-3 sm:flex-row">
//                   <Button
//                     asChild
//                     variant="custom1"
//                     size="lg"
//                     className="h-12 rounded-lg px-6 text-base font-bold text-black hover:bg-[#f6ad27]"
//                   >
//                     <Link href="/contact#schedule-call">
//                       Book Free Strategy Call
//                     </Link>
//                   </Button>
//                   <Button
//                     asChild
//                     variant="outline"
//                     size="lg"
//                     className="h-12 rounded-lg border-white/15 bg-white/5 px-6 text-base font-bold text-white hover:bg-white/10 hover:text-white"
//                   >
//                     <Link href="/contact">Get Lead Samples</Link>
//                   </Button>
//                 </div>

//                 <ul className="mt-8 grid gap-3 sm:grid-cols-3">
//                   <CheckItem>Fresh county & public record data</CheckItem>
//                   <CheckItem>Faster lead follow-up systems</CheckItem>
//                   <CheckItem>Built for investors & agencies</CheckItem>
//                 </ul>
//               </div>

//               <DashboardVisual />
//             </div>
//           </Container>
//         </section>

//         <section className="py-20">
//           <Container>
//             <SectionHeading
//               eyebrow="Who this is for"
//               title="Built For Growth-Focused Real Estate Teams"
//               description="Investor lead generation works best when fresh data, fast routing, and disciplined follow-up run together."
//             />
//             <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
//               {audiences.map((audience) => (
//                 <article
//                   key={audience.title}
//                   className="rounded-lg border border-white/10 bg-white/5 p-6 transition-all hover:-translate-y-1 hover:border-[#f39c12]/40 hover:bg-white/10"
//                 >
//                   <h3 className="text-lg font-bold text-white">
//                     {audience.title}
//                   </h3>
//                   <p className="mt-3 text-sm leading-relaxed text-gray-300">
//                     {audience.description}
//                   </p>
//                 </article>
//               ))}
//             </div>
//           </Container>
//         </section>

//         <section className="border-y border-white/10 bg-gradient-to-b from-[#081225] to-[#040814] py-20">
//           <Container>
//             <SectionHeading
//               eyebrow="Core services"
//               title="What We Help You Automate"
//               description="From a probate leads service to real estate CRM automation, CodeNexo builds off market lead systems around your acquisition workflow."
//             />
//             <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
//               {services.map((service, index) => (
//                 <article
//                   key={service.title}
//                   className="group rounded-lg border border-white/10 bg-white/5 p-6 shadow-sm transition-all hover:border-[#f39c12]/40 hover:bg-white/10"
//                 >
//                   <div className="mb-5 inline-flex size-10 items-center justify-center rounded-lg bg-[#f39c12] text-sm font-black text-black">
//                     {String(index + 1).padStart(2, "0")}
//                   </div>
//                   <h3 className="text-xl font-bold text-white">
//                     {service.title}
//                   </h3>
//                   <p className="mt-3 text-sm leading-relaxed text-gray-300">
//                     {service.description}
//                   </p>
//                 </article>
//               ))}
//             </div>
//           </Container>
//         </section>

//         <section className="py-20">
//           <Container>
//             <div className="grid gap-6 lg:grid-cols-2">
//               <article className="rounded-lg border border-red-400/20 bg-red-400/5 p-6 sm:p-8">
//                 <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
//                   The Problem
//                 </h2>
//                 <ul className="mt-6 space-y-4">
//                   {problemBullets.map((item) => (
//                     <li
//                       key={item}
//                       className="flex items-start gap-3 text-gray-300"
//                     >
//                       <span className="mt-2 size-2 flex-none rounded-full bg-red-300" />
//                       <span>{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </article>

//               <article className="rounded-lg border border-[#f39c12]/30 bg-[#f39c12]/10 p-6 sm:p-8">
//                 <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
//                   Our Solution
//                 </h2>
//                 <ul className="mt-6 space-y-4">
//                   {solutionBullets.map((item) => (
//                     <CheckItem key={item}>{item}</CheckItem>
//                   ))}
//                 </ul>
//               </article>
//             </div>
//           </Container>
//         </section>

//         <section className="border-y border-white/10 bg-[#071127] py-20">
//           <Container>
//             <SectionHeading
//               eyebrow="Results"
//               title="Why Teams Use CodeNexo"
//               description="Cleaner foreclosure lead data, better follow-up timing, and automation that keeps acquisitions moving."
//             />
//             <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
//               {benefits.map((benefit) => (
//                 <article
//                   key={benefit.title}
//                   className="rounded-lg border border-white/10 bg-black/20 p-6"
//                 >
//                   <h3 className="text-xl font-extrabold text-white">
//                     {benefit.title}
//                   </h3>
//                   <p className="mt-3 text-sm leading-relaxed text-gray-300">
//                     {benefit.description}
//                   </p>
//                 </article>
//               ))}
//             </div>
//           </Container>
//         </section>

//         <section className="py-20">
//           <Container>
//             <SectionHeading
//               eyebrow="How it works"
//               title="Simple 3-Step Process"
//             />
//             <div className="mt-12 grid gap-5 md:grid-cols-3">
//               {steps.map((step, index) => (
//                 <article
//                   key={step.title}
//                   className="relative rounded-lg border border-white/10 bg-white/5 p-6"
//                 >
//                   <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f39c12]">
//                     Step {index + 1}
//                   </p>
//                   <h3 className="mt-4 text-xl font-bold text-white">
//                     {step.title}
//                   </h3>
//                   <p className="mt-3 text-sm leading-relaxed text-gray-300">
//                     {step.description}
//                   </p>
//                 </article>
//               ))}
//             </div>
//           </Container>
//         </section>

//         <section className="py-6">
//           <Container>
//             <div className="rounded-lg border border-[#f39c12]/30 bg-gradient-to-r from-[#0f1724] to-[#071127] p-8 text-center sm:p-10">
//               <h2 className="text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
//                 Ready to Build a Consistent Lead Engine?
//               </h2>
//               <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-300">
//                 Let&apos;s discuss your market, workflow, and growth goals.
//               </p>
//               <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
//                 <Button
//                   asChild
//                   variant="custom1"
//                   size="lg"
//                   className="h-12 rounded-lg px-6 text-base font-bold text-black hover:bg-[#f6ad27]"
//                 >
//                   <Link href="/contact#schedule-call">
//                     Book Free Strategy Call
//                   </Link>
//                 </Button>
//                 <Button
//                   asChild
//                   variant="outline"
//                   size="lg"
//                   className="h-12 rounded-lg border-white/15 bg-white/5 px-6 text-base font-bold text-white hover:bg-white/10 hover:text-white"
//                 >
//                   <Link href="/contact">Request Custom Quote</Link>
//                 </Button>
//               </div>
//             </div>
//           </Container>
//         </section>

//         <section className="py-20">
//           <Container className="max-w-5xl">
//             <SectionHeading
//               eyebrow="FAQ"
//               title="Questions Before You Start?"
//               description="A few quick answers about lead delivery, CRM systems, and recurring support."
//             />
//             <div className="mt-12 space-y-4">
//               {faqs.map((faq, index) => (
//                 <details
//                   key={faq.question}
//                   open={index === 0}
//                   className="group rounded-lg border border-white/10 bg-white/5 p-6"
//                 >
//                   <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
//                     <h3 className="text-base font-bold text-white sm:text-lg">
//                       {faq.question}
//                     </h3>
//                     <span className="inline-flex size-8 flex-none items-center justify-center rounded-md border border-white/10 text-[#f39c12] transition-transform group-open:rotate-45">
//                       +
//                     </span>
//                   </summary>
//                   <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-300">
//                     {faq.answer}
//                   </p>
//                 </details>
//               ))}
//             </div>
//           </Container>
//         </section>

//         <section className="pb-20">
//           <Container>
//             <div className="flex flex-col items-start justify-between gap-5 rounded-lg border border-white/10 bg-white/5 p-6 sm:flex-row sm:items-center sm:p-8">
//               <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
//                 Need Better Leads and Faster Follow-Up?
//               </h2>
//               <Button
//                 asChild
//                 variant="custom1"
//                 size="lg"
//                 className="h-12 rounded-lg px-6 text-base font-bold text-black hover:bg-[#f6ad27]"
//               >
//                 <Link href="/contact#schedule-call">Book a Free Call</Link>
//               </Button>
//             </div>
//           </Container>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// }
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { bitter } from "@/fonts/fonts";

const pageUrl = "https://codenexo.tech/services/real-estate-leads-automation";
const pageTitle = "Real Estate Leads & Automation Services | CodeNexo";
const pageDescription =
  "Get probate leads, foreclosure data, county records, and automation systems for real estate investors, wholesalers, and agencies.";

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/og-image.png"],
  },
};

const audiences = [
  {
    title: "Real Estate Investors",
    description: "Find off-market opportunities faster.",
  },
  {
    title: "Wholesalers",
    description: "Get consistent motivated seller pipelines.",
  },
  {
    title: "Brokerages & Agencies",
    description: "Automate inquiries and lead routing.",
  },
  {
    title: "Acquisition Teams",
    description: "Scale outreach with cleaner data systems.",
  },
];

const services = [
  {
    title: "Probate Leads",
    description: "Identify motivated sellers before competitors and contact them within minutes.",
    outcome: "Close deals while others are still searching county records.",
  },
  {
    title: "Foreclosure Leads",
    description: "Get distressed property alerts the moment they hit public records.",
    outcome: "Be the first investor they hear from.",
  },
  {
    title: "County Record Scraping",
    description: "Custom data pipelines that run 24/7 across your target counties.",
    outcome: "Never miss a deal opportunity again.",
  },
  {
    title: "Lead Follow-Up Automation",
    description: "SMS and email workflows trigger instantly when new leads arrive.",
    outcome: "Convert more leads with zero manual work.",
  },
  {
    title: "CRM Integrations",
    description: "Leads flow directly into GoHighLevel, HubSpot, or your custom CRM.",
    outcome: "Your team stays organized without data entry.",
  },
  {
    title: "Custom Dashboards",
    description: "Track lead sources, response rates, and deal pipeline in real-time.",
    outcome: "Make data-driven decisions that increase ROI.",
  },
];

const problemBullets = [
  "By the time you find a lead, 3 investors already contacted them",
  "Most teams follow up 24–48 hours late — that's why deals are lost",
  "Messy data means you skip the best opportunities",
  "Your team wastes 15+ hours weekly on manual lead research",
];

const solutionBullets = [
  "Fresh leads delivered daily before your competition sees them",
  "Instant automated follow-up within 60 seconds of lead capture",
  "Clean, verified data with phone numbers, addresses, and property details",
  "Custom systems that scale as you close more deals",
];

const benefits = [
  {
    title: "Contact Sellers First",
    description: "Get leads within hours of public filing, not days or weeks later.",
  },
  {
    title: "Close More Deals",
    description: "Automated follow-up means no lead slips through the cracks.",
  },
  {
    title: "Save 15+ Hours Weekly",
    description: "Your team focuses on deals, not data entry and list building.",
  },
  {
    title: "Predictable Lead Flow",
    description: "Know exactly how many qualified leads you'll get each month.",
  },
];

const steps = [
  {
    title: "Tell Us Your Market",
    description: "Share your target counties, deal criteria, and current pain points.",
  },
  {
    title: "We Build Your System",
    description: "Custom lead pipeline, automated follow-up, and CRM integration delivered in 7-10 days.",
  },
  {
    title: "Start Closing Deals",
    description: "Receive fresh leads daily while automation handles follow-up.",
  },
];

const faqs = [
  {
    question: "Which states or counties can you cover?",
    answer:
      "We cover most US counties with public record access. During our strategy call, we'll confirm data availability for your specific markets and set up custom coverage areas.",
  },
  {
    question: "Do you only sell lead lists?",
    answer:
      "No. We build complete acquisition systems — leads, automation, CRM workflows, and follow-up campaigns. You get the infrastructure, not just a spreadsheet.",
  },
  {
    question: "Can you integrate with our CRM?",
    answer: "Yes. We support GoHighLevel, HubSpot, Salesforce, Podio, REI BlackBook, and custom API integrations. Leads flow directly into your existing workflow.",
  },
  {
    question: "Do you offer recurring monthly service?",
    answer:
      "Yes. Most clients use our monthly plans for ongoing lead delivery, system maintenance, and data updates. We also offer one-time custom builds.",
  },
  {
    question: "How quickly will I start receiving leads?",
    answer:
      "Initial system setup takes 7-10 days. After that, you'll receive fresh leads daily or weekly depending on your market and plan.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f39c12]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-2xl font-extrabold leading-tight text-white sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-gray-300 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm leading-relaxed text-gray-300 sm:text-base">
      <span
        aria-hidden="true"
        className="mt-1 inline-flex size-5 flex-none items-center justify-center rounded-md bg-[#f39c12]"
      >
        <span className="size-2 rounded-full bg-black" />
      </span>
      <span>{children}</span>
    </li>
  );
}

function ProofVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -inset-4 rounded-lg bg-[#f39c12]/10 blur-3xl" />
      <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#071127]/90 p-4 shadow-2xl shadow-black/30 sm:p-5">
        <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f39c12]">
              Sample Lead Delivery
            </p>
            <p className="mt-1 text-sm text-gray-300">Harris County, TX - Probate Leads</p>
          </div>
          <div className="rounded-md border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
            Live Data
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-black/20 p-4">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-semibold text-white">Recent Batch</p>
            <p className="text-xs text-gray-400">CSV · Updated 2 hours ago</p>
          </div>
          
          {/* Sample CSV Preview */}
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="pb-2 pr-4 text-left font-semibold text-[#f39c12]">Property</th>
                  <th className="pb-2 pr-4 text-left font-semibold text-[#f39c12]">Type</th>
                  <th className="pb-2 pr-4 text-left font-semibold text-[#f39c12]">Phone</th>
                  <th className="pb-2 text-left font-semibold text-[#f39c12]">Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-white/5">
                  <td className="py-2 pr-4">2847 Oak Lane</td>
                  <td className="py-2 pr-4">Probate</td>
                  <td className="py-2 pr-4">(713) 555-****</td>
                  <td className="py-2">
                    <span className="inline-flex rounded-md border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-xs text-emerald-300">
                      Verified
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 pr-4">1523 Maple Dr</td>
                  <td className="py-2 pr-4">Probate</td>
                  <td className="py-2 pr-4">(281) 555-****</td>
                  <td className="py-2">
                    <span className="inline-flex rounded-md border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-xs text-emerald-300">
                      Verified
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">894 Pine St</td>
                  <td className="py-2 pr-4">Probate</td>
                  <td className="py-2 pr-4">(832) 555-****</td>
                  <td className="py-2">
                    <span className="inline-flex rounded-md border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-xs text-emerald-300">
                      Verified
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <p className="text-xs text-gray-400">This batch</p>
            <p className="mt-2 text-3xl font-extrabold text-white">47</p>
            <p className="mt-1 text-xs text-emerald-300">verified leads</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <p className="text-xs text-gray-400">Avg. response rate</p>
            <p className="mt-2 text-3xl font-extrabold text-white">18%</p>
            <p className="mt-1 text-xs text-[#f39c12]">SMS campaigns</p>
          </div>
        </div>

        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-4 py-3">
            <span className="text-sm text-gray-200">Phone numbers verified</span>
            <span className="text-xs font-semibold text-emerald-300">100%</span>
          </div>
          <div className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-4 py-3">
            <span className="text-sm text-gray-200">Property data enriched</span>
            <span className="text-xs font-semibold text-emerald-300">100%</span>
          </div>
          <div className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-4 py-3">
            <span className="text-sm text-gray-200">Auto-synced to CRM</span>
            <span className="text-xs font-semibold text-emerald-300">Done</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RealEstateLeadsAutomationPage() {
  return (
    <div className={`${bitter.className} antialiased`}>
      <Navbar />
      <main className="overflow-hidden bg-[#040814] text-white">
        {/* HERO SECTION - COMPLETELY REWRITTEN */}
        <section className="relative border-b border-white/10 bg-gradient-to-b from-[#0b1020] via-[#071228] to-[#041025] pb-20 pt-24 sm:pt-28 lg:pb-28">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />
          <Container className="relative">
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <p className="inline-flex rounded-md border border-[#f39c12]/30 bg-[#f39c12]/10 px-4 py-2 text-sm font-semibold text-[#f39c12]">
                  Automated lead systems for real estate investors
                </p>
                <h1 className="mt-6 max-w-4xl text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  Get 20–50 Off-Market Real Estate Leads Every Month — Fully Automated
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
                  Automated probate, foreclosure, and county data pipelines with instant SMS & CRM follow-up. Built for investors who need consistent deal flow.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    variant="custom1"
                    size="lg"
                    className="h-12 rounded-lg px-6 text-base font-bold text-black hover:bg-[#f6ad27]"
                  >
                    <Link href="/contact">
                      See Sample Leads (Free)
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="h-12 rounded-lg border-white/15 bg-white/5 px-6 text-base font-bold text-white hover:bg-white/10 hover:text-white"
                  >
                    <Link href="#how-it-works">Watch How It Works</Link>
                  </Button>
                </div>

                <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                  <CheckItem>Delivered daily to your CRM</CheckItem>
                  <CheckItem>Verified phone & property data</CheckItem>
                  <CheckItem>Instant automated follow-up</CheckItem>
                </ul>
              </div>

              <ProofVisual />
            </div>
          </Container>
        </section>

        {/* NEW PROOF SECTION - SHOWS REAL EXAMPLES */}
        <section className="border-b border-white/10 bg-[#071127] py-20">
          <Container>
            <SectionHeading
              eyebrow="Real results"
              title="See What You Actually Get"
              description="Not mock-ups. Not estimates. Real lead samples and campaign data from our clients."
            />
            
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {/* Example 1: Lead Sample */}
              <article className="rounded-lg border border-white/10 bg-white/5 p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">Lead Delivery Example</h3>
                  <span className="rounded-md border border-[#f39c12]/30 bg-[#f39c12]/10 px-3 py-1 text-xs font-semibold text-[#f39c12]">
                    CSV Format
                  </span>
                </div>
                <p className="mb-4 text-sm text-gray-300">
                  Sample: 134 probate leads – Harris County, TX
                </p>
                <div className="rounded-md border border-white/10 bg-black/40 p-4 font-mono text-xs text-gray-300">
                  <div className="mb-2 text-[#f39c12]">
                    property_address, owner_name, phone, filing_date, status
                  </div>
                  <div className="space-y-1 opacity-80">
                    <div>"2847 Oak Ln, Houston TX","John D***","(713) 555-****","2024-01-15","Verified"</div>
                    <div>"1523 Maple Dr, Houston TX","Sarah M***","(281) 555-****","2024-01-14","Verified"</div>
                    <div>"894 Pine St, Houston TX","Robert K***","(832) 555-****","2024-01-14","Verified"</div>
                    <div className="text-gray-500">+ 131 more verified leads...</div>
                  </div>
                </div>
                <p className="mt-4 text-xs text-gray-400">
                  * Actual names and numbers blurred for privacy
                </p>
              </article>

              {/* Example 2: Campaign Performance */}
              <article className="rounded-lg border border-white/10 bg-white/5 p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">Campaign Performance</h3>
                  <span className="rounded-md border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                    SMS Workflow
                  </span>
                </div>
                <p className="mb-4 text-sm text-gray-300">
                  Response rate: 18% (Foreclosure campaign, Dallas)
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between rounded-md border border-white/10 bg-black/20 p-4">
                    <span className="text-sm text-gray-300">Total leads contacted</span>
                    <span className="text-xl font-bold text-white">247</span>
                  </div>
                  <div className="flex items-center justify-between rounded-md border border-white/10 bg-black/20 p-4">
                    <span className="text-sm text-gray-300">Responded</span>
                    <span className="text-xl font-bold text-emerald-300">44</span>
                  </div>
                  <div className="flex items-center justify-between rounded-md border border-white/10 bg-black/20 p-4">
                    <span className="text-sm text-gray-300">Qualified appointments</span>
                    <span className="text-xl font-bold text-[#f39c12]">12</span>
                  </div>
                  <div className="flex items-center justify-between rounded-md border border-white/10 bg-black/20 p-4">
                    <span className="text-sm text-gray-300">Deals closed</span>
                    <span className="text-xl font-bold text-white">3</span>
                  </div>
                </div>
                <p className="mt-4 text-xs text-gray-400">
                  Average time from lead to close: 21 days
                </p>
              </article>
            </div>

            <div className="mt-8 text-center">
              <Button
                asChild
                variant="custom1"
                size="lg"
                className="h-12 rounded-lg px-6 text-base font-bold text-black hover:bg-[#f6ad27]"
              >
                <Link href="/contact">
                  Get Your Free Lead Sample
                </Link>
              </Button>
            </div>
          </Container>
        </section>

        <section className="py-20">
          <Container>
            <SectionHeading
              eyebrow="Who this is for"
              title="Built For Growth-Focused Real Estate Teams"
              description="Investor lead generation works best when fresh data, fast routing, and disciplined follow-up run together."
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {audiences.map((audience) => (
                <article
                  key={audience.title}
                  className="rounded-lg border border-white/10 bg-white/5 p-6 transition-all hover:-translate-y-1 hover:border-[#f39c12]/40 hover:bg-white/10"
                >
                  <h3 className="text-lg font-bold text-white">
                    {audience.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-300">
                    {audience.description}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-y border-white/10 bg-gradient-to-b from-[#081225] to-[#040814] py-20">
          <Container>
            <SectionHeading
              eyebrow="Core services"
              title="What We Build For You"
              description="Complete lead systems that deliver motivated sellers to your inbox — then follow up automatically."
            />
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className="group rounded-lg border border-white/10 bg-white/5 p-6 shadow-sm transition-all hover:border-[#f39c12]/40 hover:bg-white/10"
                >
                  <div className="mb-5 inline-flex size-10 items-center justify-center rounded-lg bg-[#f39c12] text-sm font-black text-black">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-300">
                    {service.description}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-[#f39c12]">
                    → {service.outcome}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-20">
          <Container>
            <div className="grid gap-6 lg:grid-cols-2">
              <article className="rounded-lg border border-red-400/20 bg-red-400/5 p-6 sm:p-8">
                <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                  Why Most Investors Lose Deals
                </h2>
                <ul className="mt-6 space-y-4">
                  {problemBullets.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <span className="mt-2 size-2 flex-none rounded-full bg-red-300" />
                      <span className="text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-lg border border-[#f39c12]/30 bg-[#f39c12]/10 p-6 sm:p-8">
                <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                  How We Fix It
                </h2>
                <ul className="mt-6 space-y-4">
                  {solutionBullets.map((item) => (
                    <CheckItem key={item}>{item}</CheckItem>
                  ))}
                </ul>
              </article>
            </div>
          </Container>
        </section>

        <section className="border-y border-white/10 bg-[#071127] py-20">
          <Container>
            <SectionHeading
              eyebrow="Results"
              title="What You Actually Get"
              description="More deals closed. Less time wasted. Predictable lead flow every single month."
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="rounded-lg border border-white/10 bg-black/20 p-6"
                >
                  <h3 className="text-xl font-extrabold text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-300">
                    {benefit.description}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section id="how-it-works" className="py-20">
          <Container>
            <SectionHeading
              eyebrow="How it works"
              title="Get Started in 3 Simple Steps"
            />
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {steps.map((step, index) => (
                <article
                  key={step.title}
                  className="relative rounded-lg border border-white/10 bg-white/5 p-6"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f39c12]">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-4 text-xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-300">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-6">
          <Container>
            <div className="rounded-lg border border-[#f39c12]/30 bg-gradient-to-r from-[#0f1724] to-[#071127] p-8 text-center sm:p-10">
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
                Ready to Get Consistent Lead Flow?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-300">
                See real lead samples from your market. No commitment required.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button
                  asChild
                  variant="custom1"
                  size="lg"
                  className="h-12 rounded-lg px-6 text-base font-bold text-black hover:bg-[#f6ad27]"
                >
                  <Link href="/contact">
                    Get Free Lead Sample
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 rounded-lg border-white/15 bg-white/5 px-6 text-base font-bold text-white hover:bg-white/10 hover:text-white"
                >
                  <Link href="/contact#schedule-call">Book Strategy Call</Link>
                </Button>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-20">
          <Container className="max-w-5xl">
            <SectionHeading
              eyebrow="FAQ"
              title="Common Questions"
              description="Everything you need to know about our lead systems and automation."
            />
            <div className="mt-12 space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={faq.question}
                  open={index === 0}
                  className="group rounded-lg border border-white/10 bg-white/5 p-6"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                    <h3 className="text-base font-bold text-white sm:text-lg">
                      {faq.question}
                    </h3>
                    <span className="inline-flex size-8 flex-none items-center justify-center rounded-md border border-white/10 text-[#f39c12] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-300">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </Container>
        </section>

        <section className="pb-20">
          <Container>
            <div className="flex flex-col items-start justify-between gap-5 rounded-lg border border-white/10 bg-white/5 p-6 sm:flex-row sm:items-center sm:p-8">
              <div>
                <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                  Want to See Real Leads?
                </h2>
                <p className="mt-2 text-base text-gray-300">
                  Get a free sample from your target market
                </p>
              </div>
              <Button
                asChild
                variant="custom1"
                size="lg"
                className="h-12 whitespace-nowrap rounded-lg px-6 text-base font-bold text-black hover:bg-[#f6ad27]"
              >
                <Link href="/contact">Get Free Sample</Link>
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}