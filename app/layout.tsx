import "./globals.css";
import { headingFont, bodyFont } from "./fonts";
import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/layout/Header";
import ScrollAnimationProvider from "@/components/ui/ScrollAnimationProvider";

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapy in Santa Monica, CA",
  description:
    "Dr. Maya Reynolds, PsyD is a licensed clinical psychologist in Santa Monica, California, offering therapy for anxiety, panic, trauma (EMDR), and burnout. In-person sessions in Santa Monica and secure telehealth across California.",
  openGraph: {
    title: "Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapy in Santa Monica, CA",
    description:
      "Therapy for adults navigating anxiety, panic, trauma (EMDR), burnout, and perfectionism with Dr. Maya Reynolds, PsyD in Santa Monica, California. In-person and telehealth across California.",
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Dr. Maya Reynolds, PsyD",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable} font-body bg-background text-text antialiased`}>
        <ScrollAnimationProvider>
          <Header />
          <main id="page">
            {children}
          </main>
        </ScrollAnimationProvider>
        <Script
          id="ld-json-maya-reynolds"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "Psychologist",
              name: "Dr. Maya Reynolds, PsyD",
              description:
                "Licensed clinical psychologist in Santa Monica, California, offering therapy for adults experiencing anxiety, panic, trauma, burnout, and perfectionism.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123th Street 45 W",
                addressLocality: "Santa Monica",
                addressRegion: "CA",
                postalCode: "90401",
                addressCountry: "US",
              },
              areaServed: "California",
              url: "/",
              image: "/home/maya.png",
              sameAs: [],
              availableService: [
                "Anxiety therapy",
                "Trauma therapy (EMDR)",
                "Panic treatment",
                "Burnout and perfectionism support",
              ],
            },
            null,
            2
          )}
        </Script>
      </body>
    </html>
  );
}