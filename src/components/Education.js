import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import { motion } from 'framer-motion';

export const Education = () => {
    // Define the scroll animations
    const variants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section
            className="skill mt-5"
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
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /> Lorem Ipsum has been the industry's standard dummy text.</p>
                        </motion.div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Colorful background" />
        </section>
    );
};
