import React, { useRef } from 'react';
import { Section } from './ui/Section';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TEAM } from '../constants';
import { Plus } from 'lucide-react';

export const Doctor: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

  const founder = TEAM[0];
  const teamMembers = TEAM.slice(1);

  return (
    <Section id="doctor" className="bg-sage-50 py-32 md:py-48 relative overflow-hidden rounded-[4rem] my-8 max-w-[98%] mx-auto">

      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sage-200/50 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />

      <div className="relative z-10 flex items-center gap-4 mb-20 px-4">
        <span className="font-sans font-bold text-xs tracking-widest text-teal-900">003</span>
        <div className="h-[1px] w-8 bg-teal-900/20"></div>
        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-teal-900/60 font-semibold">The Collective</span>
      </div>

      {/* Founder Section */}
      <div ref={containerRef} className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center px-4 mb-32">

        {/* Left: Content */}
        <motion.div style={{ y: textY }} className="lg:col-span-5 order-2 lg:order-1">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl md:text-7xl text-teal-900 mb-10 leading-[0.95]"
          >
            Long short story.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8 font-sans text-teal-800 leading-relaxed font-light"
          >
            <p className="text-lg text-teal-900 font-medium">
              Nestled in the lush, serene lanes of Koregaon Park, Pune, Dental Kraft is led by {founder.name}.
            </p>
            <p>
              With {founder.experience} of practice, Dr. Hingorani is a senior clinician known for comprehensive and advanced dental care.
              Standing in a tranquil corner away from the city's noise, he focuses on long-term patient health and treatment success.
            </p>
            <blockquote className="relative p-8 bg-white rounded-3xl shadow-lg shadow-teal-900/5 border border-sage-100 hover:shadow-xl transition-shadow duration-300">
              <span className="absolute top-0 left-0 text-7xl text-terracotta-400 opacity-20 font-serif leading-none -translate-x-2 -translate-y-4">"</span>
              <p className="italic text-teal-900 font-serif text-xl relative z-10">
                Great dentistry is invisible. You only see confidence.
              </p>
            </blockquote>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ x: 10 }}
            className="mt-12 text-[10px] uppercase tracking-[0.2em] font-bold text-terracotta-500 border-b border-terracotta-500 pb-2 hover:text-teal-900 hover:border-teal-900 transition-all duration-300"
          >
            Read The Founder's Story
          </motion.button>
        </motion.div>

        {/* Right: Founder Image */}
        <div className="lg:col-span-7 order-1 lg:order-2 perspective-1000">
          <motion.div
            style={{ y: imageY }}
            initial={{ clipPath: 'inset(10% 10% 10% 10%)', rotateY: 5 }}
            whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl"
          >
            {/* Decorative Corner Triangle */}
            <div className="absolute -top-6 -right-6 w-32 h-32 z-10 hidden md:block">
              <svg viewBox="0 0 100 100" className="fill-terracotta-500">
                <path d="M0 0 L100 0 L100 100 Z" />
              </svg>
            </div>

            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
              src={founder.image}
              alt={founder.name}
              className="w-full h-full object-cover object-top grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
            />

            <div className="absolute bottom-8 left-8 bg-teal-950/90 backdrop-blur-md p-8 rounded-3xl max-w-xs z-20 border border-white/10 shadow-lg">
              <p className="font-serif text-xl italic text-white">{founder.name}</p>
              <p className="text-[10px] uppercase tracking-widest text-terracotta-500 mt-2 font-bold">{founder.role}</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Team Section */}
      <div className="px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-t border-teal-900/10 pt-12">
          <h3 className="font-serif text-3xl md:text-5xl text-teal-900">Meet the <br /><span className="italic text-terracotta-500">Experts.</span></h3>
          <p className="text-teal-900/60 font-sans font-light max-w-xs text-sm mt-4 md:mt-0">
            A team of specialists dedicated to precision, comfort, and the art of dentistry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((doctor, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-sage-200 hover:border-terracotta-500/50 hover:shadow-xl transition-all duration-500"
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                {/* Floating Tag */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-teal-900 border border-white/20">
                  {doctor.experience}
                </div>
              </div>

              <div className="p-8 relative">
                {/* Interactive Plus Button */}
                <div className="absolute -top-6 right-6 w-12 h-12 bg-terracotta-500 rounded-full flex items-center justify-center text-white shadow-lg group-hover:bg-teal-900 transition-colors duration-300">
                  <Plus size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                </div>

                <h4 className="font-serif text-xl text-teal-900 mb-2">{doctor.name}</h4>
                <p className="text-[10px] uppercase tracking-widest text-terracotta-500 font-bold mb-4">{doctor.role}</p>
                <p className="text-sm text-teal-800/60 font-light leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all">
                  {doctor.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </Section>
  );
};