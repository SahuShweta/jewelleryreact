import React from 'react';
import { Col, Container, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router';



const Account = () => {
  return (
    <div>
        <h1>ACCOUNT</h1>


        <section>
            <Container>
                <Row>
                    <Col>
                    <h2>RETURNING CUSTOMER</h2>
                    <Card style={{ width: '28rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
      <Card.Body>
        <Card.Title><h4>Incorrect email or password</h4></Card.Title>
        </Card.Body>
        <Card.Text>
            <h4>Enter your Email</h4>
            <div className='navsearch'>
              <input type="Email Address" placeholder="Email Address" />
              </div>
        </Card.Text>
      {/* </Card.Body> */}
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
            <h4>Enter your Password</h4>
           <div className='navsearch'>
              <input type="Password" placeholder="Password" />
              </div> 
        </ListGroup.Item>
        <ListGroup.Item>
            <button>LOGIN</button>
        </ListGroup.Item>
        <ListGroup.Item>
           <p><a href=''>Forgot your password? or return to store </a></p>     
        </ListGroup.Item>
      </ListGroup>
      {/* <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body> */}
    </Card>
                    </Col>
                    <Col>
                    <h2>NEW CUSTOMER</h2>

                    <p>Register with us for faster checkout,</p>
                    <p>to track the status of your order and more.</p>
                    <button><Link to="/CreateAccount" className='customlink'>CREATE AN ACCOUNT</Link></button>
                    </Col>

                </Row>
            </Container>
        </section>
      
    </div>
  )
}

export default Account
