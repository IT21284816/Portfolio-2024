import 'react-multi-carousel/lib/styles.css';
import 'react-vertical-timeline-component/style.min.css';
import colorSharp from "../assets/img/color-sharp.png";
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaGraduationCap } from 'react-icons/fa'; // You can use any icon you prefer

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
                              background: 'radial-gradient(75% 63.6% at 50% 2.5%, rgb(36, 115, 236) 0%, rgba(99, 102, 241, 0) 100%)'
                          }}
                        >
                            <h2 style={{ marginBottom: '5%' }}>Education</h2>
                            <div >
                            <VerticalTimeline>
                              {educationData.map((education, index) => (
                                <VerticalTimelineElement
                                  key={index}
                                  className="vertical-timeline-element--education"
                                  date={education.year}
                                  iconStyle={{ background: 'rgb(36, 115, 236)', color: '#fff' }} // Change icon color here
                                  contentStyle={{ background: 'radial-gradient(75% 63.6% at 50% 2.5%, rgb(36, 115, 236) 0%, rgba(99, 102, 241, 0) 100%)', color: '#fff' }} // Change content background color here
                                  icon={<FaGraduationCap />}
                                >
                                  <h3 className="vertical-timeline-element-title">{education.degree}</h3>
                                  <h4 className="vertical-timeline-element-subtitle">{education.institution}</h4>
                                </VerticalTimelineElement>
                              ))}
                            </VerticalTimeline>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Colorful background" />
        </section>
    );
};
