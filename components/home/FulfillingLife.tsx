"use client";
import Link from "next/link";
import Button from "../ui/Button";

export default function FulfillingLife() {
  return (
    <section className="w-full flex flex-col md:grid md:grid-cols-2">

    
      <div className="relative h-[350px] sm:h-[450px] md:hidden" data-aos="fade-up" data-aos-duration="1000">
        <img
          src="/home/session.avif"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Therapy session"
        />
      </div>

      
      <div className="flex flex-col justify-between bg-accent text-text order-2 md:order-1 min-h-[600px] md:min-h-[750px]">
       
        <div className="flex-1 flex items-center justify-center px-6 sm:px-8 md:px-12">
          <div className="w-full max-w-2xl">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl mb-6 md:mb-8 font-medium text-center md:text-left">
              Feel steadier—inside and out.
            </h2>

            <div className="font-body text-sm md:text-xl space-y-4 sm:space-y-6 leading-relaxed text-center md:text-left">
              <p>
                Many of my clients are high-achieving, thoughtful, and self-aware—yet feel stuck in overthinking, emotionally on edge, or exhausted from carrying so much.
              </p>
              <p>
                Therapy can help you understand what’s happening emotionally and in your body, so you can move through anxiety, panic, trauma responses, and burnout with more ease.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full">
          <Link href="/contact">
            <Button className="w-full text-xs border-0! border-t! border-primary! h-[50px] py-8 rounded-none">
              Schedule a consultation →
            </Button>
          </Link>
        </div>
      </div>

   
      <div className="hidden md:block relative h-auto min-h-[600px] order-1 md:order-2" data-aos="fade-up" data-aos-duration="1000">
        <img
          src="/home/session.avif"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Therapy session"
        />
      </div>

    </section>
  );
}