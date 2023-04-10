import { render, screen } from '@testing-library/react';
import GithubButton from './GithubButton';

test('displays GithubButton', () => {
  render(<GithubButton />);
  const githubButton = screen.getByTestId('github-button');
  expect(githubButton).toBeInTheDocument();
});
