import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import slide3 from '../images/slide3.webp';




const Category = () => {
    const products = [
        {
            "id": 1,
            "photo": [
                "f1.webp", "f2.webp",
            ],
            "name": "Aham bramhasmi moksh rudracks beads",
            "productCategory": "fringes",
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
            "photo": [
                "f3.webp", "f4.webp",
            ],
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "fringes",
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
            "photo": [
                "f5.webp", "f6.webp",
            ],
            "name": " Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "fringes",
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
            "photo": [
                "f7.webp", "f8.webp",
            ],
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "fringes",
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
            "photo": [
                "f9.webp", "f10.webp",
            ],
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "fringes",
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
            "photo": [
                "f11.webp", "f12.webp",
            ],
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "fringes",
            "productForGender": "Female",
            "description": "Delicate oxidised silver jhumkas that blend tradition and trend. Ideal for daily wear or casual festive occasions. Handcrafted to add a bold statement to your look.",
            "price1": 1029,
            "price2": 929,
            "material": "Gold-plated brass",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": false,
        },
        {
            "id": 7,
            "photo": [
                "f13.webp", "f14.webp",
            ],
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "fringes",
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
            "photo": [
                "f15.webp", "f16.webp",
            ],
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "fringes",
            "productForGender": "Female",
            "description": "Delicate oxidised silver jhumkas that blend tradition and trend. Ideal for daily wear or casual festive occasions. Handcrafted to add a bold statement to your look.",
            "price1": 1029,
            "price2": 929,
            "material": "Gold-plated brass",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": false,
        },
        {
            "id": 9,
            "photo": [
                "f17.webp", "f18.webp",
            ],
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "fringes",
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
            "photo": [
                "f19.webp", "f20.webp",
            ],
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "fringes",
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
            "photo": [
                "f21.webp", "f22.webp",
            ],
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "fringes",
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
            "photo": [
                "f23.webp", "f24.webp",
            ],
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "fringes",
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
            "photo": [
                "f25.webp", "f26.webp",
            ],
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "earring",
            "productForGender": "Female",
            "price1": 1029,
            "price2": 929,
            "material": "finely worked stone",
            "occasion": "Wedding",
            "discountPercent": 10,
            "rating": 4.5,
            "reviewCount": 120,
            "isAvailable": true,
        },
        {
            "id": 14,
            "photo": [
                "f27.webp", "f28.webp",
            ],
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "fringes",
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
            "photo": [
                "f29.webp", "f30.webp",
            ],
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "fringes",
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
            "photo": [
                "f31.webp", "f32.webp",
            ],
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "fringes",
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
            "id": 17,
            "photo": [
                "f33.webp", "f34.webp",
            ],
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "fringes",
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
            "id": 18,
            "photo":[
                "m1.webp","m2.webp"
            ],
            "name": "Eclipse Golden Dominion American Diamond Men's Necklace",
            "price1": 1029,
            "price2": 598,
            "productCategory" : "Mens collections",
            "productForGender": "Male",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": false,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 19,
            "photo":[
                "m3.webp","m4.webp"
            ],
            "name": "Eclipse Golden Dominion American Diamond Men's Necklace",
            "price1": 1029,
            "price2": 598,
            "productCategory" : "Mens collections",
            "productForGender": "Male",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 20,
            "photo":[
                "m5.webp","m6.webp"
            ],
            "name": "Eclipse Golden Dominion American Diamond Men's Necklace",
            "price1": 1029,
            "price2": 598,
            "productCategory" : "Mens Collections",
            "productForGender": "Male",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": false,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        },
        {
            "id": 21,
            "photo":[
                "m7.webp","m8.webp"
            ],
            "name": "Eclipse Golden Dominion American Diamond Men's Necklace",
            "price1": 598,
            "price2": 229,
            "productCategory" : "Mens Collections",
            "productForGender": "Male",
            "discountPercent": 10,
            "occasion": "Casual",
            "isAvailable": true,
            "rating": 3.5,
            "description": "Elevate your style with this exquisite men's bracelet from Voylla. Crafted from high-quality alloy and plated with luxurious yellow gold, this bracelet is designed to make a statement. The intricate design features interlocking links adorned with sparkling American diamonds, adding a touch of elegance and sophistication. Perfect for party wear, wedding wear, or as a thoughtful gift for special occasions like Valentine's Day, Diwali, Rakshabandhan, or as a gift for your brother, lover, boyfriend, or husband.This bracelet is not just an accessory but a symbol of timeless style and grace."
        }


    ]

    
    const { categoryName } = useParams();
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
                                    products.filter(product => product.productCategory.toLowerCase().includes(categoryName)).map((product) => {
                                        return (
                                            <Col md={3} className='morecategory'>
                                                <Link to={"/Buypage/" + product.id + product.name}>
                                                    <div className='productf'>
                                                        <div className='fringe1'>
                                                            <img src={"/" + product.photo[0]} alt='' className='img-fluid' />
                                                        </div>
                                                        <div className='fringe2'>
                                                            <img src={"/" + product.photo[1]} alt='' className='img-fluid' />
                                                        </div>
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

            <section>
                <Container>
                    <Row>
                        <Col>
                        
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Category
