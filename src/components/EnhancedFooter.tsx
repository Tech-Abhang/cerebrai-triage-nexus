import React from "react";
import { Mail, Link, Twitter } from "lucide-react";

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
    title: "Expertise",
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
      "Press",
      "Impact",
      "Evidence",
      "Blogs"
    ]
  },
  {
    title: "Company",
    items: [
      "About Us",
      "Team",
      "Careers",
      "Contact",
      "Investors"
    ]
  }
];

const social = [
  { label: "Twitter", href: "#", icon: <Twitter size={20} /> },
  { label: "LinkedIn", href: "#", icon: <Link size={20} /> },
  { label: "Contact", href: "#", icon: <Mail size={20} /> }
];

const EnhancedFooter = () => (
  <footer className="relative w-full pt-0 mt-24 z-40 overflow-hidden min-h-[440px] select-none">
    {/* Background gradients and glassy shapes */}
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-[#124c4a]/90 via-[#1a6c69]/98 to-[#0c3533]/100" />
      <img
        src="/lovable-uploads/f0173523-7ea3-4862-a664-405edaf58e54.png"
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 w-[36vw] min-w-[310px] opacity-40 blur-xl scale-125 object-contain"
      />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0c3533]/80 via-[#62d5d0]/30 to-transparent blur-[2px] pointer-events-none" />
    </div>
    <div className="relative z-20 max-w-7xl mx-auto px-6 pb-2 pt-10 flex flex-col gap-16">
      {/* Top Row */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        {/* Branding */}
        <div className="flex flex-col items-center md:items-start max-w-xs">
          <img
            src="/lovable-uploads/ad34ab04-3a71-4d4a-99a9-caf9ed28a559.png"
            alt="CerebrumAI logo"
            className="h-14 w-14 rounded-full border-2 border-[#62d5d0]/70 bg-white object-cover shadow-lg mb-2"
          />
          <span className="text-2xl font-extrabold text-[#62d5d0] mb-1 tracking-tight">
            <span className="text-[#a2e6e2]">Cerebrum</span><span className="text-[#62d5d0]">.ai</span>
          </span>
          <span className="text-sm text-[#a2e6e2]/80 font-medium">Intelligent Multimodal Triage</span>
          <span className="mt-3 text-xs text-[#8ee0dc]/60">
            Designed for better, faster, and smarter healthcare.
          </span>
        </div>
        {/* Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full md:w-auto">
          {navSections.map((section) => (
            <div key={section.title}>
              <span className="font-semibold text-[#a2e6e2]/95 mb-2 block text-sm tracking-wide">{section.title}</span>
              <ul className="space-y-1.5">
                {section.items.map((item) => (
                  <li key={item}>
                    <a className="hover:text-[#62d5d0] text-slate-200 text-sm transition" href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Social */}
        <div className="flex flex-col gap-5 items-center md:items-end">
          <div className="flex gap-4 mb-2">
            {social.map((s,i) => (
              <a key={i} aria-label={s.label} href={s.href} className="p-2 rounded-full bg-gradient-to-br from-[#0c3533]/80 to-[#62d5d0]/90 text-white border border-[#62d5d0]/70 hover:bg-[#124c4a]/70 transition hover:scale-110 shadow-lg flex items-center">
                {s.icon}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-1 text-[12px] text-gray-300/80">
            <span>
              &copy; {new Date().getFullYear()} CerebrumAI Technologies
            </span>
            <span>
              Built for smarter and more secure healthcare innovation.
            </span>
          </div>
        </div>
      </div>
      {/* Bottom Row - Links and legal */}
      <div className="flex flex-col md:flex-row gap-3 justify-between items-center border-t border-[#0c3533]/40 pt-5">
        <div className="flex gap-4 text-xs text-[#a2e6e2]/90">
          <a href="#" className="hover:underline hover:text-white duration-200">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:underline hover:text-white duration-200">Security</a>
          <span>|</span>
          <a href="#" className="hover:underline hover:text-white duration-200">Legal</a>
        </div>
        <div className="text-xs text-[#62d5d0]/60">Inspired by caring, powered by AI.</div>
      </div>
    </div>
  </footer>
);

export default EnhancedFooter;
