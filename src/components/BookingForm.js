import React, { useState, useEffect } from 'react';

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
    // State to hold form data
    const [date, setDate] = useState("");
    const [time, setTime] = useState(availableTimes[0]);
    const [guests, setGuests] = useState("1");
    const [occasion, setOccasion] = useState("Birthday");
    // State to handle validation errors
    const [dateError, setDateError] = useState("");
    const [guestsError, setGuestsError] = useState("");

    // This useEffect hook runs whenever the availableTimes array changes.
    // It automatically sets the 'time' state to the first available time in the new array.
    useEffect(() => {
        if (availableTimes && availableTimes.length > 0) {
            setTime(availableTimes[0]);
        }
    }, [availableTimes]);

    const validateForm = () => {
        let isValid = true;
        // Validate date
        if (!date) {
            setDateError("Please select a date.");
            isValid = false;
        } else {
            setDateError("");
        }

        // Validate number of guests
        const numGuests = parseInt(guests);
        if (isNaN(numGuests) || numGuests < 1 || numGuests > 10) {
            setGuestsError("Number of guests must be between 1 and 10.");
            isValid = false;
        } else {
            setGuestsError("");
        }

        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const formData = { date, time, guests, occasion };
            submitForm(formData);
        }
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
        // Correctly dispatch an action object with the type and payload
        dispatch({ type: 'UPDATE_TIMES', payload: new Date(e.target.value) });
    };

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={handleDateChange}
                aria-describedby="date-error"
            />
            {dateError && <p id="date-error" className="error-message">{dateError}</p>}

            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
            >
                {availableTimes.map(t => (
                    <option key={t}>{t}</option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                aria-describedby="guests-error"
            />
            {guestsError && <p id="guests-error" className="error-message">{guestsError}</p>}

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
            >
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Corporate</option>
                <option>Private</option>
                <option>Casual</option>
            </select>

            <input
                className="primary-button"
                type="submit"
                value="Make Your Reservation"
                aria-disabled={!date || guests < 1 || guests > 10}
            />
        </form>
    );
};

export default BookingForm;