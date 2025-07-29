import React from 'react'
// import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShare} from '@fortawesome/free-solid-svg-icons';
import photo1 from '../images/photo1.webp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router';
import { Col, Container, Row} from 'react-bootstrap';


const Buypage = () => {
  const product = {
    "productName" : "xyz",
    "productPrice" : 1349,
    "productCategory" : "",
    "productImages" : [
      "123imgae.jpg","abc.jpg",
    ]
  }
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
                    <h2>₹ {product.productPrice} &nbsp; &nbsp; &nbsp; &nbsp;<s>MRP: ₹ 2,249</s>  &nbsp; &nbsp; &nbsp; &nbsp;-40% </h2>
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
                    <button><Link to="/Payment" className='customlink'>Buy it Now</Link></button>
                    <h4>Check delivery date</h4>
                    <p>This feature is only valid for domestic deliveries. For international deliveries, expect your package within 5–7 days.</p>

                    </Row>
                </Col>
                

            </Row>
        </Container>
      </section>
    </div>
  )
}

export default Buypage
