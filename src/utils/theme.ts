// utils/theme.ts
export function setTheme(theme: 'light' | 'dark') {
  document.documentElement.classList.remove('theme-light', 'theme-dark');
  document.documentElement.classList.add(`theme-${theme}`);
  localStorage.setItem('theme', theme);
}
