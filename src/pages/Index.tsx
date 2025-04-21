import React from "react";
import { Eye, Mail, UserCheck } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import Navbar from "@/components/Navbar";
import MarqueeCompanies from "@/components/MarqueeCompanies";
import ReviewCarousel from "@/components/ReviewCarousel";
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
      <svg className="pointer-events-none fixed w-[120vw] h-[120vw] md:w-[80vw] md:h-[80vw] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-30 select-none" viewBox="0 0 900 900" fill="none">
        <defs>
          <radialGradient id="bg1" cx="50%" cy="50%" r="50%" fx="45%" fy="52%">
            <stop stopColor="#a7c7fd" stopOpacity="0.9"/>
            <stop offset="0.58" stopColor="#e1bcfa" stopOpacity="0.42"/>
            <stop offset="1" stopColor="#e6f9ec" stopOpacity="0"/>
          </radialGradient>
        </defs>
        <circle cx="450" cy="450" r="430" fill="url(#bg1)" />
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

      <MarqueeCompanies />

      <section className="relative z-10 py-14 px-2 md:px-0 bg-gradient-to-br from-white via-blue-50/40 to-fuchsia-50 dark:from-blue-900/60 dark:via-background dark:to-background text-gray-700 dark:text-gray-200 animate-fade-in">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-7 md:gap-10 text-center">
          <h3 className="font-bold text-2xl md:text-3xl mb-2 text-gradient-primary">How CerebrumAI Modernizes Digital Triage</h3>
          <p className="text-lg md:text-xl max-w-3xl">
            CerebrumAI is designed to modernize digital triage through an intelligent, multimodal approach.<br/>
            By analyzing a combination of <span className="font-semibold text-primary">textual descriptions</span>, <span className="font-semibold text-primary">medical images</span>, and <span className="font-semibold text-primary">behavioral biometrics</span>,
            it delivers context-aware assessments that go beyond conventional symptom checkers—enabling safer and more actionable care journeys.
          </p>
          <img src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=540&q=80" alt="Patient with digital triage screens" className="rounded-2xl shadow-xl border-2 border-primary/10 w-full max-w-md mx-auto animate-scale-in" loading="lazy" draggable={false}/>
        </div>
      </section>

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

      <ReviewCarousel />

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

      <footer className="mt-20 px-0 bg-gradient-to-b from-primary/10 via-fuchsia-100/10 to-blue-50/5 dark:from-background/90 dark:via-card/80 dark:to-gray-900 border-t border-gray-200 dark:border-gray-800 pt-10 pb-14">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-10 md:gap-20 justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=36&q=80"
                alt="Logo"
                className="h-8 w-8 rounded-full object-cover border-2 border-primary/40"
              />
              <span className="font-bold text-xl text-primary">CerebrumAI</span>
            </div>
            <div className="max-w-xs text-gray-600 dark:text-gray-400 text-sm mb-4">
              CerebrumAI was founded in 2024. Our mission is to use multimodal artificial intelligence to make healthcare more accessible, personalized, and secure.
            </div>
            <div className="flex gap-3 mt-2">
              <a href="/" aria-label="LinkedIn" className="hover:scale-110 transition"><img src="/lovable-uploads/ff10957b-341c-4e4a-8268-fce54d471bc2.png" alt="LinkedIn" className="h-6 w-6 opacity-80 hover:opacity-100" /></a>
              <a href="/" aria-label="X/Twitter" className="hover:scale-110 transition"><img src="/lovable-uploads/2609a40d-7777-4969-a6c8-07c6cce70c8c.png" alt="X" className="h-6 w-6 opacity-80 hover:opacity-100" /></a>
              <a href="/" aria-label="GitHub" className="hover:scale-110 transition"><img src="/lovable-uploads/580d903f-03e4-42d0-a338-a9042586421a.png" alt="GitHub" className="h-6 w-6 opacity-80 hover:opacity-100" /></a>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-7 md:gap-14 lg:gap-20 text-sm w-full md:w-auto">
            <div>
              <span className="font-semibold text-primary mb-2 block">Products</span>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                <li><a className="hover:underline hover:text-primary" href="#">Digital Triage</a></li>
                <li><a className="hover:underline hover:text-primary" href="#">AI Insights</a></li>
                <li><a className="hover:underline hover:text-primary" href="#">Behavioral Analysis</a></li>
                <li><a className="hover:underline hover:text-primary" href="#">Patient Platform</a></li>
              </ul>
            </div>
            <div>
              <span className="font-semibold text-primary mb-2 block">Resources</span>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                <li><a className="hover:underline hover:text-primary" href="#">Insights</a></li>
                <li><a className="hover:underline hover:text-primary" href="#">Impact</a></li>
                <li><a className="hover:underline hover:text-primary" href="#">Evidence</a></li>
                <li><a className="hover:underline hover:text-primary" href="#">Blog</a></li>
              </ul>
            </div>
            <div>
              <span className="font-semibold text-primary mb-2 block">About</span>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                <li><a className="hover:underline hover:text-primary" href="#">About Us</a></li>
                <li><a className="hover:underline hover:text-primary" href="#">Our Team</a></li>
                <li><a className="hover:underline hover:text-primary" href="#">Careers</a></li>
                <li><a className="hover:underline hover:text-primary" href="#">Contact</a></li>
              </ul>
            </div>
            <div>
              <span className="font-semibold text-primary mb-2 block">Legal</span>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                <li><a className="hover:underline hover:text-primary" href="#">Privacy Notice</a></li>
                <li><a className="hover:underline hover:text-primary" href="#">Security</a></li>
                <li><a className="hover:underline hover:text-primary" href="#">Regulatory</a></li>
                <li><a className="hover:underline hover:text-primary" href="#">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-xs text-center text-gray-500 dark:text-gray-400 mt-10 opacity-75">
          &copy; {new Date().getFullYear()} CerebrumAI Technologies. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
