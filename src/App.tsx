import { useState } from 'react';
import { Header } from './components/Header/Header';
import { Button } from './components/Button/Button';
import { setTheme } from './utils/theme';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'Contact', href: '/contact' },
];

const themeOptions = [
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
];

function App() {
  const [theme, setLocalTheme] = useState<'light' | 'dark'>(
    document.documentElement.classList.contains('theme-dark') ? 'dark' : 'light'
  );

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
