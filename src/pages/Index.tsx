
import React from "react";
import HeroCerebrumAI from "@/components/HeroCerebrumAI";
import FeatureCard from "@/components/FeatureCard";
import { Eye, Mail, UserCheck } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-white dark:from-blue-950 dark:via-purple-950 dark:to-gray-900 transition-colors">
      <HeroCerebrumAI />
      <section className="max-w-6xl mx-auto pt-10 pb-8 px-4 md:px-0">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 animate-fade-in">Why CerebrumAI?</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {features.map((feature, i) => (
            <div className="flex-1" key={feature.title}>
              <FeatureCard
                icon={<div className="w-12 h-12 flex justify-center items-center bg-gradient-to-br from-blue-400/20 via-fuchsia-400/20 to-green-300/20 rounded-full shadow animate-scale-in">{feature.icon}</div>}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-xl mx-auto py-8 flex flex-col items-center">
        <div className="bg-white/70 dark:bg-card rounded-xl backdrop-blur-lg shadow p-6 w-full flex flex-col gap-2 items-center border border-gray-200 dark:border-gray-700 animate-fade-in">
          <span className="text-lg">Experience secure, intuitive and expert triage.</span>
          <button
            onClick={() => navigate("/signin")}
            className="group inline-flex gap-2 items-center bg-primary/80 hover:bg-primary text-white font-semibold px-6 py-2 rounded-md transition-all duration-150 shadow-md border border-primary/40 hover:scale-105 animate-fade-in"
          >
            Sign In
          </button>
        </div>
      </section>
      <footer className="text-gray-400 text-center py-8 text-sm border-t border-gray-100 dark:border-gray-800 mt-10">
        © {new Date().getFullYear()} CerebrumAI. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
