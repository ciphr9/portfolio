export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export const setTheme = (theme: Theme) => {
  if (theme === Theme.Dark) {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
  }
};
