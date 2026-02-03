import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full">

      {/* --- TOP SECTION: MAIN INFO --- */}
      {/* Background: Paper/White (#FBF6F1) */}
      <div className="bg-paper px-4 sm:px-6 pt-12 sm:pt-14 md:pt-16 pb-16 sm:pb-24 md:pb-32 lg:pb-44 text-[#223614]">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between gap-8 sm:gap-10 md:gap-12">

          {/* LEFT SIDE: Contact Info */}
          <div className="flex flex-col items-start">
            <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 sm:mb-7 md:mb-8">
              Lilac Template
            </h3>

            <div className="font-heading text-base sm:text-lg md:text-xl leading-6 sm:leading-7 mb-6 sm:mb-7 md:mb-8">
              <p>123 Example Road</p>
              <p>Minneapolis, MN</p>
            </div>

            <div className="font-heading text-base sm:text-lg md:text-xl leading-6 sm:leading-7">
              <p className="underline decoration-1 underline-offset-4 cursor-pointer hover:no-underline active:opacity-70 min-h-[44px] flex items-center">
                email@example.com
              </p>
              <p className="underline decoration-1 underline-offset-4 cursor-pointer hover:no-underline active:opacity-70 min-h-[44px] flex items-center">
                (555) 555-5555
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: Hours & Find */}
          <div className="flex flex-col sm:flex-row md:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-[300px]">

            {/* Hours */}
            <div className="flex flex-col items-start text-left">
              <h4 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-5 md:mb-6">Hours</h4>
              <div className="font-heading text-base sm:text-lg md:text-xl leading-6 sm:leading-7">
                <p>Monday – Friday</p>
                <p>10am – 6pm</p>
              </div>
            </div>

            {/* Find */}
            <div className="flex flex-col items-start md:items-end text-left md:text-right">
              <h4 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-5 md:mb-6">Find</h4>
              <nav className="flex flex-col gap-2 sm:gap-3 md:gap-2 font-heading text-base sm:text-lg md:text-xl underline decoration-1 underline-offset-4">
                <Link href="/" className="hover:no-underline active:opacity-70 min-h-[44px] flex items-center">Home</Link>
                <Link href="/contact" className="hover:no-underline active:opacity-70 min-h-[44px] flex items-center">Contact</Link>
                <Link href="/blog" className="hover:no-underline active:opacity-70 min-h-[44px] flex items-center">Blog</Link>
              </nav>
            </div>

          </div>

        </div>
      </div>


      {/* --- BOTTOM SECTION: COPYRIGHT & LEGAL --- */}
      {/* Background: Beige (#E5E0DA) matches 'Professional Background' section */}
      <div className="bg-[#E5E0DA] px-4 sm:px-6 py-12 sm:py-14 md:py-16 text-[#223614] text-center">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-4 sm:gap-5 md:gap-6">

          {/* Legal Links */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-y-3 sm:gap-y-2 gap-x-4 sm:gap-x-6 font-heading text-sm sm:text-base underline decoration-1 underline-offset-4">
            <Link href="#" className="hover:no-underline active:opacity-70 min-h-[44px] flex items-center justify-center">Privacy & Cookies Policy</Link>
            <Link href="#" className="hover:no-underline active:opacity-70 min-h-[44px] flex items-center justify-center">Good Faith Estimate</Link>
            <Link href="#" className="hover:no-underline active:opacity-70 min-h-[44px] flex items-center justify-center">Website Terms & Conditions</Link>
            <Link href="#" className="hover:no-underline active:opacity-70 min-h-[44px] flex items-center justify-center">Disclaimer</Link>
          </div>

          {/* Credits */}
          <div className="font-heading text-sm sm:text-base">
            Website Template Credits: <a href="#" className="underline decoration-1 underline-offset-4 hover:no-underline active:opacity-70">Go Bloom Creative</a>
          </div>

          {/* Copyright */}
          <div className="font-heading text-sm sm:text-base mt-4 sm:mt-6 md:mt-10">
            All Rights Reserved © 2024 Your Business Name Here, LLC.
          </div>

        </div>
      </div>

    </footer>
  );
}