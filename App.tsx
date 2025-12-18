import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Doctor } from './components/Doctor';
const Treatments = React.lazy(() => import('./components/Treatments').then(module => ({ default: module.Treatments })));
const BeforeAfter = React.lazy(() => import('./components/BeforeAfter').then(module => ({ default: module.BeforeAfter })));
const Testimonials = React.lazy(() => import('./components/Testimonials').then(module => ({ default: module.Testimonials })));
const Contact = React.lazy(() => import('./components/Contact').then(module => ({ default: module.Contact })));
import { Footer } from './components/Footer';

import { Cursor } from './components/ui/Cursor';
import { SmoothScroll } from './components/ui/SmoothScroll';
import { Preloader } from './components/Preloader';
import { AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth');
  }, []);

  return (
    <SmoothScroll>
      <div className="antialiased selection:bg-bronze-500 selection:text-white cursor-none relative font-sans text-espresso-900 bg-washi min-h-screen">
        <AnimatePresence mode="wait">
          {loading && <Preloader onComplete={() => setLoading(false)} />}
        </AnimatePresence>

        {!loading && (
          <>
            <Cursor />

            {/* Upscale Atmos: Light Leaks & Grain */}
            <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden h-screen w-full">
              {/* Subtle Grain - Reduced Opacity for 'Clean' look */}
              <div className="absolute inset-0 bg-noise opacity-[0.03] animate-grain mix-blend-multiply" />

              {/* Light Leaks (Top Right Warmth) */}
              <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-orange-100/30 blur-[120px] mix-blend-multiply animate-light-leak" />

              {/* Light Leaks (Bottom Left Cool) */}
              <div className="absolute bottom-[-20%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-sage-400/10 blur-[100px] mix-blend-multiply animate-light-leak" style={{ animationDelay: '2s' }} />
            </div>

            <Navbar />
            <main id="main-content" className="relative z-10">
              <Hero />
              <Philosophy />
              <Doctor />
              <React.Suspense fallback={<div className="h-96 w-full flex items-center justify-center text-bronze-500/40 font-sans tracking-widest text-xs uppercase animate-pulse">Loading Experience...</div>}>
                <Treatments />
                <BeforeAfter />
                <Testimonials />
                <Contact />
              </React.Suspense>
            </main>
            <Footer />

            {/* Sticky Mobile Call Button - Updated Color */}
            <div className="md:hidden fixed bottom-6 right-6 z-50 flex flex-col gap-4">
              <a href="https://wa.me/919567124888" className="w-14 h-14 bg-espresso-900 rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
              </a>
            </div>
          </>
        )}
      </div>
    </SmoothScroll>
  );
};

export default App;