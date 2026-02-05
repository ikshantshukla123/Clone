import Link from "next/link";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="min-h-screen w-full relative overflow-hidden bg-background pt-20 md:pt-24 lg:pt-[140px]">

      <div className="w-full max-w-[1600px] mx-auto flex flex-col lg:grid lg:grid-cols-12 lg:gap-12 items-center lg:items-start px-4 sm:px-6 lg:px-4">


        <div className="w-full lg:col-span-5 flex justify-center lg:justify-start lg:pl-[25px] mb-8 lg:mb-0" data-aos="fade-up" data-aos-duration="1000">

          <div className="relative w-[240px] h-[360px] sm:w-[300px] sm:h-[450px] md:w-[360px] md:h-[530px] lg:w-[600px] lg:h-[900px] rounded-t-[120px] sm:rounded-t-[150px] md:rounded-t-[180px] lg:rounded-t-[300px] overflow-hidden shadow-sm shrink-0">
            <img
              src="/home/maya.png"
              alt="Dr. Maya Reynolds, Licensed Clinical Psychologist"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
          </div>
        </div>



        <div className="w-full lg:col-span-7 flex flex-col items-center text-center lg:mt-[190px] px-4 sm:px-6 lg:px-0" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">

          <div className="flex flex-col items-center max-w-2xl">

            <h1 className="font-heading font-medium text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[95px] leading-tight lg:leading-[1.05] tracking-tight lg:-tracking-[0.03em] text-center text-primary" style={{ wordSpacing: '0.05em' }}>
              Anxiety & trauma therapy
              <br />
              in Santa Monica, CA
            </h1>

            <p className="font-body text-sm sm:text-base md:text-lg mt-4 sm:mt-6 lg:mt-[32px] tracking-normal text-center text-text/90 max-w-md lg:max-w-none" style={{ wordSpacing: '0.1em' }}>
              Dr. Maya Reynolds, PsyD — licensed clinical psychologist for high-achieving adults navigating anxiety, panic, trauma, and burnout.
              <span className="block mt-2 text-text/70">In-person in Santa Monica + secure telehealth across California.</span>
            </p>

            <div className="mt-6 sm:mt-8 lg:mt-[50px]">
              <Link href="/contact">
                <Button className="px-5 sm:px-7 md:px-[22px] py-3 md:py-[12px] text-[11px] sm:text-[12px]">
                  Free 15-minute consult →
                </Button>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}