"use client";

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
      <div className="flex flex-col justify-between bg-[#e5e0da] text-[#213614] order-2 md:order-1">
        <div className="px-6 sm:px-8 md:px-20 pt-12 sm:pt-16 md:pt-[335px] pb-8 sm:pb-12 md:pb-[111px]">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl mb-6 md:mb-8 font-medium text-center md:text-left">
            Live a fulfilling life.
          </h2>

          <div className="font-body text-sm md:text-base space-y-4 sm:space-y-6 leading-relaxed max-w-md mx-auto md:mx-0 text-center md:text-left">
            <p>
              Life can be challenging—especially when you're trying to balance your personal and professional life.
            </p>
            <p>
              It's easy to feel like you're alone in facing these challenges, but I want you to know that I'm here to help.
            </p>
          </div>
        </div>

        <div className="w-full">
          <a
            href="#"
            className="group flex items-center justify-center w-full text-xs font-bold uppercase tracking-[0.2em] border-t border-[#213614] h-[50px] py-8 bg-transparent text-[#213614] hover:bg-[#213614] hover:text-[#e5e0da] transition-all duration-300 ease-in-out"
          >
            Get In Touch →
          </a>
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