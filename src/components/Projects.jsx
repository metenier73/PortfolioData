import { projects } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';

export default function Projects() {
  const { lang } = useLanguage();

  return (
    <section id="projects" className="grid md:grid-cols-2 gap-6">
      {projects[lang].map((project, index) => (
        <div key={index} className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="mt-2">{project.description}</p>
        </div>
      ))}
    </section>
  );
}