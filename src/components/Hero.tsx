import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-white dark:bg-slate-950">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-pink-200 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-100 blur-[120px] rounded-full"></div>
      </div>

      <div className="container-width">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-pink-50 text-pink-600 rounded-full text-xs font-bold uppercase tracking-wider border border-pink-100">
              <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span>
              ISH IMKONIYATLARIGA OCHIQMAN
            </div>

            {/* Main Title */}
            <h1 className="text-7xl md:text-[140px] font-display uppercase leading-[0.85] tracking-tighter text-slate-900 dark:text-white">
              {PERSONAL_INFO.name}
            </h1>

            {/* Subtitle */}
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white">
              Backend Dasturchi
            </h2>

            {/* Description */}
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
              Node.js asosida backend tizimlar ishlab chiqaman. Amaliy loyihalarda barqaror va tushunarli yechimlar yaratishga e’tibor qarataman.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap gap-6 pt-4">
              <a 
                href="#projects" 
                className="px-10 py-5 bg-pink-500 text-white rounded-2xl font-bold text-lg hover:bg-pink-600 transition-all shadow-xl shadow-pink-500/25 flex items-center gap-3 group"
              >
                Loyihalarni ko'rish
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 rounded-2xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm"
              >
                Men bilan bog'lanish
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default Hero;