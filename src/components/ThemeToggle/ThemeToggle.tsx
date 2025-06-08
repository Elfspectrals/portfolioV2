import { Sun, Moon } from 'lucide-react';
import clsx from 'clsx';
import styles from './ThemeToggle.module.scss';
import { setTheme } from '../../utils/theme';
import { useState, useEffect } from 'react';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className }) => {
  const [dark, setDark] = useState(
    document.documentElement.classList.contains('theme-dark')
  );

  // keep local state in sync if theme is changed elsewhere
  useEffect(() => {
    const obs = new MutationObserver(() =>
      setDark(document.documentElement.classList.contains('theme-dark'))
    );
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => obs.disconnect();
  }, []);

  const toggle = () => {
    const next = dark ? 'light' : 'dark';
    setTheme(next);
    setDark(!dark);
  };

  return (
    <button
      aria-label="Toggle theme"
      className={clsx(styles.toggle, dark && styles.dark, className)}
      onClick={toggle}
    >
      {dark ? <Sun size={18} strokeWidth={2} /> : <Moon size={18} strokeWidth={2} />}
    </button>
  );
};
