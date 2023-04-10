import { render, screen } from '@testing-library/react';
import LinkedinButton from './LinkedinButton';

test('displays LinkedinButton', () => {
  render(<LinkedinButton />);
  const linkedinButton = screen.getByTestId('linkedin-button');
  expect(linkedinButton).toBeInTheDocument();
});
