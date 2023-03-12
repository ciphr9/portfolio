import { render, screen } from '@testing-library/react';
import App from './App';

test('displays Daniel Brandl in headline', () => {
  render(<App />);
  const headline = screen.getByRole('heading');
  expect(headline).toHaveTextContent('Daniel Brandl');
});
