//collect data
import React from "react";
import SkinQueryForm from "@/components/SkinQueryForm";
import Navbar from "@/components/Navbar";
import EnhancedFooter from "@/components/EnhancedFooter";

const InputPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-fuchsia-100 via-blue-50/60 to-white dark:from-[#34205e]/50 dark:via-background/60 dark:to-background">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 pt-32 pb-20">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Skin Analysis
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get an AI-powered analysis of your skin condition. Simply enter your symptoms 
            and provide an image URL for a personalized assessment.
          </p>
        </div>
        
        <SkinQueryForm />
        
        <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>
            Note: This tool is for informational purposes only and does not replace 
            professional medical advice. Always consult with a healthcare provider 
            for proper diagnosis and treatment.
          </p>
        </div>
      </div>
      <EnhancedFooter />
    </div>
  );
};

export default InputPage;