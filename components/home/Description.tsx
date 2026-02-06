"use client";
import Link from "next/link";
import Button from "../ui/Button";
import Image from "next/image";

export default function Description() {
  return (
    <section className="w-full flex flex-col xl:grid xl:grid-cols-2">
     
      <div className="relative h-[350px] sm:h-[450px] xl:hidden" data-aos="fade-up" data-aos-duration="1000">
        <Image
          src="/home/session.avif"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Therapist and client in a calm therapy session"
          width={800}         
          height={450}      
          priority={true}      //  Likely LCP on mobile
          quality={85}
          sizes="100vw"        //  Full viewport width on mobile
        />
      </div>

    
      <div className="flex flex-col justify-between bg-accent text-text order-2 xl:order-1 min-h-[600px] xl:min-h-[750px]">
        <div className="flex-1 flex items-center justify-center px-6 sm:px-8 xl:px-12">
          <div className="w-full max-w-2xl">
            <h2 className="font-heading text-3xl sm:text-4xl xl:text-6xl mb-6 xl:mb-8 font-medium text-center xl:text-left">
              Feel steadier—inside and out.
            </h2>
            <div className="font-body text-sm xl:text-xl space-y-4 sm:space-y-6 leading-relaxed text-center xl:text-left">
              <p>
                Many of my clients are high-achieving, thoughtful, and self-aware—yet feel stuck in overthinking, emotionally on edge, or exhausted from carrying so much.
              </p>
              <p>
                Therapy can help you understand what's happening emotionally and in your body, so you can move through anxiety, panic, trauma responses, and burnout with more ease.
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

      {/* Desktop Image */}
      <div className="hidden xl:block relative h-auto min-h-[600px] order-1 xl:order-2" data-aos="fade-up" data-aos-duration="1000">
        <Image
          src="/home/session.avif"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Therapist and client in a calm therapy session"
          width={1200}        
          height={800}         
          priority={true}     
          quality={85}
          sizes="50vw"       
        />
      </div>
    </section>
  );
}