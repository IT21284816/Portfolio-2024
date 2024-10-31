import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

export const Footer = () => {
  const footerStyle = {
    marginTop: "auto",
    background: 'radial-gradient(75% 63.6% at 50% 2.5%, rgb(36, 115, 236) 0%, rgba(99, 102, 241, 0) 100%)',
    padding: "20px 0",
    textAlign: "center", 
    borderTopLeftRadius: "500px",  
    borderTopRightRadius: "500px",
  };

  const copyrightStyle = {
    marginTop: "10px",
    position: "relative",
  };

  const lineStyle = {
    width: "75%",
    height: "1px",
    backgroundColor: "#fff", 
    margin: "20px auto", 
    marginTop: '50px'
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  };

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: -50 }
  };

  const copyrightVariants = {
    hidden: { opacity: 0, y: -75 },
    visible: { opacity: 1, y: 0 }
  };
  const socialIcons = {
    hidden: { opacity: 0, x: 500 },
    visible: { opacity: 1, x: 0 }
  };
  const line = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 0.75, y: 0 }
  };
  const logo = {
    hidden: { opacity: 0, x: -500 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div style={containerStyle}>
      {/* Your main content goes here */}
      
      <footer className="footer" style={footerStyle}>
        <Container>
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            variants={variants}
            transition={{ duration: 0.8 }}
          >
            <MailchimpForm />
          </motion.div>
          <Row className="align-items-center">
            <Col size={12} sm={6}>
            <motion.p initial="hidden" whileInView="visible" variants={logo} transition={{ duration: 0.8 }}>
              <img src={logo} alt="Logo" />
              </motion.p>
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
            <motion.p initial="hidden" whileInView="visible" variants={socialIcons} transition={{ duration: 0.8 }}>
              <div className="social-icon">
                <a href="#"><FontAwesomeIcon icon={faFacebook} size="lg" /></a>
                <a href="#"><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
                <a href="#"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                <a href="#"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
                <a href="#"><FontAwesomeIcon icon={faGithub} size="lg" /></a>
              </div>
              </motion.p>
            </Col>
          </Row>
          <div style={copyrightStyle}>
          <motion.p initial="hidden" whileInView="visible" variants={line} transition={{ duration: 0.5 }}>
            <div style={lineStyle} />
            </motion.p>
            <motion.p initial="hidden" whileInView="visible" variants={copyrightVariants} transition={{ duration: 0.8 }}>
              Copyright 2024. All Rights Reserved
            </motion.p>
          </div>
        </Container>
      </footer>
    </div>
  );
};
