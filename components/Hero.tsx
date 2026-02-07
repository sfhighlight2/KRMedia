
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 200]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    elem?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-end overflow-hidden bg-[#141414]">
      {/* Dynamic Background */}
      <motion.div
        style={{ y: yParallax, x: mousePos.x }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/assets/hero-chess-upscaled.png"
          alt="KR Media Group"
          className="w-full h-full object-cover opacity-100 transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/60 to-transparent" />
        <div className="absolute inset-0 bg-black/15" />
      </motion.div>

      {/* Decorative Floating Elements - Removed large blur overlays for clarity */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-12 md:pb-32">
        <div className="max-w-6xl">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl lg:text-[7rem] font-black mb-8 leading-[0.95] tracking-tight"
          >
            Build Your Brand. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">Expand Your Influence.</span>
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-end">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl text-white/50 max-w-xl leading-relaxed font-light"
            >
              KR Media Group architects influence systems that convert attention into ownership, equity, and long-term economic power. We work with creators, founders, and visionaries ready to move beyond visibility into control.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => scrollToSection('fleet')}
                className="group bg-[#FFFFFF] text-black px-10 py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-white transition-all shadow-[0_20px_40px_rgba(255,255,255,0.05)] hover:-translate-y-1 uppercase tracking-widest text-xs"
              >
                Start Your Brand
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('booking')}
                className="bg-white/5 backdrop-blur-md border border-white/10 px-10 py-5 rounded-2xl font-bold hover:bg-white/10 transition-all uppercase tracking-widest text-xs text-white"
              >
                Explore Our Strategy
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
