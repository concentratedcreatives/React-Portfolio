import React, { useState } from 'react';
import Header from './components/header';
import Navigation from './components/navigation';
import Footer from './components/footer';
import AboutMe from './components/aboutme';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Resume from './components/resume';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Navigation />
      <div className="content">
        <AboutMe />
        <Portfolio />
        <Contact />
        <Resume />
      </div>
      <Footer />
    </>
  );
}

export default App;

