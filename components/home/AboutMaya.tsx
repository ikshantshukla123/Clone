import Link from "next/link";
import Button from "../ui/Button";

export default function AboutLilac() {
  return (
    <section className="bg-accent text-text overflow-hidden w-full relative min-h-[600px] sm:min-h-[800px] md:min-h-[900px] lg:min-h-[1000px] py-12 sm:py-16 xl:py-0">
      <div className="max-w-[1820px] mx-auto relative h-full flex flex-col xl:block">


        <div className="xl:hidden order-1 flex justify-center mb-6" data-aos="fade-up" data-aos-duration="1000">
          <div className="w-[280px] h-[400px] sm:w-[340px] sm:h-[500px] rounded-t-[140px] sm:rounded-t-[170px] overflow-hidden relative">
            <img
              src="/home/maya.png"
              className="w-full h-full object-cover"
              alt="Dr. Maya Reynolds, Licensed Clinical Psychologist"
              loading="lazy"
            />
          </div>
        </div>


        <div className="relative xl:absolute left-0 xl:left-[150px] top-0 xl:top-[240px] z-10 max-w-full xl:max-w-[700px] px-4 sm:px-6 md:px-0 order-2" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-6 sm:mb-7 md:mb-8 font-medium leading-tight">
            Hi, I’m Dr. Maya Reynolds, PsyD.
          </h2>

          <p className="font-body text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-10 md:mb-[50px]">
            I’m a licensed clinical psychologist in Santa Monica, California, providing therapy for adults who feel overwhelmed by anxiety, stress, burnout, or the lingering impact of past experiences.
            <span className="block mt-4">
              My work is collaborative and grounded, integrating evidence-based approaches like CBT, EMDR, mindfulness-based practices, and body-oriented techniques—so you can understand what’s happening emotionally and physiologically, and feel more regulated in daily life.
            </span>
          </p>

          <div className="flex justify-center xl:justify-start mb-8 xl:mb-0">
            <Link href="#approach">
              <Button className="w-[180px] sm:w-[250px] h-[44px] sm:h-[50px] text-[11px] sm:text-[12px]">
                Explore my approach →
              </Button>
            </Link>
          </div>
        </div>


        <div className="hidden xl:block absolute left-[1000px] top-[130px] z-0" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">


          <div className="w-[480px] h-[700px] rounded-t-[256px] overflow-hidden relative">
            <img
              src="/home/maya.png"
              className="w-full h-full object-cover"
              alt="Therapy office in Santa Monica"
              loading="lazy"
            />
          </div>


          <div className="absolute bottom-[-100px] -right-[160px] w-[320px] h-[320px] rounded-full overflow-hidden z-20">
            <img
              src="/home/psychology.jpg"
              className="w-full h-full object-cover"
              alt="Therapy office space"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  );
}