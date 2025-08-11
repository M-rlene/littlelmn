// src/components/BookingPage.js
import React from 'react';
import BookingForm from './BookingForm';

// Make sure BookingPage accepts the submitForm prop
const BookingPage = ({ availableTimes, dispatch, submitForm }) => {
    return (
        <section>
            <h1>Reserve a Table</h1>
            <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
                submitForm={submitForm} // Pass the prop down to the form
            />
        </section>
    );
};

export default BookingPage;