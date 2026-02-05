import Link from "next/link";
import Button from "../ui/Button";

export default function GetStarted() {
  return (
    
    <section className="bg-primary py-32 px-6 text-white text-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto flex flex-col items-center">

      
        <h2 className="font-heading  text-3xl md:text-5xl font-semibold mb-8" data-aos="fade-up" data-aos-duration="800">
          Start feeling more like yourself.
        </h2>

 
        <div className="font-heading  text-sm md:text-xl leading-8 mb-16 space-y-1 max-w-2xl" data-aos="fade-up" data-aos-delay="150" data-aos-duration="800">
          <p>
            If you’re ready for support that’s practical, grounded, and paced with care, I’d love to help.
          </p>
          <p>
            Reach out to schedule a brief consultation for in-person therapy in Santa Monica or telehealth across California.
          </p>
        </div>

       
        <Link href="/contact">
          <Button
            variant="inverse"
            className="px-7 py-4 text-[12px]"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="800"
          >
            Book a consultation &rarr;
          </Button>
        </Link>

      </div>
    </section>
  );
}