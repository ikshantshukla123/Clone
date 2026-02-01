export default function AboutLilac() {
  return (
    <section className="bg-paper py-24 px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT: Text */}
        <div>
          <h2 className="font-heading text-4xl md:text-6xl mb-8 font-medium">Hi, I’m Lilac.</h2>
          <p className="font-body text-sm leading-7 mb-10 max-w-md">
            I’m committed to providing a safe and supportive environment where we can explore your thoughts, feelings, and behaviors. With empathy and guidance, we'll work together to navigate the challenges life throws your way.
          </p>
          <button className="border border-ink px-8 py-3 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-ink hover:text-white transition-all">
            Let's Chat &rarr;
          </button>
        </div>

        {/* RIGHT: Arch Image Composition */}
        <div className="relative flex justify-center md:justify-end">
          {/* Main Arch */}
          <div className="w-[350px] h-[525px] rounded-t-[175px] overflow-hidden relative z-10">
             <img src="/home/newwight.webp" className="w-full h-full object-cover" alt="Woman with flowers" />
          </div>

          {/* Circle Overlay */}
          <div className="absolute -bottom-10 -right-10 md:-right-20 w-[200px] h-[200px] rounded-full overflow-hidden border-4 border-paper z-20">
             <img src="/home/newnine.webp" className="w-full h-full object-cover" alt="White flowers" />
          </div>
        </div>

      </div>
    </section>
  );
}