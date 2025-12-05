import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import { ArrowUpRight, Plus } from 'lucide-react';

const CASES = [
  { 
    id: 1,
    title: "Bridal Makeover", 
    category: "Veneers",
    image: "https://images.unsplash.com/photo-1609840114035-1c290b777f3f?q=80&w=1000&auto=format&fit=crop", 
    desc: "Radiant confidence for her special day." 
  },
  { 
    id: 2,
    title: "Smile Alignment", 
    category: "Invisalign",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1000&auto=format&fit=crop", 
    desc: "Correcting spacing without metal braces." 
  },
  { 
    id: 3,
    title: "Full Restoration", 
    category: "Implants",
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=1000&auto=format&fit=crop", 
    desc: "Complete functional and aesthetic rehab." 
  },
  { 
    id: 4,
    title: "Brightening", 
    category: "Whitening",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop", 
    desc: "Laser whitening for a natural glow." 
  }
];

export const BeforeAfter: React.FC = () => {
  return (
    <Section className="bg-neutral-100 py-32 relative overflow-hidden">
      
      {/* Texture & Ambient Lighting */}
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none mix-blend-multiply" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-900/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-terracotta-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <span className="font-sans font-bold text-xs tracking-widest text-teal-900">005</span>
                    <div className="h-[1px] w-8 bg-teal-900/20"></div>
                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-teal-900/60">Portfolio</span>
                </div>
                <h2 className="font-serif text-5xl md:text-7xl text-teal-900 leading-[0.9]">
                Real stories, <br/>
                <span className="italic text-terracotta-500">Real smiles.</span>
                </h2>
            </div>
            
            <div className="flex items-center gap-4">
                <p className="text-neutral-500 font-sans font-light text-sm max-w-xs leading-relaxed text-right hidden md:block">
                    Explore our gallery of transformations. <br/>
                    Each smile is a masterpiece of precision and art.
                </p>
                <motion.button 
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  className="w-16 h-16 rounded-full border border-teal-900/20 flex items-center justify-center text-teal-900 hover:bg-teal-900 hover:text-white transition-colors duration-300"
                >
                    <Plus size={20} />
                </motion.button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {CASES.map((item, i) => (
             <motion.div
               key={item.id}
               className="group relative aspect-[3/4] rounded-[3rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               whileHover={{ y: -10 }}
               transition={{ delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
               viewport={{ once: true }}
             >
                {/* Image Wrapper with Zoom Effect */}
                <div className="absolute inset-0 overflow-hidden bg-neutral-200">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    />
                </div>

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />

                {/* Floating Glass Card */}
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl flex justify-between items-center shadow-lg">
                       <div>
                            <span className="text-[10px] uppercase tracking-widest text-terracotta-500 font-bold mb-1 block">{item.category}</span>
                            <h3 className="font-serif text-lg text-white leading-tight">{item.title}</h3>
                       </div>
                       <div className="w-10 h-10 rounded-full bg-white text-teal-900 flex items-center justify-center">
                            <ArrowUpRight size={16} />
                       </div>
                    </div>
                </div>

                {/* Always visible label (fades out on hover) */}
                <div className="absolute bottom-8 left-8 transition-opacity duration-300 group-hover:opacity-0">
                    <h3 className="font-serif text-2xl text-white">{item.title}</h3>
                    <p className="text-white/60 text-xs mt-1 font-light tracking-wide">{item.desc}</p>
                </div>

             </motion.div>
           ))}
        </div>
      </div>
    </Section>
  );
};