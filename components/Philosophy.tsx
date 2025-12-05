import React, { useRef } from 'react';
import { Section } from './ui/Section';
import { PROCESS_STEPS, TECHNOLOGIES } from '../constants';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Scan, PenTool, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

const ICONS = [Scan, PenTool, Sparkles, ShieldCheck];

export const Philosophy: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const blob1Y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div ref={containerRef} className="bg-teal-950 py-32 relative overflow-hidden">
      {/* Abstract Background Blur Parallax */}
      <motion.div style={{ y: blob1Y }} className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-teal-700/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse-slow" />
      <motion.div style={{ y: blob2Y }} className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-terracotta-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen animate-pulse-slow" />

      <Section className="relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <div>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-8"
                >
                    <span className="font-sans font-bold text-xs tracking-widest text-terracotta-500">002</span>
                    <div className="h-[1px] w-8 bg-white/20"></div>
                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/60 font-semibold">Our Philosophy</span>
                </motion.div>

                <motion.h2 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95]"
                >
                    The Kraft <br/> 
                    <span className="italic font-light text-terracotta-400">Process.</span>
                </motion.h2>
            </div>
            
            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-white/70 font-light max-w-sm mt-8 md:mt-0 font-sans leading-relaxed text-sm border-l border-white/10 pl-6"
            >
                A seamless journey from diagnosis to dazzling. 
                Structured, transparent, and designed entirely around you.
            </motion.p>
        </div>

        {/* Tall Cards Layout with Staggered Entry */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
            {PROCESS_STEPS.map((step, idx) => {
                const Icon = ICONS[idx % ICONS.length];
                return (
                    <motion.div
                        key={step.number}
                        initial={{ opacity: 0, y: 80, rotateX: 10 }}
                        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                        whileHover={{ y: -15, rotateX: 2, scale: 1.02 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.15, duration: 0.8, type: "spring", bounce: 0.4 }}
                        className="group relative h-[500px] rounded-[3rem] overflow-hidden shadow-xl border border-white/5"
                    >
                        {/* Background Image with Zoom Effect */}
                        <div className="absolute inset-0 z-0">
                           <img 
                              src={step.image} 
                              alt={step.title}
                              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0"
                           />
                           {/* Dark Gradient Overlay for text readability */}
                           <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-950/40 to-teal-950/10 opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
                        </div>

                        {/* Content Container */}
                        <div className="relative z-10 p-8 flex flex-col justify-between h-full">
                            
                            {/* Top: Step & Icon */}
                            <div className="flex justify-between items-start">
                                <div className="inline-block px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
                                    <span className="font-sans text-[10px] font-bold tracking-widest text-white group-hover:text-terracotta-400 transition-colors">
                                        STEP {step.number}
                                    </span>
                                </div>
                                <motion.div 
                                    className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md group-hover:bg-terracotta-500 group-hover:border-terracotta-500 transition-all duration-300"
                                >
                                    <Icon size={20} className="text-white group-hover:text-white transition-colors" />
                                </motion.div>
                            </div>

                            {/* Bottom: Text Content */}
                            <div>
                                <div className="w-12 h-[1px] bg-terracotta-500 mb-6 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                                
                                <h3 className="font-serif text-4xl text-white mb-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    {step.title}
                                </h3>
                                
                                <p className="font-sans text-sm text-white/70 leading-relaxed font-light mb-6 border-l border-white/20 pl-4 group-hover:text-white group-hover:border-terracotta-500 duration-300">
                                    {step.description}
                                </p>

                                <div className="flex items-center gap-3 text-terracotta-500 text-xs font-bold uppercase tracking-widest opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                    <span>Learn More</span>
                                    <ArrowRight size={14} />
                                </div>
                            </div>
                        </div>

                        {/* Hover Beam Effect */}
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </motion.div>
                );
            })}
        </div>

        {/* Technology Marquee Strip */}
        <div className="mt-32 border-t border-white/10 pt-16">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
                <div className="shrink-0">
                    <h4 className="font-serif text-2xl text-white">Quietly <br/><span className="italic text-white/50">Powerful.</span></h4>
                </div>
                
                <div className="flex-1 overflow-hidden relative">
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-teal-950 to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-teal-950 to-transparent z-10"></div>
                    
                    <motion.div 
                        className="flex gap-16 whitespace-nowrap"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    >
                        {[...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, i) => (
                            <div key={i} className="flex items-center gap-4 text-white/40 font-sans text-sm tracking-widest uppercase font-bold">
                                <span className="w-2 h-2 rounded-full bg-terracotta-500/50"></span>
                                {tech}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>

      </Section>
    </div>
  );
};