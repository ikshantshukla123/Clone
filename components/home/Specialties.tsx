const specialties = [
  {
    title: "Anxiety & panic",
    desc: "For high-functioning adults who feel “fine” on the outside but live with constant worry, tension, overthinking, and panic symptoms.",
    img: "/home/sunlight.jpg"
  },
  {
    title: "Trauma therapy (EMDR)",
    desc: "Carefully paced trauma work with an emphasis on safety, stabilization, and feeling more regulated in daily life—not just in session.",
    img: "/home/kamal.avif"
  },
  {
    title: "Burnout & perfectionism",
    desc: "Support for entrepreneurs, creatives, and professionals carrying relentless pressure—so you can slow down, reconnect, and sustain your life.",
    img: "/home/beach.jpg"
  }
];

export default function Specialties() {
  return (
    <section className="bg-accent py-16 sm:py-24 md:py-32 lg:py-36 px-4 sm:px-6">
      <div className="max-w-[1570px] mx-auto">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12 md:mb-16 font-medium text-primary">Ways we can work together</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-3">
          {specialties.map((item, index) => (
            <div
              key={index}
              className="bg-surface p-5 sm:p-6 md:p-5 min-h-[450px] sm:min-h-[500px] md:min-h-[550px] flex flex-col justify-between relative overflow-hidden group border border-border shadow-sm hover:shadow-md transition-shadow"
            >
            
              <div>
                <h3 className="font-heading text-xl sm:text-2xl md:text-xl font-medium mb-4 sm:mb-6 md:mb-[29px] text-primary">{item.title}</h3>
                <p className="font-body text-sm sm:text-base md:text-sm leading-relaxed text-text/80">{item.desc}</p>
              </div>

            
              <div
                className="w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px] aspect-square rounded-full overflow-hidden mx-auto mt-8 sm:mt-10 md:mt-12"
                data-aos="fade-up"
                data-aos-delay={index * 150}
                data-aos-duration="800"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover object-[center_80%]"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}