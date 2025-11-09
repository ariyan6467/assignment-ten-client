import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "https://www.searchenginejournal.com/wp-content/uploads/2025/03/top-gen-ai-models-563.jpg",
    title: "Revolutionizing AI Models",
    subtitle: "Explore the power of next-gen artificial intelligence."
  },
  {
    id: 2,
    image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1PNAH4.img?w=1500&h=750&m=4&q=70",
    title: "Smarter Solutions, Faster Results",
    subtitle: "Empowering innovation through automation and intelligence."
  },
  {
    id: 3,
    image: "https://www.slideteam.net/media/catalog/product/cache/1280x720/a/i/ai_models_powerpoint_ppt_template_bundles_slide01.jpg",
    title: "Transform Ideas Into Reality",
    subtitle: "Seamlessly integrate AI into your business operations."
  },
  {
    id: 4,
    image: "https://critiqs.ai/wp-content/uploads/2025/11/AI-Models-Show-Surprising.jpg",
    title: "Innovation That Inspires",
    subtitle: "The future is here — embrace the evolution of AI."
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <div className="relative my-10 mx-32 rounded-2xl overflow-hidden shadow-2xl h-[600px]">
      <AnimatePresence>
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-10">
            <motion.h1
              className="text-white text-4xl font-bold mb-2 drop-shadow-lg"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {slides[current].title}
            </motion.h1>
            <motion.p
              className="text-gray-200 text-lg drop-shadow-md"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {slides[current].subtitle}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white btn btn-circle transition-all duration-300"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white btn btn-circle transition-all duration-300"
      >
        ❯
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === i ? "bg-white scale-125" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
