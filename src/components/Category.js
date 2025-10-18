import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import slide3 from '../images/slide3.webp';
import { Link } from 'react-router-dom';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import { useSelector } from 'react-redux';






const Category = () => {

 const { categoryName } = useParams();
    console.log(categoryName)


    const [products, setProducts] = useState();
    
    useEffect(() => {
        axios.get(`http://localhost:8090/api/ssproducts/category/${categoryName}`).then((response) => {
            console.log(response.data);
            setProducts(response.data)
        })
    }, []);

    
    // const { user: currentUser } = useSelector((state) => state.auth);
    // console.log(currentUser)

    const banners = [
        {
            "id": 1,
            "image": "bannerEarrings.webp",
            "productCategory": "Earring",
            "productForGender": "Female"
        },
        {
            "id": 2,
            "image": "bannerRings.webp",
            "productCategory": "Rings",
            "productForGender": "Female"
        },
        {
            "id": 3,
            "image": "bannerBangles.webp",
            "productCategory": "Bangles",
            "productForGender": "Female"
        },
        {
            "id": 4,
            "image": "bannerSets.webp",
            "productCategory": "Sets Collections",
            "productForGender": "Female"
        },
        {
            "id": 5,
            "image": "bannerNecklace.webp",
            "productCategory": "Necklace",
            "productForGender": "Female"
        },
        {
            "id": 6,
            "image": "manbanner.webp",
            "productCategory": "Mens Collections",
            "productForGender": "Male"
        }
    ]



   
    return (
        <div>

            <section>
                <Container fluid>
                    <Row>
                        <Col>
                            {
                                banners.filter(product => product.productCategory.includes(categoryName)).map((product) => {
                                    return (
                                        <img src={"/" + product.image} alt='' className='img-fluid' />
                                    )
                                }
                                )
                            }
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col>
                            <h1>{categoryName}</h1>
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

                            <Row className='information'>


                                {
                                    products ?
                                        products.map((product, index) => {
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
                                                            <button>Add to Cart</button>
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

export default Category
