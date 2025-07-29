import { translations } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';

export default function Intro() {
  const { lang } = useLanguage();

  return (
    <section id="about" className="py-20">
      <h2 className="text-3xl font-bold">
        {translations[lang].about}
      </h2>
      <img 
        src="/profil.jpg" 
        alt="Profil" 
        className="w-40 h-40 rounded-full mt-6"
      />
    </section>
  );
}