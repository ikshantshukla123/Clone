export default function AboutLilac() {
  return (
    <section className="bg-[#E5E0DA] text-[#223614] overflow-hidden w-full relative min-h-[1000px]">
      <div className="max-w-[1820px] mx-auto relative h-full">

        {/* LEFT: Text */}
        <div className="absolute left-[150px] top-[340px] z-10 max-w-[600px]">
          <h2 className="font-heading text-5xl md:text-7xl mb-8 font-medium leading-tight">Hi, I'm Lilac.</h2>

          <p className="font-body text-base md:text-lg leading-relaxed mb-[172px] max-w-[700px]">
            I’m committed to providing a safe and supportive environment where we can explore your thoughts, feelings, and behaviors. With empathy and guidance, we'll work together to navigate the challenges life throws your way.
          </p>

          <div>
            <a
              href="#"
              className="inline-flex items-center justify-center border border-[#223614] w-[140px] h-[40px] text-[11px] font-bold uppercase tracking-[0.2em] text-[#223614] transition-all duration-300 hover:bg-[#223614] hover:text-[#E5E0DA]"
            >
              LET'S CHAT →
            </a>
          </div>
        </div>

        {/* RIGHT: Images */}
        <div className="absolute left-[1000px] top-[130px] z-0">

          {/* Main Arched Window Image */}
          <div className="w-[480px] h-[700px] rounded-t-[256px] overflow-hidden relative">
            <img
              src="/home/newwight.webp"
              className="w-full h-full object-cover"
              alt="Woman with flowers"
            />
          </div>

          {/* Circular Overlay Image */}
          <div className="absolute bottom-[-100px] -right-[160px] w-[320px] h-[320px] rounded-full overflow-hidden   z-20">
            <img
              src="/home/newnine.webp"
              className="w-full h-full object-cover"
              alt="White flowers"
            />
          </div>
        </div>

      </div>
    </section>
  );
}