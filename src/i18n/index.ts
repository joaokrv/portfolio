import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import pt from './locales/pt.json'
import en from './locales/en.json'
import es from './locales/es.json'

const savedLang = localStorage.getItem('i18nextLng')
const browserLang = navigator.language?.split('-')[0]
const fallbackLng = 'pt'

i18n.use(initReactI18next).init({
  resources: {
    pt: { translation: pt },
    en: { translation: en },
    es: { translation: es },
  },
  lng: savedLang || (browserLang && ['pt', 'en', 'es'].includes(browserLang) ? browserLang : fallbackLng),
  fallbackLng,
  interpolation: {
    escapeValue: false,
  },
})

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('i18nextLng', lng)
})

export default i18n
