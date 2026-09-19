import React from 'react';
import { ArrowUp, MapPin, ShieldCheck, Heart } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { BRAND } from '../data/content';

export default function Footer({ onNavClick }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#181615] text-[#FAF8F5] pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Decorative Subtle Accent */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-4">
            <h3 className="font-serif text-2xl sm:text-3xl tracking-widest uppercase font-light text-white">
              {BRAND.shortName}
              <span className="block font-sans text-xs tracking-[0.35em] uppercase font-light text-[#EABFB5] mt-1">
                By Manu
              </span>
            </h3>
            
            <p className="text-xs tracking-[0.2em] uppercase text-[#DFC272] font-medium">
              {BRAND.subtitle}
            </p>

            <p className="text-xs sm:text-sm text-[#CBC7C2] font-light max-w-md leading-relaxed">
              Specialising in timeless bridal artistry, camera-ready HD makeup, luminous soft-glam, and precision saree draping across Melbourne and surrounding suburbs.
            </p>

            <div className="flex items-center space-x-2 text-xs text-[#EABFB5] pt-2">
              <MapPin className="w-3.5 h-3.5 text-[#DFC272]" />
              <span>Melbourne, Victoria, Australia</span>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-[#DFC272] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs uppercase tracking-widest text-[#CBC7C2]">
              <li>
                <button
                  onClick={() => onNavClick('#hero')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('#about')}
                  className="hover:text-white transition-colors"
                >
                  About Manu
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('#services')}
                  className="hover:text-white transition-colors"
                >
                  Services Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('#experience')}
                  className="hover:text-white transition-colors"
                >
                  Bridal Journey
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('#lookbook')}
                  className="hover:text-white transition-colors"
                >
                  The Lookbook
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('#reviews')}
                  className="hover:text-white transition-colors"
                >
                  Client Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('#booking')}
                  className="hover:text-white transition-colors"
                >
                  Contact & Book
                </button>
              </li>
            </ul>
          </div>

          {/* Connect & Social Col */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-[#DFC272] mb-4">
              Connect
            </h4>
            
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2.5 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs tracking-wider text-white transition-all group"
            >
              <InstagramIcon className="w-4 h-4 text-[#DFC272] group-hover:scale-110 transition-transform" />
              <span>{BRAND.instagramHandle}</span>
            </a>

            <div className="pt-2 text-xs text-[#CBC7C2] space-y-1">
              <p className="font-medium text-white">Melbourne, Australia</p>
              <p className="font-light">Studio & Mobile Bridal Travel Available</p>
            </div>
          </div>

        </div>

        {/* Sub-Footer Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#9E9892] font-light">
          <p>
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved. ISO Certified Professional Makeup Artist.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 text-xs text-[#CBC7C2] hover:text-white transition-colors py-1 group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
