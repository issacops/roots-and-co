import React, { useRef, useState } from 'react';
import { Button } from './ui/Button';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CONTACT_INFO } from '../constants';

export const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={containerRef} id="contact" className="relative py-32 px-6 overflow-hidden bg-espresso-900 text-pearl-100 rounded-b-[4rem]">
      {/* Background Image Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 opacity-5">
        <img
          src="/images/contact-bg.png"
          alt="Clinic Ambience"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-espresso-900/60 mix-blend-multiply" />
      </motion.div>

      <div className="relative z-20 max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

        {/* Left: Text */}
        <div className="lg:col-span-6">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-sans font-bold text-xs tracking-widest text-bronze-500">005</span>
            <div className="h-[1px] w-8 bg-bronze-500/30"></div>
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] opacity-80">Sanctuary</span>
          </div>

          <h2 className="font-serif text-5xl sm:text-6xl lg:text-8xl mb-8 leading-[0.9]">
            Begin Your <br /> Preservation.
          </h2>
          <p className="opacity-70 font-sans font-light text-lg max-w-md leading-relaxed mb-12">
            A consultation is a conversation. We listen before we look.
            Join our family of curated smiles.
          </p>

          <div className="flex gap-12 text-xs uppercase tracking-widest opacity-60">
            <div>
              <span className="block text-bronze-500 mb-2">Email</span>
              {CONTACT_INFO.email}
            </div>
            <div>
              <span className="block text-bronze-500 mb-2">Phone</span>
              {CONTACT_INFO.phone}
            </div>
          </div>
        </div>

        {/* Right: Floating Form Card */}
        <div className="lg:col-span-6 lg:pl-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-pearl-100 p-10 md:p-14 shadow-2xl relative max-w-lg mx-auto lg:mx-0 rounded-[3rem]"
          >
            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-24 h-24">
              <svg viewBox="0 0 100 100" className="fill-bronze-500 scale-50 origin-top-right opacity-50">
                <path d="M0 0 L100 0 L100 100 Z" />
              </svg>
            </div>

            <h3 className="font-serif text-4xl text-espresso-900 mb-10">Appointment</h3>

            <form className="space-y-8">
              <div>
                <input
                  type="text"
                  className="w-full border-b border-espresso-900/10 py-4 focus:outline-none focus:border-bronze-500 transition-colors bg-transparent placeholder-espresso-900/30 font-sans text-espresso-900"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <input
                  type="tel"
                  className="w-full border-b border-espresso-900/10 py-4 focus:outline-none focus:border-bronze-500 transition-colors bg-transparent placeholder-espresso-900/30 font-sans text-espresso-900"
                  placeholder="Phone Number"
                />
              </div>

              <div className="pt-8">
                <Button variant="gold" className="w-full bg-espresso-900 text-white hover:bg-bronze-500">
                  Request Booking
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};