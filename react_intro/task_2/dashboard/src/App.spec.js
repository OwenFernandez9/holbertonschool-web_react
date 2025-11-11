import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders the h1 element with the text "School dashboard"', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { level: 1, name: /school dashboard/i });
    expect(heading).toBeInTheDocument();
  });

  test('renders the body paragraph with login text', () => {
    render(<App />);
    const bodyText = screen.getByText(/login to access the full dashboard/i);
    expect(bodyText).toBeInTheDocument();
  });

  test('renders the footer paragraph with copyright text and current year', () => {
    render(<App />);
    const year = new Date().getFullYear();
    const footerText = screen.getByText(new RegExp(`Copyright ${year} - holberton School`, 'i'));
    expect(footerText).toBeInTheDocument();
  });

  test('renders the Holberton logo image', () => {
    render(<App />);
    const logo = screen.getByAltText(/holberton logo/i);
    expect(logo).toBeInTheDocument();
  });
});
