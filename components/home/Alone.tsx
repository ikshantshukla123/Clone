export default function Alone() {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2">
      
      {/* LEFT: Image */}
      <div className="relative h-[500px] md:h-auto min-h-[700px]">
        <img 
          src="/home/newsix.webp" 
          alt="Woman sitting" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* RIGHT: Text Content (Lavender BG) */}
      <div className="bg-lavender flex flex-col justify-center px-8 md:px-20 py-20 md:py-32">
        <h2 className="font-heading text-4xl md:text-5xl mb-8 font-medium leading-tight">
          You don’t have to do this all <span className="italic">alone</span>.
        </h2>
        
        <p className="font-body text-sm mb-8">If you are facing any of these, there's hope:</p>

        <ul className="font-body text-sm space-y-4 mb-12 list-disc list-inside marker:text-ink/50">
           <li>Persistent feelings of sadness or hopelessness</li>
           <li>Trouble focusing or making decisions</li>
           <li>Difficulty maintaining relationships</li>
           <li>Feeling constantly exhausted or unmotivated</li>
           <li>A pervasive sense of being overwhelmed</li>
        </ul>

        <p className="font-body text-sm mb-12 max-w-md">
          With empathy and guidance, we'll work together to navigate the challenges life throws your way.
        </p>

        <div>
           <a href="#" className="text-[10px] font-bold uppercase tracking-[0.2em] border-b border-ink/30 pb-1 hover:border-ink transition-all">
             Work With Me &rarr;
           </a>
        </div>
      </div>

    </section>
  );
}