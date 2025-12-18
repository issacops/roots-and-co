import React, { useRef, useState } from 'react';
import { Section } from './ui/Section';
import { TREATMENTS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Treatments: React.FC = () => {
    const [activeTreatment, setActiveTreatment] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            });
        }
    };

    return (
        <Section id="treatments" className="bg-pearl-100 py-32 relative z-20 min-h-screen">
            {/* Soft Light Leak */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bronze-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                <div className="max-w-xl">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="font-sans font-bold text-xs tracking-widest text-bronze-500">002</span>
                        <div className="h-[1px] w-12 bg-bronze-500/30"></div>
                        <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-espresso-900/60 font-bold">The Collections</span>
                    </div>
                    <h2 className="font-serif text-5xl md:text-7xl text-espresso-900 leading-[0.9]">
                        Curated <span className="italic text-bronze-500">Care.</span>
                    </h2>
                </div>
                <div className="md:w-1/3 text-espresso-800/70 font-sans font-light text-sm leading-relaxed">
                    A suite of micro-precision treatments designed to restore the structural integrity and aesthetic harmony of your smile.
                </div>
            </div>

            <div
                ref={containerRef}
                onMouseMove={handleMouseMove}
                className="relative border-t border-espresso-900/10"
            >
                {TREATMENTS.map((treatment, idx) => (
                    <div
                        key={treatment.id}
                        onMouseEnter={() => setActiveTreatment(idx)}
                        onMouseLeave={() => setActiveTreatment(null)}
                        className="group relative py-12 border-b border-espresso-900/10 cursor-pointer transition-colors hover:bg-white/40"
                    >
                        <div className="flex flex-col md:flex-row items-baseline justify-between gap-8 relative z-10 px-4">
                            <div className="flex items-baseline gap-8 md:w-1/2">
                                <span className="font-serif text-2xl text-espresso-900/20 font-light group-hover:text-bronze-500 transition-colors duration-500">
                                    0{idx + 1}
                                </span>
                                <h3 className="font-serif text-4xl md:text-5xl text-espresso-900 group-hover:translate-x-4 transition-transform duration-500 font-light">
                                    {treatment.title}
                                </h3>
                            </div>

                            <div className="md:w-1/3 flex items-center justify-between opacity-0 md:opacity-100 md:group-hover:opacity-100 transition-opacity duration-500">
                                <p className="font-sans text-espresso-800/60 font-light text-sm max-w-xs">{treatment.description}</p>
                                <div className="p-3 bg-espresso-900 text-pearl-100 rounded-full -rotate-45 group-hover:rotate-0 transition-transform duration-500 group-hover:bg-bronze-500">
                                    <ArrowRight size={20} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Floating Image Reveal */}
                <motion.div
                    className="fixed top-0 left-0 w-[300px] h-[200px] md:w-[400px] md:h-[300px] rounded-[2rem] overflow-hidden pointer-events-none z-50 hidden md:block shadow-2xl"
                    style={{
                        x: mousePos.x,
                        y: mousePos.y,
                        opacity: activeTreatment !== null ? 1 : 0,
                        position: 'absolute',
                        top: 20,
                        left: 20,
                        rotate: mousePos.x * 0.02
                    }}
                    transition={{ type: "tween", ease: "backOut", duration: 0.4 }}
                >
                    <AnimatePresence mode="wait">
                        {activeTreatment !== null && (
                            <motion.img
                                key={activeTreatment}
                                initial={{ scale: 1.1, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 1.1, opacity: 0 }}
                                src="/images/hero-bg.png" // Using hero-bg as fallback/placeholder for the high-fashion feel
                                alt="Treatment visualization"
                                className="w-full h-full object-cover sepia-[20%] brightness-110"
                            />
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </Section>
    );
};