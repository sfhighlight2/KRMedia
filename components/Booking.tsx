
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ArrowRight, User, Mail, ChevronRight } from 'lucide-react';

const Booking: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brand: '',
    audienceSize: '',
    goal: 'Strategic Positioning',
    context: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        brand: '',
        audienceSize: '',
        goal: 'Strategic Positioning',
        context: ''
      });
    }, 8000);
  };

  return (
    <section id="booking" className="py-20 md:py-32 relative overflow-hidden bg-[#FFFFFF] bg-[radial-gradient(circle_at_bottom_right,#FFFFFF_0%,#FFFFFF_100%)] transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-24"
          >
            <span className="text-[#FFFFFF]/60 font-bold tracking-[0.4em] uppercase text-[12px] mb-4 block">
              Strategy Intake
            </span>
            <h2 className="text-4xl md:text-7xl font-black text-gray-900 mb-6 uppercase tracking-tighter">
              Apply for a Private <br /> Strategy Session
            </h2>
            <p className="text-gray-600 text-xl font-light max-w-2xl mx-auto">
              This is not a sales call. It's a strategic evaluation to determine alignment.
            </p>
          </motion.div>

          <motion.div
            id="reservation-form"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative w-full max-w-4xl"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="booking-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                  className="bg-[#1c1c1c] border border-white/10 rounded-[32px] md:rounded-[48px] p-6 md:p-14 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden group"
                >
                  <h3 className="text-2xl md:text-3xl font-black text-[#FFFFFF] mb-8 uppercase tracking-tight border-b border-white/5 pb-4">
                    Strategy Application
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-[11px] font-black text-white/40 uppercase tracking-[0.3em] mb-4">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                          <input
                            required
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 pl-14 text-white focus:outline-none focus:border-[#FFFFFF]/50 transition-colors font-medium placeholder:text-white/10"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[11px] font-black text-white/40 uppercase tracking-[0.3em] mb-4">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                          <input
                            required
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@example.com"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 pl-14 text-white focus:outline-none focus:border-[#FFFFFF]/50 transition-colors font-medium placeholder:text-white/10"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-[11px] font-black text-white/40 uppercase tracking-[0.3em] mb-4">Brand / Company</label>
                        <input
                          required
                          type="text"
                          name="brand"
                          value={formData.brand}
                          onChange={handleInputChange}
                          placeholder="Your Entity"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#FFFFFF]/50 transition-colors font-medium placeholder:text-white/10"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-black text-white/40 uppercase tracking-[0.3em] mb-4">Current Platform Size</label>
                        <input
                          required
                          type="text"
                          name="audienceSize"
                          value={formData.audienceSize}
                          onChange={handleInputChange}
                          placeholder="e.g. 500k+ total reach"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#FFFFFF]/50 transition-colors font-medium placeholder:text-white/10"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-black text-white/40 uppercase tracking-[0.3em] mb-4">Primary Goal</label>
                      <select
                        name="goal"
                        value={formData.goal}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#FFFFFF]/50 transition-colors font-medium appearance-none"
                      >
                        <option value="Strategic Positioning">Strategic Positioning</option>
                        <option value="Influence Monetization">Influence Monetization</option>
                        <option value="Platform Ownership">Platform Ownership</option>
                        <option value="Crisis Management">Crisis Management</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-black text-white/40 uppercase tracking-[0.3em] mb-4">Additional Context</label>
                      <textarea
                        name="context"
                        value={formData.context}
                        onChange={handleInputChange}
                        placeholder="Tell us about your current influence structure..."
                        rows={4}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#FFFFFF]/50 transition-colors font-medium placeholder:text-white/10 resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#FFFFFF] text-black py-7 rounded-2xl font-black uppercase tracking-[0.4em] text-[13px] hover:bg-white transition-all shadow-2xl flex items-center justify-center gap-4 group"
                    >
                      Request Strategy Review
                      <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="confirmation"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-[#1c1c1c] border border-white/10 rounded-[32px] md:rounded-[48px] p-10 md:p-16 text-center flex flex-col items-center justify-center min-h-[500px] shadow-2xl"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 12, stiffness: 200 }}
                    className="w-24 h-24 bg-[#FFFFFF]/10 rounded-full flex items-center justify-center mb-8 border border-[#FFFFFF]/20"
                  >
                    <CheckCircle className="text-[#FFFFFF]" size={48} />
                  </motion.div>
                  <h3 className="text-3xl md:text-5xl font-black mb-5 uppercase tracking-tighter text-[#FFFFFF]">Application Received</h3>
                  <p className="text-white/60 max-w-sm mx-auto leading-relaxed text-lg font-light">
                    Our strategy team will evaluate your application and contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-12 text-[11px] font-black uppercase tracking-[0.4em] text-white/30 hover:text-[#FFFFFF] transition-colors"
                  >
                    Back to Application
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
