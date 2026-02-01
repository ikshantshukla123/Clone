import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="min-h-screen w-full relative overflow-x-hidden pt-[100px] md:pt-[140px]" style={{ backgroundColor: '#fbf6f1' }}>

      <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* --- LEFT COLUMN: IMAGE --- */}
        <div className="lg:col-span-5 flex justify-start lg:pl-14">

          <div className="
            relative 
            w-[340px] h-[510px] rounded-t-[170px]
            lg:w-[585px] lg:h-[877px] lg:rounded-t-[292.5px]
            overflow-hidden shadow-sm
          ">
            <img
              src="/home/newone.webp"
              alt="Woman holding lilacs"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
          </div>
        </div>


        {/* --- RIGHT COLUMN: TEXT --- */}
        {/* UPDATES:
            1. lg:items-center / lg:text-center: Forces all text/button to center align with each other.
            2. lg:mt-[70px]: Increased by 10px (was 60px).
            3. lg:pl-[69px]: Increased by 5px (was pl-16/64px) to move right.
        */}
        <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-center lg:text-center mt-12 lg:mt-[190px] ">

          {/* Added items-center here too to ensure the inner stack is centered */}
          <div className="flex flex-col items-center max-w-2xl">

            <h1
              className="font-heading font-medium text-5xl lg:text-[95px] leading-[1.05] -tracking-[0.03em] text-center"
              style={{ color: '#223614' }}
            >
              Live your life
              <br />
              in full bloom
            </h1>

            <p
              className="font-sans text-base lg:text-lg mt-[28px] lg:mt-[32px] tracking-normal text-center"
              style={{ color: '#223614' }}
            >
              Therapy for Adults in Minneapolis, MN.
            </p>

            <div className="mt-[20px] lg:mt-[50px]">
              <a
                href="#"
                className="group inline-flex items-center justify-center border border-[#223614] px-[20px] py-[11px] text-[11px] font-bold uppercase tracking-[0.2em] text-[#223614] transition-all duration-300 hover:bg-[#223614] hover:text-white"
              >
                CONNECT WITH ME →
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}