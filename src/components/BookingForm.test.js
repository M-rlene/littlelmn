import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI } from '../api';

// Import or recreate the reducer functions for testing
const updateTimes = (state, action) => {
    if (action.type === 'UPDATE_TIMES') {
        return fetchAPI(action.payload);
    }
    return state;
};

const initializeTimes = () => {
    return fetchAPI(new Date());
};

describe('BookingForm', () => {
    // Step 1: Update the test for initializeTimes
    test('initializeTimes returns non-empty array of available times', () => {
        const initialTimes = initializeTimes();
        
        // For testing purposes, fetchAPI should return a non-empty array
        expect(Array.isArray(initialTimes)).toBe(true);
        expect(initialTimes.length).toBeGreaterThan(0);
        expect(typeof initialTimes[0]).toBe('string');
    });

    // Step 2: Update the test for updateTimes  
    test('updateTimes returns available times for selected date', () => {
        const selectedDate = new Date('2025-08-10');
        const action = { type: 'UPDATE_TIMES', payload: selectedDate };
        const currentState = ['17:00', '18:00']; // existing times
        
        const updatedTimes = updateTimes(currentState, action);
        
        // Should return array of times from fetchAPI for the selected date
        expect(Array.isArray(updatedTimes)).toBe(true);
        expect(updatedTimes.length).toBeGreaterThan(0);
    });

    test('updateTimes returns same state for unknown action type', () => {
        const currentState = ['17:00', '18:00'];
        const action = { type: 'UNKNOWN_ACTION', payload: 'test' };
        
        const result = updateTimes(currentState, action);
        
        expect(result).toBe(currentState);
    });

    test('form renders and submits with valid data', () => {
        const availableTimes = ["17:00", "18:00", "19:00"];
        const dispatch = jest.fn();
        const submitForm = jest.fn();

        render(
            <BookingForm 
                availableTimes={availableTimes} 
                dispatch={dispatch} 
                submitForm={submitForm} 
            />
        );

        // Fill out the form with valid data
        fireEvent.change(screen.getByLabelText(/Choose date/i), { 
            target: { value: '2025-08-09' } 
        });
        fireEvent.change(screen.getByLabelText(/Number of guests/i), { 
            target: { value: '4' } 
        });

        // Click the submit button
        fireEvent.click(screen.getByRole('button', { name: /Make Your Reservation/i }));

        // Check if the submitForm function was called
        expect(submitForm).toHaveBeenCalledWith({
            date: '2025-08-09',
            time: '17:00', // Should be first available time
            guests: '4',
            occasion: 'Birthday' // Default value
        });
    });

    test('form dispatches UPDATE_TIMES action when date changes', () => {
        const availableTimes = ["17:00", "18:00"];
        const dispatch = jest.fn();
        const submitForm = jest.fn();

        render(
            <BookingForm 
                availableTimes={availableTimes} 
                dispatch={dispatch} 
                submitForm={submitForm} 
            />
        );

        // Change the date
        fireEvent.change(screen.getByLabelText(/Choose date/i), { 
            target: { value: '2025-08-10' } 
        });

        // Check that dispatch was called with correct action
        expect(dispatch).toHaveBeenCalledWith({
            type: 'UPDATE_TIMES',
            payload: new Date('2025-08-10')
        });
    });

    test('submitAPI returns true on successful submission', () => {
        const formData = {
            date: '2025-08-10',
            time: '18:00',
            guests: '4',
            occasion: 'Birthday'
        };
        
        const result = submitAPI(formData);
        expect(result).toBe(true);
    });
});