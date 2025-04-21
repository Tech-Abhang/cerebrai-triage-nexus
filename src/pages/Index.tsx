
import React from "react";
import { Eye, Mail, UserCheck } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import Navbar from "@/components/Navbar";
import MarqueeCompanies from "@/components/MarqueeCompanies";
import ReviewCarousel from "@/components/ReviewCarousel";
import LatestDevelopments from "@/components/LatestDevelopments";
import AdvancedFooter from "@/components/AdvancedFooter";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: <Eye size={38} strokeWidth={1.8} />,
    title: "Multimodal Input",
    description: "Seamless capture of text, images, and behavioral data for a holistic triage.",
  },
  {
    icon: <UserCheck size={38} strokeWidth={1.8} />,
    title: "Personalized AI",
    description: "AI-driven analysis delivers tailored, actionable recommendations to users.",
  },
  {
    icon: <Mail size={38} strokeWidth={1.8} />,
    title: "Secure Doctor Access",
    description: "Connect safely with professionals only when advanced intervention is needed.",
  },
];

const Index: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-fuchsia-50 to-white dark:from-blue-950 dark:via-purple-950 dark:to-gray-900 transition-colors overflow-x-hidden">
      {/* Unique animated SVG ambient background */}
      <svg className="pointer-events-none fixed w-[135vw] h-[135vw] md:w-[98vw] md:h-[98vw] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1] opacity-45 select-none" viewBox="0 0 1200 900" fill="none">
        <defs>
          <radialGradient id="bg2" cx="50%" cy="50%" r="52%">
            <stop stopColor="#a7c7fd" stopOpacity="0.9"/>
            <stop offset="0.68" stopColor="#e1bcfa" stopOpacity="0.38"/>
            <stop offset="1" stopColor="#ffecd2" stopOpacity="0"/>
          </radialGradient>
        </defs>
        <ellipse cx="600" cy="410" rx="520" ry="370" fill="url(#bg2)" />
        <circle className="animate-pulse" cx="970" cy="350" r="59" fill="#e0e7ff" fillOpacity="0.22" />
        <circle cx="160" cy="180" r="70" fill="#fbcfe8" fillOpacity="0.11" />
        {/* Floating circles */}
        <circle className="animate-pulse" cx="960" cy="789" r="28" fill="#bbf7d0" fillOpacity="0.23" />
        <circle cx="980" cy="170" r="23" fill="#eabfff" fillOpacity="0.19" />
        <circle cx="120" cy="730" r="22" fill="#ffe9bf" fillOpacity="0.19" />
        <circle cx="720" cy="100" r="31" fill="#a5b4fc" fillOpacity="0.11" />
      </svg>
      <Navbar />
      <section className="relative flex flex-col-reverse md:flex-row items-center justify-between pt-32 md:pt-40 pb-12 px-4 md:px-12 max-w-6xl mx-auto gap-12 animate-fade-in">
        <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-9 z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-800 via-fuchsia-500 to-emerald-600 text-transparent bg-clip-text mb-1 leading-tight drop-shadow animate-[fade-in_1s_ease-in]">
            CerebrumAI: Intelligent, Multimodal Triage System
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
            CerebrumAI is a next-generation,
            multimodal AI system that collects and analyzes patient inputs—including text,
            images, and behavioral data—to deliver personalized triage recommendations.
            Designed for both mobile and web platforms, it ensures an intuitive patient experience
            and provides secure access to doctors when needed.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => navigate("/signin")}
              className="group flex items-center gap-2 px-8 py-3 font-semibold rounded-lg border-2 border-primary bg-primary/90 hover:bg-primary text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 animate-fade-in"
            >
              Get Started
              <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <a
              href="#features"
              className="flex items-center gap-2 px-8 py-3 font-semibold rounded-lg border-2 border-fuchsia-400 bg-white/30 hover:bg-fuchsia-100 dark:hover:bg-background text-fuchsia-700 dark:text-fuchsia-200 shadow transition-all duration-150 hover:scale-105"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=620&q=80"
            alt="A patient using a laptop for AI triage"
            className="w-[350px] md:w-[420px] rounded-3xl shadow-2xl border-[3px] border-primary/30 object-cover animate-scale-in [animation-delay:0.3s]"
            loading="lazy"
            draggable={false}
          />
        </div>
        <div className="absolute -top-10 md:top-12 left-0 w-full h-48 md:h-56 bg-gradient-to-tl from-fuchsia-200/40 via-blue-100/40 to-emerald-100/20 rounded-b-full z-0 pointer-events-none blur-xl animate-fade-in" />
      </section>

      {/* Marquee Companies */}
      <MarqueeCompanies />

      {/* Animated overview section */}
      <section className="relative z-10 py-14 px-2 md:px-0 bg-gradient-to-br from-white via-blue-50/40 to-fuchsia-50 dark:from-blue-900/60 dark:via-background dark:to-background text-gray-700 dark:text-gray-200 animate-fade-in">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-7 md:gap-10 text-center">
          <h3 className="font-bold text-2xl md:text-3xl mb-2 text-gradient-primary">How CerebrumAI Modernizes Digital Triage</h3>
          <p className="text-lg md:text-xl max-w-3xl animate-fade-in">
            CerebrumAI is designed to modernize digital triage through an intelligent, <span className="text-primary font-semibold hover:scale-105 transition-transform">multimodal approach</span>.<br/>
            By analyzing a combination of <span className="font-semibold text-primary">textual descriptions</span>, <span className="font-semibold text-primary">medical images</span>, and <span className="font-semibold text-primary">behavioral biometrics</span>,
            it delivers context-aware assessments that go beyond conventional symptom checkers—enabling safer and more actionable care journeys.
          </p>
          <img src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=540&q=80" alt="Patient with digital triage screens" className="rounded-2xl shadow-xl border-2 border-primary/10 w-full max-w-md mx-auto animate-scale-in" loading="lazy" draggable={false}/>
        </div>
      </section>

      {/* App Features */}
      <section id="features" className="max-w-6xl mx-auto pt-10 pb-8 px-4 md:px-0">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 animate-fade-in">Why CerebrumAI?</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {features.map((feature, i) => (
            <div
              className={`flex-1 transition-all duration-500 delay-${i * 100} animate-scale-in`}
              style={{ animationDelay: `${i * 170 + 100}ms` }}
              key={feature.title}
            >
              <FeatureCard
                icon={<div className="w-12 h-12 flex justify-center items-center bg-gradient-to-br from-blue-400/20 via-fuchsia-400/20 to-green-300/20 rounded-full shadow animate-scale-in">{feature.icon}</div>}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Review Carousel */}
      <ReviewCarousel />

      {/* Latest Developments */}
      <LatestDevelopments />

      {/* Secure Experience Highlight */}
      <section className="relative max-w-5xl mx-auto mt-14 md:mt-20 px-4 pb-12 animate-fade-in flex flex-col md:flex-row gap-10 items-center">
        <div className="w-full md:w-4/6 flex flex-col gap-7 bg-white/70 dark:bg-card/80 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700 backdrop-blur-lg">
          <h3 className="text-xl md:text-2xl font-bold mb-3 text-gradient-primary">
            Experience Secure, Intuitive, and Expert Triage
          </h3>
          <ul className="list-disc marker:text-fuchsia-400 dark:marker:text-fuchsia-300 text-gray-700 dark:text-gray-200 ml-6 space-y-1 text-base">
            <li>
              <strong>Intelligent AI:</strong> Understands each patient to provide tailored advice.
            </li>
            <li>
              <strong>Privacy First:</strong> We keep your behavioral, text, and image data secure—only connecting you to a doctor if needed.
            </li>
            <li>
              <strong>User-Friendly:</strong> Designed for all, with a beautiful, intuitive experience on any device.
            </li>
            <li>
              <strong>Bridges to Care:</strong> Seamlessly connects you to a professional when your case is complex.
            </li>
          </ul>
        </div>
        <div className="w-full md:w-2/6 flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80"
            alt="AI patient triage experience"
            className="rounded-2xl shadow-2xl border-[2.5px] border-fuchsia-400/50 object-cover animate-scale-in"
            loading="lazy"
            draggable={false}
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative max-w-xl mx-auto py-10 flex flex-col items-center">
        <div className="bg-white/80 dark:bg-card/90 rounded-xl backdrop-blur-lg shadow-lg p-8 w-full flex flex-col gap-4 items-center border border-gray-200 dark:border-gray-700 animate-fade-in">
          <span className="text-lg md:text-xl font-medium text-center">
            Start your journey toward smarter, safer healthcare.
          </span>
          <button
            onClick={() => navigate("/signin")}
            className="group flex gap-2 items-center bg-primary/90 hover:bg-primary text-white font-semibold px-6 py-2 rounded-md shadow-md border border-primary/40 hover:scale-105 transition-all animate-fade-in"
          >
            Sign In
          </button>
        </div>
      </section>

      {/* Enhanced Footer */}
      <AdvancedFooter />
    </div>
  );
};

export default Index;
