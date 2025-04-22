// import React from "react";
// import { Button } from "@/components/ui/button";
// import { useNavigate } from "react-router-dom";
// import { ArrowRight } from "lucide-react";

// const HeroCerebrumAI: React.FC = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="relative z-10 py-12 md:py-20 px-2 md:px-6 bg-white dark:bg-gray-900 overflow-hidden">
//       <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
//         <h1 
//           className="text-4xl md:text-5xl font-bold mb-5"
//           style={{
//             background: 'linear-gradient(to right, #8A2387, #E94057, #F27121)',
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent',
//             backgroundClip: 'text',
//             color: 'transparent',
//             display: 'inline-block',
//             position: 'relative',
//             zIndex: 1
//           }}
//         >
//           CerebrumAI: Intelligent, Multimodal Triage System
//         </h1>
//         <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300 animate-fade-in [animation-delay:0.3s]">
//           Bridging patients and doctors through secure, AI-powered, multimodal triage—text, images, and behavioral data with a seamless, intuitive experience.
//         </p>
//         <Button
//           size="lg"
//           className="group relative flex items-center gap-2 px-8 py-3 font-semibold glass-morphism border-2 border-primary/40 bg-primary/80 hover:bg-primary text-white shadow-lg hover:shadow-xl transition-all duration-200 animate-fade-in [animation-delay:0.6s]"
//           onClick={() => navigate("/signin")}
//         >
//           Get Started
//           <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
//         </Button>
//       </div>
//       {/* Floating shapes for subtle animation */}
//       <div className="absolute top-3 left-3 w-28 h-28 bg-gradient-to-br from-blue-200 via-teal-200 to-fuchsia-200 rounded-full opacity-40 blur-2xl pointer-events-none animate-pulse" />
//       <div className="absolute bottom-[-2rem] right-[-2rem] w-48 h-36 bg-gradient-to-br from-fuchsia-200 via-blue-300 to-emerald-200 rounded-full opacity-30 blur-2xl pointer-events-none animate-fade-in" />
//     </section>
//   );
// };

// export default HeroCerebrumAI;
