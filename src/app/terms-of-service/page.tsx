import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Container from "@/components/layout/Container";
import { bitter } from "@/fonts/fonts";
import { COMPANY } from "@/constants/company";

const pageTitle = "Terms of Service";
const pageDescription =
  "Read the basic terms for engaging CodeNexo for software, automation, and technical consulting services.";
const pageUrl = `${COMPANY.website}/terms-of-service`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: `${pageTitle} | ${COMPANY.name}`,
    description: pageDescription,
    url: pageUrl,
    type: "article",
    images: [COMPANY.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${pageTitle} | ${COMPANY.name}`,
    description: pageDescription,
    images: [COMPANY.ogImage],
  },
};

export default function TermsOfServicePage() {
  return (
    <div className={`${bitter.className} antialiased`}>
      <Navbar />
      <main className="bg-gradient-to-b from-[#0b1020] via-[#071228] to-[#041025] py-16 text-white">
        <Container className="max-w-4xl">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f39c12]">
              Legal
            </p>
            <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Terms of Service
            </h1>
            <p className="mt-4 text-base leading-relaxed text-gray-300">
              These terms describe the general basis on which {COMPANY.name}
              provides software development, automation, consulting, and related
              services from {COMPANY.city}, {COMPANY.country}.
            </p>

            <div className="mt-10 space-y-8 text-sm leading-relaxed text-gray-200 sm:text-base">
              <section>
                <h2 className="text-xl font-bold text-white">Service Scope</h2>
                <p className="mt-3">
                  Project scope, deliverables, timelines, and pricing are
                  defined in individual proposals or agreements. Website content
                  and service descriptions are informational and do not replace a
                  formal contract.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white">Client Responsibilities</h2>
                <p className="mt-3">
                  Clients are expected to provide accurate project requirements,
                  timely feedback, and access to the systems or information
                  needed for implementation, testing, and delivery.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white">Confidentiality and Data</h2>
                <p className="mt-3">
                  We treat shared project information as business-confidential
                  and use it only for delivery, support, and communication
                  related to the engagement. Additional confidentiality terms may
                  be defined in project-specific agreements.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white">Delivery and Support</h2>
                <p className="mt-3">
                  Delivery timelines depend on project scope, technical
                  dependencies, and client responsiveness. Ongoing support,
                  maintenance, and iteration are available where included in the
                  engagement or agreed separately.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white">Contact</h2>
                <p className="mt-3">
                  Questions about these terms can be sent to{" "}
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="font-semibold text-white underline"
                  >
                    {COMPANY.email}
                  </a>
                  . Business identity: {COMPANY.name}, {COMPANY.city},{" "}
                  {COMPANY.country}.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
