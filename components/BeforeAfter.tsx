import React from 'react';
import { Section } from './ui/Section';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const CASES = [
  {
    id: 1,
    title: "Bridal Harmony",
    category: "Veneers",
    image: "/images/bridal-makeover.png",
    desc: "Radiance restored for a lifelong memory."
  },
  {
    id: 2,
    title: "Alignment Correction",
    category: "Invisalign",
    image: "/images/smile-alignment.png",
    desc: "Non-invasive architectural realignment."
  },
  {
    id: 3,
    title: "Full Mouth Rehab",
    category: "Implants",
    image: "/images/dental-implants.png",
    desc: "Biomimetic functional restoration."
  },
  {
    id: 4,
    title: "Natural Brightening",
    category: "Whitening",
    image: "/images/teeth-whitening.png",
    desc: "Enhancing the natural shade without damage."
  }
];

export const BeforeAfter: React.FC = () => {
  return (
    <Section className="bg-pearl-100 py-32 relative overflow-hidden">

      {/* Atmospheric Light */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sage-400/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="font-sans font-bold text-xs tracking-widest text-bronze-500">004</span>
              <div className="h-[1px] w-8 bg-bronze-500/30"></div>
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-espresso-900/60">Portfolio</span>
            </div>
            <h2 className="font-serif text-4xl md:text-7xl text-espresso-900 leading-[0.9]">
              Curated <br />
              <span className="italic text-bronze-500">Transformations.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CASES.map((item) => (
            <TiltCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </Section>
  );
};

const TiltCard: React.FC<{ item: any }> = ({ item }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const xPct = (event.clientX - left) / width - 0.5;
    const yPct = (event.clientY - top) / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);
  const sheenX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const sheenY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
      }}
      className="w-full h-full"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-white shadow-xl shadow-espresso-900/5 cursor-pointer group"
      >
        {/* Image Layer */}
        <div style={{ transform: "translateZ(0px)" }} className="absolute inset-0">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover scale-110 transition-transform duration-[1.5s] group-hover:scale-100 grayscale-[10%] sepia-[10%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/60 pb-12 via-transparent to-transparent opacity-60" />
        </div>

        {/* Floating Content */}
        <div style={{ transform: "translateZ(30px)" }} className="absolute bottom-8 left-8 right-8 pointer-events-none">
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 text-white border border-white/20">
            <ArrowUpRight size={16} />
          </div>
          <span className="text-[10px] uppercase tracking-widest text-pearl-100 font-bold mb-2 block">{item.category}</span>
          <h3 className="font-serif text-2xl text-white leading-tight">{item.title}</h3>
        </div>

        {/* Glass Sheen */}
        <motion.div
          style={{
            transform: "translateZ(20px)",
            background: `radial-gradient(circle at ${sheenX} ${sheenY}, rgba(255,255,255,0.4) 0%, transparent 60%)`,
            opacity: 0.4
          }}
          className="absolute inset-0 pointer-events-none mix-blend-overlay"
        />
      </motion.div>
    </motion.div>
  );
};