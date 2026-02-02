export default function GetStarted() {
  return (
    // Background color set to #7e7b46 as requested
    <section className="bg-[#7e7b46] py-32 px-6 text-white text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        
        {/* Heading */}
        <h2 className="font-heading  text-3xl md:text-4xl font-semibold mb-8">
          Get started today.
        </h2>

        {/* Subtext */}
        <div className="font-heading  text-sm md:text-base leading-8 mb-16 space-y-1 max-w-2xl">
          <p>
            Ready to take the first step towards a happier, healthier you?
          </p>
          <p>
            Contact me to book your first session. I look forward to starting this therapeutic journey with you.
          </p>
        </div>

        {/* Button */}
        <a 
          href="#"
          className="
            inline-flex items-center justify-center 
            border border-white 
            px-6 py-3 
            text-[8px] font-bold uppercase tracking-[0.2em] 
            text-white 
            transition-all duration-300 
            hover:bg-white hover:text-[#7e7b46]
          "
        >
          Get In Touch &rarr;
        </a>

      </div>
    </section>
  );
}