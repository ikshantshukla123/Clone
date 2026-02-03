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
    <section className="bg-paper px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:min-h-[970px] flex items-center">

      <div className="w-full max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-8 lg:gap-1 items-start">

        {/* LEFT COLUMN: Arch Image */}
        <div className="flex justify-center md:justify-end md:mr-8 lg:mr-30 order-1 md:order-1" data-aos="fade-up" data-aos-duration="1000">
          <div className="w-[300px] h-[440px] sm:w-[350px] sm:h-[520px] md:w-[500px] md:h-[720px] rounded-t-[150px] sm:rounded-t-[175px] md:rounded-t-[260px] overflow-hidden relative shadow-sm">
            <img
              src="/home/newten.webp"
              alt="Dried flowers in vase"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* RIGHT COLUMN: FAQ List */}
        <div className="order-2 md:order-2 md:pt-8 lg:pt-35 md:pl-1">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#213614] mb-8 sm:mb-12 md:mb-16 lg:mb-20 font-semibold">FAQs</h2>

          <div className="border-t border-ink">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="border-b border-ink"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="600"
              >

                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-4 sm:py-5 md:py-4 flex items-start sm:items-center text-left group min-h-[44px]"
                  aria-expanded={openIndex === index}
                >
                  {/* Plus/Minus Icon */}
                  <span className="mr-3 sm:mr-4 flex-shrink-0 mt-1 sm:mt-0">
                    <AccordionIcon
                      isOpen={openIndex === index}
                      size={36}
                      lineWidth={18}
                    />
                  </span>

                  {/* Question Text */}
                  <span className="font-heading text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-[#213614] leading-tight">
                    {item.question}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[300px] sm:max-h-[250px] md:max-h-[200px] opacity-100 mb-4 sm:mb-5 md:mb-6' : 'max-h-0 opacity-0'}`}
                >
                  <p className="font-body text-sm sm:text-base md:text-lg leading-6 sm:leading-7 text-[#213614]/80 pl-12 sm:pl-14 md:pl-16 lg:pl-10 pr-2 sm:pr-4 max-w-full md:max-w-md">
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