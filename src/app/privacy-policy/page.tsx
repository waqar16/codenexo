import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Container from "@/components/layout/Container";
import { bitter } from "@/fonts/fonts";
import { COMPANY } from "@/constants/company";

const pageTitle = "Privacy Policy";
const pageDescription =
  "Read how CodeNexo handles project inquiries, contact information, and website data.";
const pageUrl = `${COMPANY.website}/privacy-policy`;

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

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="mt-4 text-base leading-relaxed text-gray-300">
              {COMPANY.name} is a software and automation company based in{" "}
              {COMPANY.city}, {COMPANY.country}. This page explains how we use
              information submitted through our website and direct business
              conversations.
            </p>

            <div className="mt-10 space-y-8 text-sm leading-relaxed text-gray-200 sm:text-base">
              <section>
                <h2 className="text-xl font-bold text-white">Information We Collect</h2>
                <p className="mt-3">
                  When you contact us, request a call, or submit a project
                  inquiry, we may collect your name, email address, phone
                  number, company details, budget information, uploaded files,
                  and the message you share with us.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white">How We Use Data</h2>
                <p className="mt-3">
                  We use submitted information to respond to inquiries, assess
                  project fit, prepare proposals, improve communication, and
                  deliver requested services. We may also use trusted service
                  providers to manage contact submissions and business
                  communications.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white">Data Handling</h2>
                <p className="mt-3">
                  We only use information relevant to ongoing business
                  communication and project delivery. We do not sell inquiry
                  data. Access is limited to the team members and tools needed
                  to support the relationship.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white">Website Analytics</h2>
                <p className="mt-3">
                  Our website may use analytics and performance tools to
                  understand traffic, measure conversions, and improve the site
                  experience. These tools help us maintain a reliable business
                  website and better understand service demand.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white">Contact</h2>
                <p className="mt-3">
                  For privacy-related questions, contact{" "}
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
