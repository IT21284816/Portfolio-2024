// src/components/WelcomePage.js
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const WelcomePage = ({ onStart }) => {
  const [fadeOut, setFadeOut] = useState(false);

  const welcomeStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    background: 'radial-gradient(75% 63.6% at 50% 2.5%, rgb(36, 115, 236) 0%, rgba(99, 102, 241, 0) 100%)', // Light background
    transition: 'opacity 0.5s ease', // Smooth transition
    opacity: fadeOut ? 0 : 1, // Change opacity based on fadeOut state
  };

  const headingStyle = {
    fontSize: '3rem',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '1.5rem',
    marginBottom: '40px',
  };

  const handleStart = () => {
    setFadeOut(true); // Trigger fade-out
    setTimeout(onStart, 500); // Call onStart after animation duration
  };

  return (
    <div style={welcomeStyle}>
      <h1 style={headingStyle}>Welcome to My Portfolio</h1>
      <p style={paragraphStyle}>Explore my skills, projects, and more!</p>
      <Button variant="primary" onClick={handleStart}>Get Started</Button>
    </div>
  );
};

export default WelcomePage;
