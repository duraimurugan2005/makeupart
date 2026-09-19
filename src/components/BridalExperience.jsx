import React, { useState } from 'react';
import { Check, ChevronRight, ChevronLeft, Calendar, ArrowRight, Heart } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';
import { BRIDAL_EXPERIENCE } from '../data/content';

export default function BridalExperience({ onBookClick }) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = BRIDAL_EXPERIENCE[activeStepIndex];

  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#181615] text-white relative overflow-hidden">
      {/* Background Ambience / Subtle Vignette */}
      <div className="absolute inset-0 bg-radial from-[#2A2624] via-[#181615] to-[#0F0E0D] opacity-90" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#C88B87]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 editorial-grain pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Campaign Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#DFC272] mb-3">
            <Heart className="w-3.5 h-3.5 fill-[#DFC272]/20" />
            <span>Editorial Bridal Campaign</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#FFFDFB] mb-5">
            Your Bridal Look, <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#EABFB5]">Beautifully Personal</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm md:text-base text-[#CBC7C2] font-light max-w-xl mx-auto leading-relaxed">
            Every bride is distinct. Experience our signature six-stage bridal journey where vision, ISO-certified artistry, luxury styling, and flawless saree pleating culminate in timeless elegance.
          </p>
        </div>

        {/* Step Navigation Ribbon */}
        <div className="mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
            {BRIDAL_EXPERIENCE.map((item, index) => {
              const isActive = index === activeStepIndex;
              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStepIndex(index)}
                  className={`p-3.5 rounded-xl text-left transition-all duration-300 border ${
                    isActive
                      ? 'bg-[#2A2624] border-[#C5A059] shadow-gold-glow'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`text-xs font-sans tracking-widest font-semibold ${
                        isActive ? 'text-[#DFC272]' : 'text-white/40'
                      }`}
                    >
                      {item.step}
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DFC272] animate-pulse" />
                    )}
                  </div>
                  <h4
                    className={`font-serif text-sm sm:text-base font-normal truncate ${
                      isActive ? 'text-white font-medium' : 'text-white/70'
                    }`}
                  >
                    {item.title}
                  </h4>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Interactive Stage Spotlight Card */}
        <div className="bg-[#221F1D] rounded-3xl overflow-hidden border border-white/15 shadow-2xl p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Visual Campaign Photograph */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] bg-black/40 border border-white/10">
                <ImageWithFallback
                  src={activeStep.image}
                  alt={`${activeStep.title} - Pretty in Pinks by Manu Melbourne`}
                  category={activeStep.category || "bridal"}
                  className="w-full h-full object-cover object-center transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                
                {/* Step badge */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                  <span className="text-xs font-sans uppercase tracking-[0.2em] text-[#DFC272] font-medium">
                    Step {activeStep.step} of 06
                  </span>
                </div>
              </div>
            </div>

            {/* Stage Description & Story */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#DFC272] font-medium block mb-1">
                  {activeStep.subtitle}
                </span>
                <h3 className="font-serif text-2xl sm:text-4xl font-light text-white mb-4">
                  {activeStep.title}
                </h3>
                <p className="text-sm sm:text-base text-[#CBC7C2] font-light leading-relaxed">
                  {activeStep.description}
                </p>
              </div>

              {/* Step Highlights */}
              <div className="pt-4 border-t border-white/10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-white/80">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#DFC272] shrink-0" />
                    <span>Melbourne on-location setup</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#DFC272] shrink-0" />
                    <span>Flawless photography durability</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#DFC272] shrink-0" />
                    <span>ISO hygiene & luxury products</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#DFC272] shrink-0" />
                    <span>Tailored comfort all day long</span>
                  </div>
                </div>
              </div>

              {/* Interactive Prev/Next & CTA */}
              <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() =>
                      setActiveStepIndex((prev) =>
                        prev === 0 ? BRIDAL_EXPERIENCE.length - 1 : prev - 1
                      )
                    }
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors"
                    aria-label="Previous step"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() =>
                      setActiveStepIndex((prev) =>
                        prev === BRIDAL_EXPERIENCE.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors"
                    aria-label="Next step"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={onBookClick}
                  className="px-6 py-3 rounded-full bg-[#FAF8F5] text-[#181615] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#F4DDD7] hover:text-[#8E4844] transition-all flex items-center space-x-2 shadow-md"
                >
                  <span>Book Bridal Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
