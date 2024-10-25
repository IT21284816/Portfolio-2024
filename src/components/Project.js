import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import { motion } from 'framer-motion';
import p1 from '../assets/Project/project01.png';
import p2 from '../assets/Project/project02.png';
import p3 from '../assets/Project/project03.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const projects = [
  {
    title: "Project One",
    description: "Description for project one.",
    technologies: ["React", "JavaScript", "CSS"],
    images: [p1, p2, p3] // Array of images
  },
  {
    title: "Project One",
    description: "Description for project one.",
    technologies: ["React", "JavaScript", "CSS"],
    images: [p1, p2, p3] // Array of images
  },
  {
    title: "Project One",
    description: "Description for project one.",
    technologies: ["React", "JavaScript", "CSS"],
    images: [p1, p2, p3] // Array of images
  },
  {
    title: "Project Two",
    description: "Description for project two.",
    technologies: ["Node.js", "Express", "MongoDB"],
    images: ["path/to/image2.jpg", "path/to/image3.jpg"], // Add more images as needed
  },
  // Add more project objects as needed
];

const responsive = {
  superLarge: {
    breakpoint: { max: 4000, min: 1024 },
    items: 1,
  },
  large: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  medium: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const Project = () => {
  
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="skill mb-5" id="project" style={{ marginTop: '10%' }}>
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
              <h2>Projects</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /> Lorem Ipsum has been the industry's standard dummy text.</p>
              <div className="row" style={{ marginTop: '10%' }}>
                {projects.map((project, index) => (
                  <div key={index} className="col-md-4 mb-5">
                    <div className="project-card" style={{
                      border: '2px solid rgb(36, 115, 236)',
                      borderRadius: '8px',
                      background: 'radial-gradient(50% 50% at 10% 150%, rgb(36, 115, 236) 0%, rgba(99, 102, 241, 0) 200%)',
                      padding: '10px',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                      color: 'white',
                    }}>
                        
                   <Carousel 
                        responsive={responsive} 
                        autoPlay={true} 
                        autoPlaySpeed={1000} // Adjust the speed (milliseconds)
                        infinite={true}
                        keyBoardControl={true} // Allows keyboard navigation
                    >
                        {project.images.map((image, imgIndex) => (
                            <img 
                                key={imgIndex} 
                                src={image} 
                                alt={`${project.title} image ${imgIndex + 1}`} 
                                className="project-image" 
                                style={{ width: '100%', borderRadius: '8px' }} 
                            />
                        ))}
                    </Carousel>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
                     
                    </div>
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
