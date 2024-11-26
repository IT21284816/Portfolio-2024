import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Languages } from "./components/Languages";
import { Education } from "./components/Education";
import { Project } from "./components/Project";
import { Footer } from "./components/Footer";
import WelcomePage from "./components/WelcomePage";

function App() {
  const [isWelcome, setIsWelcome] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    
    if (!hasVisited) {
      setIsWelcome(true);
      localStorage.setItem('hasVisited', 'true');
      
      // Set a timeout to reset 'hasVisited' after 1 hour (3600000 ms)
      setTimeout(() => {
        localStorage.removeItem('hasVisited');
      }, 36); // 1 hour in milliseconds
    }
  }, []);

  const handleStart = () => {
    setIsWelcome(false);
  };

  return (
    <div className="App">
      {isWelcome ? (
        <WelcomePage onStart={handleStart} />
      ) : (
        <>
          <NavBar />
          <Banner />
          <Skills />
          <Languages />
          <Education />
          <Project />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
