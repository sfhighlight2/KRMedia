
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Private strategy session to assess influence, assets, and leverage.',
    details: ['Asset Audit', 'Leverage Mapping', 'Strategic Alignment']
  },
  {
    number: '02',
    title: 'Architecture',
    description: 'Design custom influence, platform, and monetization systems.',
    details: ['System Design', 'Platform Blueprint', 'Financial Modeling']
  },
  {
    number: '03',
    title: 'Deployment',
    description: 'Launch owned platforms, media systems, and growth channels.',
    details: ['Platform Launch', 'Channel Integration', 'Live Operations']
  },
  {
    number: '04',
    title: 'Expansion',
    description: 'Scale, optimize, and compound value across verticals and partnerships.',
    details: ['Vertical Growth', 'Partner Synergy', 'Equity Compounding']
  }
];

const Process: React.FC = () => {
  return (
    <div className="bg-[#FFFFFF] bg-[radial-gradient(circle_at_top_left,#FFFFFF_0%,#FFFFFF_100%)] py-20 md:py-32 overflow-hidden transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black text-black mb-8 uppercase tracking-tighter"
          >
            The Brand-Building <br /> Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-black/50 text-xl font-light max-w-2xl"
          >
            A disciplined, strategic process designed to move influence from exposure to ownership.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#1c1c1c] p-6 md:p-8 rounded-[24px] md:rounded-[32px] border border-white/5 shadow-2xl transition-all duration-500"
            >
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 0.1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 + 0.3 }}
                className="text-5xl md:text-7xl font-black text-white block mb-4 leading-none"
              >
                {step.number}
              </motion.div>
              <h3 className="text-xl md:text-2xl font-black mb-3 text-white uppercase tracking-tight">{step.title}</h3>
              <p className="text-white/50 text-sm md:text-base leading-relaxed font-light">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
