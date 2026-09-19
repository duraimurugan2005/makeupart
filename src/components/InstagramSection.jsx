import React from 'react';
import { ArrowUpRight, Heart, Sparkles } from 'lucide-react';
import { InstagramIcon } from './Icons';
import ImageWithFallback from './ImageWithFallback';
import { INSTAGRAM_POSTS, BRAND } from '../data/content';

export default function InstagramSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#F6F0E8]/40 border-t border-b border-[#EBDDCF]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6 text-center md:text-left">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8E4844] mb-2">
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>Social Journal</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#181615] tracking-tight">
              Follow The Beauty <span className="italic font-normal text-[#8E4844]">Journey</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#7D7571] mt-1 font-light">
              Latest client looks, bridal trials, BTS beauty reels & saree draping artistry.
            </p>
          </div>

          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full bg-[#181615] text-[#FAF8F5] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#8E4844] transition-all flex items-center space-x-2 shadow-luxury shrink-0"
          >
            <InstagramIcon className="w-4 h-4 text-[#DFC272]" />
            <span>Follow on Instagram</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 6-Image Instagram Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl overflow-hidden aspect-square bg-[#2A2624] shadow-sm border border-[#EBDDCF] block"
              aria-label={`View Instagram post: ${post.caption}`}
            >
              <ImageWithFallback
                src={post.image}
                alt={post.caption}
                category={post.category || "general"}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              
              {/* Instagram Hover Overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3.5 text-white">
                <div className="flex justify-end">
                  <InstagramIcon className="w-4 h-4 text-white/90" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-[#DFC272] block font-semibold">
                    {post.tag}
                  </span>
                  <p className="text-[10px] text-white/90 line-clamp-2 mt-0.5 leading-snug">
                    {post.caption}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Instagram Handle Callout */}
        <div className="mt-8 text-center">
          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif italic text-lg sm:text-xl text-[#8E4844] hover:text-[#181615] transition-colors"
          >
            {BRAND.instagramHandle}
          </a>
        </div>

      </div>
    </section>
  );
}
