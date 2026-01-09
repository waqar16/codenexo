import type { Metadata } from "next"; 
import "./globals.css";
import SplashCursor from "@/components/SplashCursor";
import { geistMono, geistSans } from "@/fonts/fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://codenexo.tech"),
  title: {
    default: "CodeNexo – AI, Automation & Software Development",
    template: "%s | CodeNexo",
  },
  description:
    "CodeNexo builds AI automations, Next.js web apps, custom software and smart IoT systems for startups and growing businesses.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://codenexo.tech",
    title: "CodeNexo – AI, Automation & Software Development",
    description:
      "AI-driven automation, high-performance web apps, and custom software solutions.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeNexo – AI, Automation & Software Development",
    description:
      "AI-driven automation, high-performance web apps, and custom software solutions.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          // Organization Schema
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "CodeNexo",
              url: "https://codenexo.tech",
              logo: "https://codenexo.tech/logo.png",
              sameAs: [
                "https://github.com/yourgithub",
                "https://linkedin.com/company/yourcompany",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          // Website Schema
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "CodeNexo",
              url: "https://codenexo.tech",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://codenexo.tech/search?q={search_term}",
                "query-input": "required name=search_term",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <SplashCursor/> */}
        
        {children}
      </body>
    </html>
  );
}
