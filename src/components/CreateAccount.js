import React from 'react';
import { Col, Container, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


const CreateAccount = () => {
  return (
    <div>
      <section>
        <Container>
            <Row>
                <Col>
                <Card>
      <Card.Header as="h3">CREATE AN ACCOUNT</Card.Header>
      <Card.Body>
        <Card.Title>First Name</Card.Title>
        <div className='navsearch'>
              <input type="First Name" placeholder="" />
              </div>

              <Card.Title>Last Name</Card.Title>
        <div className='navsearch'>
              <input type="Last Name" placeholder="" />
              </div>
              <Card.Title>Your Email Address</Card.Title>
        <div className='navsearch'>
              <input type="Email Address" placeholder="" />
              </div>

              <Card.Title>Enter Your Password</Card.Title>
        <div className='navsearch'>
              <input type="password" placeholder="" />
              </div>
        <Button variant="primary">CREATE AN ACCOUNT</Button>
      </Card.Body>
    </Card>
                </Col>
            </Row>
        </Container>
      </section>
    </div>
  )
}

export default CreateAccount
