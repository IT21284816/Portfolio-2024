import 'react-multi-carousel/lib/styles.css';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaGraduationCap } from 'react-icons/fa'; // You can use any icon you prefer

const educationData = [
  {
      degree: "BSc (Hons) in Information Technology Specialising in Information Technology",
      institution: "Sri Lanka Institute of Information Technology",
      year: "2021 - 2025",
  },
  {
      degree: "GCE Advanced Level",
      institution: "Sri Devananda College",
      year: "2018 - 2020",
  },
  {
    degree: "GCE Ordinary Level",
    institution: "Sri Devananda College",
    year: "2012 - 2017",
},
  // Add more education entries as needed
];

export const Education = () => {
    // Define the scroll animations
    const variants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 }
    };

    const topic = {
      hidden: { opacity: 0, x: -300 },
      visible: { opacity: 1, x: 0 }
    };

    return (
        <section
            className="skill mb-5"
            id="education"
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
                            <h2 style={{ marginBottom: '8%' }}>Education</h2>
                            </motion.p>
                            <div >
                            <VerticalTimeline>
                              {educationData.map((education, index) => (
                                <VerticalTimelineElement
                                  key={index}
                                  className="vertical-timeline-element--education"
                                  date={education.year}
                                  iconStyle={{ background: 'rgb(36, 115, 236)', color: '#fff' }} // Change icon color here

                                  contentStyle={{ background: 'radial-gradient(75% 63.6% at 50% 2.5%, rgb(36, 115, 236) 0%, rgba(99, 102, 241, 0) 100%)', 
                                                
                                                borderRadius: '20px',
                                              }}
                                  icon={<FaGraduationCap />}
                                >
                                  <h5 className="vertical-timeline-element-title">{education.degree}</h5>
                                  <br></br>
                                  <h6 className="vertical-timeline-element-subtitle">{education.institution}</h6>
                                </VerticalTimelineElement>
                              ))}
                            </VerticalTimeline>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>            
        </section>
    );
};
