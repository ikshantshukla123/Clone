import Button from "../ui/Button";

export default function AboutLilac() {
  return (
    <section className="bg-[#E5E0DA] text-[#223614] overflow-hidden w-full relative min-h-[600px] sm:min-h-[800px] md:min-h-[900px] lg:min-h-[1000px] py-12 sm:py-16 md:py-0">
      <div className="max-w-[1820px] mx-auto relative h-full flex flex-col md:block">

        {/* Mobile Image - Shows first on mobile */}
        <div className="md:hidden order-1 flex justify-center mb-6">
          <div className="w-[280px] h-[400px] sm:w-[340px] sm:h-[500px] rounded-t-[140px] sm:rounded-t-[170px] overflow-hidden relative">
            <img
              src="/home/newwight.webp"
              className="w-full h-full object-cover"
              alt="Woman with flowers"
              loading="lazy"
            />
          </div>
        </div>

        {/* Text - Shows second on mobile */}
        <div className="relative md:absolute left-0 md:left-[80px] lg:left-[150px] top-0 md:top-[280px] lg:top-[340px] z-10 max-w-full md:max-w-[600px] lg:max-w-[700px] px-4 sm:px-6 md:px-0 order-2">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-6 sm:mb-7 md:mb-8 font-medium leading-tight">Hi, I'm Lilac.</h2>

          <p className="font-body text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-10 md:mb-[50px]">
            I'm committed to providing a safe and supportive environment where we can explore your thoughts, feelings, and behaviors. With empathy and guidance, we'll work together to navigate the challenges life throws your way.
          </p>

          <div className="flex justify-center md:justify-center mb-8 md:mb-0">
            <Button className="w-[140px] sm:w-[145px] h-[44px] sm:h-[50px] text-[11px] sm:text-[12px]">
              LET'S CHAT →
            </Button>
          </div>
        </div>

        {/* RIGHT: Images - Desktop only */}
        <div className="hidden md:block absolute left-[1000px] top-[130px] z-0">

          {/* Main Arched Window Image */}
          <div className="w-[480px] h-[700px] rounded-t-[256px] overflow-hidden relative">
            <img
              src="/home/newwight.webp"
              className="w-full h-full object-cover"
              alt="Woman with flowers"
              loading="lazy"
            />
          </div>

          {/* Circular Overlay Image */}
          <div className="absolute bottom-[-100px] -right-[160px] w-[320px] h-[320px] rounded-full overflow-hidden z-20">
            <img
              src="/home/newnine.webp"
              className="w-full h-full object-cover"
              alt="White flowers"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  );
}