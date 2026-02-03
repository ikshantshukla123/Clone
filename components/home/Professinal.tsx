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
    <section className="bg-[#E5E0DA] py-24 px-6 min-h-[650px] flex items-center">
      <div className="w-full max-w-[800px] mx-auto">

        {/* Centered Heading */}
        <h2 className="font-heading text-4xl md:text-[3.3rem] text-center text-[#223614] mb-12 font-medium">
          My Professional Background
        </h2>

        {/* Accordion List Container */}
        {/* We constrain the width to approx 650px to match the screenshot look */}
        <div className="w-full max-w-[850px] mx-auto border-t border-[#223614]">
          {backgroundData.map((item, index) => (
            <div key={index} className="border-b  border-[#223614]">

              {/* Toggle Button */}
              <button
                onClick={() => toggleItem(index)}
                className="w-full py-3 flex items-center justify-between group text-left"
              >
                {/* Title (Left) */}
                <span className="font-heading text-lg md:text-3xl text-[#223614] font-normal  transition-opacity">
                  {item.title}
                </span>

                {/* Plus Icon (Right) */}
                <span className="ml-4">
                  <AccordionIcon isOpen={openIndex === index} size={32} lineWidth={16} />
                </span>
              </button>

              {/* Expandable Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-[200px] opacity-100 pb-6" : "max-h-0 opacity-0"
                  }`}
              >
                <ul className="font-body text-sm leading-7 text-[#223614] pl-4 list-none space-y-1">
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