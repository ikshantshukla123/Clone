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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/70 border-b border-border transition-all duration-300 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="header-nav-wrapper px-4 md:px-[20px] py-4 md:py-[20px]">
          <nav className="flex items-center justify-between max-w-full mx-auto">

            {/* MOBILE BURGER - LEFT SIDE - TWO LINES */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden z-50 flex flex-col justify-center items-center w-11 h-11 gap-2 group ml-1"
              aria-label="Toggle menu"
            >
              <span className={`h-[2px] w-6 bg-text transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1" : ""}`} />
              <span className={`h-[2px] w-6 bg-text transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-1" : ""}`} />
            </button>

            {/* LOGO/HEADING - LEFT ON DESKTOP, RIGHT ON MOBILE */}
            <Link
              href="/"
              className="font-heading text-2xl sm:text-3xl md:text-[38px] leading-none font-medium tracking-wide text-primary z-50 mr-1 md:mr-0 md:ml-10 order-2 md:order-1"
            >
              Dr. Maya Reynolds, PsyD
            </Link>

            {/* DESKTOP NAVIGATION - RIGHT SIDE */}
            <div className="hidden md:flex items-center gap-10 mr-10 order-1 md:order-2">
              <Link
                href="/blog"
                className="font-heading text-[22px] tracking-wide text-primary hover:text-secondary transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="font-heading text-[22px] tracking-wide text-primary hover:text-secondary transition-colors"
              >
                Contact
              </Link>
            </div>

          </nav>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY - FULL SCREEN */}
      <div className={`fixed inset-0 bg-background z-60 md:hidden transition-opacity duration-500 ease-in-out ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
        
        {/* Top Bar with X and Logo */}
        <div className="fixed top-0 left-0 w-full px-4 py-4 flex items-center justify-between">
          {/* X Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="flex flex-col justify-center items-center w-11 h-11 ml-1"
            aria-label="Close menu"
          >
            <span className="h-[2px] w-6 bg-text rotate-45 translate-y-px" />
            <span className="h-[2px] w-6 bg-text -rotate-45 -translate-y-px" />
          </button>

          {/* Logo */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="font-heading text-2xl sm:text-3xl leading-none font-medium tracking-wide text-primary mr-1"
          >
            Dr. Maya Reynolds, PsyD
          </Link>
        </div>

        {/* Menu Links - Centered */}
        <div className="flex flex-col items-center justify-center h-full gap-12 sm:gap-16">
          <Link
            href="/blog"
            onClick={() => setIsOpen(false)}
            className="font-heading text-5xl sm:text-6xl text-primary hover:text-secondary transition-colors active:opacity-70"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="font-heading text-5xl sm:text-6xl text-primary hover:text-secondary transition-colors active:opacity-70"
          >
            Contact
          </Link>
        </div>

      </div>
    </>
  );
}