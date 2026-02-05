import Link from "next/link";
import Button from "../ui/Button";

export default function Alone() {
  return (
    <section className="w-full grid grid-cols-1 xl:grid-cols-2">

      {/* LEFT: Image */}
      <div className="relative h-[400px] sm:h-[500px] xl:h-auto xl:min-h-[850px]" data-aos="fade-up" data-aos-duration="1000">
        <img
          src="/home/alon.jpg"
          alt="Therapy and healing"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* RIGHT: Text Content */}
      <div className="bg-background flex flex-col justify-between text-text">
        <div className="pt-14 xl:pt-15 px-8 xl:px-[80px] py-20 xl:py-15">
          <h2 className="font-heading text-5xl xl:text-6xl mb-10 font-normal mt-30 leading-tight">
            You don’t have to hold it all alone.
          </h2>

          <p className="font-body text-xl font-extralight mb-8 text-text/80">
            If any of this feels familiar, you’re not broken—and you’re not the only one:
          </p>

          <ul className="font-body text-xl space-y-4 mb-12 list-disc list-inside marker:text-primary xl:px-[30px]">
            <li>Constant worry, overthinking, or feeling “on edge”</li>
            <li>Panic symptoms or a body that stays in fight-or-flight</li>
            <li>Tension, restlessness, or difficulty sleeping</li>
            <li>Feeling “functional,” but privately overwhelmed</li>
            <li>Burnout, perfectionism, and pressure that never turns off</li>
          </ul>

          <p className="font-body text-2xl mb-12 max-w-400px">
            My approach is warm, collaborative, and grounded—structured enough to feel supportive, with space for reflection and depth.
          </p>
        </div>

        <div className="w-full">
          <Link href="/contact">
            <Button className="w-full text-[14px] font-semibold border-0! border-t! border-primary! h-[80px] py-8 rounded-none">
              Work with Dr. Reynolds →
            </Button>
          </Link>
        </div>
      </div>

    </section>
  );
}