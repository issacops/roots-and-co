import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-teal-900 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg">
        Skip to main content
      </a>

      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'
          }`}
      >
        <div className="px-6 md:px-12 flex items-center justify-between">

          {/* Left: Menu Trigger (Pill Shape) */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            className={`flex items-center gap-3 px-6 py-3 rounded-full border backdrop-blur-md transition-all duration-300 group ${isScrolled
              ? 'bg-white/80 border-neutral-300 text-teal-900 shadow-sm'
              : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
              }`}
          >
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Menu</span>
            <Menu size={14} className="group-hover:rotate-180 transition-transform duration-500" />
          </button>

          {/* Center: Logo */}
          <a href="#" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-end group">
            <div className="flex items-center gap-2">
              {/* Logo Icon */}
              <div className={`transition-colors duration-300 ${isScrolled ? 'text-terracotta-500' : 'text-white'}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
                </svg>
              </div>
              <span className={`font-serif text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-300 ${isScrolled ? 'text-teal-900' : 'text-white'}`}>
                dental<span className="font-light italic text-terracotta-500">kraft</span>
              </span>
            </div>
            <span className={`text-[8px] uppercase tracking-[0.25em] font-sans font-bold transition-colors duration-300 -mt-1 mr-1 ${isScrolled ? 'text-teal-900/60' : 'text-white/60'}`}>
              Dr. Hingorani's
            </span>
          </a>

          {/* Right: Contact (Pill Shape) */}
          <a
            href="#book"
            className={`hidden md:flex items-center gap-3 px-6 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 backdrop-blur-md ${isScrolled
              ? 'bg-teal-900 text-white hover:bg-teal-800 shadow-lg'
              : 'bg-white text-teal-900 hover:bg-neutral-100 shadow-md'
              }`}
          >
            Contact
          </a>

          {/* Mobile Right */}
          <a
            href="#book"
            className={`md:hidden p-3 rounded-full backdrop-blur-md ${isScrolled ? 'bg-teal-900 text-white' : 'bg-white/10 text-white border border-white/20'
              }`}
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
              initial={{ opacity: 0, clipPath: "circle(0% at 0% 0%)" }}
              animate={{ opacity: 1, clipPath: "circle(150% at 0% 0%)" }}
              exit={{ opacity: 0, clipPath: "circle(0% at 0% 0%)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-[60] bg-teal-900 text-white flex flex-col"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 bg-noise pointer-events-none" />

              <div className="relative z-10 flex justify-between items-center p-6 md:px-12 md:py-8">
                <span className="font-serif text-2xl text-white">dental<span className="text-terracotta-500 italic">kraft</span></span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
                >
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Close</span>
                  <X size={14} />
                </button>
              </div>

              <div className="relative z-10 flex-1 flex flex-col justify-center items-center space-y-4">
                {NAV_LINKS.map((link, idx) => (
                  <div key={link.label} className="overflow-hidden">
                    <motion.a
                      href={link.href}
                      initial={{ y: 100 }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.3 + (idx * 0.1), duration: 0.8, ease: "easeOut" }}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block font-serif text-5xl md:text-7xl lg:text-8xl hover:italic hover:text-terracotta-500 transition-all duration-300 cursor-pointer"
                    >
                      {link.label}
                    </motion.a>
                  </div>
                ))}
              </div>

              <div className="relative z-10 p-6 md:px-12 md:py-8 flex justify-between text-white/40 text-[10px] uppercase tracking-[0.2em] border-t border-white/10">
                <span>Pune, India</span>
                <span>Est. 2024</span>
              </div>
            </motion.div>
          )
        }
      </AnimatePresence >
    </>
  );
};