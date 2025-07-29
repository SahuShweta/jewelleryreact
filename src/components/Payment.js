import React from 'react'
import { Col, Container, Row} from 'react-bootstrap';

const Payment = () => {
  return (
    <div>
      <section>
        <Container>
            <Row>
                <Col>
                <p>shwetasahu1710@gmail.com</p>
                <hr/>
                <p>Email me with news and offers</p>
                <h4>Delivery</h4>
                <Row>
                <Col>
                <div className='navsearch'>
              <input type="First Name" placeholder="First Name" />
              </div>
              </Col>
              <Col>
                <div className='navsearch'>
              <input type="Last Name" placeholder="Last Name" />
              </div>
              </Col>
                </Row>
                <div className='navsearch'>
              <input type="Address" placeholder="Address" />
              </div>

              <div className='navsearch'>
              <input type="Address" placeholder="Apartment,suit etc" />
              </div>
              <Row>
                <Col>
                    <div className='navsearch'>
              <input type="City" placeholder="City" />
              </div>
                </Col>
                <Col>
                    <div className='navsearch'>
              <input type="State" placeholder="State" />
              </div>
                </Col>

                <Col>
                <div className='navsearch'>
              <input type="Pincode" placeholder="Pincode" />
              </div>
                </Col>

              </Row>

              <div className='navsearch'>
              <input type="Phone" placeholder="Phone.." />
              </div>
                </Col>

                <Col>
                
                </Col>
            </Row>
        </Container>
      </section>
    </div>
  )
}

export default Payment
