import React from 'react'
import { Col, Container, Row} from 'react-bootstrap';
import { Link, useParams } from 'react-router';


const Category = () => {
    const products = [
        {
            "id": 1,
            "photo": "f1.webp",
            "name": "Aham bramhasmi moksh rudracks beads",
            "productCategory": "fringes",
            "productForGender": "Female",
            "price1": 1029,
            "price2": 929

        },
        {
            "id": 2,
            "photo": "f3.webp",
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "fringes",
            "productForGender": "Female",
            "price1": 1029,
            "price2": 929
        },
        {
            "id": 2,
            "photo": "f3.webp",
            "name": "Fringes Bloom In Fringe Statement Choker Set",
            "productCategory": "xyz",
            "productForGender": "Female",
            "price1": 1029,
            "price2": 929
        }

        
    ]
    const { categoryName } = useParams();
  return (
    <div>
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
                              <Row>
                                  <Col><h1>hello world</h1></Col>
                                  <Col><h1>hello world</h1></Col>
      
                              </Row>
                                  <Row className='bg-info'>
                                      {/* <div className='fringearea'> */}
                                      {
                                          products.filter(product=>product.productCategory.toLowerCase().includes(categoryName)).map((product) => {
                                              return (
                                                  <Col md={4} className='bg-danger'>
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
      
                                      {/* </div> */}
                                  </Row>
                              </Col>
                          </Row>
                      </Container>
                  </section>
    </div>
  )
}

export default Category
