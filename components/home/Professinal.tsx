"use client";
import { useState } from "react";
import AccordionIcon from "../ui/AccordionIcon";

const backgroundData = [
  {
    title: "Education",
    details: [
      "Master of Arts in Counseling Psychology, University of Minnesota",
      "Bachelor of Science in Psychology, University of Wisconsin-Madison"
    ]
  },
  {
    title: "Licensure",
    details: [
      "Licensed Professional Clinical Counselor (LPCC) - MN License #1234",
      "National Certified Counselor (NCC)"
    ]
  },
  {
    title: "Certifications",
    details: [
      "Certified Clinical Trauma Professional (CCTP)",
      "EMDR Trained Clinician"
    ]
  }
];

export default function ProfessionalBackground() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // Background color matches the beige from your "About Lilac" section (#E5E0DA)
    <section className="bg-[#E5E0DA] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 min-h-[500px] sm:min-h-[600px] md:min-h-[650px] flex items-center">
      <div className="w-full max-w-[800px] mx-auto">

        {/* Centered Heading */}
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.3rem] text-center text-[#223614] mb-8 sm:mb-10 md:mb-12 font-medium">
          My Professional Background
        </h2>

        {/* Accordion List Container */}
        <div className="w-full max-w-[850px] mx-auto border-t border-[#223614]">
          {backgroundData.map((item, index) => (
            <div key={index} className="border-b border-[#223614]">

              {/* Toggle Button */}
              <button
                onClick={() => toggleItem(index)}
                className="w-full py-4 sm:py-5 md:py-3 flex items-center justify-between group text-left min-h-[44px]"
                aria-expanded={openIndex === index}
              >
                {/* Title (Left) */}
                <span className="font-heading text-xl sm:text-2xl md:text-3xl text-[#223614] font-normal transition-opacity pr-4">
                  {item.title}
                </span>

                {/* Plus Icon (Right) */}
                <span className="ml-4 flex-shrink-0">
                  <AccordionIcon isOpen={openIndex === index} size={32} lineWidth={16} />
                </span>
              </button>

              {/* Expandable Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-[250px] sm:max-h-[220px] md:max-h-[200px] opacity-100 pb-4 sm:pb-5 md:pb-6" : "max-h-0 opacity-0"
                  }`}
              >
                <ul className="font-body text-sm sm:text-base md:text-sm leading-6 sm:leading-7 text-[#223614] pl-4 sm:pl-6 md:pl-4 pr-2 list-none space-y-1 sm:space-y-2 md:space-y-1">
                  {item.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}