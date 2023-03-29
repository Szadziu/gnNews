import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './translations/en.json';
import pl from './translations/pl.json';
import countries_en from './translations/countries_en.json';
import countries_pl from './translations/countries_pl.json';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: en,
            countries: countries_en,
        },
        pl: {
            translation: pl,
            countries: countries_pl,
        },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
