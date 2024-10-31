import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { motion } from 'framer-motion';


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

  const text1 = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0 }
  };
  const text2 = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 }
  };
  const btn = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div style={welcomeStyle}>
        <motion.p initial="hidden" whileInView="visible" variants={text1} transition={{ duration: 1 }}>
        <h1 style={headingStyle}>Welcome to My Portfolio</h1>
        </motion.p>
        <motion.p initial="hidden" whileInView="visible" variants={text2} transition={{ duration: 1 }}>
      <p style={paragraphStyle}>Explore my skills, projects, and more!</p>
      </motion.p>
      <motion.p initial="hidden" whileInView="visible" variants={btn} transition={{ duration: 1 }}>
      <Button variant="primary" onClick={handleStart}>Get Started</Button>
      </motion.p>
      
    </div>
  );
};

export default WelcomePage;
