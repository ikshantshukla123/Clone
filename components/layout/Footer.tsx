export default function Footer() {
  return (
    <footer className="bg-paper pt-20 pb-10 px-6 border-t border-ink/10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        
        {/* Col 1 */}
        <div className="col-span-1 md:col-span-2">
           <h3 className="font-heading text-3xl font-medium mb-6">Lilac Template</h3>
           <div className="font-body text-sm space-y-1">
             <p>123 Example Road</p>
             <p>Minneapolis, MN</p>
             <br />
             <p className="underline decoration-1">email@example.com</p>
             <p className="underline decoration-1">(555) 555-5555</p>
           </div>
        </div>

        {/* Col 2 */}
        <div>
           <h4 className="font-heading text-xl font-medium mb-6">Hours</h4>
           <div className="font-body text-sm space-y-1">
             <p>Monday – Friday</p>
             <p>10am – 6pm</p>
           </div>
        </div>

        {/* Col 3 */}
        <div className="flex flex-col items-start md:items-end">
           <h4 className="font-heading text-xl font-medium mb-6">Find</h4>
           <div className="font-body text-sm space-y-2 flex flex-col md:items-end">
             <a href="#" className="underline hover:no-underline">Home</a>
             <a href="#" className="underline hover:no-underline">Contact</a>
             <a href="#" className="underline hover:no-underline">Blog</a>
           </div>
        </div>
      </div>

      <div className="text-center text-[10px] text-ink/60 uppercase tracking-widest">
         Privacy & Cookies Policy &nbsp;|&nbsp; Website Terms & Conditions
      </div>
    </footer>
  );
}