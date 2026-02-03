import Button from "../ui/Button";

export default function AboutLilac() {
  return (
    <section className="bg-[#E5E0DA] text-[#223614] overflow-hidden w-full relative min-h-[1000px]">
      <div className="max-w-[1820px] mx-auto relative h-full">

        {/* LEFT: Text */}
        <div className="absolute left-[150px] top-[340px] z-10 max-w-[700px]">
          <h2 className="font-heading text-5xl md:text-7xl mb-8 font-medium leading-tight">Hi, I'm Lilac.</h2>

          <p className="font-body text-base md:text-xl leading-relaxed mb-[150px]">
            I'm committed to providing a safe and supportive environment where we can explore your thoughts, feelings, and behaviors. With empathy and guidance, we'll work together to navigate the challenges life throws your way.
          </p>

          <div className="flex justify-center">
            <Button className="w-[145px] h-[50px] text-[12px]">
              LET'S CHAT →
            </Button>
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