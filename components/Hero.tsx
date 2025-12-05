import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Play } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Staggered Text Variants
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVars = {
    hidden: { y: 100, opacity: 0, rotateX: -20 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: { type: "spring", stiffness: 70, damping: 20 }
    }
  };

  return (
    <div ref={containerRef} className="relative h-[110vh] w-full bg-teal-950 text-white rounded-b-[4rem] md:rounded-b-[5rem] overflow-hidden shadow-2xl z-20 perspective-1000">

      {/* Parallax Background Image */}
      <motion.div style={{ y, opacity, scale }} className="absolute inset-0 z-0 select-none">
        <div className="absolute inset-0 bg-teal-900/40 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-950/90 via-teal-950/20 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-transparent to-transparent z-10" />

        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
          alt="Dental Kraft Experience"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-20 h-full flex flex-col justify-center max-w-screen-2xl mx-auto px-6 md:px-12 pt-20 pb-32">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">

          {/* Left: Text Content */}
          <div className="lg:col-span-8">
            {/* Section Marker */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="font-sans font-bold text-xs tracking-widest text-terracotta-500">001</span>
              <div className="h-[1px] w-8 bg-white/30"></div>
              <span className="font-sans text-[11px] uppercase tracking-[0.2em] opacity-80 font-medium">Welcome to Dental Kraft</span>
            </motion.div>

            <div className="overflow-hidden pb-4">
              <motion.h1
                variants={containerVars}
                initial="hidden"
                animate="visible"
                className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-[7.5rem] leading-[0.95] md:leading-[0.9] tracking-tight mb-6 md:mb-8 perspective-1000"
              >
                <motion.div variants={itemVars} className="block">Where Precision</motion.div>
                <motion.div variants={itemVars} className="block">
                  <span className="italic font-light text-white/90">Meets a Beautiful</span>
                </motion.div>
                <motion.div variants={itemVars} className="block text-terracotta-400">Smile.</motion.div>
              </motion.h1>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 md:gap-8 md:items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button variant="terracotta" className="w-full sm:w-auto">Book Consultation</Button>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-teal-900 transition-colors duration-300 backdrop-blur-sm group relative overflow-hidden mx-auto sm:mx-0"
                  aria-label="Watch video"
                >
                  <Play size={16} className="ml-1 fill-white group-hover:fill-teal-900 transition-colors relative z-10" />
                </motion.button>
              </motion.div>
            </div>
          </div>

          {/* Right: Intro Text Block */}
          <div className="lg:col-span-4 pb-4">
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="font-sans text-sm md:text-base font-light leading-relaxed text-white/80 border-l border-terracotta-500 pl-6 backdrop-blur-sm"
            >
              Every smile is crafted. Every detail matters. Welcome to Dental Kraft — an upscale destination for modern dentistry, led by Dr. Hingorani, where science and aesthetics come together.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Bottom Floating Stats Bar (Glassmorphism + Continuous 3D Float) */}
      <div className="absolute bottom-12 left-6 right-6 z-30 hidden md:block">
        <div className="max-w-screen-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: 1,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: { delay: 1.8, duration: 1 },
              y: { repeat: Infinity, duration: 6, ease: "easeInOut" }
            }}
            whileHover={{ scale: 1.02 }}
            className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-full px-12 py-8 flex justify-between items-center shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.1)] transition-shadow duration-500"
          >
            <div className="flex gap-20">
              {[
                { label: 'Patients', value: '90K+' },
                { label: 'Cases', value: '4K+' },
                { label: 'Dentists', value: '30' },
                { label: 'Reviews', value: '200K+' }
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <p className="font-serif text-3xl font-medium text-white italic group-hover:text-terracotta-400 transition-colors duration-300">{stat.value}</p>
                  <p className="text-[10px] uppercase tracking-widest text-terracotta-400 font-sans font-bold translate-y-1 group-hover:text-white transition-colors duration-300">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 cursor-pointer group">
              <span className="text-[10px] uppercase tracking-[0.2em] opacity-60 font-semibold group-hover:opacity-100 transition-opacity">Scroll Down</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/10 group-hover:bg-terracotta-500 group-hover:border-terracotta-500 transition-colors duration-300"
              >
                <ArrowDown size={16} className="text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
