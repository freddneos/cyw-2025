import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { createContext } from 'preact';
import { useState, useEffect, useContext } from 'preact/hooks';

import ptTranslations from '../translations/pt.json';
import enTranslations from '../translations/en.json';

// Create a context for i18n
export const I18nContext = createContext();

// Initialize i18next
i18next
  .use(LanguageDetector)
  .init({
    lng: 'pt', // always initialize with Portuguese
    resources: {
      pt: {
        translation: ptTranslations
      },
      en: {
        translation: enTranslations
      }
    },
    fallbackLng: 'pt',
    debug: false,
    interpolation: {
      escapeValue: false,
    }
  });

// Update meta information based on current language
const updateMetaContent = () => {
  document.title = i18next.t('meta.title');
  document.querySelector('meta[name="description"]').content = i18next.t('meta.description');
};

// Custom hook for translations
export function useTranslation() {
  const [language, setLanguage] = useState(i18next.language);

  useEffect(() => {
    const handleLanguageChanged = () => {
      setLanguage(i18next.language);
      updateMetaContent();
    };

    i18next.on('languageChanged', handleLanguageChanged);
    // Update meta content on initial load
    updateMetaContent();
    
    return () => {
      i18next.off('languageChanged', handleLanguageChanged);
    };
  }, []);

  return {
    t: (key, options) => i18next.t(key, options),
    i18n: i18next,
    language
  };
}

// Provider component
export function I18nProvider({ children }) {
  const value = useTranslation();
  
  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
}

export default i18next;