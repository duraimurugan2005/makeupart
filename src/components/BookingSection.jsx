import React, { useState } from 'react';
import { Send, Calendar, CheckCircle2, ShieldCheck, Sparkles, Award, MapPin, Phone, Mail, Clock, Copy, Check } from 'lucide-react';
import { InstagramIcon } from './Icons';
import ImageWithFallback from './ImageWithFallback';
import { BRAND } from '../data/content';

export default function BookingSection({ prefilledService, onResetPrefill }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: 'Bridal',
    location: '',
    services: prefilledService ? [prefilledService] : ['Bridal Makeup'],
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  // Sync if prefilledService changes
  React.useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({
        ...prev,
        services: prev.services.includes(prefilledService)
          ? prev.services
          : [...prev.services, prefilledService],
      }));
    }
  }, [prefilledService]);

  const serviceOptions = [
    'Bridal Makeup',
    'Party Makeup',
    'HD Makeup',
    'Soft Glam',
    'Hairstyles',
    'Saree Pre-Pleating & Draping',
  ];

  const eventTypes = [
    'Bridal / Wedding Day',
    'Reception',
    'Engagement',
    'Sangeet / Mehndi / Haldi',
    'Cocktail / Party',
    'Editorial / Photoshoot',
    'Other Special Occasion',
  ];

  const handleServiceToggle = (service) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      };
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your full name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Please enter your contact phone number';
    if (!formData.eventDate) newErrors.eventDate = 'Please select your event date';
    if (formData.services.length === 0) newErrors.services = 'Please select at least one service';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const formattedEnquiryText = `Hello Manu, I would like to check your availability for an upcoming event:
• Name: ${formData.fullName}
• Date: ${formData.eventDate}
• Event Type: ${formData.eventType}
• Services: ${formData.services.join(', ')}
• Location: ${formData.location || 'Melbourne'}
• Notes: ${formData.message || 'None'}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(formattedEnquiryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="booking" className="py-24 sm:py-32 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8E4844] mb-3">
            <Award className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Reservations & Enquiries</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#181615] tracking-tight mb-4">
            Let's Create Your <span className="italic font-normal text-[#8E4844]">Perfect Look</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#544E4B] font-light max-w-xl mx-auto">
            Tell us about your event, date and preferred beauty services. We will review date availability and respond promptly with personalised details.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Brand Studio Information */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white rounded-2xl overflow-hidden border border-[#EBDDCF] shadow-luxury">
              {/* Visual Header Photograph */}
              <div className="relative h-44 overflow-hidden bg-[#2A2624]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=85"
                  alt="Melbourne Bridal Studio Consultation"
                  category="bridal"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#DFC272] block">
                    Melbourne Beauty Studio
                  </span>
                  <h4 className="font-serif text-lg font-light text-white">
                    Pretty In Pinks by Manu
                  </h4>
                </div>
              </div>

              {/* Studio Details */}
              <div className="p-6 space-y-4 text-xs sm:text-sm text-[#544E4B] font-light">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#8E4844] shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-medium text-[#181615] block">Location</strong>
                    <span>Melbourne, Victoria (Studio & Mobile Travel)</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-medium text-[#181615] block">Accreditation</strong>
                    <span>ISO Certified Professional Makeup Artist</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <InstagramIcon className="w-4 h-4 text-[#8E4844] shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-medium text-[#181615] block">Direct Instagram</strong>
                    <a
                      href={BRAND.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8E4844] hover:underline font-medium"
                    >
                      {BRAND.instagramHandle}
                    </a>
                  </div>
                </div>

                {/* Direct Instagram Booking Banner */}
                <div className="pt-4 border-t border-[#F5F0E8]">
                  <a
                    href={BRAND.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-[#FAEEEB] hover:bg-[#F4DDD7] text-[#8E4844] text-xs uppercase tracking-widest font-semibold flex items-center justify-center space-x-2 transition-colors"
                  >
                    <InstagramIcon className="w-4 h-4" />
                    <span>Book Via Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Preparation Tip Box */}
            <div className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#EBDDCF] text-xs text-[#544E4B]">
              <div className="flex items-center space-x-2 text-[#8E4844] font-medium uppercase tracking-wider mb-2">
                <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Bridal Booking Recommendation</span>
              </div>
              <p className="leading-relaxed">
                For peak Melbourne wedding dates (October through April), we recommend reserving your bridal makeup, trial, and saree draping slots early to secure prime timings.
              </p>
            </div>
          </div>

          {/* Right Side: The Enquiry Form */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EBDDCF] shadow-luxury">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-widest font-medium text-[#181615] mb-2">
                        Full Name <span className="text-[#8E4844]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Priya Sharma"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-[#DEC4AF]'
                        } bg-[#FAF8F5] text-[#181615] text-sm focus:outline-none focus:border-[#8E4844] transition-colors`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-500 mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest font-medium text-[#181615] mb-2">
                        Email Address <span className="text-[#8E4844]">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. priya@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.email ? 'border-red-400 bg-red-50/20' : 'border-[#DEC4AF]'
                        } bg-[#FAF8F5] text-[#181615] text-sm focus:outline-none focus:border-[#8E4844] transition-colors`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Event Date Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-widest font-medium text-[#181615] mb-2">
                        Phone Number <span className="text-[#8E4844]">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 0412 345 678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.phone ? 'border-red-400 bg-red-50/20' : 'border-[#DEC4AF]'
                        } bg-[#FAF8F5] text-[#181615] text-sm focus:outline-none focus:border-[#8E4844] transition-colors`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest font-medium text-[#181615] mb-2">
                        Event Date <span className="text-[#8E4844]">*</span>
                      </label>
                      <input
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.eventDate ? 'border-red-400 bg-red-50/20' : 'border-[#DEC4AF]'
                        } bg-[#FAF8F5] text-[#181615] text-sm focus:outline-none focus:border-[#8E4844] transition-colors`}
                      />
                      {errors.eventDate && (
                        <p className="text-[11px] text-red-500 mt-1">{errors.eventDate}</p>
                      )}
                    </div>
                  </div>

                  {/* Event Type & Suburb Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-widest font-medium text-[#181615] mb-2">
                        Event Type
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#DEC4AF] bg-[#FAF8F5] text-[#181615] text-sm focus:outline-none focus:border-[#8E4844] transition-colors"
                      >
                        {eventTypes.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest font-medium text-[#181615] mb-2">
                        Melbourne Suburb / Venue
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. South Yarra, Melbourne CBD, Werribee..."
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#DEC4AF] bg-[#FAF8F5] text-[#181615] text-sm focus:outline-none focus:border-[#8E4844] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Services Required Multi-Select */}
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-medium text-[#181615] mb-2">
                      Services Required <span className="text-[#8E4844]">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {serviceOptions.map((service) => {
                        const isSelected = formData.services.includes(service);
                        return (
                          <button
                            type="button"
                            key={service}
                            onClick={() => handleServiceToggle(service)}
                            className={`p-3 rounded-xl text-left text-xs transition-all duration-200 border flex items-center justify-between ${
                              isSelected
                                ? 'bg-[#FAEEEB] border-[#8E4844] text-[#8E4844] font-medium shadow-sm'
                                : 'bg-[#FAF8F5] border-[#EBDDCF] text-[#4A4541] hover:border-[#DEC4AF]'
                            }`}
                          >
                            <span>{service}</span>
                            {isSelected && <Check className="w-3.5 h-3.5 text-[#8E4844]" />}
                          </button>
                        );
                      })}
                    </div>
                    {errors.services && (
                      <p className="text-[11px] text-red-500 mt-1">{errors.services}</p>
                    )}
                  </div>

                  {/* Message / Details */}
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-medium text-[#181615] mb-2">
                      Event Timing & Specific Requirements (Optional)
                    </label>
                    <textarea
                      rows="4"
                      placeholder="Share ceremony times, ready-by time, number of people needing hair/draping, or skin requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#DEC4AF] bg-[#FAF8F5] text-[#181615] text-sm focus:outline-none focus:border-[#8E4844] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-full bg-[#181615] hover:bg-[#8E4844] text-[#FAF8F5] text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-luxury hover:shadow-luxury-hover flex items-center justify-center space-x-2"
                    >
                      <span>Send Enquiry</span>
                      <Send className="w-4 h-4" />
                    </button>
                    <p className="text-center text-[11px] text-[#7D7571] mt-3 font-light">
                      Demo Mode • Your enquiry will be validated and formatted for instant communication with Manu.
                    </p>
                  </div>

                </form>
              ) : (
                /* Success Confirmation State */
                <div className="py-8 text-center space-y-6 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-[#FAEEEB] border border-[#C88B87]/40 flex items-center justify-center mx-auto text-[#8E4844]">
                    <CheckCircle2 className="w-8 h-8 text-[#C5A059]" />
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8E4844] block mb-1">
                      Enquiry Received
                    </span>
                    <h3 className="font-serif text-3xl font-light text-[#181615]">
                      Thank You, {formData.fullName}!
                    </h3>
                    <p className="text-sm text-[#544E4B] max-w-md mx-auto mt-2 font-light">
                      Your booking enquiry has been formatted. For the fastest response, you can forward this directly to Manu's Instagram DM.
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#EBDDCF] text-left max-w-lg mx-auto text-xs space-y-2 text-[#4A4541]">
                    <div className="font-semibold text-[#181615] uppercase tracking-wider text-[11px] pb-2 border-b border-[#EBDDCF] flex justify-between items-center">
                      <span>Booking Summary</span>
                      <span className="text-[#8E4844] font-normal">{formData.eventDate}</span>
                    </div>
                    <p><strong className="text-[#181615]">Name:</strong> {formData.fullName}</p>
                    <p><strong className="text-[#181615]">Contact:</strong> {formData.email} • {formData.phone}</p>
                    <p><strong className="text-[#181615]">Event:</strong> {formData.eventType}</p>
                    <p><strong className="text-[#181615]">Services:</strong> {formData.services.join(', ')}</p>
                    {formData.location && <p><strong className="text-[#181615]">Location:</strong> {formData.location}</p>}
                  </div>

                  {/* Action Buttons in Success State */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 max-w-md mx-auto">
                    <a
                      href={BRAND.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#181615] hover:bg-[#8E4844] text-[#FAF8F5] text-xs uppercase tracking-widest font-medium transition-colors flex items-center justify-center space-x-2 shadow-md"
                    >
                      <InstagramIcon className="w-4 h-4 text-[#DFC272]" />
                      <span>Message on Instagram</span>
                    </a>

                    <button
                      onClick={copyToClipboard}
                      className="w-full sm:w-auto px-5 py-3.5 rounded-full bg-white text-[#4A4541] border border-[#DEC4AF] hover:border-[#8E4844] hover:text-[#8E4844] text-xs uppercase tracking-widest font-medium transition-colors flex items-center justify-center space-x-2"
                    >
                      {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                      <span>{copied ? 'Copied Details!' : 'Copy Summary'}</span>
                    </button>
                  </div>

                  <div>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        if (onResetPrefill) onResetPrefill();
                      }}
                      className="text-xs text-[#7D7571] hover:text-[#181615] underline"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
