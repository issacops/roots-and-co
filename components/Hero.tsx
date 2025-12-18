import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './ui/Button';
import { Magnetic } from './ui/Magnetic';
import { TextReveal } from './ui/TextReveal';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-screen w-full pt-32 pb-12 overflow-hidden z-20">

      {/* Container */}
      <div className="container mx-auto px-6 md:px-12 h-full flex flex-col justify-between">

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 md:mt-16 items-start">

          {/* Left: Typography */}
          <div className="lg:col-span-8 relative z-20">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="inline-block px-3 py-1 border border-bronze-500/30 rounded-full text-[10px] uppercase tracking-[0.2em] text-bronze-600 mb-8 backdrop-blur-sm"
            >
              Micro-Endodontic Center
            </motion.span>

            <h1 className="font-serif text-6xl md:text-8xl lg:text-[9rem] leading-[0.9] text-espresso-900 mb-10 -ml-1">
              <TextReveal type="chars" delay={0.2}>The Architects</TextReveal>
              <br />
              <span className="text-bronze-500 italic block pl-4 md:pl-0">
                <TextReveal type="chars" delay={0.8}>of the Smile.</TextReveal>
              </span>
            </h1>

            <div className="flex flex-col md:flex-row gap-12 items-start max-w-2xl">
              <p className="font-sans text-lg font-light leading-relaxed text-espresso-800/80 md:w-2/3">
                We don't just treat teeth; we preserve the foundation of your health.
                A sanctuary where microscopic precision meets biomimetic artistry.
              </p>

              <Magnetic>
                <Button href="#contact" className="bg-espresso-900 text-pearl-100 hover:bg-bronze-500 transition-colors duration-500 px-8 py-4 text-xs tracking-widest uppercase">
                  Begin Journey
                </Button>
              </Magnetic>
            </div>
          </div>

          {/* Right: Abstract/Visual */}
          <div className="lg:col-span-4 relative mt-12 lg:mt-0">
            <motion.div
              style={{ y, opacity }}
              className="relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-t-[10rem] rounded-b-[2rem]"
            >
              <img
                src="/images/hero-bg.png"
                alt="Dr. Bastin working with Microscope"
                className="w-full h-full object-cover grayscale-[20%] sepia-[10%] opacity-90 hover:scale-105 transition-transform duration-[2s]"
              />

              {/* Overlay Gradient for Text Readability if needed, but keeping it light */}
              <div className="absolute inset-0 bg-gradient-to-t from-pearl-100/50 to-transparent mix-blend-overlay"></div>
            </motion.div>

            {/* Floating Label */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5 }}
              className="absolute -bottom-6 -left-12 bg-pearl-100/80 backdrop-blur-md p-6 rounded-tr-3xl rounded-bl-3xl border border-white max-w-[200px] hidden md:block"
            >
              <span className="block font-serif text-2xl text-espresso-900">20x</span>
              <span className="text-[10px] uppercase tracking-widest text-bronze-600">Magnification Precision</span>
            </motion.div>
          </div>
        </div>

        {/* Footer of Hero */}
        <div className="mt-24 border-t border-espresso-900/10 pt-8 flex justify-between items-end opacity-60">
          <div className="hidden md:block text-[10px] uppercase tracking-widest text-espresso-900">
            Kochi, Kerala
          </div>
          <div className="flex gap-8">
            {['Biomimetic', 'Microscopic', 'Aesthetic'].map(tag => (
              <span key={tag} className="text-[10px] uppercase tracking-widest text-espresso-900 relative before:content-['•'] before:mr-2 before:text-bronze-500">
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
