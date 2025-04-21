
import React from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div
    className={cn(
      "glass-morphism flex flex-col items-center justify-center p-6 rounded-xl bg-white/40 dark:bg-card border border-white/20 shadow hover:shadow-lg transition-transform duration-200 hover:scale-105 cursor-pointer min-w-[220px] w-full max-w-xs mx-auto group"
    )}
  >
    <div className="mb-3 text-primary group-hover:scale-110 transition-transform">{icon}</div>
    <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300 text-center text-sm">{description}</p>
  </div>
);

export default FeatureCard;
