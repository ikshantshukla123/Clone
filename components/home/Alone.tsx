export default function Alone() {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2">

      {/* LEFT: Image */}
      <div className="relative h-[800px] md:h-auto min-h-[900px]">
        <img
          src="/home/newsix.webp"
          alt="Woman sitting"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* RIGHT: Text Content */}
      <div className="bg-[#c2bfcb] flex flex-col justify-between text-[#213614]">
        <div className="pt-14 md:pt-15 px-8 md:px-25 py-20 md:py-32">
          <h2 className="font-heading text-5xl md:text-5xl mb-10 font-semibold leading-tight">
            You don’t have to do this all <span className="italic">alone</span>.
          </h2>

          <p className="font-body text-lg mb-8">If you are facing any of these, there's hope:</p>

          <ul className="font-body text-base space-y-4 mb-12 list-disc list-inside marker:text-[#213614]/50">
            <li>Persistent feelings of sadness or hopelessness</li>
            <li>Trouble focusing or making decisions</li>
            <li>Difficulty maintaining relationships</li>
            <li>Feeling constantly exhausted or unmotivated</li>
            <li>A pervasive sense of being overwhelmed</li>
          </ul>

          <p className="font-body text-lg mb-12 max-w-md">
            With empathy and guidance, we'll work together to navigate the challenges life throws your way.
          </p>
        </div>

        <div className="w-full">
          <a
            href="#"
            className="group flex items-center justify-center w-full text-xs font-light uppercase tracking-[0.2em] border-t border-[#213614] h-[80px] py-8 bg-transparent text-[#213614] hover:bg-[#213614] hover:text-[#c2bfcb] transition-all duration-300 ease-in-out"
          >
            Work With Me →
          </a>
        </div>
      </div>

    </section>
  );
}