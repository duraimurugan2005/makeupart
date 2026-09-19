import React, { useState } from 'react';
import { ArrowUpRight, Check, Heart, Shield, Award } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';
import { SERVICES } from '../data/content';

export default function Services({ onEnquireService }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Bridal', 'Party', 'HD Makeup', 'Soft Glam', 'Hair', 'Saree Draping'];

  const filteredServices = activeCategory === 'All'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  const getCategoryKey = (category) => {
    switch (category) {
      case 'Bridal': return 'bridal';
      case 'Party': return 'party';
      case 'HD Makeup': return 'hd';
      case 'Soft Glam': return 'softglam';
      case 'Hair': return 'hair';
      case 'Saree Draping': return 'saree';
      default: return 'general';
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#F6F0E8]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8E4844] mb-3">
            <Award className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Bespoke Beauty Menu</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#181615] tracking-tight mb-4">
            Curated Beauty <span className="italic font-normal text-[#8E4844]">Services</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#544E4B] font-light max-w-xl mx-auto">
            From high-definition bridal glamour to bespoke saree pleating, discover our tailored service offerings designed for Melbourne events and weddings.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#181615] text-[#FAF8F5] shadow-md'
                    : 'bg-white text-[#4A4541] border border-[#EBDDCF] hover:border-[#C88B87] hover:text-[#8E4844]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#EBDDCF] shadow-luxury hover:shadow-luxury-hover transition-all duration-500 flex flex-col justify-between hover:-translate-y-1.5"
            >
              {/* Image Box */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-[#2A2624]">
                <ImageWithFallback
                  src={service.image}
                  alt={`${service.title} - Pretty in Pinks by Manu Melbourne`}
                  category={getCategoryKey(service.category)}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Tag Pill */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold bg-white/90 backdrop-blur-md text-[#8E4844] shadow-sm">
                    {service.tag}
                  </span>
                </div>

                {/* Subtitle Pill on Image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[11px] uppercase tracking-widest text-[#DFC272] font-medium block">
                    {service.subtitle}
                  </span>
                </div>
              </div>

              {/* Service Details Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#181615] mb-3 group-hover:text-[#8E4844] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#544E4B] font-light leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2 border-t border-[#F5F0E8] pt-4 mb-6">
                    {service.details.map((item, idx) => (
                      <li key={idx} className="flex items-start text-xs text-[#7D7571]">
                        <Check className="w-3.5 h-3.5 text-[#C5A059] mr-2 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action */}
                <button
                  onClick={() => onEnquireService(service)}
                  className="w-full py-3 px-4 rounded-xl bg-[#FAEEEB] hover:bg-[#181615] text-[#8E4844] hover:text-[#FAF8F5] text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 flex items-center justify-center space-x-2 group/btn"
                >
                  <span>Enquire For {service.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-16 text-center max-w-2xl mx-auto p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#EBDDCF] shadow-sm">
          <p className="font-serif text-base sm:text-lg italic text-[#181615]">
            "Looking for a custom package combining bridal makeup, multiple hairstyles, and saree draping for family members?"
          </p>
          <div className="mt-3">
            <button
              onClick={() => onEnquireService({ title: 'Full Bridal & Family Package' })}
              className="text-xs uppercase tracking-[0.2em] font-medium text-[#8E4844] hover:text-[#181615] underline decoration-[#DFC272] underline-offset-4 transition-colors"
            >
              Request a Bespoke Wedding Package Consultation →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
