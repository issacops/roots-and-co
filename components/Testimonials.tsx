import React from 'react';
import { Section } from './ui/Section';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export const Testimonials: React.FC = () => {
  return (
    <div className="bg-teal-950 text-white py-32 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-800/30 via-teal-950 to-teal-950 pointer-events-none" />
        
        <Section id="testimonials" className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 border-b border-white/10 pb-12">
                <div className="space-y-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-terracotta-500 font-bold">Social Proof</span>
                    <h2 className="font-serif text-4xl md:text-6xl text-white max-w-lg leading-tight">
                        Stories from <br /> <span className="italic text-white/50">our community.</span>
                    </h2>
                </div>
                <div className="flex gap-2 mt-8 md:mt-0 items-center bg-white/5 px-6 py-3 rounded-full border border-white/10 backdrop-blur-sm">
                    {[1,2,3,4,5].map(s => <Star key={s} className="fill-terracotta-500 text-terracotta-500 w-4 h-4" />)}
                    <span className="ml-3 text-xs text-white font-bold tracking-wider">5.0 RATING</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {TESTIMONIALS.map((t, i) => (
                    <motion.div 
                        key={t.id} 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-teal-900/40 p-10 rounded-[2rem] flex flex-col justify-between border border-white/5 hover:border-terracotta-500/30 transition-all duration-300 hover:bg-teal-900/60"
                    >
                        <Quote className="text-terracotta-500 mb-6 opacity-50" size={32} />
                        <p className="font-serif text-xl md:text-2xl text-neutral-200 leading-relaxed italic mb-10">
                            "{t.quote}"
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-terracotta-400 to-terracotta-600 flex items-center justify-center text-white font-serif font-bold italic">
                                {t.author.charAt(0)}
                            </div>
                            <div>
                                <h4 className="font-sans font-bold text-white text-sm">{t.author}</h4>
                                <p className="text-[10px] uppercase tracking-wider text-white/50 mt-1">{t.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    </div>
  );
};