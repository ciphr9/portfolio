import { render, screen } from '@testing-library/react';
import ThemeButton from './ThemeButton';

test('displays ThemeButton', () => {
  render(<ThemeButton />);
  const themeButton = screen.getByTestId('theme-button');
  expect(themeButton).toBeInTheDocument();
});

test('theme is light by default', () => {
  render(<ThemeButton />);
  const theme = document.documentElement.className;
  expect(theme).toBe('light');
});

test('theme is dark after click', () => {
  render(<ThemeButton />);
  const themeButton = screen.getByTestId('theme-button');
  themeButton.click();
  const theme = document.documentElement.className;
  expect(theme).toBe('dark');
});
