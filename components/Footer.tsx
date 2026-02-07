
import React from 'react';
import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    elem?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-[#141414] pt-32 pb-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between gap-20 mb-32">

          <div className="max-w-sm">
            <Logo className="origin-left scale-110 mb-8" />
            <p className="text-white/70 font-light text-xl leading-relaxed mb-10">
              KR Media Group is a strategic influence and media architecture firm specializing in ownership-based brand systems for creators, entrepreneurs, and cultural leaders.
            </p>
            <div className="flex gap-8">
              <Instagram size={24} className="text-white/40 hover:text-[#FFFFFF] cursor-pointer transition-colors" />
              <Twitter size={24} className="text-white/40 hover:text-[#FFFFFF] cursor-pointer transition-colors" />
              <Linkedin size={24} className="text-white/40 hover:text-[#FFFFFF] cursor-pointer transition-colors" />
              <Facebook size={24} className="text-white/40 hover:text-[#FFFFFF] cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-12">
            <div>
              <p className="text-[#FFFFFF]/80 font-black mb-8 uppercase tracking-[0.4em] text-[12px]">Solutions</p>
              <ul className="space-y-6 text-white/50 text-[13px] font-bold uppercase tracking-[0.2em]">
                <li><a href="#process" onClick={(e) => scrollToSection(e, 'process')} className="hover:text-[#FFFFFF] transition-colors">The Process</a></li>
                <li><a href="#fleet" onClick={(e) => scrollToSection(e, 'fleet')} className="hover:text-[#FFFFFF] transition-colors">Elite Fleet</a></li>
                <li><a href="#booking" onClick={(e) => scrollToSection(e, 'booking')} className="hover:text-[#FFFFFF] transition-colors">Reservations</a></li>
                <li><a href="#testimonials" onClick={(e) => scrollToSection(e, 'testimonials')} className="hover:text-[#FFFFFF] transition-colors">Success Stories</a></li>
              </ul>
            </div>
            <div>
              <p className="text-[#FFFFFF]/80 font-black mb-8 uppercase tracking-[0.4em] text-[12px]">Information</p>
              <ul className="space-y-6 text-white/50 text-[13px] font-bold uppercase tracking-[0.2em]">
                <li><a href="#faq" onClick={(e) => scrollToSection(e, 'faq')} className="hover:text-[#FFFFFF] transition-colors">Concierge FAQ</a></li>
                <li><a href="#" className="hover:text-[#FFFFFF] transition-colors">Legal Disclosure</a></li>
                <li><a href="#" className="hover:text-[#FFFFFF] transition-colors">Privacy Shield</a></li>
                <li><a href="#" className="hover:text-[#FFFFFF] transition-colors">Contact VIP Desk</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-[#FFFFFF]/80 font-black mb-8 uppercase tracking-[0.4em] text-[12px]">Headquarters</p>
              <address className="not-italic text-white/50 text-[13px] font-bold uppercase tracking-[0.2em] leading-loose">
                Los Angeles, CA <br />
                United States <br />
                Available Globally
              </address>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-white/30 text-[11px] font-black uppercase tracking-[0.4em]">© 2026 KR MEDIA GROUP. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-12 text-[11px] font-black uppercase tracking-[0.2em] text-white/30">
            <a href="#" className="hover:text-[#FFFFFF] transition-colors">Security</a>
            <a href="#" className="hover:text-[#FFFFFF] transition-colors">Accessibility</a>
            <a href="#" className="hover:text-[#FFFFFF] transition-colors">Ethics</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
