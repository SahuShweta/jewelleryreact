import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import { useSelector } from 'react-redux';



const AllProducts = () => {
    
    
    const [products, setProducts] = useState();
    useEffect(() => {
        axios.get('http://localhost:8090/api/ssproducts').then((response) => {
            console.log(response.data);
            setProducts(response.data)
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

    return (
        <div>
            <Container>
                <Row>
                    {
                        products ?
                            products.map((product, index) => {
                                return (
                                    <Col md={3}>
                                        {/* <Link to={"/Buypage/" + product.id}> */}
                                            <div className='allbox'>
                                                <div className='allImage'>
                                                    <img src={`http://localhost:8090/upload/${product.images[0]}`} alt="" />
                                                    
                                                </div>
                                                <div className='allImage2'>
                                                    <img src={`http://localhost:8090/upload/${product.images[1]}`} alt="" />
                                                    
                                                </div>
                                                <p>{product.productName}</p>
                                                <h5><s>₹ {product.productPrice}</s>&nbsp; &nbsp; &nbsp;<b>₹ 509</b></h5>


                                                <div className="actions">
                                                    <FontAwesomeIcon icon={faHeart} className='favourite' />
                                                    <button className="cart-btn" onClick={() => AddCart(product)}>Add to Cart</button>
                                                    <Link to={`/products/${product.id}`} className="btn btn-primary">View</Link>
                                                    
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
            </Container>
        </div>
    )
}

export default AllProducts
