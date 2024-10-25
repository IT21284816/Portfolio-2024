import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import { motion } from 'framer-motion';

const educationData = [
  {
      degree: "Bachelor of Science in Computer Science",
      institution: "XYZ University",
      year: "2018 - 2022",
  },
  {
      degree: "Master of Science in Software Engineering",
      institution: "ABC University",
      year: "2022 - 2024",
  },
  // Add more education entries as needed
];

export const Education = () => {
    // Define the scroll animations
    const variants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section
            className="skill mb-5"
            id="education"
            style={{ marginTop: '10%' }}
        >
            <div className="container" >
                <div className="row" >
                    <div className="col-12" >
                        <motion.div
                            className="skill-bx wow zoomIn"
                            initial="hidden"
                            whileInView="visible"
                            variants={variants}
                            transition={{ duration: 0.8 }} // Adjust the duration as needed
                            style={{
                              background: 'radial-gradient(75% 63.6% at 50% 2.5%, rgb(36, 115, 236) 0%, rgba(99, 102, 241, 0) 100%)'
                          }}
                        >
                            <h2>Education</h2>
                            <div className="row">
                                {educationData.map((edu, index) => (
                                    <div className="col-md-6 col-lg-4 mb-4" key={index}>
                                        <motion.div
                                            className="card"
                                            initial="hidden"
                                            whileInView="visible"
                                            variants={variants}
                                            transition={{ duration: 0.8, delay: index * 0.2 }}
                                            style={{
                                                background: 'white',
                                                borderRadius: '8px',
                                                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                                padding: '15px'
                                            }}
                                        >
                                            <h4>{edu.degree}</h4>
                                            <p><strong>{edu.institution}</strong></p>
                                            <p>{edu.year}</p>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                            </motion.div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Colorful background" />
        </section>
    );
};
