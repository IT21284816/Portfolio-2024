import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Vara from 'vara';

const WelcomePage = ({ onStart }) => {
  const [fontSize, setFontSize] = useState(72);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Adjust fontSize based on screen width
    const handleResize = () => {
      if (window.innerWidth < 700) {
        setFontSize(32);
      } else if (window.innerWidth < 1200) {
        setFontSize(56);
      } else {
        setFontSize(50);
      }
    };

    // Initialize on mount
    handleResize();

    // Listen for window resize to update font size
    window.addEventListener('resize', handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Cleanup existing Vara instance before reinitializing
    const container = document.getElementById('container');
    if (container) {
      container.innerHTML = ''; // Clear any existing content to avoid duplicates
    }

    // Initialize Vara animation
    const vara = new Vara(
      "#container",
      "https://cdn.jsdelivr.net/npm/vara@1.4.0/fonts/Satisfy/SatisfySL.json",
      [
        {
          text: "Welcome to my Portfolio", // Corrected typo
          color: "white",
          id: "github"
        }
      ],
      {
        strokeWidth: 2,
        color: "#523c33",
        fontSize: fontSize, // Responsive font size
        textAlign: "center"
      }
    );

    vara.ready(() => {
      vara.animationEnd(() => {
        // Example: You can add interactivity here if needed
      });
    });

    // Cleanup Vara on component unmount
    return () => {
      if (vara) {
        container.innerHTML = ''; // Clear Vara content on unmount
      }
    };
  }, [fontSize]); // Re-run Vara animation whenever fontSize changes

  const welcomeStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    background: 'radial-gradient(75% 63.6% at 50% 2.5%, rgb(36, 115, 236) 0%, rgba(99, 102, 241, 0) 100%)',
    transition: 'opacity 0.5s ease',
    opacity: fadeOut ? 0 : 1,
  };

  const handleStart = () => {
    setFadeOut(true); // Trigger fade-out
    setTimeout(onStart, 500); // Call onStart after animation duration
  };

  return (
    <div style={welcomeStyle}>
      {/* Single h1 element for Vara animation */}
      <h1 id="container"></h1>
      <Button className='mt-5' variant="primary" onClick={handleStart}>Get Started</Button>
    </div>
  );
};

export default WelcomePage;
