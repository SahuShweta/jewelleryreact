import React from 'react'
// import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import photo1 from '../images/photo1.webp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useParams } from 'react-router';
import { Col, Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import products from '../products.json';




const Buypage = () => {

  

  const { productDetails } = useParams();
  return (

    <div>
      <section className='buyarea'>
        <Container fluid>
          <Row>
            {/* {products.filter(p => p.id === productDetails).map(product => ( 
                      
                      <Col>
                      <img src={`/${product.photo[0]}`}  alt={product.name} className='img-fluid' />
                    </Col>
               ))
              }
            <Col>
                <img src={"/" + products.photo[0]} alt='' className='img-fluid' />
            </Col>
            <Col>
              <h3>{productDetails}Fringes Bloom In Fringe Statement Choker Set</h3>
              {/* <h2>₹ {product.productPrice} &nbsp; &nbsp; &nbsp; &nbsp;<s>MRP: ₹ 2,249</s>  &nbsp; &nbsp; &nbsp; &nbsp;-40% </h2> */}
              <p>Inclusive of all taxes</p>
              <Row>
                <div className='cart'>
                  <Col>
                    <button>Add to Cart</button>
                  </Col>
                  <Col>
                    <FontAwesomeIcon icon={faHeart} />
                  </Col>

                  <Col>
                    <FontAwesomeIcon icon={faShare} />
                  </Col>
                </div>
                <div className='buy1'>
                  <button><Link to="/Payment" className='customlink'>Buy it Now</Link></button>
                </div>
                <h4>Check delivery date</h4>
                <p>This feature is only valid for domestic deliveries. For international deliveries, expect your package within 5–7 days.</p>
                <Col>
                  <div className='accordian'>
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>ABOUT PRODUCT</Accordion.Header>
                        <Accordion.Body>
                          <p>Colourful enamel embellished drop earrings inspired by Jaipur's block printing. Made from brass and silver plated. Good for casual and formal ethnic looks.</p>

                          <ul>

                            <li>Weight (Gms): 19.55</li>
                            <li>Size (LxW)(Inch): 3*1.35</li>
                            <li>Material: Brass</li>
                            <li>Plating: Silver Plating</li>
                            <li>Color: Silver</li>
                            <li>Sales Package: 2 Earrings</li>
                            <li>Product Code: 8907617929446</li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>AVAILABLE OFFERS</Accordion.Header>
                        <Accordion.Body>
                          <h1>FLAT 25% OFF on Orders Above ₹1500</h1>
                          <h5>Use Code: SUMMER25</h5>

                          <h6>+ Extra 5% OFF on Prepaid Orders</h6>

                          <p>*Offer not applicable on lab-grown diamond jewellery and silver coins.</p>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>

                </Col>


              </Row>
            {/* </Col> */}


          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Buypage
