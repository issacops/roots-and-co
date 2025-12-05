import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Doctor } from './components/Doctor';
const Treatments = React.lazy(() => import('./components/Treatments').then(module => ({ default: module.Treatments })));
const BeforeAfter = React.lazy(() => import('./components/BeforeAfter').then(module => ({ default: module.BeforeAfter })));
const Testimonials = React.lazy(() => import('./components/Testimonials').then(module => ({ default: module.Testimonials })));
const Contact = React.lazy(() => import('./components/Contact').then(module => ({ default: module.Contact })));
import { Footer } from './components/Footer';

const App: React.FC = () => {

  // Smooth scroll polyfill effect if needed, but Tailwind's scroll-smooth handles most
  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth');
  }, []);

  return (
    <div className="antialiased selection:bg-terracotta-500 selection:text-white">
      <Navbar />
      <main id="main-content">
        <Hero />
        <Philosophy />
        <Doctor />
        <React.Suspense fallback={<div className="h-96 w-full flex items-center justify-center text-teal-900/40 font-sans tracking-widest text-xs uppercase animate-pulse">Loading Experience...</div>}>
          <Treatments />
          <BeforeAfter />
          <Testimonials />
          <Contact />
        </React.Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;