import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';

// import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import photo1 from '../images/photo1.webp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useParams } from 'react-router';
import { Col, Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
// import products from '../products.json';
import axios from 'axios';



const Product = () => {

    const { productId } = useParams();
    console.log(productId)

    const [product, setProduct] = useState();

    useEffect(() => {
        axios.get(`http://localhost:8090/api/ssproducts/${productId}`).then((response) => {
            console.log(response.data);
            setProduct(response.data)
            // console.log(product.productName)
        })
    }, []);

    const quantityUpdate = (productId, newQuantity) => {
        console.log(productId)
        console.log(newQuantity)
        if (newQuantity < 1) return;
        axios.put(`http://localhost:8090/api/carts/user/${currentUser.id}/item/${productId}`, { quantity: newQuantity }).then(() => {
            window.location.reload();

        }).catch((error) => { console.error("Failed to update quantity", error); });

    }

    const { user: currentUser } = useSelector((state) => state.auth);
    console.log(currentUser)




    return (
        <div>
            <section>
                <Container>
                    <Row>
                        <div className='product-area'>
                            <Col>
                                <div className='product-image'>
                                    <img src={`http://localhost:8090/upload/${product?.images[0]}`} />
                                </div>

                            </Col>
                            <Col>
                                {/* <h2>{  product?.productName || "loading"}</h2> */}
                                <h2>{product?.productName}</h2>
                                <div className='productprice'>
                                    <h3>₹{product?.productPrice}</h3>
                                    <h1>-{product?.productDiscount}%</h1>
                                    {/* <button onClick={() => quantityUpdate(product.productId, product.quantity - 1)}>-</button>
                                    {product.quantity}
                                    <button onClick={() => quantityUpdate(product.productId, product.quantity + 1)}>+</button> */}

                                </div>
                                <p>Inclusive of all taxes</p>


                                <Row>

                                    <Col>
                                        <div className='product1'>
                                            <button>Add to Cart</button>

                                            <FontAwesomeIcon icon={faHeart} className='producticon' />


                                            {/* <FontAwesomeIcon icon={faShare} className='producticon' /> */}

                                        </div>
                                    </Col>

                                </Row>
                                <p>This feature is only valid for domestic deliveries. For international deliveries, expect your package within 7–10 days.</p>

                                <h4>ABOUT PRODUCT</h4>
                                <p>{product?.productDescription}</p>
                            </Col>

                        </div>
                    </Row>
                </Container>
            </section>

        </div>
    )
}

export default Product
