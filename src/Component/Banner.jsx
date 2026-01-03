import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "https://www.searchenginejournal.com/wp-content/uploads/2025/03/top-gen-ai-models-563.jpg",
    title: "Revolutionizing AI Models",
    subtitle: "Explore the power of next-gen artificial intelligence and deep learning."
  },
  {
    id: 2,
    image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1PNAH4.img?w=1500&h=750&m=4&q=70",
    title: "Smarter Solutions, Faster Results",
    subtitle: "Empowering innovation through high-performance automation and cloud intelligence."
  },
  {
    id: 3,
    image: "https://www.slideteam.net/media/catalog/product/cache/1280x720/a/i/ai_models_powerpoint_ppt_template_bundles_slide01.jpg",
    title: "Transform Ideas Into Reality",
    subtitle: "Seamlessly integrate AI into your business operations with precision."
  },
  {
    id: 4,
    image: "https://tse4.mm.bing.net/th/id/OIP.0SL-4rDrIKmXSl_CtAcozgHaFL?w=707&h=495&rs=1&pid=ImgDetMain&o=7&rm=3",
    title: "Innovation That Inspires",
    subtitle: "The future is here — embrace the continuous evolution of digital neural networks."
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // For sliding effect direction

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

 return (
    <section className="relative w-full overflow-hidden">
      {/* Background Decor - Aligned to flow from under navbar */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-blue-500/10 blur-[120px] -z-10 rounded-full" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="relative h-[500px] md:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 group">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              <motion.img
                src={slides[current].image}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 8 }}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-16 lg:p-24">
                <motion.div 
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="max-w-2xl"
                >
                  <span className="inline-block px-4 py-1 rounded-full bg-blue-600/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md border border-blue-500/30">
                    AI Future Tech
                  </span>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
                    {slides[current].title}
                  </h1>
                  <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
                    {slides[current].subtitle}
                  </p>
                  <button className="btn bg-blue-600 hover:bg-blue-700 text-white border-none rounded-xl px-10 h-14 text-lg shadow-xl shadow-blue-600/30 transition-all">
                    Explore Models
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation and Progress Bars remain logic-heavy and professional as before */}
          {/* ... (Previous Logic for buttons and dots) ... */}
        </div>
      </div>
    </section>
  );
};

export default Banner;