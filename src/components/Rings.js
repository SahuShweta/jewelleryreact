import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Earringslide from '../images/Earringslide.webp';


const Rings = () => {
    const rings = [
        {
            "id": 1,
            "photo": "e1.webp",
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "Earrings",
            "productForGender": "Female",
            "description": "Delicate oxidised silver jhumkas that blend tradition and trend. Ideal for daily wear or casual festive occasions. Handcrafted to add a bold statement to your look.",
            "price1": 1029,
            "price2": 929,
            "material": "Gold-plated brass",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,
        },
        {
            "id": 2,
            "photo": "e2.webp",
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "Earrings",
            "productForGender": "Female",
            "description": "Delicate oxidised silver jhumkas that blend tradition and trend. Ideal for daily wear or casual festive occasions. Handcrafted to add a bold statement to your look.",
            "price1": 1029,
            "price2": 929,
            "material": "Gold-plated brass",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,
        },
        {
            "id": 3,
            "photo": "e3.webp",
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "Earrings",
            "productForGender": "Female",
            "description": "Delicate oxidised silver jhumkas that blend tradition and trend. Ideal for daily wear or casual festive occasions. Handcrafted to add a bold statement to your look.",
            "price1": 1029,
            "price2": 929,
            "material": "Gold-plated brass",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,
        },
        {
            "id": 4,
            "photo": "e4.webp",
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "Earrings",
            "productForGender": "Female",
            "description": "Delicate oxidised silver jhumkas that blend tradition and trend. Ideal for daily wear or casual festive occasions. Handcrafted to add a bold statement to your look.",
            "price1": 1029,
            "price2": 929,
            "material": "Gold-plated brass",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,
        },
        {
            "id": 5,
            "photo": "e5.webp",
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "Earrings",
            "productForGender": "Female",
            "description": "Delicate oxidised silver jhumkas that blend tradition and trend. Ideal for daily wear or casual festive occasions. Handcrafted to add a bold statement to your look.",
            "price1": 1029,
            "price2": 929,
            "material": "Gold-plated brass",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,
        },
        {
            "id": 6,
            "photo": "e6.webp",
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "Earrings",
            "productForGender": "Female",
            "description": "Delicate oxidised silver jhumkas that blend tradition and trend. Ideal for daily wear or casual festive occasions. Handcrafted to add a bold statement to your look.",
            "price1": 1029,
            "price2": 929,
            "material": "Gold-plated brass",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,
        },
        {
            "id": 7,
            "photo": "e7.webp",
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "Earrings",
            "productForGender": "Female",
            "description": "Delicate oxidised silver jhumkas that blend tradition and trend. Ideal for daily wear or casual festive occasions. Handcrafted to add a bold statement to your look.",
            "price1": 1029,
            "price2": 929,
            "material": "Gold-plated brass",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,
        },
        {
            "id": 8,
            "photo": "e8.webp",
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "Earrings",
            "productForGender": "Female",
            "description": "Delicate oxidised silver jhumkas that blend tradition and trend. Ideal for daily wear or casual festive occasions. Handcrafted to add a bold statement to your look.",
            "price1": 1029,
            "price2": 929,
            "material": "Gold-plated brass",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,
        },
        {
            "id": 9,
            "photo": "e9.webp",
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "Earrings",
            "productForGender": "Female",
            "description": "Delicate oxidised silver jhumkas that blend tradition and trend. Ideal for daily wear or casual festive occasions. Handcrafted to add a bold statement to your look.",
            "price1": 1029,
            "price2": 929,
            "material": "Gold-plated brass",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,
        },
        {
            "id": 10,
            "photo": "e10.webp",
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "Earrings",
            "productForGender": "Female",
            "description": "Delicate oxidised silver jhumkas that blend tradition and trend. Ideal for daily wear or casual festive occasions. Handcrafted to add a bold statement to your look.",
            "price1": 1029,
            "price2": 929,
            "material": "Gold-plated brass",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,
        },
        {
            "id": 11,
            "photo": "e11.webp",
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "Earrings",
            "productForGender": "Female",
            "description": "Delicate oxidised silver jhumkas that blend tradition and trend. Ideal for daily wear or casual festive occasions. Handcrafted to add a bold statement to your look.",
            "price1": 1029,
            "price2": 929,
            "material": "Gold-plated brass",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,
        },
        {
            "id": 12,
            "photo": "e12.webp",
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "Earrings",
            "productForGender": "Female",
            "description": "Delicate oxidised silver jhumkas that blend tradition and trend. Ideal for daily wear or casual festive occasions. Handcrafted to add a bold statement to your look.",
            "price1": 1029,
            "price2": 929,
            "material": "Gold-plated brass",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,
        },
        {
            "id": 13,
            "photo": "e13.webp",
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "Earrings",
            "productForGender": "Female",
            "description": "Delicate oxidised silver jhumkas that blend tradition and trend. Ideal for daily wear or casual festive occasions. Handcrafted to add a bold statement to your look.",
            "price1": 1029,
            "price2": 929,
            "material": "Gold-plated brass",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,
        },
        {
            "id": 14,
            "photo": "e14.webp",
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "Earrings",
            "productForGender": "Female",
            "description": "Delicate oxidised silver jhumkas that blend tradition and trend. Ideal for daily wear or casual festive occasions. Handcrafted to add a bold statement to your look.",
            "price1": 1029,
            "price2": 929,
            "material": "Gold-plated brass",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,
        },
        {
            "id": 15,
            "photo": "e15.webp",
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "Earrings",
            "productForGender": "Female",
            "description": "Delicate oxidised silver jhumkas that blend tradition and trend. Ideal for daily wear or casual festive occasions. Handcrafted to add a bold statement to your look.",
            "price1": 1029,
            "price2": 929,
            "material": "Gold-plated brass",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,
        },
        {
            "id": 16,
            "photo": "e16.webp",
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "Earrings",
            "productForGender": "Female",
            "description": "Delicate oxidised silver jhumkas that blend tradition and trend. Ideal for daily wear or casual festive occasions. Handcrafted to add a bold statement to your look.",
            "price1": 1029,
            "price2": 929,
            "material": "Gold-plated brass",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,
        }
        
    ]
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

                            <Row className='bg-info'>
                                {
                                    rings.filter(product => product.productCategory.toLowerCase().includes(categoryName)).map((product) => {
                                        return (
                                            <Col md={3} className='morecategory'>
                                                <Link to={"/Buypage/" + product.id}>
                                                    <div className='productf'>
                                                        <img src={"/" + product.photo} alt='' className='img-fluid' />

                                                        <h6>{product.name}</h6>
                                                        <Row>
                                                        <Col>
                                                        <h5>Ratings= {product.rating}</h5>
                                                        </Col>
                                                        <Col>
                                                            <p>{product.isAvailable ? 'Available' : 'Out of the Stock'}</p>
                                                        </Col>
                                                        </Row>
                                                        <Row>
                                                            <div className='pricearea'>
                                                                <Col><s>₹ {product.price1}</s></Col>
                                                                <Col>₹ {product.price2}</Col>
                                                            </div>
                                                            <button>Add to Cart</button>

                                                        </Row>
                                                    </div>
                                                </Link>
                                            </Col>
                                        )
                                    }
                                    )
                                }

                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
    </div>
  )
}

export default Rings
