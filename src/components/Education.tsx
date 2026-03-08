import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';
import { EDUCATION } from '../constants';

const Education = () => {
  return (
    <section id="education" className="section-padding bg-white dark:bg-slate-900 relative overflow-hidden">
      <div className="container-width">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-display uppercase text-slate-900 dark:text-white mb-6 tracking-tight"
          >
            Ta'lim
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Mening talim olgan joylarim va qo`shilgan sertifikatlarim.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="modern-card p-10 hover:translate-y-[-8px]"
            >
              <div className="w-16 h-16 bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-2xl flex items-center justify-center mb-8">
                {edu.logoUrl ? (
                  <img 
                    src={edu.logoUrl} 
                    alt={edu.institution} 
                    className="w-10 h-10 object-contain filter dark:brightness-0 dark:invert"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <GraduationCap size={32} />
                )}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                {edu.degree}
              </h3>
              <p className="text-primary-600 dark:text-primary-400 font-bold text-lg mb-3">
                {edu.institution}
              </p>
              <div className="inline-block px-3 py-1 bg-slate-50 dark:bg-slate-800 rounded-lg text-slate-500 dark:text-slate-400 font-bold text-sm mb-6">
                {edu.period}
              </div>
              {edu.description && (
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                  {edu.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
