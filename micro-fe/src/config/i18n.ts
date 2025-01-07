import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from '../translations/en.json';
import translationPL from '../translations/pl.json';

i18n.use(initReactI18next).init({
  resources: {
    pl: {
      translation: translationPL,
    },
    en: {
      translation: translationEN,
    },
  },
  lng: 'pl',
  fallbackLng: 'pl',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
