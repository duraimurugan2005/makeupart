import React from 'react';
import { ArrowRight, ShieldCheck, ChevronDown } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { BRAND } from '../data/content';

export default function Hero({ onBookClick, onViewServicesClick }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 lg:py-0"
    >
      {/* Cinematic Full-Screen Background Video Layer */}
      <div className="absolute inset-0 z-0 bg-[#181615]">
        <video
          src="/hero-video.mp4"
          poster="/studio-vanity.jpg"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center scale-100 sm:scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Editorial Gradients & Tint Layers for Perfect Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#181615] via-transparent to-black/50" />
        {/* Subtle Warm Blush & Metallic Ambient Glow */}
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#C88B87]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />
        {/* Noise Grain overlay */}
        <div className="absolute inset-0 editorial-grain pointer-events-none opacity-25" />
      </div>

      {/* Centered Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center justify-center">
        
        {/* ISO Certification Pill */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FAF8F5] text-xs uppercase tracking-[0.25em] mb-6 shadow-sm">
          <ShieldCheck className="w-4 h-4 text-[#DFC272]" />
          <span className="font-sans font-medium">{BRAND.subtitle}</span>
          <span className="text-[#DFC272]">•</span>
          <span className="font-light text-white/90">Melbourne, AU</span>
        </div>

        {/* Main Brand Title */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.08em] uppercase font-light leading-[1.08] text-[#FFFDFB] mb-4 drop-shadow-sm">
          Pretty in Pinks
          <span className="block font-sans text-xs sm:text-sm md:text-base tracking-[0.4em] uppercase font-light text-[#EABFB5] mt-3">
            By Manu
          </span>
        </h1>

        {/* Hero Quote */}
        <div className="max-w-2xl mx-auto mb-6">
          <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#FAEEEB]/95 font-normal leading-relaxed">
            "{BRAND.heroHeadline}"
          </p>
        </div>

        {/* Supporting Services Bar */}
        <p className="text-xs sm:text-sm font-sans tracking-[0.25em] uppercase text-white/80 max-w-xl mx-auto mb-10 pb-2 border-b border-white/15">
          {BRAND.heroSubtext}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FAF8F5] text-[#181615] font-sans text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#F4DDD7] hover:text-[#8E4844] transition-all duration-300 shadow-luxury hover:shadow-luxury-hover hover:-translate-y-0.5 flex items-center justify-center space-x-2.5 group"
          >
            <span>Book Your Appointment</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[#8E4844]" />
          </button>

          <button
            onClick={onViewServicesClick}
            className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm font-sans text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:border-white"
          >
            View Services
          </button>
        </div>

        {/* Subtle Instagram Link Pill */}
        <div className="mt-8">
          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-xs tracking-wider text-white/75 hover:text-white transition-colors bg-black/40 hover:bg-black/60 px-4 py-2 rounded-full border border-white/15 backdrop-blur-sm"
          >
            <InstagramIcon className="w-3.5 h-3.5 text-[#EABFB5]" />
            <span>Follow on Instagram: <strong className="font-medium text-white">{BRAND.instagramHandle}</strong></span>
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center space-y-2 opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-[10px] tracking-[0.28em] uppercase text-white/70">Scroll</span>
        <ChevronDown className="w-4 h-4 text-white/70 animate-bounce" />
      </div>
    </section>
  );
}
