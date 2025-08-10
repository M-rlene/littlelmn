import React, { useReducer } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, useNavigate}from 'react-router-dom';
import Header from "./components/header";
import Footer from "./components/footer";
import BookingPage from "./components/BookingPage";
import ConfirmedBooking from "./components/ConfirmedBooking";
import { fetchAPI, submitAPI } from './api';

const updateTimes = (state, action) => {
  if (action.type === 'UPDATE_TIMES') {
    return fetchAPI(action.payload);
  }
  return state;
};

const initializeTimes = () => {
  return fetchAPI(new Date());
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const isSubmitted=submitAPI(formData);
    if (isSubmitted) {
      navigate('/confirmed');
    }
  };

  return (
    <Routes>
      <Route path="/" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
      <Route path="/confirmed" element={<ConfirmedBooking />} />
    </Routes>
  );
};

function App() {
  return(
    <BrowserRouter>
      <Header />
      <main>
        <Main />
      </main>
      <Footer />
    </BrowserRouter>
  );
}
export default App;