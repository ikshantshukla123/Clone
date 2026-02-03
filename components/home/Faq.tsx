"use client";
import { useState } from "react";
import AccordionIcon from "../ui/AccordionIcon";

const faqData = [
  {
    question: "Do you take insurance?",
    answer: "I am an out-of-network provider. While I do not bill insurance directly, I can provide you with a monthly superbill that you can submit to your insurance company for potential reimbursement."
  },
  {
    question: "What are your rates?",
    answer: "My standard rate is $150 per 50-minute session. I do offer a limited number of sliding scale slots for those facing financial hardship."
  },
  {
    question: "Do you have any openings?",
    answer: "I am currently accepting new clients for daytime appointments. Please use the contact form to schedule a free 15-minute consultation."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-paper px-6 min-h-[970px] flex items-center">

      <div className="w-full max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-1 items-start">

        {/* LEFT COLUMN: Arch Image */}
        <div className="flex justify-center md:justify-end mr-30 ">
          {/* UPDATED SPECS:
               1. w-[450px]: Your requested width.
               2. h-[625px]: Your requested height.
               3. rounded-t-[225px]: Changed to 225px (Half of 450) to make it a perfect circle top.
           */}
          <div className="w-[380px] h-[560px] md:w-[500px] md:h-[720px] rounded-t-[190px] md:rounded-t-[260px] overflow-hidden relative shadow-sm">
            <img
              src="/home/newten.webp"
              alt="Dried flowers in vase"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT COLUMN: FAQ List */}
        {/* pt-15: Pushed down slightly to align nicely with the larger image's curve */}
        <div className="pt-35 md:pl-1">
          <h2 className="font-heading text-xl md:text-6xl text-[#213614] mb-20 font-semibold">FAQs</h2>

          <div className="border-t border-ink">
            {faqData.map((item, index) => (
              <div key={index} className="border-b border-ink">

                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-4 flex items-center text-left group"
                >
                  {/* Plus/Minus Icon */}
                  <span className="mr-4">
                    <AccordionIcon isOpen={openIndex === index} size={48} lineWidth={24} />
                  </span>

                  {/* Question Text */}
                  <span className="font-heading text-2xl md:text-5xl font-medium text-[#213614]">
                    {item.question}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[200px] opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
                >
                  <p className="font-body text-base md:text-lg leading-7 text-[#213614]/80 pl-10 max-w-md">
                    {item.answer}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}