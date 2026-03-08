import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../constants';
import { Terminal, Code2, Database, ShieldCheck } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: <Terminal size={20} />, text: "Node.js & NestJS Mutaxassisi" },
    { icon: <Database size={20} />, text: "PostgreSQL & Redis Optimallashtirish" },
    { icon: <ShieldCheck size={20} />, text: "Xavfsiz Auth & DDD Arxitekturasi" },
    { icon: <Code2 size={20} />, text: "SOLID & Toza Kod Tamoyillari" },
  ];

  return (
    <section id="about" className="section-padding bg-slate-50 dark:bg-slate-950">
      <div className="container-width">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
            {/* Image Column - Smaller and more refined */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/3"
            >
              <div className="relative">
                <div className="aspect-square w-full max-w-[320px] mx-auto rounded-3xl overflow-hidden shadow-xl border-8 border-white dark:border-slate-900">
                  <img 
                    src="./public/images/123.jpg" 
                    alt="Otabek Abdullayev"
                    className="object-cover hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Subtle background element */}
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary-500/10 rounded-3xl -z-10"></div>
              </div>
              
              <div className="mt-8 text-center lg:text-left">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Otabek Abdullayev</h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium">Backend Developer</p>
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-2/3"
            >
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-5xl font-display text-slate-900 dark:text-white mb-6">
                    Tizimlarni <span className="text-primary-600 italic">masshtablayman</span> va optimallashtiraman
                  </h2>
                  <div className="space-y-4 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                    <p>{PERSONAL_INFO.about}</p>
                    <p>
                      Mening maqsadim — nafaqat ishlaydigan, balki kelajakda kengaytirish oson bo'lgan, xavfsiz va yuqori unumdorlikka ega backend tizimlarini yaratishdir. Har bir loyihada arxitektura tozaligi va ma'lumotlar bazasi samaradorligiga alohida e'tibor qarataman.
                    </p>
                  </div>
                </div>

                {/* Highlights Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {highlights.map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm"
                    >
                      <div className="text-primary-500">
                        {item.icon}
                      </div>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Simple Stats */}
                <div className="pt-6 flex gap-12 border-t border-slate-200 dark:border-slate-800">
                  
                 
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
