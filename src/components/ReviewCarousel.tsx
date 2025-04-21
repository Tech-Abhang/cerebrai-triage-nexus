
import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Review = {
  quote: string;
  author: string;
  title: string;
  image: string;
};

const reviews: Review[] = [
  {
    quote:
      "CerebrumAI's holistic recommendations made me feel truly understood as a patient. Connecting securely to a doctor only when needed gave such peace of mind.",
    author: "Jane Williams",
    title: "Patient",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    quote:
      "The multimodal input captures details other systems miss—game-changer for remote consultation workflows.",
    author: "Dr. Amjad Farooq",
    title: "Physician",
    image: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    quote:
      "I love how fast and intuitive the experience is. Adding behavioral data is an innovation the space desperately needed.",
    author: "Luisa K.",
    title: "Health Tech Reviewer",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
];

const [current, setCurrent] = [0, () => {}]; // for code highlighting

const ReviewCarousel: React.FC = () => {
  const [current, setCurrent] = React.useState(0);

  // Auto-advance every 7s
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(c => (c + 1) % reviews.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative z-10 py-16 px-2 md:px-0 bg-gradient-to-br from-fuchsia-50 via-blue-50/40 to-white dark:from-blue-900/50 dark:via-background/50 dark:to-background transition-colors"
    >
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-7 animate-fade-in">
        <h3 className="mb-2 text-xl md:text-2xl font-bold text-gradient-primary">What people are saying</h3>
        <div className="relative w-full">
          <div className="relative min-h-[230px] bg-white/85 dark:bg-card/90 rounded-2xl shadow-xl border border-primary/20 backdrop-blur-lg px-6 py-7 transition-all duration-500 flex flex-col items-center gap-4 animate-fade-in"
            key={current}
            style={{
              animation: "fade-in 0.8s"
            }}>
            <span className="text-5xl md:text-6xl leading-none text-primary/60 mb-1">“</span>
            <span className="text-lg md:text-xl text-gray-700 dark:text-gray-200 font-medium animate-fade-in">{reviews[current].quote}</span>
            <div className="flex items-center gap-3 mt-3">
              <img
                src={reviews[current].image}
                alt={reviews[current].author}
                className="h-11 w-11 rounded-full border-2 border-primary shadow-md object-cover"
              />
              <div className="text-left">
                <div className="font-semibold text-[16px] text-primary">{reviews[current].author}</div>
                <div className="text-xs text-gray-500 dark:text-gray-300">{reviews[current].title}</div>
              </div>
            </div>
          </div>
          {/* Controls */}
          <div className="mt-5 flex gap-5 justify-center">
            <button
              aria-label="Previous review"
              className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 border border-primary/30 transition disabled:opacity-30"
              onClick={() => setCurrent(c => (c - 1 + reviews.length) % reviews.length)}
            >
              <ArrowLeft size={22} className="text-primary" />
            </button>
            <button
              aria-label="Next review"
              className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 border border-primary/30 transition disabled:opacity-30"
              onClick={() => setCurrent(c => (c + 1) % reviews.length)}
            >
              <ArrowRight size={22} className="text-primary" />
            </button>
          </div>
          {/* Dots */}
          <div className="flex gap-2 mt-3 justify-center">
            {reviews.map((_, i) => (
              <span
                key={i}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-200 ${
                  i === current ? "bg-primary" : "bg-primary/20"
                }`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewCarousel;
