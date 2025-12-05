import React, { useRef, useState } from 'react';
import { Section } from './ui/Section';
import { TREATMENTS, DETAILED_SERVICES } from '../constants';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Sparkles, ChevronRight } from 'lucide-react';

interface TiltCardProps {
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

// 3D Tilt Card Component
const TiltCard: React.FC<TiltCardProps> = ({ children, className = '', onClick }) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [12, -12]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-12, 12]);
    const scale = useTransform(mouseY, [-0.5, 0.5], [1.02, 1.02]); // Subtle scale on interaction

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;
        const xPct = (clickX / width) - 0.5;
        const yPct = (clickY / height) - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                scale
            }}
            onClick={onClick}
            className={`perspective-1000 ${className}`}
        >
            <div className="w-full h-full [transform-style:preserve-3d]">
                {children}
            </div>
        </motion.div>
    );
};

export const Treatments: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    return (
        <Section id="treatments" className="bg-white py-32 perspective-1000">

            <div className="flex items-center gap-4 mb-12">
                <span className="font-sans font-bold text-xs tracking-widest text-teal-900">004</span>
                <div className="h-[1px] w-8 bg-teal-900/20"></div>
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-teal-900/60 font-semibold">Our Expertise</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-[320px] sm:auto-rows-[340px] mb-20 sm:mb-32">

                {/* Card 1: Main Title Block (Sage Green) */}
                <TiltCard className="md:col-span-2 row-span-2">
                    <div className="h-full bg-sage-100 rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-12 flex flex-col justify-between group hover:shadow-2xl hover:shadow-sage-200 transition-all duration-500 relative overflow-hidden">
                        {/* Texture */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-white/60 to-transparent opacity-50 pointer-events-none -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10 [transform:translateZ(40px)]">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-900/5 border border-teal-900/10 mb-8 backdrop-blur-sm">
                                <Sparkles size={14} className="text-terracotta-500" />
                                <span className="text-[10px] uppercase tracking-wider font-bold text-teal-900">Signature Service</span>
                            </div>
                            <h2 className="font-serif text-5xl sm:text-6xl md:text-8xl text-teal-900 leading-[0.9] tracking-tight mb-4 sm:mb-6">
                                Cosmetic <br /> Dentistry
                            </h2>
                            <p className="text-lg text-teal-800 font-light max-w-md leading-relaxed">
                                Restore. Enhance. Perfect. <br />
                                We combine science and art to craft smiles that look naturally flawless.
                            </p>
                        </div>
                        <div className="flex justify-between items-end relative z-10 [transform:translateZ(20px)]">
                            <div className="flex gap-3 flex-wrap">
                                {['Veneers', 'Bonding', 'Whitening'].map(tag => (
                                    <span key={tag} className="px-6 py-3 rounded-full bg-white border border-sage-200 text-xs uppercase tracking-wider text-teal-900 font-bold shadow-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="w-20 h-20 rounded-full bg-teal-900 text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-terracotta-500 transition-all duration-300 shadow-xl cursor-pointer">
                                <ArrowUpRight size={28} />
                            </div>
                        </div>
                    </div>
                </TiltCard>

                {/* Card 2: Image Card */}
                <TiltCard>
                    <div className="h-full relative bg-neutral-200 rounded-[3rem] overflow-hidden group shadow-lg">
                        <img
                            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop"
                            alt="Dental Implants"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 [transform:translateZ(0px)]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-teal-950/90 via-transparent to-transparent flex flex-col justify-end p-10 [transform:translateZ(30px)]">
                            <h3 className="font-serif text-3xl text-white">Dental Implants</h3>
                            <p className="text-white/70 text-sm mt-2 font-light">Permanent, natural restoration.</p>
                        </div>
                    </div>
                </TiltCard>

                {/* Card 3: Deep Teal Card (Aligners) */}
                <TiltCard>
                    <div className="h-full bg-teal-900 rounded-[3rem] p-10 flex flex-col justify-between text-white group hover:bg-teal-800 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-teal-900/40">
                        <div className="flex justify-between items-start [transform:translateZ(30px)]">
                            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-terracotta-500 group-hover:scale-110 transition-transform">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                            </div>
                            <ArrowUpRight className="text-white/30 group-hover:text-white transition-colors" />
                        </div>
                        <div className="[transform:translateZ(20px)]">
                            <h3 className="font-serif text-3xl mb-3">Invisible Aligners</h3>
                            <p className="text-white/60 text-sm font-light leading-relaxed">
                                Clear, comfortable straightening without metal braces.
                            </p>
                        </div>
                    </div>
                </TiltCard>

                {/* Card 4: Terracotta Card (Pediatric - Pop of Color) */}
                <TiltCard>
                    <div className="h-full bg-terracotta-500 rounded-[3rem] p-10 flex flex-col justify-between group text-white shadow-xl hover:bg-terracotta-600 transition-all duration-300 hover:shadow-2xl hover:shadow-terracotta-500/40">
                        <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform [transform:translateZ(40px)]">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                        </div>
                        <div className="[transform:translateZ(20px)]">
                            <h3 className="font-serif text-3xl mb-3">Pediatric</h3>
                            <p className="text-white/80 text-sm font-light">Gentle care for little smiles.</p>
                        </div>
                    </div>
                </TiltCard>

                {/* Card 5: Interaction / Booking Card (White with Border) */}
                <TiltCard className="md:col-span-1">
                    <div className="h-full bg-white border border-neutral-200 rounded-[3rem] p-10 flex flex-col justify-center items-center text-center text-teal-900 group cursor-pointer hover:border-terracotta-500 transition-all duration-500 relative overflow-hidden shadow-sm hover:shadow-2xl">
                        <div className="absolute inset-0 bg-noise opacity-30"></div>
                        <div className="relative z-10 [transform:translateZ(30px)]">
                            <h3 className="font-serif text-4xl mb-6 group-hover:text-terracotta-500 transition-colors">Book Online</h3>
                            <p className="text-teal-900/60 text-sm mb-8 font-light">Schedule your visit in less than 2 minutes.</p>
                            <div className="w-20 h-20 rounded-full bg-teal-900 text-white mx-auto flex items-center justify-center group-hover:scale-110 group-hover:bg-terracotta-500 transition-all duration-300">
                                <ArrowRight size={28} />
                            </div>
                        </div>
                    </div>
                </TiltCard>
            </div>

            {/* Clinical Excellence - Typography List Section */}
            <div className="mt-20 border-t border-neutral-200 pt-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4">
                        <h3 className="font-serif text-4xl text-teal-900 mb-6">Clinical <br /> Excellence</h3>
                        <p className="text-teal-800/60 font-sans font-light leading-relaxed mb-8">
                            Beyond aesthetics, we specialize in comprehensive oral health treatments delivered with precision and comfort.
                        </p>
                    </div>
                    <div className="lg:col-span-8">
                        <div className="space-y-4">
                            {DETAILED_SERVICES.map((category, idx) => (
                                <div
                                    key={idx}
                                    className="group border-b border-neutral-200 pb-8 hover:border-teal-900 transition-colors duration-500 cursor-default"
                                    onMouseEnter={() => setActiveCategory(category.category)}
                                    onMouseLeave={() => setActiveCategory(null)}
                                >
                                    <div className="flex justify-between items-center mb-4">
                                        <h4 className="font-serif text-2xl md:text-3xl text-teal-900/40 group-hover:text-teal-900 transition-colors duration-300">
                                            {category.category}
                                        </h4>
                                        <ChevronRight className="text-teal-900/20 group-hover:text-terracotta-500 transition-all duration-300 group-hover:translate-x-2" />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-40 opacity-0 group-hover:opacity-100">
                                        {category.items.map((item, i) => (
                                            <div key={i} className="flex items-center gap-2 text-teal-800/70 font-sans text-sm">
                                                <div className="w-1 h-1 bg-terracotta-500 rounded-full"></div>
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </Section>
    );
};