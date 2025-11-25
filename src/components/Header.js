import logo from '../logo.svg';
import brandlogo from '../images/brandlogo.png';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { IoLogOut } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { TbLogout } from "react-icons/tb";
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router';
import { logout } from "../slices/auth";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CiSearch } from "react-icons/ci";
import { RiHome2Line } from "react-icons/ri";
import Form from 'react-bootstrap/Form';
import { FaBox } from "react-icons/fa";


// import { useDispatch } from 'react-redux';








const Header = () => {
  const [noCartsItems, setNoCartsItems] = useState(0);



  useEffect(() => {
    // axios.get(`http://localhost:8090/api/carts/user/${currentUser.id}`).then((response) => {
    //   console.log(response.data.items);
    //   console.log(response.data)
    //   // setProducts(response.data.items)
    //   setNoCartsItems(response.data.itemCount)
    // })
  }, []);



  const dispatch = useDispatch();
  const { user: currentUser } = useSelector((state) => state.auth);
  console.log(currentUser);
  
  const handleLogout = () => {
    dispatch(logout());
    // navigate('/login'); // Redirect to login page
    window.location.reload();
  };
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
              {/* <h1><Link to="/Trial">Trial</Link></h1> */}
              {
                currentUser ? <p>Welcome {currentUser.email}</p> : ""
              }
            </Col>
          </Row>
        </Container>
      </header>

      <section>
        <Container fluid>
          <Row>
            <Col md={9}>
              <Navbar expand="lg" className="bg-body-tertiary">

                <Navbar.Brand href="#home">
                  <img src={brandlogo} alt='' className='img-fluid' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <div className='navbar'>
                    <Nav className="me-auto">
                      <ul>
                        <li>
                          <Nav.Link href="#home"><Link to="" className='customlink'>Home</Link></Nav.Link>

                        </li>
                        <li>
                          <Nav.Link href="#link"><Link to="/About" className='customlink'>About</Link></Nav.Link>

                        </li>
                        {/* <li>
                          <Nav.Link href="#link"><Link to="/Category/fringes" className='customlink'>Fringes</Link></Nav.Link>

                        </li> */}
                        <li>
                          <Nav.Link href="#link"><Link to="/Gender/women" className='customlink'>Women</Link></Nav.Link>

                        </li>
                        <li>
                          <Nav.Link href="#link"><Link to="/Gender/men" className='customlink'>Men</Link></Nav.Link>

                        </li>
                        <li>
                          <Nav.Link href="#link"><Link to="AllProducts" className='customlink'>Collections</Link></Nav.Link>

                        </li>
                      </ul>

                    </Nav>
                  </div>
                  <Nav>
                    <div className='navsearch'>
                      <Form className="d-flex">
                        <Form.Control
                          type="search"
                          placeholder="Search"
                          className="me-2"
                          aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                      </Form>
                    </div>
                  </Nav>
                  <div className='headericon2'>

                  </div>
                </Navbar.Collapse>
              </Navbar>
            </Col>
            <Col md={3}>
              <Nav>
                <div className='headericon'>
                  <ul>
                    <li>
                      {
                        currentUser && currentUser.id !== "" ?
                          <Nav.Link as={Link} to="/account">
                            <FaRegUser className='icon' />
                          </Nav.Link>
                          : <Nav.Link as={Link} to="/login">
                            <FaRegUser className='icon' />
                          </Nav.Link>
                      }
                    </li>
                    <li>
                      <Nav.Link as={Link} to="/wishlist">
                        <FaRegHeart className='icon' />
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link as={Link} to="/carts" className="cart-container">

                        <span className='cartIcon'>
                          <BsCart4 className='icon' />

                          {noCartsItems > 0 && <span className="iconBage">{noCartsItems}</span>}
                        </span>
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link as={Link} to="/Orders">
                        <FaBox className='icon'/>
                      </Nav.Link>
                    </li>
                    <li>
                      {
                        currentUser && currentUser.id !== "" ?
                          <Nav.Link onClick={handleLogout}>
                            <TbLogout className='icon' />

                          </Nav.Link> : ""
                      }
                    </li>

                  </ul>

                </div>
              </Nav>
            </Col>
          </Row>
        </Container>

      </section>

      {/* <section>
        <Container fluid>

          <Navbar>
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
                    <li><Link to="/Gender/women" className='customlink'>Women</Link></li>
                    <li><Link to="/Gender/men" className='customlink'>Men</Link></li>
                    
                    <li><Link to="AllProducts" className='customlink'>Collections</Link></li>
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
                        <FaRegUser className='icon' />
                      </Link>
                      &nbsp;
                      &nbsp;
                      &nbsp;
                      &nbsp;
                      <Link to="/Wishlist" className='customlink'>

                        <FaRegHeart className='icon' />
                      </Link>
                      &nbsp;
                      &nbsp;
                      &nbsp;
                      &nbsp;
                      <Link to="/Carts" className='customlink'>

                        <span className='cartIcon'>
                          <BsCart4 className='icon' />
                          <span className='iconBage'>{noCartsItems}</span>
                        </span>

                      </Link>

                      &nbsp;
                      &nbsp;
                      &nbsp;
                      &nbsp;
                      {
                        currentUser ? <Link onClick={handleLogout} className='customlink'><TbLogout className='icon' /></Link> : ""
                      }
                    </div>
                  </Col>
                </Row>
              </Col>


            </Row>
          </Navbar>
          <div>

          </div>
        </Container>
      </section> */}




    </div>
  )
}

export default Header



