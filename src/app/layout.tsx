import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { geistMono, geistSans } from "@/fonts/fonts";
import { COMPANY } from "@/constants/company";

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.website),
  title: {
    default: "CodeNexo - AI, Automation & Software Development",
    template: "%s | CodeNexo",
  },
  description:
    "CodeNexo builds AI automation systems, custom software, scraping pipelines, and scalable web applications for growing businesses.",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: COMPANY.website,
  },
  openGraph: {
    type: "website",
    url: COMPANY.website,
    siteName: COMPANY.name,
    title: "CodeNexo - AI, Automation & Software Development",
    description:
      "AI-driven automation, production-ready software, and reliable systems for business operations.",
    images: [COMPANY.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeNexo - AI, Automation & Software Development",
    description:
      "AI-driven automation, production-ready software, and reliable systems for business operations.",
    images: [COMPANY.ogImage],
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
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PRC8MZ58');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: COMPANY.name,
              url: COMPANY.website,
              logo: `${COMPANY.website}/logo.png`,
              email: COMPANY.email,
              telephone: COMPANY.phone,
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "sales",
                  email: COMPANY.email,
                  telephone: COMPANY.phone,
                  availableLanguage: ["English"],
                },
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: COMPANY.city,
                addressCountry: COMPANY.country,
              },
              sameAs: [],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: COMPANY.name,
              url: COMPANY.website,
              potentialAction: {
                "@type": "SearchAction",
                target: `${COMPANY.website}/search?q={search_term}`,
                "query-input": "required name=search_term",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PRC8MZ58"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-60Q27HKQQ4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-60Q27HKQQ4');
          `}
        </Script>
      </body>
    </html>
  );
}
