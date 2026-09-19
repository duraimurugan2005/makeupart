import React, { useState } from 'react';
import { Award, Maximize2, ArrowRight } from 'lucide-react';
import { InstagramIcon } from './Icons';
import ImageWithFallback from './ImageWithFallback';
import { LOOKBOOK, BRAND } from '../data/content';

export default function Lookbook({ onSelectImage, onBookClick }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Bridal', 'Soft Glam', 'Party', 'HD Makeup', 'Hair'];

  const filteredItems = selectedCategory === 'All'
    ? LOOKBOOK
    : LOOKBOOK.filter((item) => item.category === selectedCategory);

  const getCategoryKey = (category) => {
    switch (category) {
      case 'Bridal': return 'bridal';
      case 'Party': return 'party';
      case 'HD Makeup': return 'hd';
      case 'Soft Glam': return 'softglam';
      case 'Hair': return 'hair';
      default: return 'general';
    }
  };

  return (
    <section id="lookbook" className="py-24 sm:py-32 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8E4844] mb-3">
            <Award className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Curated Portfolio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#181615] tracking-tight mb-4">
            The <span className="italic font-normal text-[#8E4844]">Lookbook</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#544E4B] font-light max-w-xl mx-auto">
            A visual showcase of timeless brides, luminous soft glam, high-definition skin artistry, and sculpted hair design created across Melbourne.
          </p>

          {/* Category Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest font-medium transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#181615] text-[#FAF8F5] shadow-sm'
                    : 'bg-white text-[#4A4541] border border-[#EBDDCF] hover:border-[#C88B87] hover:text-[#8E4844]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectImage(item)}
              className="break-inside-avoid group relative rounded-2xl overflow-hidden bg-[#2A2624] shadow-luxury hover:shadow-luxury-hover border border-[#EBDDCF] cursor-pointer transition-all duration-500"
            >
              {/* Image */}
              <ImageWithFallback
                src={item.image}
                alt={`${item.title} - ${item.service} by Manu Melbourne`}
                category={getCategoryKey(item.category)}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Hover Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white" />

              {/* Floating Content revealed on hover */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex justify-end">
                  <span className="p-2.5 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20 hover:scale-110 transition-transform">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#DFC272] block mb-1">
                    {item.category} • {item.service}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-light text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#EABFB5] mt-1 font-sans tracking-wide">
                    Click to inspect high-resolution look →
                  </p>
                </div>
              </div>

              {/* Always visible category badge in bottom corner on non-hover */}
              <div className="absolute top-3 left-3 group-hover:opacity-0 transition-opacity">
                <span className="px-3 py-1 rounded-full text-[9px] uppercase tracking-widest font-medium bg-black/60 backdrop-blur-md text-white border border-white/10">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA & Instagram reference */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between p-6 sm:p-8 rounded-2xl bg-[#FAEEEB] border border-[#C88B87]/30 gap-6">
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-xl sm:text-2xl font-normal text-[#181615]">
              Looking for more real client transformations?
            </h4>
            <p className="text-xs sm:text-sm text-[#544E4B] font-light mt-1">
              Explore our active Instagram feed with behind-the-scenes reels, bridal trials, and draping sessions.
            </p>
          </div>
          <div className="flex items-center space-x-3 shrink-0">
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full bg-white text-[#8E4844] border border-[#C88B87]/40 text-xs uppercase tracking-widest font-semibold hover:bg-[#8E4844] hover:text-white transition-all flex items-center space-x-2 shadow-sm"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>@prettyinpinks_bymanu</span>
            </a>
            <button
              onClick={onBookClick}
              className="px-6 py-3 rounded-full bg-[#181615] text-[#FAF8F5] text-xs uppercase tracking-widest font-medium hover:bg-[#8E4844] transition-colors"
            >
              Book This Look
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
