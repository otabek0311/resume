import React from 'react';
import { motion } from 'motion/react';
import { SKILL_CATEGORIES } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();

  const categoriesWithTranslatedTitles = SKILL_CATEGORIES.map((cat, idx) => ({
    ...cat,
    title: t.skills.categoryTitles[idx] ?? cat.title,
    skills: idx === 5 ? [...t.skills.softSkills] : cat.skills,
  }));

  return (
    <section id="skills" className="section-padding bg-white dark:bg-slate-900">
      <div className="container-width">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            {t.skills.title}
          </motion.h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t.skills.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoriesWithTranslatedTitles.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 rounded-xl text-sm font-medium border border-slate-100 dark:border-slate-700 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
