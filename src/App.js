import React from 'react';
import './App.css';
import Header from "./components/header";
import Hero from "./components/hero";
import Specials from "./components/specials";
import Testimonials from "./components/testimonials";
import About from "./components/about";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <header />
      <main>
        <hero />
        <specials />
        <testimonials />
        <about />
      </main>
      <footer />
    </div>
  );
}

export default App;
