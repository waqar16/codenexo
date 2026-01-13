import type { Metadata } from "next";
import Script from "next/script";
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
          // Organization Schema
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "CodeNexo",
              url: "https://codenexo.tech",
              logo: "https://codenexo.tech/logo.png",
              sameAs: [],
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
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PRC8MZ58"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* <SplashCursor/> */}

        {children}

        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
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
