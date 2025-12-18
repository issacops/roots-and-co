import React, { useRef } from 'react';
import { Section } from './ui/Section';
import { PROCESS_STEPS } from '../constants';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Scan, PenTool, Sparkles, ShieldCheck } from 'lucide-react';

const ICONS = [Scan, PenTool, Sparkles, ShieldCheck];

export const Philosophy: React.FC = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);
    const textParallax = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <section ref={targetRef} id="philosophy" className="relative h-[400vh] bg-pearl-100">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">

                {/* Washi Texture Background */}
                <div className="absolute inset-0 bg-washi opacity-30" />

                {/* Parallax Background Title */}
                <motion.div
                    style={{ x: textParallax }}
                    className="absolute left-[5vw] top-[15vh] whitespace-nowrap opacity-[0.03] select-none pointer-events-none"
                >
                    <span className="font-serif text-[25vw] leading-none text-espresso-900 tracking-tighter">Biomimetic</span>
                </motion.div>

                <div className="absolute left-16 top-16 z-20">
                    <span className="font-serif text-3xl md:text-5xl text-espresso-900 opacity-90">
                        The Philosophy
                    </span>
                </div>

                <motion.div style={{ x }} className="flex gap-12 md:gap-32 pl-[15vw] items-center h-full relative z-10">

                    {/* Intro Card */}
                    <div className="w-[30vw] md:w-[25vw] shrink-0 pr-12">
                        <h3 className="font-serif text-4xl md:text-6xl text-espresso-900 leading-none mb-8">
                            The Art of <br /><span className="italic text-bronze-500">Permanence.</span>
                        </h3>
                        <p className="font-sans text-espresso-800/70 leading-relaxed font-light text-lg">
                            We believe dentistry is structural engineering. We rebuild your smile from the roots up, ensuring function precedes aesthetics.
                        </p>
                    </div>

                    {PROCESS_STEPS.map((step, idx) => {
                        const Icon = ICONS[idx % ICONS.length];
                        return (
                            <div key={step.number} className="relative w-[80vw] md:w-[450px] h-[60vh] flex-shrink-0 group">
                                <div className="absolute inset-0 bg-pearl-50 rounded-[2rem] overflow-hidden shadow-2xl shadow-stone-200/50 transition-transform duration-700 hover:-translate-y-4 border border-white">
                                    <div className="relative h-1/2 overflow-hidden">
                                        <motion.div
                                            className="absolute inset-0 bg-stone-200"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 1.2, ease: "easeOut" }}
                                        >
                                            <img src={step.image} alt={step.title} className="w-full h-full object-cover grayscale-[30%] sepia-[20%] group-hover:grayscale-0 transition-all duration-700" />
                                        </motion.div>
                                        <div className="absolute top-6 left-6 w-12 h-12 bg-pearl-100/90 backdrop-blur-md rounded-full flex items-center justify-center text-espresso-900 shadow-sm">
                                            <Icon size={20} />
                                        </div>
                                    </div>
                                    <div className="h-1/2 p-10 flex flex-col justify-between bg-pearl-50 relative z-10 overflow-hidden">
                                        <span className="absolute -top-8 right-4 font-serif text-[6rem] leading-none text-pearl-200/50 pointer-events-none select-none">
                                            {step.number}
                                        </span>
                                        <div>
                                            <h3 className="font-serif text-3xl text-espresso-900 mb-4">{step.title}</h3>
                                            <p className="font-sans text-espresso-800/60 font-light text-sm leading-relaxed">{step.description}</p>
                                        </div>
                                        <div className="w-full h-[1px] bg-stone-200 group-hover:bg-bronze-500 transition-colors duration-500"></div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    {/* End Card */}
                    <div className="w-[30vw] shrink-0 flex items-center justify-center px-12">
                        <div className="text-center">
                            <h4 className="font-serif text-4xl text-espresso-900 mb-6">Begin Preservation</h4>
                            <button className="px-8 py-4 bg-espresso-900 text-pearl-100 rounded-full text-xs uppercase tracking-widest hover:bg-bronze-500 transition-colors duration-300">
                                Book Consultation
                            </button>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};