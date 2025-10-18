import React from 'react'
import { useParams } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import Gender, { products } from "./Gender"; 

const Buypage = () => {
    const {productId} = useParams();
    const product = products.find((p)=>p.id == parseInt(productId));
    if (!product) {
    return <h2>Product not found</h2>;
  }


  return (
    <div>
        <Container>
            <Row>
                <Col md={6}>
                <img src={"/" + product.photo[0]} alt={product.name} className='img-fluid' />
                </Col>
                <Col md={6}>
                    <h1>{product.name}</h1>
                </Col>
            </Row>
        </Container>
      
    </div>
  )
}

export default Buypage
