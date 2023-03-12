import { render, screen } from '@testing-library/react';
import App from './App';

test('displays Neon in headline', () => {
  render(<App />);
  const headline = screen.getByRole('heading');
  expect(headline).toHaveTextContent('Neon');
});
