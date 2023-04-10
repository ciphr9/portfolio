import { render, screen } from '@testing-library/react';
import App from './App';
import { vi } from 'vitest';

vi.mock('three', async () => {
  const THREE = await vi.importActual<any>('three');
  return {
    ...THREE,
    WebGLRenderer: vi.fn().mockReturnValue({
      domElement: document.createElement('div'), // create a fake div
      setSize: vi.fn(),
      render: vi.fn(),
    }),
  };
});

test('displays Daniel Brandl in headline', () => {
  render(<App />);
  const headline = screen.getByText('Daniel Brandl');
  expect(headline).toBeInTheDocument();
});

test('displays Software Developer in sub-headline', () => {
  render(<App />);
  const subHeadline = screen.getByText('Software Developer');
  expect(subHeadline).toBeInTheDocument();
});

test('displays Portfolio in navigation', () => {
  render(<App />);
  const navigation = screen.getByText('Portfolio');
  expect(navigation).toBeInTheDocument();
});

test('displays logo', () => {
  render(<App />);
  const logo = screen.getByRole('img');
  expect(logo).toBeInTheDocument();
});
