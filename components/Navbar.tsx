import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Magnetic } from './ui/Magnetic';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'py-4 bg-pearl-100/80 backdrop-blur-md border-b border-stone-200/50' : 'py-8'}`}
      >
        <div className="px-6 md:px-12 flex items-center justify-between">

          {/* Left: Menu Trigger */}
          <Magnetic>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="flex items-center gap-3 px-5 py-2 rounded-full border border-espresso-900/10 hover:border-bronze-500 transition-colors duration-300 group bg-pearl-50/50"
            >
              <div className="flex flex-col gap-[3px] items-end w-4 group-hover:gap-[4px] transition-all duration-300">
                <div className="h-[1px] w-4 bg-espresso-900"></div>
                <div className="h-[1px] w-3 bg-espresso-900 group-hover:w-4 transition-all"></div>
                <div className="h-[1px] w-2 bg-espresso-900 group-hover:w-4 transition-all"></div>
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-espresso-900">Menu</span>
            </button>
          </Magnetic>

          {/* Center: Logo */}
          <a href="#" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center group">
            <h1 className="font-serif text-2xl md:text-3xl text-espresso-900 tracking-tight">
              Roots <span className="italic text-bronze-500">&</span> Co.
            </h1>
          </a>

          {/* Right: Contact */}
          <div className="hidden md:block">
            <Magnetic>
              <a
                href="#contact"
                className="flex items-center gap-3 px-6 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold border border-espresso-900 text-espresso-900 hover:bg-espresso-900 hover:text-pearl-100 transition-all duration-500"
              >
                Book Visit
              </a>
            </Magnetic>
          </div>

          <a
            href="#contact"
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-espresso-900 text-white"
          >
            <Phone size={16} />
          </a>

        </div>
      </nav >

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {
          mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 z-[60] bg-pearl-100 flex flex-col"
            >
              {/* Texture Overlay */}
              <div className="absolute inset-0 bg-washi opacity-50 pointer-events-none" />

              <div className="relative z-10 flex justify-between items-center p-6 md:px-12 py-8">
                <span className="font-serif text-2xl text-espresso-900">Roots & Co.</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-espresso-900/10 hover:bg-espresso-900 hover:text-white transition-all duration-300 text-espresso-900"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="relative z-10 flex-1 flex flex-col justify-center items-center space-y-2">
                {NAV_LINKS.map((link, idx) => (
                  <div key={link.label} className="overflow-hidden group">
                    <motion.a
                      href={link.href}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.1 + (idx * 0.1), duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block font-serif text-4xl md:text-6xl text-espresso-900/40 hover:text-espresso-900 transition-colors duration-500 cursor-pointer text-center relative"
                    >
                      <span className="relative z-10">{link.label}</span>
                      <span className="block text-[10px] sans uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 text-bronze-500 mt-2 transform translate-y-2 group-hover:translate-y-0">Explore</span>
                    </motion.a>
                  </div>
                ))}
              </div>

              <div className="relative z-10 p-6 md:px-12 md:py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-espresso-900 border-t border-espresso-900/5">
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-bronze-500 mb-2">Location</span>
                  <p className="font-serif text-lg">Kochi, Kerala</p>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-bronze-500 mb-2">Contact</span>
                  <p className="font-serif text-lg">+91 9567 124 888</p>
                </div>
              </div>
            </motion.div>
          )
        }
      </AnimatePresence >
    </>
  );
};