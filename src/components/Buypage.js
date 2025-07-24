import React from 'react'
// import logo from './logo.svg';

import photo1 from '../images/photo1.webp';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Col, Container, Row} from 'react-bootstrap';


const Buypage = () => {
  return (
    <div>
      <section>
        <Container fluid>
            <Row>
                <Col>
                    <img src={photo1} alt='' className='img-fluid'/>
                </Col>
                <Col>
                    <h1>Fringes Bloom In Fringe Statement Choker Set</h1>

                </Col>

            </Row>
        </Container>
      </section>
    </div>
  )
}

export default Buypage
