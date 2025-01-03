import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Vara from 'vara';
import { motion } from 'framer-motion';

const WelcomePage = ({ onStart }) => {
  const [fontSize, setFontSize] = useState(72);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Adjust fontSize based on screen width
    const handleResize = () => {
      if (window.innerWidth < 700) {
        setFontSize(32);
      } else if (window.innerWidth < 1200) {
        setFontSize(50);
      } else {
        setFontSize(55);
      }
    };

   
    handleResize();
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    
    const container = document.getElementById('container');
    if (container) {
      container.innerHTML = ''; 
    }

    const vara = new Vara(
      "#container",
      "https://cdn.jsdelivr.net/npm/vara@1.4.0/fonts/Satisfy/SatisfySL.json",
      [
        {
          text: "Welcome to my Portfolio", 
          color: "white",
          id: "github"
        },
        {
          text: "( Under Maintenance )", 
          color: "Red",
          id: "github"
        }
      ],
      {
        strokeWidth: 2,
        color: "#523c33",
        fontSize: fontSize,
        textAlign: "center"
      }
    );

    vara.ready(() => {
      vara.animationEnd(() => {        
      });
    });

    
    return () => {
      if (vara) {
        container.innerHTML = ''; 
      }
    };
  }, [fontSize]); 

  const welcomeStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    background: 'radial-gradient(55% 50% at 50% 2.5%, rgb(36, 115, 236) 0%, rgba(99, 102, 241, 0) 100%)',
    transition: 'opacity 0.5s ease',
    opacity: fadeOut ? 0 : 1,
  };

  const handleStart = () => {
    setFadeOut(true); 
    setTimeout(onStart, 500);
  };

  const topic = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div style={welcomeStyle}>      
      <h1 id="container"></h1>
      <motion.p initial="hidden" whileInView="visible" variants={topic} transition={{ duration: 1 }}>
      <Button className='mt-5' variant="primary" onClick={handleStart}>Get Started</Button>
      </motion.p>
    </div>
  );
};

export default WelcomePage;
