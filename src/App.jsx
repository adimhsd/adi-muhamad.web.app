import { useEffect, useState } from 'react';
import AboutExpertise from './components/AboutExpertise';
import BusinessEcosystem from './components/BusinessEcosystem';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Publications from './components/Publications';
import StatsBar from './components/StatsBar';
import TechStack from './components/TechStack';

const THEME_STORAGE_KEY = 'adi_lp_theme';

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark';
  const saved = localStorage.getItem(THEME_STORAGE_KEY);
  return saved === 'light' ? 'light' : 'dark';
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <Navbar theme={theme} onToggleTheme={handleToggleTheme} />
      <main className="max-w-[1140px] mx-auto px-4 md:px-6">
        <Hero />
        <StatsBar />
        <AboutExpertise />
        <TechStack />
        <BusinessEcosystem />
        <Projects />
        <Publications />
      </main>
      <Footer />
    </>
  );
}
