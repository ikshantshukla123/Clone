"use client";
import Button from "../ui/Button";

export default function FulfillingLife() {
  return (
    <section className="w-full flex flex-col md:grid md:grid-cols-2">

      {/* Image First on Mobile */}
      <div className="relative h-[350px] sm:h-[450px] md:hidden">
        <img
          src="/home/newtwo.webp"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-between bg-[#e5e0da] text-[#213614] order-2 md:order-1 min-h-[600px] md:min-h-[750px]">
        {/* Centered content wrapper */}
        <div className="flex-1 flex items-center justify-center px-6 sm:px-8 md:px-12">
          <div className="w-full max-w-2xl">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl mb-6 md:mb-8 font-medium text-center md:text-left">
              Live a fulfilling life.
            </h2>

            <div className="font-body text-sm md:text-xl space-y-4 sm:space-y-6 leading-relaxed text-center md:text-left">
              <p>
                Life can be challenging—especially when you're trying to balance your personal and professional life.
              </p>
              <p>
                It's easy to feel like you're alone in facing these challenges, but I want you to know that I'm here to help.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full">
          <Button className="w-full text-xs border-0 border-t border-[#213614] h-[50px] py-8 hover:text-[#e5e0da] rounded-none">
            Get In Touch →
          </Button>
        </div>
      </div>

      {/* Image (Desktop Only) */}
      <div className="hidden md:block relative h-auto min-h-[600px] order-1 md:order-2">
        <img
          src="/home/newtwo.webp"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

    </section>
  );
}