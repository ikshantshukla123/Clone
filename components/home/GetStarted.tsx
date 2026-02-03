import Button from "../ui/Button";

export default function GetStarted() {
  return (
    // Background color set to #7e7b46 as requested
    <section className="bg-[#7e7b46] py-32 px-6 text-white text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center">

        {/* Heading */}
        <h2 className="font-heading  text-3xl md:text-5xl font-semibold mb-8">
          Get started today.
        </h2>

        {/* Subtext */}
        <div className="font-heading  text-sm md:text-xl leading-8 mb-16 space-y-1 max-w-2xl">
          <p>
            Ready to take the first step towards a happier, healthier you?
          </p>
          <p>
            Contact me to book your first session. I look forward to starting this therapeutic journey with you.
          </p>
        </div>

        {/* Button */}
        <Button
          variant="inverse"
          className="px-7 py-4 text-[12px]"
        >
          Get In Touch &rarr;
        </Button>

      </div>
    </section>
  );
}