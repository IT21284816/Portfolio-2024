import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useState } from 'react';

const skills = [
    { name: "React" },
    { name: "JavaScript" },
    { name: "HTML" },
    { name: "PHP" },
    { name: "MERN" },
    { name: "C" },
    { name: "C++" },
    { name: "C#" },
    { name: "Java" },
    { name: "Python" },
    { name: "Kotlin" },
    { name: "R" },
    { name: "TypeScript" },
    { name: "Next.js" },
    { name: "WordPress" },
    { name: "Bootstrap" },
    { name: "Tailwind CSS" },
    { name: "React Native" },
    { name: "MySQL" },
    { name: "MongoDB" },
    { name: "Firebase" },
    { name: "Oracle" },
    { name: "Microsoft Azure" },
    { name: "Android Studio" },
    { name: "IoT" },
    { name: "Arduino IDE" },
    { name: "VMware" },
    { name: "Git" },
    { name: "Stripe" },
    { name: "Razor" },
    { name: "Power BI" },
    { name: "Fedora" },
    { name: "CentOS 7" },
  
];

export const Languages = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section 
      className="skill mt-5" 
      id="skills" 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 className='mb-5'>Languages & Web Technologies</h2>
              <div className="row">
                {skills.map((skill, index) => (
                  <div className="col-md-2 mb-4" key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: isHovered ? 1 : 0.5, y: isHovered ? 0 : 20 }} // Change opacity and position on hover
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card style={{ width: '100%', borderRadius: '15px', textAlign: 'center' }}>
                        <Card.Body>
                          <Card.Title style={{ fontSize: '0.9rem' }} className='mt-2'>{skill.name}</Card.Title>
                          
                        </Card.Body>
                      </Card>

                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Colorful background" />
    </section>
  );
};

export default Languages;
