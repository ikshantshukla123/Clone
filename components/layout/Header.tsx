"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Show header when at top or scrolling up, hide when scrolling down
          if (currentScrollY < 10) {
            setIsVisible(true);
          } else if (currentScrollY < lastScrollY) {
            // Scrolling up
            setIsVisible(true);
          } else if (currentScrollY > lastScrollY && currentScrollY > 70) {
            // Scrolling down and past threshold
            setIsVisible(false);
          }

          setLastScrollY(currentScrollY);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 bg-paper  transition-all duration-300 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
     
      <div className="header-nav-wrapper px-[20px] py-[20px]">

       
        <nav className="flex items-center justify-between max-w-full mx-auto">

     
          <Link
            href="/"
            className="font-heading text-[38px] ml-10 leading-none font-medium      tracking-wide text-ink z-50"
          >
            Lilac Template
          </Link>

       
          <div className="hidden md:flex items-center mr-10  tracking-normal gap-10">
            <Link
              href="/blog"
              className="font-heading text-[22px] tracking-wide text-ink hover:opacity-70 transition-opacity"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="font-heading text-[22px] tracking-wide text-ink hover:opacity-70 transition-opacity"
            >
              Contact
            </Link>
          </div>

          {/* MOBILE BURGER */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-50 flex flex-col justify-center items-center w-8 h-8 gap-1.5 group"
          >
            <span className={`h-[1px] w-6 bg-ink transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`h-[1px] w-6 bg-ink transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`h-[1px] w-6 bg-ink transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>

        </nav>

        {/* MOBILE MENU OVERLAY */}
        <div className={`fixed inset-0 bg-paper flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
          <Link href="/blog" onClick={() => setIsOpen(false)} className="font-heading text-2xl text-ink">Blog</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="font-heading text-2xl text-ink">Contact</Link>
        </div>

      </div>
    </header>
  );
}