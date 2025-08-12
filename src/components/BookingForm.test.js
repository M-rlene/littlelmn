import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

// Mock the props that the BookingForm component expects to receive.
const mockAvailableTimes = ["17:00", "18:00", "19:00"];
const mockDispatch = jest.fn();
const mockSubmitForm = jest.fn();

test('renders the BookingForm with its elements', () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );
  
    // Check for a specific label or element to confirm it's rendered.
    const dateLabel = screen.getByLabelText("Choose date");
    expect(dateLabel).toBeInTheDocument();
    
    const timeSelect = screen.getByLabelText("Choose time");
    expect(timeSelect).toBeInTheDocument();

    const guestsInput = screen.getByLabelText("Number of guests");
    expect(guestsInput).toBeInTheDocument();

    const occasionSelect = screen.getByLabelText("Occasion");
    expect(occasionSelect).toBeInTheDocument();

    const submitButton = screen.getByRole('button', { name: /Make Your Reservation/i });
    expect(submitButton).toBeInTheDocument();
});