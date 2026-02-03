import Button from "../ui/Button";

export default function Alone() {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2">

      {/* LEFT: Image */}
      <div className="relative h-[400px] sm:h-[500px] md:h-auto md:min-h-[900px]" data-aos="fade-up" data-aos-duration="1000">
        <img
          src="/home/newsix.webp"
          alt="Woman sitting"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* RIGHT: Text Content */}
      <div className="bg-[#c2bfcb] flex flex-col justify-between text-[#213614]">
        <div className="pt-14 md:pt-15 px-8 md:px-[80px] py-20 md:py-32">
          <h2 className="font-heading text-5xl md:text-6xl mb-10 font-normal mt-30 leading-tight">
            You don’t have to do this all <span className="italic">alone</span>.
          </h2>

          <p className="font-body text-xl font-extralight mb-8">If you are facing any of these, there's hope:</p>

          <ul className="font-body text-xl space-y-4 mb-12 list-disc list-inside marker:text-[#213614]  md:px-[30px]  ">
            <li>Persistent feelings of sadness or hopelessness</li>
            <li>Trouble focusing or making decisions</li>
            <li>Difficulty maintaining relationships</li>
            <li>Feeling constantly exhausted or unmotivated</li>
            <li>A pervasive sense of being overwhelmed</li>
          </ul>

          <p className="font-body text-2xl mb-12 max-w-400px">
            With empathy and guidance, we'll work together to navigate the challenges life throws your way.
          </p>
        </div>

        <div className="w-full">
          <Button className="w-full text-[14px] font-semibold border-0 border-t border-[#213614] h-[80px] py-8 hover:text-[#c2bfcb] rounded-none">
            Work With Me →
          </Button>
        </div>
      </div>

    </section>
  );
}