import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './locales/en.json'
import he from './locales/he.json'
import ar from './locales/ar.json'

const resources = {
  en: {
    translation: en,
    language_name: 'english',
  },

  he: {
    translation: he,
    language_name: 'kurdish',
  },
  ar: {
    translation: ar,
    language_name: 'arabic',
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  })
export default i18n
