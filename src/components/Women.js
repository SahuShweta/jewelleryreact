import React from 'react';
import wmbanner from  '../images/wmbanner.webp';
import f1 from '../images/f1.webp';
import f3 from '../images/f3.webp';
import f5 from '../images/f5.webp';
import f7 from '../images/f7.webp';
import f9 from '../images/f9.webp';
import f11 from '../images/f11.webp';
import f13 from '../images/f13.webp';
import f15 from '../images/f15.webp';
import f17 from '../images/f17.webp';
import f19 from '../images/f19.webp';
import f21 from '../images/f21.webp';
import f23 from '../images/f23.webp';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';

const Women = () => {
    const fringes = [
        {
            "id": 1,
            "photo": "f1.webp",
            "name": "Fringes Thrill Statement Dangler Earrings",
            "price1": 1029,
            "price2": 929

        },
        {
            "id": 2,
            "photo": "f3.webp",
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "price1": 1029,
            "price2": 929
        },
        {
            "id": 3,
            "photo": "f5.webp",
            "name": "Fringes Slay In Fringe Collar Necklace Set",
            "price1": 1029,
            "price2": 929
        },
        {
            "id": 4,
            "photo": "f7.webp",
            "name": "Fringes Fluted Bloom Dangler Earrings",
            "price1": 1029,
            "price2": 929
        },
        {
            "id": 5,
            "photo": "f9.webp",
            "name": "Fringes Perfect Beaded Fringe Earrings",
            "price1": 1029,
            "price2": 929
        },
        {
            "id": 6,
            "photo": "f11.webp",
            "name": "Fringes Sway In Fringe Earrings",
            "price1": 1029,
            "price2": 929
        },
        {
            "id": 7,
            "photo": "f13.webp",
            "name": "Fringes Thrill Statement Dangler Earrings",
            "price1": 1029,
            "price2": 929
        },
        {
            "id": 8,
            "photo": "f15.webp",
            "name": "Fringes Thrill Statement Dangler Earrings",
            "price1": 1029,
            "price2": 929
        },
        {
            "id": 9,
            "photo": "f17.webp",
            "name": "Fringes Thrill Statement Dangler Earrings",
            "price1": 1029,
            "price2": 929
        },
        {
            "id": 10,
            "photo": "f19.webp",
            "name": "Fringes Thrill Statement Dangler Earrings",
            "price1": 1029,
            "price2": 929
        },
        {
            "id": 11,
            "photo": "f21.webp",
            "name": "Fringes Thrill Statement Dangler Earrings",
            "price1": 1029,
            "price2": 929
        },
        {
            "id": 12,
            "photo": "f23.webp",
            "name": "Fringes Thrill Statement Dangler Earrings",
            "price1": 1029,
            "price2": 929
        }
    ]
  return (
    <div>
      <section className='wm1'>
        <Container fluid>
            <Row>
                <Col>
                <img src={wmbanner} alt='' className='Container-fluid' />
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
                        <div className='fringearea'>
                                {
                                    fringes.map((product) => {
                                        return (
                                            <Col md={4}>
                                                <Link to={"/Buypage/" + product.id}>
                                                    <div className='productf'>
                                                        <img src={product.photo} alt='' className='img-fluid' />
                                                        <p>{product.name}</p>
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

                                </div>
                    </Row>
                </Col>
            </Row>
        </Container>
      </section>
    </div>
  )
}

export default Women
