import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900">
      <div className="container-width px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-slate-900 dark:text-white font-display text-3xl tracking-tighter">
            OA<span className="text-primary-500">.</span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
            <a href="#about" className="text-sm font-semibold text-slate-500 hover:text-primary-500 transition-colors">{t.footer.about}</a>
            <a href="#skills" className="text-sm font-semibold text-slate-500 hover:text-primary-500 transition-colors">{t.footer.skills}</a>
            <a href="#projects" className="text-sm font-semibold text-slate-500 hover:text-primary-500 transition-colors">{t.footer.projects}</a>
            <a href="#contact" className="text-sm font-semibold text-slate-500 hover:text-primary-500 transition-colors">{t.footer.contact}</a>
          </div>

          <p className="text-slate-400 dark:text-slate-500 text-sm">
            © {currentYear} {PERSONAL_INFO.name}
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-50 dark:border-slate-900/50 text-center">
          <p className="text-[10px] text-slate-300 dark:text-slate-700 uppercase tracking-[0.5em]">
            Crafted with Passion & Precision
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
