const specialties = [
  {
    title: "Self-Esteem",
    desc: "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
    img: "/home/newthree.webp"
  },
  {
    title: "Relationships",
    desc: "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
    img: "/home/newfour.webp"
  },
  {
    title: "Burnout",
    desc: "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
    img: "home/newfive.webp"
  }
];

export default function Specialties() {
  return (
    <section className="bg-paper py-16 sm:py-24 md:py-32 lg:py-36 px-4 sm:px-6">
      <div className="max-w-[1570px] mx-auto">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12 md:mb-16 font-medium text-[#223614]">My Specialties</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-3">
          {specialties.map((item, index) => (
            <div
              key={index}
              className="bg-[#EAE6E0] p-5 sm:p-6 md:p-5 min-h-[450px] sm:min-h-[500px] md:min-h-[550px] flex flex-col justify-between relative overflow-hidden group border border-black/20"
            >
            
              <div>
                <h3 className="font-heading text-xl sm:text-2xl md:text-xl font-medium mb-4 sm:mb-6 md:mb-[29px] text-[#223614]">{item.title}</h3>
                <p className="font-body text-sm sm:text-base md:text-sm leading-relaxed text-[#223614]/90">{item.desc}</p>
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