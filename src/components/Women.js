import React from 'react';
import wmbanner from  '../images/wmbanner.webp';
import f1 from '../images/f1.webp';
import f3 from '../images/f3.webp';
import f5 from '../images/f5.webp';
import f7 from '../images/f7.webp';
import f9 from '../images/f9.webp';
import f11 from '../images/f11.webp';
import f13 from '../images/f13.webp';
import f15 from '../images/f15.webp';
import f17 from '../images/f17.webp';
import f19 from '../images/f19.webp';
import f21 from '../images/f21.webp';
import f23 from '../images/f23.webp';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';

const Women = () => {
    
  return (
    <div>
      <section className='wm1'>
        <Container fluid>
            <Row>
                <Col>
                <img src={wmbanner} alt='' className='Container-fluid' />
                </Col>
            </Row>
        </Container>
      </section>

      <section>
        <Container fluid>
            <Row>
                <Col md={2}>
                    <h4>Shop by type</h4>
                    <ul>
                        <li>Choker</li>
                        <li>Long</li>
                        <li>Short</li>
                    </ul>

                    <h4>shop by look</h4>
                    <ul>
                        <li>Oxidised</li>
                    </ul>

                    <h4>shop by Price</h4>
                    <ul>
                        <li>500-999</li>
                        <li>1000-1499</li>
                        <li>1500-1999</li>
                        <li>2000 & above</li>
                    </ul>

                    <h4>Shop by Occation</h4>
                    <ul>
                        <li>Office Wear</li>
                    </ul>

                    <h4>shop by category</h4>
                    <ul>
                        <li>Earrings</li>
                        <li>Necklace</li>
                        <li>Ring</li>
                    </ul>
                </Col>
                <Col md={10}>
                    <Row>
                        

                               
                    </Row>
                </Col>
            </Row>
        </Container>
      </section>
    </div>
  )
}

export default Women
