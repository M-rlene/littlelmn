import React, { useReducer } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Header from "./components/header";
import Footer from "./components/footer";
import Homepage from "./components/Homepage";
import BookingPage from "./components/BookingPage";
import ConfirmedBooking from "./components/ConfirmedBooking";
import { fetchAPI, submitAPI } from './api';

// Simple placeholder components for missing routes
const About = () => (
  <div style={{ minHeight: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '80px 20px', backgroundColor: '#edefee' }}>
    <h1 style={{ color: '#495e57', fontSize: '3rem', marginBottom: '20px' }}>About Little Lemon</h1>
    <p style={{ fontSize: '1.2rem', color: '#495e57' }}>Coming soon...</p>
  </div>
);

const Menu = () => (
  <div style={{ minHeight: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '80px 20px', backgroundColor: '#edefee' }}>
    <h1 style={{ color: '#495e57', fontSize: '3rem', marginBottom: '20px' }}>Our Menu</h1>
    <p style={{ fontSize: '1.2rem', color: '#495e57' }}>Coming soon...</p>
  </div>
);

const OrderOnline = () => (
  <div style={{ minHeight: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '80px 20px', backgroundColor: '#edefee' }}>
    <h1 style={{ color: '#495e57', fontSize: '3rem', marginBottom: '20px' }}>Order Online</h1>
    <p style={{ fontSize: '1.2rem', color: '#495e57' }}>Coming soon...</p>
  </div>
);

const Login = () => (
  <div style={{ minHeight: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '80px 20px', backgroundColor: '#edefee' }}>
    <h1 style={{ color: '#495e57', fontSize: '3rem', marginBottom: '20px' }}>Login</h1>
    <p style={{ fontSize: '1.2rem', color: '#495e57' }}>Coming soon...</p>
  </div>
);

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
    const isSubmitted = submitAPI(formData);
    if (isSubmitted) {
      navigate('/confirmed');
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
      <Route path="/order" element={<OrderOnline />} />
      <Route path="/login" element={<Login />} />
      <Route path="/confirmed" element={<ConfirmedBooking />} />
    </Routes>
  );
};

function App() {
  return (
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