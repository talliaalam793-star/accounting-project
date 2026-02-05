import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import User from './components/user';
import Process from './components/Process';
import Skill from './components/Skill';
import Projects from './components/Project';
import ConnectHero from './components/ConnectHero';
import Contact from './components/Contact';
import Footer from './components/Footer';  // ← Add this import

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <User />
      <Process />
      <Skill />
      <Projects />
      <ConnectHero />
      <Contact />
      <Footer />  {/* ← Add Footer here */}
    </div>
  );
}

export default App;