import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import { motion } from 'framer-motion';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  // Define the scroll animations
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
  };

  const topic = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0 }
  };

  const skills = {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="skill mt-5 mb-5" id="skills"
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
              <motion.p initial="hidden" whileInView="visible" variants={topic} transition={{ duration: 1 }}>
              <h2>Skills</h2>
              </motion.p>
              <motion.p initial="hidden" whileInView="visible" variants={skills} transition={{ duration: 1 }}>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={800}
                transitionDuration={800}
                customTransition="transform 800ms ease-in-out"
                rtl={false}
                arrows={false}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Web Development" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Mobile Application Development" />
                  <h5>Mobile Application</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Iot " />
                  <h5>IOT Development</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Web Development" />
                  <h5>Web Application</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Web Development" />
                  <h5>UI/UX</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Web Development" />
                  <h5>Front-End Development</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Web Development" />
                  <h5>Back-End Development</h5>
                </div>
              </Carousel>
              </motion.p>
            </motion.div>            
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Colorful background" />
    </section>
  );
};
