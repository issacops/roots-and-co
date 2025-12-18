import React from 'react';
import { Section } from './ui/Section';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export const Testimonials: React.FC = () => {
    return (
        <div className="bg-pearl-100/50 py-32 relative overflow-hidden border-t border-espresso-900/5">
            {/* Header - Fixed Container */}
            <div className="container mx-auto px-6 md:px-12 mb-20 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-espresso-900/10 pb-12">
                    <div className="space-y-4">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-bronze-500 font-bold">The Journal</span>
                        <h2 className="font-serif text-4xl md:text-6xl text-espresso-900 max-w-lg leading-tight">
                            Voices of <br /> <span className="italic text-bronze-500">Trust.</span>
                        </h2>
                    </div>
                    <div className="flex gap-2 mt-8 md:mt-0 items-center bg-white/50 px-6 py-3 rounded-full border border-espresso-900/5 backdrop-blur-sm">
                        {[1, 2, 3, 4, 5].map(s => <Star key={s} className="fill-bronze-500 text-bronze-500 w-4 h-4" />)}
                        <span className="ml-3 text-xs text-espresso-900 font-bold tracking-wider">5.0 EXPERIENCE</span>
                    </div>
                </div>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-pearl-100 to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-pearl-100 to-transparent z-10"></div>

                <motion.div
                    className="flex gap-8 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 40, repeat: Infinity }}
                >
                    {/* Double the testimonials for seamless loop */}
                    {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
                        <div
                            key={`${t.id}-${i}`}
                            className="bg-white p-10 rounded-[2rem] flex flex-col justify-between border border-espresso-900/5 shadow-2xl shadow-espresso-900/5 hover:shadow-xl transition-all duration-500 w-[400px] shrink-0"
                        >
                            <Quote className="text-bronze-500 mb-6 opacity-40" size={32} />
                            <p className="font-serif text-xl text-espresso-800 leading-relaxed italic mb-10 line-clamp-4">
                                "{t.quote}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-pearl-100 border border-espresso-900/10 flex items-center justify-center text-espresso-900 font-serif font-bold italic text-xl">
                                    {t.author.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-sans font-bold text-espresso-900 text-sm">{t.author}</h4>
                                    <p className="text-[10px] uppercase tracking-wider text-bronze-600 mt-1">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};