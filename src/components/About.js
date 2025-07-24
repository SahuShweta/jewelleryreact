import React from 'react'
import ring2 from '../images/ring2.webp';
import earring2 from '../images/earring2.webp';
import pendent2 from '../images/pendent2.webp';
import bracelet from '../images/bracelet.webp';
import set2 from '../images/set2.webp';
import border1 from '../images/border1.webp';
import d1 from '../images/d1.webp';
import d2 from '../images/d2.webp';
import silver from '../images/silver.webp';
import gold from '../images/gold.webp';
import specialimg from '../images/specialimg.webp';
import a1 from '../images/a1.webp';
import a2 from '../images/a2.webp';
import a3 from '../images/a3.webp';
import a4 from '../images/a4.webp';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <div>
      <section className='aboutcatagory'>
        <Container fluid>
          <Row>
            <Col>
              <img src={ring2} alt='' className='img-fluid'/>
              <h3>Rings</h3>
            </Col>
            <Col>
              <img src={earring2} alt='' className='img-fluid'/>
              <h3>Earrings</h3>
            </Col>
            <Col>
              <img src={pendent2} alt='' className='img-fluid'/>
              <h3>Pendents</h3>
            </Col>
            <Col>
              <img src={bracelet} alt='' className='img-fluid'/>
              <h3>bracelets</h3>
            </Col>
            <Col>
              <img src={set2} alt='' className='img-fluid'/>
              <h3>Sets</h3>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container fluid>
          <Row>
            <Col>
                 <img src={border1} alt='' className='img-fluid'/> 
            </Col>
          </Row>
        </Container>
      </section>

      <section className='diamondarea'>
        <Container fluid>
          <Row>
            <Col>
                <img src={d1} alt='' className='img-fluid'/>
                <p>Every piece comes with an authenticity certificate—your assurance of lab-grown diamonds in certified sterling silver.</p>
                <button>Gift Now</button>
            </Col>
            <Col>
            <p>Step into a new era of brilliance where lab-grown diamonds meet pure 925 silver, redefining everyday luxury!</p>
                <img src={d2} alt='' className='img-fluid'/>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
              <Container fluid className='linearea'>
                <Row>
                  <Col md={4}>
                  <div className='line'></div>
                  </Col>
                  <Col md={4}>
                  <h4>The Perfect Gift, Always</h4>
                  </Col>
                  <Col md={4}>
                    <div className='line'></div>
                  </Col>
                </Row>
              </Container>
            </section>

      <section>
        <Container fluid>
          <Row>
            <Col>
                 <img src={specialimg} alt='' className='img-fluid'/> 
            </Col>
          </Row>
        </Container>
      </section>

      <section className='producta'>
        <Container fluid>
          <Row>
            <Col md={3}>
            <img src={a1} alt='' className='img-fluid'/>
            <p>Amour Lab grown diamond heart pendent</p>
            </Col>
            <Col md={3}>
            <img src={a2} alt='' className='img-fluid'/>
            <p>Amour Lab grown diamond heart pendent</p>
             </Col>
            <Col md={3}>
            <img src={a3} alt='' className='img-fluid'/>
            <p>Amour Lab grown diamond heart pendent</p>
            </Col>
            <Col md={3}>
            <img src={a4} alt='' className='img-fluid'/>
            <p>Amour Lab grown diamond heart pendent</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
              <Container fluid className='linearea'>
                <Row>
                  <Col md={4}>
                  <div className='line'></div>
                  </Col>
                  <Col md={4}>
                  <h4>OUR BESTSELLERS</h4>
                  </Col>
                  <Col md={4}>
                    <div className='line'></div>
                  </Col>
                </Row>
              </Container>
            </section>

      <section className='sg'>
        <Container>
          <Row>
            <Col>
                 <img src={silver} alt='' className='img-fluid'/> 
            </Col>
             <Col>
                 <img src={gold} alt='' className='img-fluid'/> 
            </Col>
          </Row>
        </Container>
      </section>

    </div>
  )
}

export default About
