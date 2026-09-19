import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, ChevronRight } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { BRAND } from '../data/content';

export default function Navbar({ onBookClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Bridal Journey', href: '#experience' },
    { name: 'Lookbook', href: '#lookbook' },
    { name: 'Why Manu', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#booking' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#FAF8F5]/90 backdrop-blur-md shadow-sm border-b border-[#EBDDCF]/60 py-3.5'
            : 'bg-gradient-to-b from-black/60 via-black/20 to-transparent text-white py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="group flex flex-col items-start focus:outline-none"
            >
              <span
                className={`font-serif tracking-widest text-lg sm:text-xl font-medium uppercase transition-colors duration-300 ${
                  isScrolled ? 'text-[#181615]' : 'text-white'
                }`}
              >
                Pretty in Pinks
              </span>
              <span
                className={`text-[9px] sm:text-[10px] tracking-[0.28em] uppercase font-sans font-light -mt-0.5 transition-colors duration-300 ${
                  isScrolled ? 'text-[#A8645D]' : 'text-[#EABFB5]'
                }`}
              >
                By Manu • Melbourne
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 shrink-0">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`whitespace-nowrap text-xs uppercase tracking-[0.12em] xl:tracking-[0.16em] font-medium transition-all duration-300 relative py-1 hover:text-[#C88B87] group ${
                    isScrolled ? 'text-[#4A4541]' : 'text-white/90'
                  }`}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center space-x-4">
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full border transition-all duration-300 ${
                  isScrolled
                    ? 'border-[#EBDDCF] text-[#4A4541] hover:text-[#A8645D] hover:border-[#A8645D]'
                    : 'border-white/30 text-white hover:border-white hover:bg-white/10'
                }`}
                aria-label="Instagram Profile"
                title="Follow @prettyinpinks_bymanu on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <button
                onClick={onBookClick}
                className={`relative px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 shadow-sm flex items-center space-x-2 group overflow-hidden ${
                  isScrolled
                    ? 'bg-[#181615] text-[#FAF8F5] hover:bg-[#8E4844]'
                    : 'bg-[#FAF8F5] text-[#181615] hover:bg-[#F4DDD7] hover:text-[#8E4844]'
                }`}
              >
                <span className="relative z-10 flex items-center space-x-1.5">
                  <Calendar className="w-3.5 h-3.5 opacity-80" />
                  <span>Book Now</span>
                </span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center space-x-3 lg:hidden">
              <button
                onClick={onBookClick}
                className={`px-3 py-1.5 rounded-full text-[11px] uppercase tracking-wider font-medium transition-colors ${
                  isScrolled
                    ? 'bg-[#181615] text-[#FAF8F5]'
                    : 'bg-white text-[#181615]'
                }`}
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-md transition-colors ${
                  isScrolled ? 'text-[#181615]' : 'text-white'
                }`}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#FAF8F5] shadow-2xl p-6 flex flex-col justify-between z-50 border-l border-[#EBDDCF]">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#EBDDCF]">
                <div>
                  <h3 className="font-serif text-lg uppercase tracking-wider text-[#181615]">
                    Pretty in Pinks
                  </h3>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#A8645D]">
                    By Manu • Melbourne
                  </p>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-[#4A4541] hover:text-[#181615]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-8 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center justify-between text-sm uppercase tracking-widest text-[#4A4541] hover:text-[#A8645D] py-2 border-b border-[#FAF8F5] hover:border-[#EBDDCF] transition-all"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#EBDDCF] space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full py-3 rounded-full bg-[#181615] text-[#FAF8F5] text-xs uppercase tracking-widest font-medium hover:bg-[#8E4844] transition-colors flex items-center justify-center space-x-2 shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>

              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-full border border-[#C88B87]/40 text-[#8E4844] text-xs uppercase tracking-widest font-medium flex items-center justify-center space-x-2 hover:bg-[#FAEEEB] transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Instagram @prettyinpinks_bymanu</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
