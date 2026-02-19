"use client";

import dynamic from "next/dynamic";

const ContactUsSection = dynamic(
  () => import("@/components/ContactUsSection/ContactUsSection"),
  { ssr: false }
);

export default function HomeContactUsSection() {
  return <ContactUsSection />;
}
