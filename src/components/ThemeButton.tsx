import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { Theme, setTheme } from '../utils/theme';

const ThemeButton = () => {
  const [theme, setThemeState] = React.useState(Theme.Light);

  useEffect(() => {
    const isDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const newTheme = isDarkTheme ? Theme.Dark : Theme.Light;
    setTheme(newTheme);
    setThemeState(newTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light;
    setTheme(newTheme);
    setThemeState(newTheme);
  };

  return (
    <button
      className="bg-slate-800 dark:bg-slate-200 hover:opacity-90 text-slate-100 dark:text-slate-900 font-bold w-10 h-10 rounded-full ml-2"
      onClick={toggleTheme}
    >
      {theme === Theme.Light ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
    </button>
  );
};

export default ThemeButton;
