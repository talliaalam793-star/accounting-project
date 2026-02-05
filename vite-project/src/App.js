// src/App.js
import React from 'react';
import './App.css';  // If you have App.css, otherwise remove
import Header from './components/Header';
import Hero from './components/Hero';
import User from './components/User';
import Skill from './components/Skill';
import Process from './components/Process';
import Project from './components/Project';
import ConnectHero from './components/ConnectHero';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <User />
      <Skill />
      <Process />
      <Project />
      <ConnectHero />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;