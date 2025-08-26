import { useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import { setTheme } from './utils/theme';
import { Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import ExtensionChrome from './pages/ExtensionChrome';
import ThreeDWorld from './pages/3DWorld';
import Home from './pages/Home';


const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Extension Chrome', href: '/extension-chrome' },
  { label: '3D World', href: '/3DWorld' },
  { label: 'Contact', href: '/contact' },
];

const themeOptions = [
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
];

function App() {
  const [theme, setLocalTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    setTheme(theme);
  }, [theme]);


  return (
    <>
      <Header
        navLinks={navLinks}
        dropdownOptions={themeOptions}
        onDropdownSelect={(v) => {
          setLocalTheme(v as 'light' | 'dark');
          setTheme(v as 'light' | 'dark');
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/extension-chrome" element={<ExtensionChrome />} />
        <Route path="/3DWorld" element={<ThreeDWorld />} />

      </Routes>
    </>
  );
}

export default App;