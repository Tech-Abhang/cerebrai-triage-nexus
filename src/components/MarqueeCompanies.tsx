
import React from "react";

const companyLogos = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/2/29/PHILIPS_logo_new.svg",
    alt: "Philips",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Blackford_logo.svg",
    alt: "Blackford",
  },
  {
    src: "https://seeklogo.com/images/S/sectra-logo-EFADC8B1F7-seeklogo.com.png",
    alt: "Sectra",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/0/01/AstraZeneca.svg",
    alt: "AstraZeneca",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/0/02/DeepC_Logo.png",
    alt: "DeepC",
  },
  {
    src: "https://seeklogo.com/images/I/inceptra-logo-A3F659E87B-seeklogo.com.png",
    alt: "Incepto",
  },
];

const MarqueeCompanies: React.FC = () => (
  <section className="relative w-full py-6 bg-white dark:bg-background border-y border-gray-100 dark:border-gray-800 z-20">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-3 md:gap-7 items-center justify-between text-center px-2 pb-1">
        <div>
          <span className="text-2xl md:text-3xl font-extrabold text-gradient-primary block">32M+</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">Lives Impacted</span>
        </div>
        <div>
          <span className="text-2xl md:text-3xl font-extrabold text-gradient-primary block">100+</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">Countries via 4500+ sites</span>
        </div>
        <div>
          <span className="text-2xl md:text-3xl font-extrabold text-gradient-primary block">1B+</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">Training Datasets</span>
        </div>
      </div>
      <div className="w-full overflow-x-hidden relative mt-4">
        {/* Marquee animation */}
        <div className="marquee inline-flex gap-12 animate-marquee whitespace-nowrap">
          {companyLogos.map((logo, i) => (
            <img src={logo.src} alt={logo.alt} key={i}
              className="h-10 md:h-12 grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-300 mx-8 inline-block" />
          ))}
          {/* Second batch to make the marquee infinite */}
          {companyLogos.map((logo, i) => (
            <img src={logo.src} alt={logo.alt} key={`marq2-${i}`}
              className="h-10 md:h-12 grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-300 mx-8 inline-block" />
          ))}
        </div>
      </div>
      {/* Marquee animation keyframes */}
      <style>
        {`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
        `}
      </style>
    </div>
  </section>
);

export default MarqueeCompanies;
