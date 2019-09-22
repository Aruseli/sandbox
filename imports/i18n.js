import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import moment from 'moment';
import 'moment/locale/ru';

moment.locale('ru');
moment.updateLocale('ru');

const resources = {
  ru: {
    translation: {
      signin: 'войти',
      signout: 'выйти',
      signup: 'создать',
      submit: 'отправить',
      username: 'имя',
      password: 'ключ',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ru',

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

export { useTranslation } from 'react-i18next';
