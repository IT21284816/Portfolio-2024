import 'react-multi-carousel/lib/styles.css';
import { Card } from 'react-bootstrap';
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
import typescriptImg from "../assets/icons/typescript.png"; 
import nextjsImg from "../assets/icons/nextjs.png"; 
import wordpressImg from "../assets/icons/wordpress.png"; 
import bootstrapImg from "../assets/icons/bootstrap.png";
import tailwindImg from "../assets/icons/tailwind.png"
import reactNativeImg from "../assets/icons/react-native.png"; 
import mysqlImg from "../assets/icons/mysql.png"; 
import mongodbImg from "../assets/icons/mongodb.png"; 
import firebaseImg from "../assets/icons/firebase.png"; 
import oracleImg from "../assets/icons/oracle.png";
import azureImg from "../assets/icons/azure.png";
import androidStudioImg from "../assets/icons/android-studio.png"; 
import iotImg from "../assets/icons/iot.png"; 
import arduinoImg from "../assets/icons/arduino.png";
import vmwareImg from "../assets/icons/vmware.png"; 
import gitImg from "../assets/icons/git.png"; 
import stripeImg from "../assets/icons/stripe.png"; 
import razorImg from "../assets/icons/razor.png"; 
import powerBIImg from "../assets/icons/power-bi.png"; 
import fedoraImg from "../assets/icons/fedora.png"; 
import centosImg from "../assets/icons/centos.png";

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
    { name: "Razor Pay", image: razorImg },
    { name: "Power BI", image: powerBIImg },
    { name: "Fedora", image: fedoraImg },
    { name: "CentOS 7", image: centosImg },
];


export const Languages = () => {

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
  };
  const topic = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0 }
  };
  const list = {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section 
      className="skill" id="languages" 
      style={{ marginTop: '10%' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
          <motion.div 
              className="skill-bx wow zoomIn" 
              initial="hidden" 
              whileInView="visible" 
              variants={variants}
              transition={{ duration: 0.8 }}
              style={{
                background: 'radial-gradient(75% 20% at 50% 2.5%, rgb(36, 115, 236) 0%, rgba(99, 102, 241, 0) 100%)'
            }}
            >
            <motion.p initial="hidden" whileInView="visible" variants={topic} transition={{ duration: 1 }}>
              <h2 className='mb-5'>Languages & Web Technologies</h2>
              </motion.p>
              <motion.p initial="hidden" whileInView="visible" variants={list} transition={{ duration: 1 }}>
              <div className="row" >
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
              </motion.p>            
            </motion.div>
          </div>
        </div>
      </div>      
    </section>
  );
};

export default Languages;
