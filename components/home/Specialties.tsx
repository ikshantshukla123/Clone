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
    <section className="bg-paper py-36 px-3">
      <div className="max-w-[1570px] mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl text-center mb-16 font-medium">My Specialties</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {specialties.map((item, index) => (
            <div key={index} className="bg-[#EAE6E0] p-5 min-h-[550px] flex flex-col justify-between relative overflow-hidden group border border-black/20">
              {/* Text Top */}
              <div>
                <h3 className="font-heading text-xl font-medium mb-[29px]">{item.title}</h3>
                <p className="font-body text-sm leading-relaxed">{item.desc}</p>
              </div>

              {/* Circle Image Bottom */}
              {/* We create a large circle mask using rounded-full */}
              <div className="w-[320px] h-[320px] rounded-full overflow-hidden mx-auto mt-12">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}