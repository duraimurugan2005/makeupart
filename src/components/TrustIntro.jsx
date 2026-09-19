import React from 'react';
import { ShieldCheck, Award, Heart, CheckCircle2, MapPin } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';
import { BRAND } from '../data/content';

export default function TrustIntro({ onBookClick }) {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#FAF8F5] relative overflow-hidden">
      {/* Background Decorative Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FAEEEB]/40 -skew-x-12 pointer-events-none transform translate-x-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Editorial Visual Composition */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Portrait Frame */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-luxury border border-[#EBDDCF] bg-white p-2">
                <div className="relative rounded-xl overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
                    alt="Manu - ISO Certified Professional Makeup Artist in Melbourne"
                    category="portrait"
                    className="w-full h-[460px] sm:h-[520px] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  
                  {/* Overlay Badge */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="flex items-center space-x-2 text-[#DFC272] text-xs uppercase tracking-widest font-medium mb-1">
                      <Award className="w-3.5 h-3.5 text-[#DFC272]" />
                      <span>Editorial Artistry</span>
                    </div>
                    <p className="font-serif text-lg italic text-[#FAF8F5]">
                      Refined, timeless beauty tailored to your natural features.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating ISO Certified Seal Card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 z-20 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-[#DEC4AF] max-w-[220px]">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#FAEEEB] border border-[#C88B87]/40 flex items-center justify-center text-[#8E4844]">
                    <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#8E4844] block">
                      Certified
                    </span>
                    <span className="font-serif text-sm font-semibold text-[#181615] leading-tight block">
                      ISO Standard
                    </span>
                  </div>
                </div>
                <p className="text-[11px] text-[#4A4541] leading-relaxed">
                  Accredited in international hygiene & makeup safety standards.
                </p>
              </div>

              {/* Subtle Backing Frame */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-[#EBDDCF] -z-10" />
            </div>
          </div>

          {/* Text & Narrative Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            
            {/* Section Tag */}
            <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8E4844] bg-[#FAEEEB] px-3.5 py-1.5 rounded-full border border-[#C88B87]/20">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Melbourne Beauty Studio & On-Location</span>
            </div>

            {/* Main Heading */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-5xl font-light text-[#181615] leading-[1.18] tracking-tight">
              Beauty That Feels <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#8E4844]">Like You</span>
            </h2>

            {/* Editorial Copy */}
            <div className="space-y-4 text-sm sm:text-base text-[#4A4541] leading-relaxed font-sans font-light">
              <p>
                Manu specialises in creating elegant, personalised makeup looks for brides and special occasions across Melbourne. Believing that makeup should never feel like a mask, her artistry honours your individual facial architecture, skin undertones, and personal essence.
              </p>
              <p>
                From timeless bridal grandeur and radiant reception glamour to modern soft-glam and camera-ready HD perfection, every appointment is approached with meticulous attention to longevity, flawless photography translation, and effortless comfort.
              </p>
            </div>

            {/* Trust Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#EBDDCF] shadow-sm hover:border-[#C88B87]/40 transition-colors">
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-[#FAEEEB] text-[#8E4844] mt-0.5">
                    <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                  </div>
                  <div>
                    <h4 className="font-serif font-medium text-base text-[#181615]">
                      ISO Certified Artist
                    </h4>
                    <p className="text-xs text-[#7D7571] mt-0.5 leading-normal">
                      Highest standard of tool sanitisation, premium cosmetics & skin hygiene.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#EBDDCF] shadow-sm hover:border-[#C88B87]/40 transition-colors">
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-[#FAEEEB] text-[#8E4844] mt-0.5">
                    <Heart className="w-4 h-4 text-[#8E4844]" />
                  </div>
                  <div>
                    <h4 className="font-serif font-medium text-base text-[#181615]">
                      Personalised Artistry
                    </h4>
                    <p className="text-xs text-[#7D7571] mt-0.5 leading-normal">
                      Every look is bespoke to your face shape, outfit palette, and event lighting.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action Row */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onBookClick}
                className="px-7 py-3.5 rounded-full bg-[#181615] text-[#FAF8F5] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#8E4844] transition-all duration-300 shadow-luxury"
              >
                Inquire For Your Date
              </button>
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.15em] font-medium text-[#8E4844] hover:text-[#181615] inline-flex items-center space-x-1.5 transition-colors py-2"
              >
                <span>View Real Brides on Instagram</span>
                <span className="text-[#C5A059]">→</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
