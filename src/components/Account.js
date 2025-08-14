import React from 'react';
import { Col, Container, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



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
      
      <Card.Body>
        <Card.Title><h4>Incorrect email or password</h4></Card.Title>
        </Card.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter your Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
        </Form>
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
