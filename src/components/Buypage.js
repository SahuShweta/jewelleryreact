import React from 'react'
// import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShare} from '@fortawesome/free-solid-svg-icons';
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
                    <h3>Fringes Bloom In Fringe Statement Choker Set</h3>
                    <h2>₹ 1,349 &nbsp; &nbsp; &nbsp; &nbsp;<s>MRP: ₹ 2,249</s>  &nbsp; &nbsp; &nbsp; &nbsp;-40% </h2>
                    <p>Inclusive of all taxes</p>
                    <Row>
                      <Col>
                    <button>Add to Cart</button>
                    </Col>
                    <Col>
                    <FontAwesomeIcon icon={faHeart}/>
                    </Col>

                    <Col>
                    <FontAwesomeIcon icon={faShare}/>
                    </Col>
                    </Row>
                </Col>

            </Row>
        </Container>
      </section>
    </div>
  )
}

export default Buypage
