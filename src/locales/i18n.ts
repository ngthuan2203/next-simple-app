import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// utils
//
import enLocales from './langs/en';
//
import { defaultLang } from './config-lang';

// ----------------------------------------------------------------------

let lng = defaultLang.value;

i18n.use(initReactI18next).init({
  resources: {
    en: { translations: enLocales },
  },
  lng,
  fallbackLng: defaultLang.value,
  debug: false,
  ns: ['translations'],
  defaultNS: 'translations',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
