
import React from "react";

const reviews = [
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

const ANIMATION_DURATION = 550;

const ReviewCarousel: React.FC = () => {
  const [current, setCurrent] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const [direction, setDirection] = React.useState<"next" | "prev">("next");

  // Auto-advance every 7s
  React.useEffect(() => {
    const timer = setTimeout(
      () => handleChange((current + 1) % reviews.length, "next"),
      6700
    );
    return () => clearTimeout(timer);
  }, [current]);

  function handleChange(newIdx: number, dir: "next" | "prev") {
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(newIdx);
      setAnimating(false);
    }, ANIMATION_DURATION);
  }

  return (
    <section className="relative z-10 py-20 px-2 md:px-0 bg-gradient-to-br from-fuchsia-100 via-blue-50/60 to-white dark:from-[#34205e]/50 dark:via-background/60 dark:to-background transition-colors">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-8 animate-fade-in">
        <h3 className="mb-2 text-2xl md:text-3xl font-bold text-gradient-primary">What People Are Saying</h3>
        <div className="relative w-full min-h-[264px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={`
                max-w-lg w-full transition-all
                ${animating ? "pointer-events-none" : ""}
                ${animating && direction==="next" ? "animate-fade-out scale-95 -translate-x-9 opacity-60" : ""}
                ${animating && direction==="prev" ? "animate-fade-out scale-95 translate-x-9 opacity-60" : ""}
              `}
              style={{
                zIndex: animating ? 0 : 2,
                position: animating ? "absolute" : "relative"
              }}
            >
              <div className="bg-white/95 dark:bg-[#251e3e]/80 rounded-2xl shadow-2xl border border-fuchsia-200/30 px-7 py-9 transition-all duration-500 flex flex-col items-center gap-5 min-h-[244px]">
                <span className="text-[62px] leading-none text-gradient-primary -mt-6">“</span>
                <span className="text-lg md:text-xl text-gray-700 dark:text-gray-200 font-medium min-h-[54px]">{reviews[current].quote}</span>
                <div className="flex items-center gap-4 mt-4">
                  <img
                    src={reviews[current].image}
                    alt={reviews[current].author}
                    className="h-12 w-12 rounded-full border-2 border-fuchsia-400 shadow-md object-cover"
                  />
                  <div className="flex flex-col text-left">
                    <span className="font-semibold text-primary text-[16px]">{reviews[current].author}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-300">{reviews[current].title}</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Animated card for incoming review */}
            {animating && (
              <div
                className={`
                  max-w-lg w-full absolute inset-0 transition-all
                  ${direction==="next" ? "animate-fade-in translate-x-12 scale-110" : "animate-fade-in -translate-x-12 scale-110"}
                `}
                style={{ zIndex: 1 }}
              >
                <div className="bg-white/95 dark:bg-[#251e3e]/80 rounded-2xl shadow-2xl border border-fuchsia-200/30 px-7 py-9 flex flex-col items-center gap-5 min-h-[244px]">
                  <span className="text-[62px] leading-none text-gradient-primary -mt-6">“</span>
                  <span className="text-lg md:text-xl text-gray-700 dark:text-gray-200 font-medium min-h-[54px]">{reviews[(current + (direction==="next"?1:reviews.length-1))%reviews.length].quote}</span>
                  <div className="flex items-center gap-4 mt-4">
                    <img
                      src={
                        reviews[(current + (direction==="next"?1:reviews.length-1))%reviews.length].image
                      }
                      alt={
                        reviews[(current + (direction==="next"?1:reviews.length-1))%reviews.length].author
                      }
                      className="h-12 w-12 rounded-full border-2 border-fuchsia-400 shadow-md object-cover"
                    />
                    <div className="flex flex-col text-left">
                      <span className="font-semibold text-primary text-[16px]">
                        {reviews[(current + (direction==="next"?1:reviews.length-1))%reviews.length].author}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-300">
                        {reviews[(current + (direction==="next"?1:reviews.length-1))%reviews.length].title}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Controls */}
          <div className="mt-6 flex gap-7 justify-center">
            <button
              aria-label="Previous review"
              className="p-2 bg-primary/10 rounded-full hover:bg-fuchsia-200/40 border border-fuchsia-200/40 transition disabled:opacity-30"
              onClick={() => !animating && handleChange((current - 1 + reviews.length) % reviews.length, "prev")}
              disabled={animating}
            >
              <span className="sr-only">Previous</span>
              <svg width={23} height={23} className="text-fuchsia-700" fill="none" viewBox="0 0 23 23"><path stroke="currentColor" strokeWidth={2} d="M14.5 18.5 8.5 12.5l6-6"/></svg>
            </button>
            <button
              aria-label="Next review"
              className="p-2 bg-primary/10 rounded-full hover:bg-fuchsia-200/40 border border-fuchsia-200/40 transition disabled:opacity-30"
              onClick={() => !animating && handleChange((current + 1) % reviews.length, "next")}
              disabled={animating}
            >
              <span className="sr-only">Next</span>
              <svg width={23} height={23} className="text-fuchsia-700" fill="none" viewBox="0 0 23 23"><path stroke="currentColor" strokeWidth={2} d="M8.5 4.5L14.5 10.5l-6 6"/></svg>
            </button>
          </div>
          {/* Dots */}
          <div className="flex gap-2 mt-4 justify-center">
            {reviews.map((_, i) => (
              <span
                key={i}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-200 ${
                  i === current ? "bg-fuchsia-500 scale-110" : "bg-fuchsia-200"
                }`}
                onClick={() => !animating && setCurrent(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewCarousel;
