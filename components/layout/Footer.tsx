import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full">
      
      {/* --- TOP SECTION: MAIN INFO --- */}
      {/* Background: Paper/White (#FBF6F1) */}
      <div className="bg-paper px-6 py-20 md:py-24 text-[#223614]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Column 1: Contact Info (Spans 6 cols) */}
          <div className="md:col-span-6 flex flex-col items-start">
            <h3 className="font-heading text-3xl md:text-4xl font-semibold mb-8">
              Lilac Template
            </h3>
            
            <div className="font-heading text-sm leading-7 mb-8">
              <p>123 Example Road</p>
              <p>Minneapolis, MN</p>
            </div>

            <div className="font-heading text-sm leading-7">
              <p className="underline decoration-1 underline-offset-4 cursor-pointer hover:no-underline">
                email@example.com
              </p>
              <p className="underline decoration-1 underline-offset-4 cursor-pointer hover:no-underline">
                (555) 555-5555
              </p>
            </div>
          </div>

          {/* Column 2: Hours (Spans 3 cols) */}
          <div className="md:col-span-3">
            <h4 className="font-heading text-3xl font-semibold mb-6">Hours</h4>
            <div className="font-heading text-base leading-7">
              <p>Monday – Friday</p>
              <p>10am – 6pm</p>
            </div>
          </div>

          {/* Column 3: Find / Nav (Spans 3 cols) */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end text-left md:text-right">
            <h4 className="font-heading text-3xl font-semibold mb-6">Find</h4>
            <nav className="flex flex-col gap-2 font-heading text-base underline decoration-1 underline-offset-4">
              <Link href="/" className="hover:no-underline">Home</Link>
              <Link href="/contact" className="hover:no-underline">Contact</Link>
              <Link href="/blog" className="hover:no-underline">Blog</Link>
            </nav>
          </div>

        </div>
      </div>


      {/* --- BOTTOM SECTION: COPYRIGHT & LEGAL --- */}
      {/* Background: Beige (#E5E0DA) matches 'Professional Background' section */}
      <div className="bg-[#E5E0DA] px-6 py-16 text-[#223614] text-center">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-6">
          
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-heading text-sm underline decoration-1 underline-offset-4">
            <Link href="#" className="hover:no-underline">Privacy & Cookies Policy</Link>
            <Link href="#" className="hover:no-underline">Good Faith Estimate</Link>
            <Link href="#" className="hover:no-underline">Website Terms & Conditions</Link>
            <Link href="#" className="hover:no-underline">Disclaimer</Link>
          </div>

          {/* Credits */}
          <div className="font-heading text-sm">
            Website Template Credits: <a href="#" className="underline decoration-1 underline-offset-4 hover:no-underline">Go Bloom Creative</a>
          </div>

          {/* Copyright */}
          <div className="font-heading text-sm mt-4">
            All Rights Reserved © 2024 Your Business Name Here, LLC.
          </div>

        </div>
      </div>

    </footer>
  );
}