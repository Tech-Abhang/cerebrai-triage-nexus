
import React from "react";

const navSections = [
  {
    title: "Products",
    items: [
      "Digital Triage",
      "AI Insights",
      "Behavioral Analysis",
      "Patient Platform"
    ]
  },
  {
    title: "Focus Areas",
    items: [
      "Global Health",
      "Life Sciences",
      "Channel Partners"
    ]
  },
  {
    title: "Resources",
    items: [
      "Insights",
      "News and Press",
      "Impact",
      "Evidence",
      "Blogs"
    ]
  },
  {
    title: "About",
    items: [
      "About Us",
      "Our Team",
      "Careers",
      "Contact Us",
      "Our Investors",
      "Client Success"
    ]
  },
  {
    title: "Partnerships",
    items: [
      "Health Fund",
      "Hospital Groups",
      "AWS"
    ]
  },
  {
    title: "Events",
    items: ["RSNA", "Union"]
  }
];

const AdvancedFooter = () => (
  <footer className="relative w-full bg-[#1A1F2C] text-[#C8C8C9] border-t border-[#384050] pt-14 pb-5 mt-20 z-40 overflow-hidden min-h-[410px]">

    {/* Decorative background shape */}
    <img
      src="/lovable-uploads/546d3618-5e28-485e-98f2-fbfd3ad355c2.png"
      aria-hidden="true"
      className="pointer-events-none select-none absolute left-0 top-0 w-full h-full object-cover opacity-[0.14] z-0 animate-fade-in"
    />

    {/* Main content */}
    <div className="relative z-20 max-w-7xl mx-auto px-5">
      <div className="flex flex-col md:flex-row gap-16 md:gap-6 lg:gap-20">
        {/* Sections */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-7 md:gap-7 w-full">
          {navSections.map((section) => (
            <div key={section.title}>
              <span className="font-semibold text-[#FA7A5C] mb-2 block tracking-wide">{section.title}</span>
              <ul className="space-y-1 text-[#e2e2e3]">
                {section.items.map((item) => (
                  <li key={item}>
                    <a className="hover:underline hover:text-[#9EE6F2] transition" href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Branding & social */}
      <div className="flex flex-col md:flex-row md:justify-between items-center mt-12">
        <div className="flex items-center gap-4 mb-3 md:mb-0">
          <img
            src="/lovable-uploads/ad34ab04-3a71-4d4a-99a9-caf9ed28a559.png"
            alt="CerebrumAI logo"
            className="h-10 w-10 rounded-full border-2 border-[#FAC6B0] bg-white object-cover shadow"
          />
          <div>
            <span className="text-xl font-bold text-[#E26A57]">CerebrumAI</span>
            <div className="text-sm text-[#cdb7ff]">Intelligent Multimodal Triage</div>
          </div>
        </div>
        <div className="flex gap-4">
          <a href="/" aria-label="X" className="hover:scale-110 transition"><img src="/lovable-uploads/2609a40d-7777-4969-a6c8-07c6cce70c8c.png" alt="X" className="h-6 w-6 opacity-75 hover:opacity-100" /></a>
          <a href="/" aria-label="LinkedIn" className="hover:scale-110 transition"><img src="/lovable-uploads/ff10957b-341c-4e4a-8268-fce54d471bc2.png" alt="LinkedIn" className="h-6 w-6 opacity-75 hover:opacity-100" /></a>
          <a href="/" aria-label="GitHub" className="hover:scale-110 transition"><img src="/lovable-uploads/580d903f-03e4-42d0-a338-a9042586421a.png" alt="GitHub" className="h-6 w-6 opacity-75 hover:opacity-100" /></a>
        </div>
      </div>
      {/* Company Info */}
      <div className="mt-5 mb-2 text-sm text-[#a3a7ab]">
        CerebrumAI Technologies Private Limited<br/>
        Founded in 2024. Our mission is to use multimodal AI for accessible, personalized and secure healthcare.
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-[#81898c] opacity-70 pt-5 border-t border-[#384050] mt-4">
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline hover:text-white transition">Privacy Notice</a>
          <span className="hidden md:inline">|</span>
          <a href="#" className="hover:underline hover:text-white transition">Security</a>
          <span className="hidden md:inline">|</span>
          <a href="#" className="hover:underline hover:text-white transition">Legal</a>
        </div>
        <span>&copy; {new Date().getFullYear()} CerebrumAI Technologies. All rights reserved.</span>
      </div>
    </div>
  </footer>
);

export default AdvancedFooter;
