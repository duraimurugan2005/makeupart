import React from 'react';
import { ShieldCheck, UserCheck, Heart, MapPin, CheckCircle, Award } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';
import { WHY_CHOOSE } from '../data/content';

export default function WhyChoose() {
  const pillarImages = {
    '01': {
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
      category: 'hd'
    },
    '02': {
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80',
      category: 'softglam'
    },
    '03': {
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80',
      category: 'saree'
    },
    '04': {
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
      category: 'bridal'
    },
  };

  const iconMap = {
    '01': <ShieldCheck className="w-5 h-5 text-[#C5A059]" />,
    '02': <UserCheck className="w-5 h-5 text-[#8E4844]" />,
    '03': <Heart className="w-5 h-5 text-[#C5A059]" />,
    '04': <MapPin className="w-5 h-5 text-[#8E4844]" />,
  };

  return (
    <section id="why-us" className="py-24 sm:py-32 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8E4844] mb-3">
            <Award className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>The Pretty In Pinks Difference</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#181615] tracking-tight mb-4">
            Why Choose <span className="italic font-normal text-[#8E4844]">Manu</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#544E4B] font-light max-w-xl mx-auto">
            A boutique beauty experience rooted in verified international safety standards, bespoke craftsmanship, and Melbourne-wide reliability.
          </p>
        </div>

        {/* 4 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {WHY_CHOOSE.map((point) => {
            const visual = pillarImages[point.number];
            return (
              <div
                key={point.number}
                className="group bg-white rounded-2xl p-6 sm:p-7 border border-[#EBDDCF] shadow-luxury hover:shadow-luxury-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Visual Thumbnail & Number */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-serif text-3xl font-light text-[#DEC4AF] group-hover:text-[#8E4844] transition-colors">
                      {point.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#EBDDCF] relative shadow-sm">
                      <ImageWithFallback
                        src={visual.image}
                        alt={point.title}
                        category={visual.category}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        {iconMap[point.number]}
                      </div>
                    </div>
                  </div>

                  {/* Badge */}
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8E4844] block mb-2">
                    {point.badge}
                  </span>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-medium text-[#181615] mb-3 tracking-wide">
                    {point.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#544E4B] leading-relaxed font-light">
                    {point.description}
                  </p>
                </div>

                {/* Bottom Subtle Indicator */}
                <div className="mt-6 pt-4 border-t border-[#F5F0E8] flex items-center space-x-1.5 text-[11px] text-[#A8645D] font-medium">
                  <CheckCircle className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Verified Brand Pillar</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
