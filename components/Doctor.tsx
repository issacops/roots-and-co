import React, { useRef } from 'react';
import { Section } from './ui/Section';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TEAM } from '../constants';
import { TextReveal } from './ui/TextReveal';

export const Doctor: React.FC = () => {
  return (
    <div id="doctor" className="bg-pearl-100 relative pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12 mb-12">
        <span className="font-sans text-xs uppercase tracking-[0.3em] text-bronze-500 block mb-4">The Architects</span>
        <h2 className="font-serif text-5xl md:text-7xl text-espresso-900">Leadership<span className="text-bronze-500">.</span></h2>
      </div>
      {TEAM.map((doc, idx) => (
        <DoctorProfile key={doc.name} doc={doc} idx={idx} />
      ))}
    </div>
  );
};

const DoctorProfile: React.FC<{ doc: any, idx: number }> = ({ doc, idx }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} className="min-h-[80vh] flex items-center py-12 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center`}>

          {/* Image Column */}
          <div className={`lg:col-span-5 relative ${idx % 2 === 1 ? 'lg:col-start-8' : ''}`}>
            <motion.div
              style={{ y }}
              className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl shadow-espresso-900/10"
            >
              <img
                src={doc.image}
                alt={doc.name}
                className="w-full h-full object-cover grayscale-[10%] sepia-[15%] transition-all duration-700 hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-pearl-100/90 backdrop-blur-xl border border-white/50 p-6 rounded-xl">
                <span className="block font-sans text-[10px] font-bold tracking-widest text-bronze-600 uppercase mb-1">{doc.role}</span>
                <div className="h-[1px] w-full bg-espresso-900/10 my-3"></div>
                <span className="block font-sans text-[10px] text-espresso-900/80">{doc.experience}</span>
              </div>
            </motion.div>
          </div>

          {/* Text Column */}
          <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
            <div className="mb-8">
              <div className="h-[1px] w-16 bg-espresso-900/30 mb-8" />
              <h2 className="font-serif text-5xl md:text-7xl text-espresso-900 leading-[0.9] mb-8">
                <TextReveal type="words" delay={0.2}>{doc.name}</TextReveal>
              </h2>
            </div>

            <div className="pl-6 md:pl-12 border-l border-espresso-900/10">
              <p className="font-sans text-lg md:text-xl text-espresso-800/70 font-light leading-relaxed mb-12">
                {doc.bio}
              </p>

              <div className="flex gap-12">
                <div>
                  <span className="block font-serif text-3xl text-espresso-900">15+</span>
                  <span className="text-[10px] uppercase tracking-widest text-bronze-500">Years Exp.</span>
                </div>
                <div>
                  <span className="block font-serif text-3xl text-espresso-900">5k+</span>
                  <span className="text-[10px] uppercase tracking-widest text-bronze-500">Restorations</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}