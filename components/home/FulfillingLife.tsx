"use client";

export default function FulfillingLife() {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2">

      {/* LEFT: Text Content */}
      <div className="flex flex-col justify-between" style={{ backgroundColor: '#e5e0da', color: '#213614' }}>
        <div className="px-8 md:px-20 pt-60 md:pt-80 pb-24">
          <h2 className="font-heading text-4xl md:text-6xl mb-8 font-medium">
            Live a fulfilling life.
          </h2>

          <div className="font-body text-sm md:text-base space-y-6 leading-relaxed max-w-md">
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
            className="group flex items-center justify-center w-full text-xs font-bold uppercase tracking-[0.2em] border-t transition-all h-[15px] py-8"
            style={{
              color: '#213614',
              borderColor: '#213614',
              backgroundColor: 'transparent'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#213614';
              e.currentTarget.style.color = '#e5e0da';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#213614';
            }}
          >
            Get In Touch →
          </a>
        </div>
      </div>

      {/* RIGHT: Image (Full Bleed) */}
      <div className="relative h-[400px] md:h-auto min-h-[600px]">
        <img
          src="/home/newtwo.webp"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

    </section>
  );
}