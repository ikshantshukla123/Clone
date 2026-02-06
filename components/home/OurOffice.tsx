 import Image from "next/image";
 export default function OurOffice() {
  return (
    <section className="bg-surface px-4 sm:px-6 py-16 sm:py-20 md:py-24 border-t border-border">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
       
        <div data-aos="fade-up" data-aos-duration="800">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 text-primary">
            A calm space for therapy in Santa Monica
          </h2>
          <p className="font-body text-sm sm:text-base md:text-lg leading-relaxed text-text/80 mb-5">
            My office is a quiet, private space in Santa Monica designed to feel grounded rather than clinical—
            with natural light, comfortable seating, and an uncluttered environment so your nervous system can
            begin to settle as soon as you arrive.
          </p>
          <p className="font-body text-sm sm:text-base md:text-lg leading-relaxed text-text/80 mb-5">
            I offer in-person sessions at:
          </p>
          <p className="font-body text-sm sm:text-base md:text-lg leading-relaxed text-text/90 mb-5">
            <span className="font-semibold">123th Street 45 W</span>
            <br />
            Santa Monica, CA 90401
          </p>
          <p className="font-body text-sm sm:text-base md:text-lg leading-relaxed text-text/75">
            For clients elsewhere in California, I also provide secure telehealth sessions so you can access care
            from a space that feels comfortable to you—while still knowing there is a consistent, grounded office
            home base for our work together.
          </p>
        </div>

        {/* Images column */}
        <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6" data-aos="fade-up" data-aos-delay="120" data-aos-duration="800">
          <div className="col-span-2 sm:col-span-1 h-[220px] sm:h-[260px] md:h-[280px] rounded-3xl overflow-hidden shadow-sm">
            <Image
              src="/home/office1.jpeg"
              alt="Therapy office space in Santa Monica"
              className="w-full h-full object-cover"
              width={800}
              height={600}
              priority={false}
              quality={85}    
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 400px"
            />
          </div>
          <div className="col-span-2 sm:col-span-1 h-[220px] sm:h-[260px] md:h-[280px] rounded-3xl overflow-hidden shadow-sm">
            <Image
              src="/home/office2.jpeg"
              alt="Calm, light-filled counseling room"
              className="w-full h-full object-cover"
              width={800}
              height={600}
              priority={false} 
               quality={85}    
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 400px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

