import './styles.scss';
import i18next from 'i18next';
import './i18n';

// Language configuration
const languages = [
  { code: 'en', country: 'US', name: '🇺🇸 English' },
  { code: 'it', country: 'IT', name: '🇮🇹 Italiano' },
  { code: 'fr', country: 'FR', name: '🇫🇷 Français' },
  { code: 'es', country: 'ES', name: '🇪🇸 Español' },
  { code: 'pt', country: 'BR', name: '🇧🇷 Português' },
  { code: 'zh', country: 'CN', name: '🇨🇳 中文' },
  { code: 'hi', country: 'IN', name: '🇮🇳 हिन्दी' },
  { code: 'ru', country: 'RU', name: '🇷🇺 Русский' },
  { code: 'ja', country: 'JP', name: '🇯🇵 日本語' }
];

// Update translations on the page
const updateTranslations = () => {
  // Update regular translations
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    element.textContent = i18next.t(key);
  });

  // Update list translations
  document.querySelectorAll('[data-i18n-list]').forEach(ul => {
    const key = ul.getAttribute('data-i18n-list');
    const items = i18next.t(key, { returnObjects: true });
    if (Array.isArray(items)) {
      ul.innerHTML = items.map(item => `<li class="mb-2">${item}</li>`).join('');
    }
  });
};

// Create language selector
const createLanguageSelector = () => {
  const nav = document.createElement('nav');
  nav.className = 'language-selector';
  
  const select = document.createElement('select');
  select.className = 'form-select form-select-sm';
  
  languages.forEach(lang => {
    const option = document.createElement('option');
    option.value = lang.code;
    option.textContent = lang.name;
    if (lang.code === i18next.language) {
      option.selected = true;
    }
    select.appendChild(option);
  });
  
  select.addEventListener('change', (e) => {
    const newLang = e.target.value;
    i18next.changeLanguage(newLang).then(() => {
      updateTranslations();
    });
  });
  
  nav.appendChild(select);
  document.body.insertBefore(nav, document.body.firstChild);
};

// Initialize when i18next is ready
i18next.on('initialized', () => {
  createLanguageSelector();
  updateTranslations();
});

// Update translations when language changes
i18next.on('languageChanged', () => {
  updateTranslations();
});