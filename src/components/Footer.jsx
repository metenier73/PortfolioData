import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="bg-gray-900 text-center py-8">
      <p>
        {lang === 'fr' 
          ? "© 2024 Tous droits réservés" 
          : "© 2024 All rights reserved"}
      </p>
    </footer>
  );
}