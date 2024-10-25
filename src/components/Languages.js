import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import { Card } from 'react-bootstrap';
import { useState } from 'react';
import { motion } from 'framer-motion';
// Import icons
import javaImg from "../assets/icons/java.png";
import reactImg from "../assets/icons/react.png";
import javaScriptImg from "../assets/icons/java-script.png";
import htmlImg from "../assets/icons/html.png"; 
import phpImg from "../assets/icons/php.png";
import mernImg from "../assets/icons/mern.png";
import cImg from "../assets/icons/c.png"; 
import cppImg from "../assets/icons/cpp.png"; 
import csharpImg from "../assets/icons/csharp.png"; 
import pythonImg from "../assets/icons/python.png"; 
import kotlinImg from "../assets/icons/kotlin.png";
import rImg from "../assets/icons/r.png"; 
import typescriptImg from "../assets/icons/typescript.png"; // Add the correct path
import nextjsImg from "../assets/icons/nextjs.png"; // Add the correct path
import wordpressImg from "../assets/icons/wordpress.png"; 
import bootstrapImg from "../assets/icons/bootstrap.png";
import reactNativeImg from "../assets/icons/react-native.png"; // Add the correct path
import mysqlImg from "../assets/icons/mysql.png"; // Add the correct path
import mongodbImg from "../assets/icons/mongodb.png"; // Add the correct path
import firebaseImg from "../assets/icons/firebase.png"; // Add the correct path
import oracleImg from "../assets/icons/oracle.png"; // Add the correct path
import azureImg from "../assets/icons/azure.png"; // Add the correct path
import androidStudioImg from "../assets/icons/android-studio.png"; // Add the correct path
import iotImg from "../assets/icons/iot.png"; // Add the correct path
import arduinoImg from "../assets/icons/arduino.png"; // Add the correct path
import vmwareImg from "../assets/icons/vmware.png"; // Add the correct path
import gitImg from "../assets/icons/git.png"; // Add the correct path
import stripeImg from "../assets/icons/stripe.png"; // Add the correct path
import razorImg from "../assets/icons/razor.png"; // Add the correct path
import powerBIImg from "../assets/icons/power-bi.png"; // Add the correct path
import fedoraImg from "../assets/icons/fedora.png"; // Add the correct path
import centosImg from "../assets/icons/centos.png"; // Add the correct path

const skills = [
    { name: "Java", image: javaImg },
    { name: "React", image: reactImg },
    { name: "JavaScript", image: javaScriptImg },
    { name: "HTML", image: htmlImg },
    { name: "PHP", image: phpImg },
    { name: "MERN", image: mernImg },
    { name: "C", image: cImg },
    { name: "C++", image: cppImg },
    { name: "C#", image: csharpImg },
    { name: "Python", image: pythonImg },
    { name: "Kotlin", image: kotlinImg },
    { name: "R", image: rImg },
    { name: "TypeScript", image: typescriptImg },
    { name: "Next.js", image: nextjsImg },
    { name: "WordPress", image: wordpressImg },
    { name: "Bootstrap", image: bootstrapImg },
    { name: "Tailwind CSS", image: tailwindImg },
    { name: "React Native", image: reactNativeImg },
    { name: "MySQL", image: mysqlImg },
    { name: "MongoDB", image: mongodbImg },
    { name: "Firebase", image: firebaseImg },
    { name: "Oracle", image: oracleImg },
    { name: "Microsoft Azure", image: azureImg },
    { name: "Android Studio", image: androidStudioImg },
    { name: "IoT", image: iotImg },
    { name: "Arduino IDE", image: arduinoImg },
    { name: "VMware", image: vmwareImg },
    { name: "Git", image: gitImg },
    { name: "Stripe", image: stripeImg },
    { name: "Razor", image: razorImg },
    { name: "Power BI", image: powerBIImg },
    { name: "Fedora", image: fedoraImg },
    { name: "CentOS 7", image: centosImg },
];


export const Languages = () => {

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
  };


  return (
    <section 
      className="skill mt-5" id="languages" 
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
          <motion.div 
              className="skill-bx wow zoomIn" 
              initial="hidden" 
              whileInView="visible" 
              variants={variants}
              transition={{ duration: 0.8 }}// Adjust the duration as needed
            >
            <div className="skill-bx">
              <h2 className='mb-5'>Languages & Web Technologies</h2>
              <div className="row">
                {skills.map((skill, index) => (
                  <div className="col-md-2 mb-4" key={index}>
                    <Card style={{
                      width: '100%',
                      borderRadius: '15px',
                      textAlign: 'center',
                      color: 'white',
                      background: 'radial-gradient(75% 63.6% at 50% 2.5%, rgb(36, 115, 236) 0%, rgba(99, 102, 241, 0) 100%)',
                      
                    }}>
                      <Card.Body>
                        <img src={skill.image} alt={skill.name} style={{ width: '50%', marginBottom: '10px' }} />
                        <Card.Title style={{ fontSize: '0.9rem' }} className='mt-2'>{skill.name}</Card.Title>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            </motion.div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Colorful background" />
    </section>
  );
};

export default Languages;
