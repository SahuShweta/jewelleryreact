import React from 'react';
import { Col, Container, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const Login = () => {
  return (
    <div>

      <section className='loginpage'>
        <Container>
            <Row>
                <Col>
                    <Card style={{ width: '28rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title><h1>Customer Login</h1></Card.Title>
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
           <p><a href=''>Forgot your password? </a></p>     
        </ListGroup.Item>
        <ListGroup.Item>
            <button>Create an Account</button>     
        </ListGroup.Item>
      </ListGroup>
      {/* <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body> */}
    </Card>
                </Col>
            </Row>
        </Container>
      </section>
    </div>
  )
}

export default Login
