import React from 'react'
import logo from '../logo.svg';
import brandlogo from '../images/brandlogo.png';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
// import { faHeartRegular } from '@fortawesome/free-regular-svg-icons'; 

import { Link } from 'react-router';


const Header = () => {
  return (
    <div>
      <header className='toparea'>
        <Container>
          <Row>
            <Col>
              <p>Introducing Lab Grown Diamonds set in pure 925 sterling silver. Shop now</p>
              {/* <h1><Link to="/Jsr">Jsr</Link></h1>
            <h1><Link to="/New">new</Link></h1>
            <h1><Link to="/Fringes">fringess</Link></h1> */}
            <h1><Link to="/Trial">Trial</Link></h1>
            </Col>
          </Row>
        </Container>
      </header>

      <section>
        <Container fluid>
          <Row>
            <Col md={2}>
              <img src={brandlogo} alt='' className='img-fluid' />
            </Col>
            <Col md={5}>
              <div className='navbar'>
                <ul>
                  <li><Link to="" className='customlink'>Home</Link></li>
                  <li><Link to="/category/about" className='customlink'>About</Link></li>
                  <li><Link to="/Category/fringes" className='customlink'>Fringes</Link></li>
                  <li><Link to="/Gender/Female" className='customlink'>Women</Link></li>
                  <li><Link to="/Gender/Male" className='customlink'>Men</Link></li>
                  <li>Collections</li>
                </ul>
              </div>
            </Col>
            <Col md={5}>
              <Row>
                <Col>
                  <div className='navsearch'>
                    <input type="email" placeholder="Search here..." />
                    <button>SUBSCRIBE</button>
                  </div>
                </Col>
                <Col>
                  <div className='headericon'>
                    <Link to="/Login" className='customlink'>
                      <FontAwesomeIcon icon={faUser} className='icons' />
                    </Link>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;&nbsp;
                    <FontAwesomeIcon icon={faHeart} className='icons' />
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;

                    <FontAwesomeIcon icon={faCartShopping} className='icons' />
                  </div>
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
