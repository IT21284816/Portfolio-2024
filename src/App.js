import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Languages } from "./components/Languages";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Education } from "./components/Education";
import { Project } from "./components/Project";
import WelcomePage from "./components/WelcomePage";

function App() {
  const [isWelcome, setIsWelcome] = useState(true);

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
