import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full">

      {/* --- TOP SECTION: MAIN INFO --- */}

      <div className="bg-surface border-t border-border px-4 sm:px-6 pt-12 sm:pt-14 md:pt-16 pb-16 sm:pb-24 md:pb-32 lg:pb-44 text-text">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between gap-8 sm:gap-10 md:gap-12">


          <div className="flex flex-col items-center md:items-start" data-aos="fade-up" data-aos-duration="800">
            <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 sm:mb-7 md:mb-8 text-center md:text-left">
              Dr. Maya Reynolds, PsyD
            </h3>

            <div className="font-heading text-base sm:text-lg md:text-xl leading-6 sm:leading-7 mb-6 sm:mb-7 md:mb-8 text-center md:text-left">
              <p>123th Street 45 W</p>
              <p>Santa Monica, CA 90401</p>
            </div>

            <div className="font-heading text-base sm:text-lg md:text-xl leading-6 sm:leading-7 text-center md:text-left">
              <Link
                href="/contact"
                className="underline decoration-1 underline-offset-4 hover:no-underline active:opacity-70 min-h-[44px] flex items-center justify-center md:justify-start"
              >
                Request a consultation
              </Link>
            </div>
          </div>


          <div className="flex flex-col sm:flex-row md:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-[300px]">


            <div className="flex flex-col items-center sm:items-start text-center sm:text-left" data-aos="fade-up" data-aos-delay="150" data-aos-duration="800">
              <h4 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-5 md:mb-6">Hours</h4>
              <div className="font-heading text-base sm:text-lg md:text-xl leading-6 sm:leading-7">
                <p>By appointment</p>
                <p>In-person + telehealth</p>
              </div>
            </div>


            <div className="flex flex-col items-center sm:items-start md:items-end text-center sm:text-left md:text-right" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
              <h4 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-5 md:mb-6">Find</h4>
              <nav className="flex flex-col gap-2 sm:gap-3 md:gap-2 font-heading text-base sm:text-lg md:text-xl underline decoration-1 underline-offset-4">
                <Link href="/" className="hover:no-underline active:opacity-70 min-h-[44px] flex items-center justify-center sm:justify-start md:justify-end">Home</Link>
                <Link href="/contact" className="hover:no-underline active:opacity-70 min-h-[44px] flex items-center justify-center sm:justify-start md:justify-end">Contact</Link>
                <Link href="/blog" className="hover:no-underline active:opacity-70 min-h-[44px] flex items-center justify-center sm:justify-start md:justify-end">Blog</Link>
              </nav>
            </div>

          </div>

        </div>
      </div>



      <div className="bg-accent px-4 sm:px-6 py-12 sm:py-14 md:py-16 text-text text-center">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-4 sm:gap-5 md:gap-6">

          {/* Legal Links */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-y-3 sm:gap-y-2 gap-x-4 sm:gap-x-6 font-heading text-sm sm:text-base underline decoration-1 underline-offset-4" data-aos="fade-up" data-aos-duration="800">
            <Link href="#" className="hover:no-underline active:opacity-70 min-h-[44px] flex items-center justify-center">Privacy & Cookies Policy</Link>
            <Link href="#" className="hover:no-underline active:opacity-70 min-h-[44px] flex items-center justify-center">Good Faith Estimate</Link>
            <Link href="#" className="hover:no-underline active:opacity-70 min-h-[44px] flex items-center justify-center">Website Terms & Conditions</Link>
            <Link href="#" className="hover:no-underline active:opacity-70 min-h-[44px] flex items-center justify-center">Disclaimer</Link>
          </div>

          {/* Credits */}
          <div className="font-heading text-sm sm:text-base" data-aos="fade-up" data-aos-delay="150" data-aos-duration="800">
            Website Template Credits: <a href="#" className="underline decoration-1 underline-offset-4 hover:no-underline active:opacity-70">Go Bloom Creative</a>
          </div>

          {/* Copyright */}
          <div className="font-heading text-sm sm:text-base mt-4 sm:mt-6 md:mt-10" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
            All Rights Reserved © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD
          </div>

        </div>
      </div>

    </footer>
  );
}