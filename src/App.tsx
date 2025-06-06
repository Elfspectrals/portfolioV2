import { Button } from './components/Button/Button';
import { setTheme } from './utils/theme';

function App() {
  return (
    <>
      <Button text="Save"    variant="primary" />
      <Button text="Delete"  variant="warning" />
      <Button text="Added!"  variant="success" disabled />
      <Button
        text="Toggle Theme"
        variant="outline"
        onClick={() => {
          const isDark = document.documentElement.classList.contains('theme-dark');
          setTheme(isDark ? 'light' : 'dark');
        }}
      />
    </>
  );
}
export default App;