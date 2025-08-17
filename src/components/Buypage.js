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
      
    </div>
  )
}

export default Buypage
