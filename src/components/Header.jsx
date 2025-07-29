import { useEffect, useState } from 'react';

export default function Header() {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'fr');

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
  }, [lang]);

  return (
    <header className="bg-gray-900 text-white p-4">
      <button 
        onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
        className="bg-blue-500 px-3 py-1 rounded"
      >
        {lang === 'fr' ? 'EN' : 'FR'}
      </button>
    </header>
  );
}