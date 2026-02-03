import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="min-h-screen w-full relative overflow-hidden bg-[#fbf6f1] pt-20 md:pt-24 lg:pt-[140px]">

      <div className="w-full max-w-[1600px] mx-auto flex flex-col lg:grid lg:grid-cols-12 lg:gap-12 items-center lg:items-start px-4 sm:px-6 lg:px-4">

      
        <div className="w-full lg:col-span-5 flex justify-center lg:justify-start lg:pl-[26px] mb-8 lg:mb-0" data-aos="fade-up" data-aos-duration="1000">

          <div className="relative w-[300px] h-[440px] sm:w-[360px] sm:h-[530px] lg:w-[640px] lg:h-[900px] rounded-t-[150px] sm:rounded-t-[180px] lg:rounded-t-[322.5px] overflow-hidden shadow-sm flex-shrink-0">
            <img
              src="/home/newone.webp"
              alt="Woman holding lilacs"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
          </div>
        </div>



        <div className="w-full lg:col-span-7 flex flex-col items-center text-center lg:mt-[190px] px-4 sm:px-6 lg:px-0" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">

          <div className="flex flex-col items-center max-w-2xl">

            <h1 className="font-heading font-medium text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-[95px] leading-tight lg:leading-[1.05] tracking-tight lg:-tracking-[0.03em] text-center text-[#223614]" style={{ wordSpacing: '0.05em' }}>
              Live your life
              <br />
              in full bloom
            </h1>

            <p className="font-sans text-sm sm:text-base md:text-lg mt-4 sm:mt-6 lg:mt-[32px] tracking-normal text-center text-[#223614] max-w-md lg:max-w-none" style={{ wordSpacing: '0.1em' }}>
              Therapy for Adults in Minneapolis, MN.
            </p>

            <div className="mt-6 sm:mt-8 lg:mt-[50px]">
              <Button className="px-5 sm:px-6 md:px-[20px] py-3 md:py-[14px] text-[11px] sm:text-[12px]">
                CONNECT WITH ME →
              </Button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}