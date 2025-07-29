import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <Header />
      <main className="container mx-auto px-4">
        <Intro />
        <Projects />
      </main>
      <Footer />
    </LanguageProvider>
  );
}