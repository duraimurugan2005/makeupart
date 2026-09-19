import React, { useEffect } from 'react';
import { X, Calendar, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { InstagramIcon } from './Icons';
import ImageWithFallback from './ImageWithFallback';
import { BRAND } from '../data/content';

export default function LightboxModal({ item, onClose, onBookWithLook }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!item) return null;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn">
      {/* Click backdrop to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative z-10 max-w-4xl w-full max-h-[92vh] bg-[#FAF8F5] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/20">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Display */}
        <div className="md:w-3/5 bg-[#181615] flex items-center justify-center relative overflow-hidden min-h-[320px] md:min-h-[500px]">
          <ImageWithFallback
            src={item.image}
            alt={item.title}
            category={getCategoryKey(item.category)}
            className="w-full h-full object-cover max-h-[70vh] md:max-h-full"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold bg-black/70 backdrop-blur-md text-[#DFC272] border border-white/20">
              {item.category}
            </span>
          </div>
        </div>

        {/* Details & Action Panel */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-xs text-[#8E4844] uppercase tracking-widest font-semibold mb-2">
              <Heart className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{item.service}</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#181615] leading-tight mb-4">
              {item.title}
            </h3>

            <p className="text-xs sm:text-sm text-[#544E4B] leading-relaxed font-light mb-6">
              Bespoke beauty styling executed with high-grade ISO sanitised cosmetics and tailored to Melbourne lighting and climate.
            </p>

            <div className="p-4 rounded-xl bg-[#FAEEEB] border border-[#C88B87]/30 mb-6 space-y-2 text-xs text-[#4A4541]">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span className="font-medium text-[#181615]">ISO Certified Standards</span>
              </div>
              <p className="text-[11px] text-[#7D7571]">
                Custom color blending, long-wear setting, and comfortable wear for your entire event.
              </p>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-[#EBDDCF]">
            <button
              onClick={() => {
                onClose();
                onBookWithLook(item.title);
              }}
              className="w-full py-3.5 rounded-full bg-[#181615] text-[#FAF8F5] text-xs uppercase tracking-widest font-medium hover:bg-[#8E4844] transition-all flex items-center justify-center space-x-2 shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Enquire For This Look</span>
            </button>

            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-full border border-[#C88B87]/40 text-[#8E4844] text-xs uppercase tracking-widest font-medium flex items-center justify-center space-x-2 hover:bg-[#FAEEEB] transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>View On Instagram</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
