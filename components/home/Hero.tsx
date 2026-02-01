import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="min-h-screen w-full relative overflow-hidden bg-[#fbf6f1] pt-20 md:pt-24 lg:pt-[140px]">

      <div className="w-full max-w-[1600px] mx-auto flex flex-col lg:grid lg:grid-cols-12 lg:gap-12 items-center lg:items-start px-4 lg:px-0">

        {/* --- IMAGE --- */}
        <div className="w-full lg:col-span-5 flex justify-center lg:justify-start lg:pl-14 mb-8 lg:mb-0">

          <div className="relative w-[280px] h-[420px] sm:w-[340px] sm:h-[510px] lg:w-[585px] lg:h-[877px] rounded-t-[140px] sm:rounded-t-[170px] lg:rounded-t-[292.5px] overflow-hidden shadow-sm">
            <img
              src="/home/newone.webp"
              alt="Woman holding lilacs"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
          </div>
        </div>


        {/* --- TEXT --- */}
        <div className="w-full lg:col-span-7 flex flex-col items-center text-center lg:mt-[190px] px-6 sm:px-8 lg:px-0">

          <div className="flex flex-col items-center max-w-2xl">

            <h1 className="font-heading font-medium text-4xl sm:text-5xl lg:text-[95px] leading-tight lg:leading-[1.05] tracking-tight lg:-tracking-[0.03em] text-center text-[#223614]">
              Live your life
              <br />
              in full bloom
            </h1>

            <p className="font-sans text-sm sm:text-base lg:text-lg mt-6 sm:mt-7 lg:mt-[32px] tracking-normal text-center text-[#223614] max-w-md lg:max-w-none">
              Therapy for Adults in Minneapolis, MN.
            </p>

            <div className="mt-8 sm:mt-10 lg:mt-[50px]">
              <a href="#" className="group inline-flex items-center justify-center border border-[#223614] px-6 sm:px-[20px] py-3 sm:py-[11px] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#223614] transition-all duration-300 hover:bg-[#223614] hover:text-white">
                CONNECT WITH ME →
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}