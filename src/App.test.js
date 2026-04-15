import { render, screen } from '@testing-library/react';
import App from './App';

test('renders deployment pipeline heading', () => {
  render(<App />);
  expect(screen.getByText(/react deployment pipeline/i)).toBeInTheDocument();
});
