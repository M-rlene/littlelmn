import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders the Little Lemon heading on the homepage', () => {
    render(<App />);
    const headingElement = screen.getByRole('heading', { level: 1, name: 'Little Lemon' });
    expect(headingElement).toBeInTheDocument();
});