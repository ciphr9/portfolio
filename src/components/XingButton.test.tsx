import { render, screen } from '@testing-library/react';
import XingButton from './XingButton';

test('displays XingButton', () => {
  render(<XingButton />);
  const xingButton = screen.getByTestId('xing-button');
  expect(xingButton).toBeInTheDocument();
});
