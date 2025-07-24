import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import{ faFacebook } from '@fortawesome/free-solid-svg-icons';
import{ faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
// import{ faTwitter } from '@fortawesome/free-brands-svg-icons';
// import{ faFacebook } from '@fortawesome/free-brands-svg-icons';
// import{ faFacebook } from '@fortawesome/free-brands-svg-icons';
// import{ faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
//import { faWhatsapp } from '@fortawesome/free-solid-svg-icons';
import { Row, Container, Col, } from 'react-bootstrap';


const Footer = () => {
  return (
    <div>
      <footer className='footerarea'>
        <Container>
          <Row>
            <Col>
            <div className='news'>
              <h2>Newsletter</h2>
             <p> Sign up for new arrivals, offers, and more! </p>
             <input type="email" placeholder="enter your email address" />
             <button>SUBSCRIBE</button>
             </div>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <h4>Associate With Us</h4>
            <ul>
              <li>Career</li>
              <li>Francheese</li>
              <li>Request a return</li>
              <li>FAQ'S</li>
              <li>Contact Us</li>
              <li>Blog</li>
              <li>About</li>
              <li>Our Stores</li>
              <li>Core Values</li>
                </ul>
            </Col>
            <Col md={4}>
                <h4>Policy Matters</h4>
            <ul>
              <li>Terms of use</li>
              <li>Privacy Policy</li>
              <li>Shipping Policy</li>
              <li>International Shipping Policy</li>
              <li>Return Policy</li>
              <li>Return & Exchange</li>
              <li>Grievance</li>
            </ul>
            </Col>
            <Col md={4}>
                <p>+91 72300 66751</p>
                <p> <FontAwesomeIcon icon={faEnvelope}/> help@Kohinoore.com</p>
                <p>J 449/450, Adityapur Industrial Area
                  Sitapura Near Chatrala Circle
                  Jamshedpur, Jharkhand-302022
                  India</p>
                  <Row>
                    <div className='socialarea'>
                    <Col>
                      <div className='social1'><FontAwesomeIcon icon={faFacebook} className='s1' /></div>
                    </Col>
                    <Col>
                        <div className='social2'><FontAwesomeIcon icon={faFacebook} className='s2' /></div>
                    </Col>
                    <Col>
                        <div className='social3'><FontAwesomeIcon icon={faFacebook} className='s3' /></div>
                    </Col>
                    <Col>
                        <div className='social4'><FontAwesomeIcon icon={faFacebook} className='s4' /></div>
                    </Col>
                    <Col>
                        <div className='social5'><FontAwesomeIcon icon={faFacebook} className='s5' /></div>
                    </Col>
                    </div>
                  </Row>
              
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
}

export default Footer
