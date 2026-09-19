import React, { useState } from 'react';
import { X, Check, Send, CheckCircle2, Heart } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { BRAND } from '../data/content';

export default function QuickEnquiryModal({ service, onClose, onOpenFullBooking }) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!service) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && contact && date) {
      setIsSuccess(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />
      
      <div className="relative z-10 max-w-lg w-full bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-[#EBDDCF] shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#7D7571] hover:text-[#181615] rounded-full hover:bg-black/5"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            <div className="inline-flex items-center space-x-1.5 text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8E4844] mb-2">
              <Heart className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Direct Service Enquiry</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#181615] mb-2">
              {service.title || service}
            </h3>
            
            <p className="text-xs text-[#544E4B] mb-6 font-light">
              Check availability and details for this signature service in Melbourne.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] uppercase tracking-widest text-[#181615] font-medium mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ananya Roy"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#DEC4AF] bg-white text-sm focus:outline-none focus:border-[#8E4844]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-widest text-[#181615] font-medium mb-1">
                  Phone / Email *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 0400 000 000 or email@domain.com"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#DEC4AF] bg-white text-sm focus:outline-none focus:border-[#8E4844]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-widest text-[#181615] font-medium mb-1">
                  Preferred Event Date *
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#DEC4AF] bg-white text-sm focus:outline-none focus:border-[#8E4844]"
                />
              </div>

              <div className="pt-2 flex flex-col space-y-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#181615] hover:bg-[#8E4844] text-white text-xs uppercase tracking-widest font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Check Availability</span>
                  <Send className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenFullBooking(service.title || service);
                  }}
                  className="text-xs text-[#8E4844] hover:underline text-center pt-1"
                >
                  Need multiple services or custom bridal package? Open Full Form →
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#FAEEEB] text-[#8E4844] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6 text-[#C5A059]" />
            </div>
            <h3 className="font-serif text-2xl font-light text-[#181615]">
              Request Ready for Manu
            </h3>
            <p className="text-xs text-[#544E4B]">
              Thank you {name}. For instant response, message Manu on Instagram:
            </p>
            <div className="pt-2">
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full bg-[#181615] text-white text-xs uppercase tracking-widest font-medium flex items-center justify-center space-x-2"
              >
                <InstagramIcon className="w-4 h-4 text-[#DFC272]" />
                <span>Open Instagram DM</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
