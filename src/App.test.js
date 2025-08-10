import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Reserve a Table heading on the booking page', () => {
    render(<App />);
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
});