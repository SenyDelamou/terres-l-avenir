import { useApp } from '../context/AppContext.jsx';

const languages = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
];

function LanguageSwitcher() {
  const { language, setLanguage } = useApp();

  return (
    <div className="language-switcher" role="group" aria-label="Changer de langue">
      {languages.map(({ code, label }) => {
        const isActive = language === code;
        return (
          <button
            key={code}
            type="button"
            className={`language-chip ${isActive ? 'active' : ''}`}
            onClick={() => setLanguage(code)}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

export default LanguageSwitcher;
