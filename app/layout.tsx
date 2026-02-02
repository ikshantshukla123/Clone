import "./globals.css";
import { Outfit, Libre_Baskerville } from "next/font/google";
import Header from "@/components/layout/Header";

// Outfit matches the geometric sans-serif of the "Lilac Template"
const headingFont = Outfit({ 
  subsets: ["latin"],
  variable: "--font-heading",
 weight: ["300", "400", "500", "600"],
});

// Libre Baskerville matches the "Therapy for Adults" serif text
const bodyFont = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable} font-heading bg-paper text-ink antialiased`}>
        <Header />
        <main id="page">
            {children}
        </main>
      </body>
    </html>
  );
}