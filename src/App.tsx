import { useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import { setTheme } from './utils/theme';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Extension Chrome', href: '/extension-chrome' },
  { label: 'Contact', href: '/contact' },
  
];

const themeOptions = [
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
];

function App() {
  const [theme, setLocalTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setLocalTheme(next);
    setTheme(next);
  };

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
    </>
  );
}

export default App;