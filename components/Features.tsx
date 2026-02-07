
import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Shield, Sparkles, Users, Crown } from 'lucide-react';

const usps = [
  {
    icon: <Target size={32} />,
    title: 'Strategic Positioning',
    description: 'Transform from brand spokesperson to equity owner with strategic repositioning.'
  },
  {
    icon: <TrendingUp size={32} />,
    title: 'Influence Engine',
    description: 'Convert attention into captured audiences, subscribers, and revenue streams.'
  },
  {
    icon: <Shield size={32} />,
    title: 'Crisis Management',
    description: 'Protect your reputation with expert crisis response and narrative control.'
  },
  {
    icon: <Sparkles size={32} />,
    title: 'Iconic Brand Development',
    description: 'Build enduring brands that transcend trends and create lasting value.'
  },
  {
    icon: <Users size={32} />,
    title: 'Owned Platforms',
    description: 'Control your audience relationship through membership sites and apps.'
  },
  {
    icon: <Crown size={32} />,
    title: 'Brand Architecture',
    description: 'Design influence systems that generate generational wealth and impact.'
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-32 bg-[#141414] relative overflow-hidden">
      {/* Decorative gradient background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(253,252,240,0.02)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#FFFFFF]/60 font-black text-[10px] tracking-[0.4em] uppercase mb-4 block"
          >
            Why KR Media
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-[#FFFFFF] mb-6 tracking-tighter uppercase"
          >
            Architects of <br /> Lasting Brands.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto text-lg font-light leading-relaxed"
          >
            More than marketing — we architect influence systems that transform attention into ownership, equity, and generational wealth.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {usps.map((usp, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                }
              }}
              className="group p-10 rounded-[40px] bg-[#1c1c1c] border border-white/5 hover:border-[#FFFFFF]/20 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FFFFFF]/5"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#252525] flex items-center justify-center text-[#FFFFFF] mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:bg-[#FFFFFF] group-hover:text-black shadow-inner">
                {usp.icon}
              </div>
              <h3 className="text-xl font-black text-[#FFFFFF] mb-4 uppercase tracking-tight">
                {usp.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed font-light group-hover:text-white/80 transition-colors">
                {usp.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
