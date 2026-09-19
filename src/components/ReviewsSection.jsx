import React, { useRef, useState } from 'react';
import { Star, ShieldCheck, Quote, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { REVIEWS, BRAND } from '../data/content';

export default function ReviewsSection({ onBookClick }) {
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicated reviews for smooth infinite loop
  const marqueeReviews = [...REVIEWS, ...REVIEWS];

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 420;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="reviews" className="py-24 sm:py-32 bg-[#F6F0E8]/40 relative overflow-hidden border-t border-b border-[#EBDDCF]/60">
      {/* Subtle Ambient Background Glows */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#C88B87]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12 sm:mb-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8E4844] mb-3">
            <Heart className="w-3.5 h-3.5 fill-[#DFC272]/20 text-[#C5A059]" />
            <span>Client Love & Words</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#181615] tracking-tight mb-4">
            Cherished By Real <span className="italic font-normal text-[#8E4844]">Brides</span> & Clients
          </h2>
          
          <p className="font-sans text-sm sm:text-base text-[#544E4B] font-light max-w-xl mx-auto">
            Discover why brides and event clients across Melbourne trust Pretty in Pinks by Manu for lasting beauty, hygiene standards, and effortless elegance.
          </p>

          {/* Social Proof Rating Bar */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 px-6 py-3.5 rounded-2xl bg-white/90 backdrop-blur-sm border border-[#EBDDCF] shadow-sm">
            <div className="flex items-center space-x-1.5">
              <div className="flex items-center text-[#C5A059]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#DFC272] text-[#DFC272]" />
                ))}
              </div>
              <span className="font-serif font-semibold text-[#181615] text-sm ml-1">5.0 Star Rating</span>
            </div>
            
            <div className="hidden sm:block w-px h-4 bg-[#EBDDCF]" />

            <div className="flex items-center space-x-1.5 text-xs text-[#544E4B]">
              <ShieldCheck className="w-4 h-4 text-[#8E4844]" />
              <span className="font-medium">ISO Certified Hygiene & Artistry</span>
            </div>

            <div className="hidden sm:block w-px h-4 bg-[#EBDDCF]" />

            <div className="flex items-center space-x-1.5 text-xs text-[#544E4B]">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
              <span>100% Client Satisfaction</span>
            </div>
          </div>
        </div>

        {/* Carousel Top Controls */}
        <div className="flex items-center justify-between mt-10 max-w-7xl mx-auto px-2">
          <div className="flex items-center space-x-2 text-xs text-[#7D7571]">
            <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
            <span className="tracking-wider uppercase font-medium text-[11px] text-[#8E4844]">
              {isPaused ? 'Paused on hover' : 'Continuous Moving Live Reviews'}
            </span>
          </div>

          {/* Prev / Next Navigation Arrows */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleScroll('left')}
              className="p-2.5 rounded-full bg-white text-[#181615] border border-[#EBDDCF] hover:border-[#8E4844] hover:bg-[#FAEEEB] hover:text-[#8E4844] transition-all shadow-sm active:scale-95"
              aria-label="Previous Review"
              title="Previous Review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="p-2.5 rounded-full bg-white text-[#181615] border border-[#EBDDCF] hover:border-[#8E4844] hover:bg-[#FAEEEB] hover:text-[#8E4844] transition-all shadow-sm active:scale-95"
              aria-label="Next Review"
              title="Next Review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Single Line Moving Marquee Carousel Track */}
      <div 
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left & Right Gradient Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#F6F0E8] via-[#F6F0E8]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#F6F0E8] via-[#F6F0E8]/80 to-transparent z-20 pointer-events-none" />

        {/* Scrollable Container with Continuous Animation */}
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto no-scrollbar py-4"
        >
          <div 
            className="animate-review-marquee flex gap-6 px-4"
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          >
            {marqueeReviews.map((rev, idx) => (
              <div
                key={`${rev.id}-${idx}`}
                className="w-[310px] sm:w-[380px] md:w-[410px] shrink-0 bg-white rounded-2xl p-6 sm:p-7 border border-[#EBDDCF] shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative group select-none"
              >
                {/* Card Top: Stars & Quote Icon */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-[#DFC272] space-x-1">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#DFC272]" />
                      ))}
                    </div>
                    <Quote className="w-5 h-5 text-[#EBDDCF] group-hover:text-[#C88B87] transition-colors" />
                  </div>

                  {/* Highlight Pill Badge */}
                  {rev.highlight && (
                    <div className="mb-3">
                      <span className="inline-block px-3 py-0.5 rounded-full text-[10px] uppercase tracking-widest font-medium bg-[#FAEEEB] text-[#8E4844] border border-[#C88B87]/20">
                        ✨ {rev.highlight}
                      </span>
                    </div>
                  )}

                  {/* Review Text */}
                  <p className="font-sans text-xs sm:text-sm text-[#4A4541] font-light leading-relaxed mb-5 italic line-clamp-4 group-hover:line-clamp-none transition-all">
                    "{rev.review}"
                  </p>
                </div>

                {/* Card Bottom: Client Info */}
                <div className="pt-4 border-t border-[#F6F0E8] flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-1.5">
                      <h4 className="font-serif font-medium text-sm sm:text-base text-[#181615]">
                        {rev.name}
                      </h4>
                      {rev.verified && (
                        <span className="inline-flex items-center text-[10px] uppercase tracking-wider text-[#8E4844] font-medium" title="Verified Client">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-[#7D7571] font-light">
                      {rev.role} • {rev.location}
                    </p>
                    <span className="text-[10px] text-[#A8645D] tracking-wider uppercase font-medium block mt-0.5">
                      {rev.service}
                    </span>
                  </div>

                  <span className="text-[10px] text-[#9E9892] font-light shrink-0 ml-2">
                    {rev.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Booking Action Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="text-center max-w-2xl mx-auto p-8 rounded-2xl bg-white border border-[#EBDDCF] shadow-sm">
          <h3 className="font-serif text-2xl font-normal text-[#181615] mb-2">
            Ready for your own bespoke transformation?
          </h3>
          <p className="text-xs sm:text-sm text-[#544E4B] font-light max-w-lg mx-auto mb-6">
            Secure your wedding or event date in advance with Melbourne's trusted ISO certified artist.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onBookClick}
              className="px-7 py-3.5 rounded-full bg-[#181615] text-[#FAF8F5] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#8E4844] transition-all flex items-center space-x-2 shadow-md group"
            >
              <span>Book Your Date & Experience</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-[#FAEEEB] text-[#8E4844] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#8E4844] hover:text-white transition-colors border border-[#C88B87]/30"
            >
              View More on Instagram →
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
