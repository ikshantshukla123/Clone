"use client";
import { useState } from "react";
import AccordionIcon from "../ui/AccordionIcon";

const backgroundData = [
  {
    title: "Who I work with",
    details: [
      "Adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences",
      "High-achieving professionals, entrepreneurs, creatives, and thoughtful people carrying high internal pressure"
    ]
  },
  {
    title: "Primary focus areas",
    details: [
      "Anxiety, chronic worry, and panic",
      "Trauma (single-incident and complex) and nervous system regulation",
      "Burnout, perfectionism, and sustained stress"
    ]
  },
  {
    title: "Methods I integrate",
    details: [
      "Cognitive-behavioral therapy (CBT)",
      "EMDR, mindfulness-based practices, and body-oriented techniques",
      "A paced, safety-first approach that balances structure with depth"
    ]
  }
];

export default function ProfessionalBackground() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="approach"
      className="bg-accent py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 min-h-[500px] sm:min-h-[600px] md:min-h-[650px] flex items-center"
    >
      <div className="w-full max-w-[800px] mx-auto">

        {/* Centered Heading */}
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.3rem] text-center text-primary mb-8 sm:mb-10 md:mb-12 font-medium" data-aos="fade-down" data-aos-duration="800">
          My approach & focus
        </h2>

        {/* Accordion List Container */}
        <div className="w-full max-w-[850px] mx-auto border-t border-border bg-accent backdrop-blur-sm">
          {backgroundData.map((item, index) => (
            <div
              key={index}
              className="border-b border-border"
              data-aos="fade-up"
              data-aos-delay={index * 120}
              data-aos-duration="700"
            >

              {/* Toggle Button */}
              <button
                onClick={() => toggleItem(index)}
                className="w-full py-4 sm:py-5 md:py-3 flex items-center justify-between group text-left min-h-[44px]"
                aria-expanded={openIndex === index}
              >
              
                <span className="font-heading text-xl sm:text-2xl md:text-3xl text-primary font-normal transition-opacity pr-4">
                  {item.title}
                </span>

              
                <span className="ml-4 shrink-0">
                  <AccordionIcon isOpen={openIndex === index} size={32} lineWidth={16} />
                </span>
              </button>

             
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-[250px] sm:max-h-[220px] md:max-h-[200px] opacity-100 pb-4 sm:pb-5 md:pb-6" : "max-h-0 opacity-0"
                  }`}
              >
                <ul className="font-body text-sm sm:text-base md:text-sm leading-6 sm:leading-7 text-text/85 pl-4 sm:pl-6 md:pl-4 pr-2 list-none space-y-1 sm:space-y-2 md:space-y-1">
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