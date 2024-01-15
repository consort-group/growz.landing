import { createI18n } from 'vue-i18n';
import uz from './uz.json'
import en from './en.json'
import ru from './ru.json'

const messages = {
  en: en,
  ru: ru,
  uz: uz,
};

const i18n = createI18n({
  locale: JSON.parse(localStorage.getItem('locale')) || 'en',
  messages,
});

export default i18n;