import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme} style={{ marginBottom: '10px' }}>
      Theme is currently: {theme}
    </button>
  );
};