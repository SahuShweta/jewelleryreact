import React, { useState, useEffect } from 'react'

import { Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import slide3 from '../images/slide3.webp';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Star from "./Star";

// import { Link } from 'react-router';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import { useSelector } from 'react-redux';
import { products } from './Gender';










const Gender = () => {

    const [womenProducts, setWomenProducts] = useState();

    const [products, setProducts] = useState();
    useEffect(() => {
        axios.get('http://localhost:8090/api/ssproducts/new/men').then((response) => {
            console.log(response.data);
             setWomenProducts(response.data)
        })
    }, []);

    useEffect(() => {
        axios.get('http://localhost:8090/api/ssproducts/new/women').then((response) => {
            console.log(response.data);
            // setProducts(response.data)
        })
    }, []);

    const AddCart = (product) => {
        // console.log(product)
        const data = {
            "userId": currentUser.id,
            "items": [
                {
                    "productId": product.id,
                    "quantity": 1,
                    "price": product.productPrice
                }
            ]
        }
        console.log(data)
        try {
            const res = axios.post("http://localhost:8090/api/carts", data);
            console.log("Products add to cart:", res.data);
            alert("Products add to cart succesfully!");



        } catch (err) {
            console.error("Failed to add to cart:", err);
            alert("Failed to add to cart");
        }

    }
    const { user: currentUser } = useSelector((state) => state.auth);
    console.log(currentUser)


    const { GenderName } = useParams();
    console.log(GenderName)


    return (
        <div>

            <section>
                <Container fluid>
                    <Row>
                        <Col>
                            <img src={slide3} alt='' className='img-fluid' />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col className='heading'>
                            <h1 className='headingtext-center'>{GenderName}</h1>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container fluid>
                    <Row>
                        <Col md={2}>
                            <h4>Shop by type</h4>
                            <ul>
                                <li>Choker</li>
                                <li>Long</li>
                                <li>Short</li>
                            </ul>

                            <h4>shop by look</h4>
                            <ul>
                                <li>Oxidised</li>
                            </ul>

                            <h4>shop by Price</h4>
                            <ul>
                                <li>500-999</li>
                                <li>1000-1499</li>
                                <li>1500-1999</li>
                                <li>2000 & above</li>
                            </ul>

                            <h4>Shop by Occation</h4>
                            <ul>
                                <li>Office Wear</li>
                            </ul>

                            <h4>shop by category</h4>
                            <ul>
                                <li>Earrings</li>
                                <li>Necklace</li>
                                <li>Ring</li>
                            </ul>
                        </Col>
                        <Col md={10}>

                            <Row>
                                {
                                    setWomenProducts ?
                                        setWomenProducts.map((product, index) => {
                                            return (
                                                <Col md={3}>
                                                    {/* <Link to={"/Buypage/" + product.id}> */}
                                                    <div className='allbox'>
                                                        <div className='allImage'>
                                                            <img src={`http://localhost:8090/upload/${product.images[0]}`} alt="" />

                                                        </div>
                                                        <div className='allImage2'>
                                                            <img src={`http://localhost:8090/upload/${product.images[1]}`} alt="" />

                                                        </div>
                                                        <p>{product.productName}</p>
                                                        <h5><s>₹ {product.productPrice}</s>&nbsp; &nbsp; &nbsp;<b>₹ 509</b></h5>


                                                        <div className="actions">
                                                            <FontAwesomeIcon icon={faHeart} className='favourite' />
                                                            <button className="cart-btn" onClick={() => AddCart(product)}>Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    {/* </Link> */}
                                                </Col>
                                            )
                                        }

                                        )
                                        :
                                        <div>
                                            Oops! No Data available.
                                        </div>

                                }

                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>


        </div>
    )
}



export default Gender
