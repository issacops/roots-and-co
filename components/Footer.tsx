import React from 'react';
import { Facebook, Instagram, Twitter, ArrowUpRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { NAV_LINKS, CONTACT_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <div className='relative h-[800px] md:h-[600px] bg-espresso-950 text-pearl-200' style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
      <div className='fixed bottom-0 h-[800px] md:h-[600px] w-full'>
        <div className="h-full flex flex-col justify-end pb-12 relative overflow-hidden">

          {/* Massive Brand Watermark */}
          <div className="absolute top-[10%] left-0 w-full overflow-hidden opacity-[0.03] pointer-events-none select-none leading-none">
            <h1 className="font-serif text-[25vw] whitespace-nowrap text-bronze-500 tracking-tighter text-center">ROOTS & CO</h1>
          </div>

          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 align-top mb-32">

              {/* Brand Column */}
              <div className="lg:col-span-5">
                <div className="mb-8">
                  <span className="font-serif text-3xl md:text-4xl block mb-2 text-pearl-100">Roots & Co.</span>
                  <span className="font-sans text-xs tracking-[0.3em] uppercase text-bronze-500 font-bold">Architects of the Smile</span>
                </div>
                <p className="text-pearl-200/60 font-light leading-relaxed max-w-md mb-12">
                  A sanctuary for the preservation of your smile. Specialized in Micro-Endodontics and Biomimetic Restoration.
                </p>

                <div className="flex gap-6">
                  {[Instagram, Facebook, Twitter].map((Icon, i) => (
                    <a key={i} href="#" className="w-12 h-12 rounded-full border border-pearl-100/10 flex items-center justify-center hover:bg-bronze-500 hover:border-bronze-500 hover:text-white transition-all duration-300">
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Navigation Column */}
              <div className="lg:col-span-3">
                <h4 className="font-sans text-xs font-bold tracking-widest text-bronze-500 uppercase mb-8">Journal</h4>
                <ul className="space-y-4">
                  {NAV_LINKS.map(link => (
                    <li key={link.label}>
                      <a href={link.href} className="flex items-center gap-2 text-pearl-200/70 hover:text-bronze-400 transition-colors group">
                        <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        <span className="font-serif text-lg">{link.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Column */}
              <div className="lg:col-span-4">
                <h4 className="font-sans text-xs font-bold tracking-widest text-bronze-500 uppercase mb-8">Waitlist</h4>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <MapPin className="shrink-0 text-bronze-500" size={20} />
                    <div className="text-pearl-200/70 font-light text-sm leading-relaxed">
                      <span className="text-pearl-100 block font-serif text-lg mb-1">Kochi</span>
                      {CONTACT_INFO.address.line1}<br />
                      {CONTACT_INFO.address.line2}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Phone className="shrink-0 text-bronze-500" size={20} />
                    <div className="text-pearl-200/70 font-light text-sm">
                      <span className="text-pearl-100 block font-serif text-lg mb-1">Voice</span>
                      {CONTACT_INFO.phone}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-pearl-100/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-pearl-100/40 font-bold">
              <p>© 2024 Roots & Co. All rights Reserved.</p>
              <div className="flex gap-8">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <a href="#" className="hover:text-white transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};