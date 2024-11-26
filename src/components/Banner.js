import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { motion } from 'framer-motion';
import colorSharp from "../assets/img/color-sharp.png";


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  const paragraph = {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 0 }
  };
  const topic = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="banner" id="home">      
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <motion.p initial="hidden" whileInView="visible" variants={topic} transition={{ duration: 1 }}>                
                <h1>{`Hi! I'm Duhun De Silva`} <br></br>
                  <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  </motion.p>
                  <br></br>
                  <motion.p initial="hidden" whileInView="visible" variants={paragraph} transition={{ duration: 1 }}>
                  <p>A dedicated, hardworking and creative person with good academic qualifications who seeks to work for an organization which provides me the opportunity to improve
                     my skills and knowledge to growth along with the organizations objective. Looking forward to utilize the skills obtained from my academic background into practice 
                     by working on projects related to Information Technology field. My aim is to become an effective individual and professional in IT Sector...</p>
                     </motion.p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
              
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>                
                  <img src={headerImg} alt="Header Img"/>                                                   
                }                     
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      
    </section>
  )
}
