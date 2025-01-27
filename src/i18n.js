import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from './translations/en.json';
import itTranslations from './translations/it.json';
import frTranslations from './translations/fr.json';
import esTranslations from './translations/es.json';
import ptTranslations from './translations/pt.json';
import zhTranslations from './translations/zh.json';
import hiTranslations from './translations/hi.json';
import ruTranslations from './translations/ru.json';
import jaTranslations from './translations/ja.json';

i18n
  .use(LanguageDetector)
  .init({
    resources: {
      en: { translation: enTranslations },
      it: { translation: itTranslations },
      fr: { translation: frTranslations },
      es: { translation: esTranslations },
      pt: { translation: ptTranslations },
      zh: { translation: zhTranslations },
      hi: { translation: hiTranslations },
      ru: { translation: ruTranslations },
      ja: { translation: jaTranslations }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;