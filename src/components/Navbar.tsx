import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../i18n/translations';

const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: 'uz', label: 'UZ', flag: '🇺🇿' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'ru', label: 'RU', flag: '🇷🇺' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
    }`}>
      <div className="container-width flex justify-between items-center">
        <a href="#" className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white flex items-center">
          OA<span className="text-pink-500">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}

          {/* Language Switcher */}
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 rounded-xl p-1">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                  language === lang.code
                    ? 'bg-pink-500 text-white shadow-sm shadow-pink-500/30'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-3">
          {/* Mobile Language Switcher */}
          <div className="flex items-center gap-0.5 bg-slate-100 dark:bg-slate-800 rounded-lg p-0.5">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`px-2 py-1 rounded-md text-[10px] font-bold transition-all duration-200 ${
                  language === lang.code
                    ? 'bg-pink-500 text-white'
                    : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <button onClick={toggleDarkMode} className="p-2 text-slate-600 dark:text-slate-400">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-900 dark:text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 overflow-hidden"
          >
            <div className="container-width py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-bold text-slate-900 dark:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
