import React from 'react'
import logo from '../logo.svg';
import brandlogo from '../images/brandlogo.png';
import { Col, Container, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';


const Header = () => {
  return (
    <div>
      <header className='toparea'>
        <Container>
          <Row>
            <Col>
            <p>Introducing Lab Grown Diamonds set in pure 925 sterling silver. Shop now</p>
            <h1><Link to="/Jsr">Jsr</Link></h1>
            <h1><Link to="/New">new</Link></h1>
            </Col>
          </Row>
        </Container>
      </header>

      <section>
            <Container fluid>
              <Row>
                <Col md={2}>
                  <img src={brandlogo} alt='' className='img-fluid'/>
                </Col>
                <Col md={6}>
                <div className='navbar'>
                  <ul>
                    <li><Link to="" className='customlink'>Home</Link></li>
                    <li><Link to="/about" className='customlink'>About</Link></li>
                    <li><Link to="/Category/fringes" className='customlink'>Fringes</Link></li>
                    <li><Link to="/women" className='customlink'>Women</Link></li>
                    <li><Link to="/Mens" className='customlink'>Men</Link></li>
                    <li>Collections</li>
                  </ul>
              </div>
              </Col>
              <Col md={4}>
              <Row>
                <Col>
              <div className='navsearch'>
              <input type="email" placeholder="Search here..." />
             <button>SUBSCRIBE</button>
             </div>
             </Col>
              <Col>
                  <Link to="/Login" className='customlink'>
                  <FontAwesomeIcon icon={faUser}/>
                  </Link>
             </Col>
             <Col>
             <FontAwesomeIcon icon={faHeart}/>
             </Col>
             <Col>
             <FontAwesomeIcon icon={faCartShopping}/>
             </Col>
             
             </Row>
             </Col>
             
                
              </Row>
            </Container>
          </section>
    </div>
  )
}

export default Header
