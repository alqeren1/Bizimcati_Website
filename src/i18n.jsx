import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translation_en from './translations/en/global.json'
import translation_de from './translations/de/global.json'
import translation_ru from './translations/ru/global.json'
import translation_tr from './translations/tr/global.json'

const resources = {
  en: {
    translation: translation_en
  },
  de: {
    translation: translation_de
  },
  ru: {
    translation: translation_ru
  },
  tr: {
    translation: translation_tr
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "tr", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;