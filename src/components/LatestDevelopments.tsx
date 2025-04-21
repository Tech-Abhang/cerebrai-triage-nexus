
import React from "react";

const developments = [
  {
    title: "AI Helps Doctors Treat Stroke Faster: CerebrumAI Study Reveals Significant Real-World Impact",
    description: "CerebrumAI's real-world study demonstrates faster, more accurate stroke triage for patients, improving outcomes through AI-powered diagnosis support.",
    link: "#",
    abstract: "In resource-limited settings, timely treatment of acute stroke is dependent upon accurate diagnosis... (details truncated for visual purposes)",
    authors: [
      "Justy Antony Chiramal",
      "Jacob Johnson",
      "Jemin Webster",
      "D. Rachel Nag",
      "Dennis Robert",
      "Tamaghna Ghosh",
      "Satish Golla",
      "Saniya Pawar",
      "Pranav Krishnan",
      "Paul K. Drain",
      "Stephen J. Mooney"
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1511174511562-5f97fba21be8?w=360&q=80",
    badge: "16 Apr 2025",
    badge2: "CerebrumAI",
    title: "PenRAD Imaging Network deploys AI‑Powered Chest CT for early lung cancer detection",
    subtitle: "UK’s NHS PenRAD Deploys CerebrumAI’s AI-Powered Chest CT...",
    link: "#"
  }
];

const LatestDevelopments = () => (
  <section className="relative py-16 px-2 md:px-6 bg-gradient-to-br from-purple-100 via-blue-50 to-gray-50 dark:from-[#19172C] dark:via-[#23243A] dark:to-[#23243A]">
    <h3 className="text-center mb-10 text-2xl md:text-3xl font-extrabold text-[#E26A57] tracking-tight">Explore Our Latest Developments</h3>
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-7">
      {/* Main Study Card */}
      <div className="col-span-2 relative bg-[#7B3C67] bg-opacity-90 rounded-xl shadow-2xl px-7 py-9 flex flex-col justify-between min-h-[380px] overflow-hidden group transition duration-300 hover:scale-[1.025]">
        <span className="text-lg md:text-xl font-semibold text-[#fff] leading-snug mb-3">
          {developments[0].title}
        </span>
        <span className="block text-[#ffccac] group-hover:text-orange-200 transition-all text-base md:text-lg mb-2 cursor-pointer underline underline-offset-2 hover:decoration-2"><a href={developments[0].link}>Read Study</a></span>
        <div className="flex flex-col md:flex-row gap-6 items-stretch mt-2">
          <div className="flex-1">
            <p className="text-sm text-[#ffe0e6] mb-2 leading-relaxed max-w-lg">{developments[0].abstract}</p>
            <div className="text-xs text-pink-200 mt-3 mb-2">
              {developments[0].authors.join(", ")}
            </div>
          </div>
          <div className="flex-shrink-0 md:block hidden">
            <img src="https://images.unsplash.com/photo-1559757175-5700dde6754b?w=190&q=80" loading="lazy" alt="Study abstract preview" className="w-44 h-44 rounded-lg object-cover shadow-xl border-2 border-[#ffbfc5] animate-scale-in" />
          </div>
        </div>
        <a href="#" className="mt-6 inline-block rounded-lg border border-[#ffbeac] text-[#FFE7DD] px-6 py-2 text-base font-medium transition bg-[#7B3C67]/60 hover:bg-[#7B3C67] hover:shadow-lg hover:text-[#ffc8af]">See More Evidence</a>
      </div>
      {/* News Card */}
      <div className="flex flex-col gap-5 bg-[#263146] rounded-2xl shadow-2xl p-7 justify-between transition duration-300 hover:scale-[1.025]">
        <div className="mb-2">
          <img src={developments[1].image} className="w-full rounded-lg mb-3 max-h-32 object-cover border border-[#607195] shadow animate-fade-in" alt="Latest news" />
          <div className="flex items-center space-x-2 mb-1">
            <span className="bg-[#E26A57] text-white text-xs rounded px-2 py-1 font-semibold">{developments[1].badge}</span>
            <span className="bg-[#523c60] text-pink-200 text-xs rounded px-2 py-1">{developments[1].badge2}</span>
          </div>
          <span className="block font-semibold text-[#fff] text-base mb-1">{developments[1].title}</span>
          <span className="block text-[#cdb7ff] text-sm mb-2">{developments[1].subtitle}</span>
          <a href={developments[1].link} className="text-[#FFCEB8] hover:text-[#ffbb93] underline text-sm">Know More</a>
        </div>
        <a href="#" className="mt-4 inline-block bg-[#19243B] rounded-lg px-5 py-2 text-[#FFEEEC] font-medium border border-[#32445F] text-center hover:bg-[#2d3a59] transition">Read More News</a>
      </div>
    </div>
  </section>
);

export default LatestDevelopments;
