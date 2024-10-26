import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  const footerStyle = {
    marginTop: "auto",
    background: 'radial-gradient(75% 63.6% at 50% 2.5%, rgb(36, 115, 236) 0%, rgba(99, 102, 241, 0) 100%)',
    padding: "20px 0",
    textAlign: "center", 
    borderTopLeftRadius: "100px",  
    borderTopRightRadius: "100px",
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

  return (
    <div style={containerStyle}>
      {/* Your main content goes here */}
      
      <footer className="footer" style={footerStyle}>
      
        <Container>
          <MailchimpForm />
          <Row className="align-items-center">
            
            <Col size={12} sm={6}>
              <img src={logo} alt="Logo" />
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
              <div className="social-icon">
                <a href="#"><FontAwesomeIcon icon={faFacebook} size="lg" /></a>
                <a href="#"><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
                <a href="#"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                <a href="#"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
                <a href="#"><FontAwesomeIcon icon={faGithub} size="lg" /></a>
              </div>
            </Col>
          </Row>
          <div style={copyrightStyle}>
            <div style={lineStyle} />
            <p>Copyright 2024. All Rights Reserved</p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
