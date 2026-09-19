import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustIntro from './components/TrustIntro';
import Services from './components/Services';
import BridalExperience from './components/BridalExperience';
import Lookbook from './components/Lookbook';
import WhyChoose from './components/WhyChoose';
import ReviewsSection from './components/ReviewsSection';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';
import QuickEnquiryModal from './components/QuickEnquiryModal';

export default function App() {
  const [selectedLightboxItem, setSelectedLightboxItem] = useState(null);
  const [quickEnquiryService, setQuickEnquiryService] = useState(null);
  const [prefilledBookingService, setPrefilledBookingService] = useState(null);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
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

  const handleBookNowClick = () => {
    scrollToSection('#booking');
  };

  const handleViewServicesClick = () => {
    scrollToSection('#services');
  };

  const handleEnquireService = (service) => {
    setQuickEnquiryService(service);
  };

  const handleOpenFullBookingFromModal = (serviceName) => {
    setPrefilledBookingService(serviceName);
    scrollToSection('#booking');
  };

  const handleBookWithLook = (lookTitle) => {
    setPrefilledBookingService(lookTitle);
    scrollToSection('#booking');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#181615] font-sans antialiased selection:bg-[#F4DDD7] selection:text-[#8E4844]">
      {/* Sticky Luxury Navbar */}
      <Navbar onBookClick={handleBookNowClick} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Fullscreen Cinematic Hero */}
        <Hero
          onBookClick={handleBookNowClick}
          onViewServicesClick={handleViewServicesClick}
        />

        {/* Trust & Introduction */}
        <TrustIntro onBookClick={handleBookNowClick} />

        {/* Bespoke Services Menu */}
        <Services onEnquireService={handleEnquireService} />

        {/* Featured Bridal Campaign & Storytelling Experience */}
        <BridalExperience onBookClick={handleBookNowClick} />

        {/* The Lookbook Portfolio */}
        <Lookbook
          onSelectImage={(item) => setSelectedLightboxItem(item)}
          onBookClick={handleBookNowClick}
        />

        {/* 4 Pillars: Why Choose Manu */}
        <WhyChoose />

        {/* Customer Reviews & Verified Testimonials */}
        <ReviewsSection onBookClick={handleBookNowClick} />

        {/* Conversion & Reservation Section */}
        <BookingSection
          prefilledService={prefilledBookingService}
          onResetPrefill={() => setPrefilledBookingService(null)}
        />
      </main>

      {/* Minimal Luxury Footer */}
      <Footer onNavClick={scrollToSection} />

      {/* Lightbox Modal for Lookbook Item */}
      {selectedLightboxItem && (
        <LightboxModal
          item={selectedLightboxItem}
          onClose={() => setSelectedLightboxItem(null)}
          onBookWithLook={handleBookWithLook}
        />
      )}

      {/* Quick Enquiry Modal for Service Cards */}
      {quickEnquiryService && (
        <QuickEnquiryModal
          service={quickEnquiryService}
          onClose={() => setQuickEnquiryService(null)}
          onOpenFullBooking={handleOpenFullBookingFromModal}
        />
      )}
    </div>
  );
}
