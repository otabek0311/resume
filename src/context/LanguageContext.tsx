import React, { createContext, useContext, useState } from 'react';
import { translations, Language } from '../i18n/translations';

type Translations = typeof translations['uz'];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'uz',
  setLanguage: () => {},
  t: translations['uz'],
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language') as Language;
      if (saved && ['uz', 'en', 'ru'].includes(saved)) return saved;
    }
    return 'uz';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] as Translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
