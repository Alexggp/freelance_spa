import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import './index.css'
import App from './App.jsx'


// Internationalization
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import global_es from './locales/es/global.json';
import global_en from './locales/en/global.json';

const locales = ['en', 'es'];
let userLang = window.navigator.userLanguage || window.navigator.language;
if (!locales.includes(userLang)) userLang = 'en';

i18next.init({
  interpolation: { escapeValue: false },
  lng: userLang,
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  }
});

createRoot(document.getElementById('root')).render(
  <>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </>,
)
