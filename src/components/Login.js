import React from 'react';
import { Col, Container, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Login = () => {
  return (
    <div>

      <section className='loginpage'>
        <Container>
            <Row>
                <Col>
                    <Card style={{ width: '28rem' }}>
      
      <Card.Body>
        <Card.Title><h1>Customer Login</h1></Card.Title>
        </Card.Body>
        <Card.Text>
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      </Form>
        </Card.Text>
      
      <ListGroup className="list-group-flush">
        <Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      </Form>
        <ListGroup.Item>
            <button><Link to="/Account" className='customlink'>LOGIN</Link></button>
        </ListGroup.Item>
        <ListGroup.Item>
           <p><a href=''>Forgot your password? </a></p>     
        </ListGroup.Item>
        <ListGroup.Item>
            <button>Create an Account</button>     
        </ListGroup.Item>
      </ListGroup>
    </Card>
                </Col>
            </Row>
        </Container>
      </section>
    </div>
  )
}

export default Login
