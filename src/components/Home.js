import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import earring from '../images/earrings.webp';
import accessory from '../images/accesories.webp';
import rings from '../images/ring.webp';
import set from '../images/sets.webp';
import necklaces from '../images/necklace.webp';
import bangle from '../images/bangles.webp';

import p1 from '../images/p1.webp';
import p2 from '../images/p2.webp';
import p3 from '../images/p3.webp';
import sp1 from '../images/sp1.webp';
import sp2 from '../images/sp2.webp';
import sp3 from '../images/sp3.webp';
import sp4 from '../images/sp4.webp';
import sp5 from '../images/sp5.webp';
import sp6 from '../images/sp6.webp';
import sp7 from '../images/sp7.webp';
import sp8 from '../images/sp8.webp';
import sp9 from '../images/sp9.webp';

import photo1 from '../images/photo1.webp';
import photo11 from '../images/photo11.webp';
import photo2 from '../images/photo2.webp';
import photo22 from '../images/photo22.webp';
import photo3 from '../images/photo3.webp';
import photo33 from '../images/photo33.webp';
import photo4 from '../images/photo4.webp';
import photo44 from '../images/photo44.webp';
import c1 from '../images/c1.webp';
import c2 from '../images/c2.webp';
import c3 from '../images/c3.webp';
import c4 from '../images/c4.webp';
import b1 from '../images/b1.webp';
import b2 from '../images/b2.webp';
import b3 from '../images/b3.webp';
import b4 from '../images/b4.webp';
import g1 from '../images/g1.webp';
import g2 from '../images/g2.webp';
import rv1 from '../images/rv1.webp';
import rv2 from '../images/rv2.webp';
import rv3 from '../images/rv3.webp';
import rv4 from '../images/rv4.webp';
import slide1 from '../images/slide1.webp';
import slide2 from '../images/slide2.webp';
import slide3 from '../images/slide3.webp';
import video1 from '../images/video1.mp4';
import video2 from '../images/video2.mp4';
import video3 from '../images/video3.mp4';
import video4 from '../images/video4.mp4';
import video5 from '../images/video5.mp4';
import video6 from '../images/video6.mp4';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router';

// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faCoffee} from '@fortawesome/free-solid-svg-icons'
import { Col, Container, Row } from 'react-bootstrap';
//import Carousel from 'react-bootstrap/Carousel';
//import ExampleCarouselImage from 'components/ExampleCarouselImage';


const Home = () => {

  const data = [
    {
      "id": 1,
      "title": "earing",
      "photo": "earrings.webp",
      "link": " "
    },

    {
      "id": 2,
      "title": "rings",
      "photo": "ring.webp",
      "link": " "
    },

    {
      "id": 3,
      "title": "bangles",
      "photo": "bangles.webp",
      "link": " "
    },

    {
      "id": 4,
      "title": "sets",
      "photo": "sets.webp",
      "link": " "
    },

    {
      "id": 5,
      "title": "necklace",
      "photo": "necklace.webp",
      "link": " "
    },

    {
      "id": 6,
      "title": "hair accesories",
      "photo": "accesories.webp",
      "link": " "
    }
  ];

  const products = [
    {
      "id": 1,
      "productName": "xyz",
      "productPrice": 1349,
      "productCategory": "",
      "productImages": [
        "123imgae.jpg", "abc.jpg",
      ],
      "productForGender" : "Male"
      // "totalOrderQuantity"

    }
  ]

  const reviews = [
    {
      "id" : 1,
      "reviewTitle" : "",
      "review" : "xyz",
      "reviewers" : {
        "name" : "abc",
        "photo" : ""
      }
    }
  ]


  return (
    <div>

      {/* <section className='category'>
        <Container fluid>
          <Row>
            <Col md={2}>
              <div className='cat1'>
                <img src={earring} alt='' className='img-fluid' />
                <h3>Earrings</h3>
              </div>
            </Col>
            <Col md={2}>
              <div className='cat1'>
                <img src={rings} alt='' className='img-fluid' />
                <h3>Rings</h3>
              </div>
            </Col>
            <Col md={2}>
              <div className='cat1'>
                <img src={bangle} alt='' className='img-fluid' />
                <h3>Bangles</h3>
              </div>
            </Col>
            <Col md={2}>
              <div className='cat1'>
                <img src={set} alt='' className='img-fluid' />
                <h3>Sets</h3>
              </div>
            </Col>
            <Col md={2}>
              <div className='cat1'>
                <img src={necklaces} alt='' className='img-fluid' />
                <h3>Necklace</h3>
              </div>
            </Col>
            <Col md={2}>
              <div className='cat1'>
                <img src={accessory} alt='' className='img-fluid' />
                <h3>Hair Accesories</h3>
              </div>
            </Col>

          </Row>
        </Container>
      </section> */}

      <section className='category'>
        <Container fluid>
          <Row>
            {
              data.map((item) => {
                return (
                  <Col md={2}>
                    <div className='cat1'>
                      <img src={item.photo} alt='' className='img-fluid' />
                      <h3>{item.title}</h3>
                    </div>
                  </Col>
                )
              }

              )
            }


          </Row>
        </Container>
      </section>

      {/* <section>
        <Container>
          <Row>
            {
              data.map((item) => {
                return (
                  <Col md={2}>
                    <div className='cat1'>
                      <img src={item.photo} alt='' className='img-fluid' />
                      <h3>{item.title}</h3>
                    </div>
                  </Col>
                )
              }

              )
            }
          </Row>
        </Container>
      </section> */}


      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


      <section className='linearea'>
        <Container fluid>
          <Row>
            <Col md={4}>
              <div className='line'></div>
            </Col>
            <Col md={4}>
              <h4>NEW LAUNCH</h4>
            </Col>
            <Col md={4}>
              <div className='line'></div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='launcharea'>
        <Container fluid>
          <Row>
            <Col>
              <img src={p1} alt='' className='img-fluid' />
              <Row className='panchi'>
                <Col>
                  <div className='tribe'>
                    <img src={sp1} alt='' />
                  </div>
                </Col>
                <Col>
                  <div className='tribe'>
                    <img src={sp2} alt='' />
                  </div>
                </Col>
                <Col>
                  <div className='tribe'>
                    <img src={sp3} alt='' />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col>
              <img src={p2} alt='' className='img-fluid' />
              <Row className='panchi'>
                <Col>
                  <div className='tribe
'>
                    <img src={sp4} alt='' />
                  </div>
                </Col>
                <Col>
                  <div className='tribe
'>
                    <img src={sp5} alt='' />
                  </div>
                </Col>
                <Col>
                  <div className='tribe
'>
                    <img src={sp6} alt='' />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col>
              <img src={p3} alt='' className='img-fluid' />
              <Row className='panchi'>
                <Col>
                  <div className='tribe
'>
                    <img src={sp7} alt='' />
                  </div>
                </Col>
                <Col>
                  <div className='tribe
'>
                    <img src={sp8} alt='' />
                  </div>
                </Col>
                <Col>
                  <div className='tribe
'>
                    <img src={sp9} alt='' />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container fluid className='linearea'>
          <Row>
            <Col md={4}>
              <div className='line'></div>
            </Col>
            <Col md={4}>
              <h4>NEW SEASON, BOHO BREEZE</h4>
            </Col>
            <Col md={4}>
              <div className='line'></div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='bohoarea'>
        <Container fluid>
          <Row>
            <Col md={3}>
              <Link to="/Buypage">
                <div className='bimage1'></div>
                <p>Fringes bloom in fringe statement choker set</p>
                <h5><s>₹ 849</s>&nbsp; &nbsp; &nbsp;<b>₹ 509</b></h5>
                <button>Add to Cart</button>
              </Link>
            </Col>
            <Col md={3}>
              <div className='bimage2'></div>
              <p>Fringes bloom in fringe statement choker set</p>
              <h5><s>₹ 849</s>&nbsp; &nbsp; &nbsp;<b>₹ 509</b></h5>
              <button>Add to Cart</button>
            </Col>
            <Col md={3}>
              <div className='bimage3'></div>
              <p>Fringes bloom in fringe statement choker set</p>
              <h5><s>₹ 849</s>&nbsp; &nbsp; &nbsp;<b>₹ 509</b></h5>
              <button>Add to Cart</button>
            </Col>
            <Col md={3}>
              <div className='bimage4'></div>
              <p>Fringes bloom in fringe statement choker set</p>
              <h5><s>₹ 849</s>&nbsp; &nbsp; &nbsp;<b>₹ 509</b></h5>
              <button>Add to Cart</button>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container fluid className='linearea'>
          <Row>
            <Col md={4}>
              <div className='line'></div>
            </Col>
            <Col md={4}>
              <h4>COLLECTIONS</h4>
            </Col>
            <Col md={4}>
              <div className='line'></div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='collectionarea'>
        <Container fluid>
          <Row>
            <Col md={3}>
              <div className='collect1'>
                <img src={c1} alt='' className='img-fluid' />
              </div>
            </Col>
            <Col md={3}>
              <div className='collect2'>
                <img src={c2} alt='' className='img-fluid' />
              </div>
            </Col>
            <Col md={3}>
              <div className='collect3'>
                <img src={c3} alt='' className='img-fluid' />
              </div>
            </Col>
            <Col md={3}>
              <div className='collect4'>
                <img src={c4} alt='' className='img-fluid' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container fluid className='linearea'>
          <Row>
            <Col md={4}>
              <div className='line'></div>
            </Col>
            <Col md={4}>
              <h4>BEST SELLERS</h4>
            </Col>
            <Col md={4}>
              <div className='line'></div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='bestarea'>
        <Container fluid>
          <Row>
            <Col md={3}>
              <div className='t1'></div>
              <p>Fringes bloom in fringe statement choker set</p>
              <h5><s>₹ 849</s>&nbsp; &nbsp; &nbsp;<b>₹ 509</b></h5>
              <button>Add to Cart</button>
            </Col>
            <Col md={3}>
              <div className='t2'></div>
              <p>Fringes bloom in fringe statement choker set</p>
              <h5><s>₹ 849</s>&nbsp; &nbsp; &nbsp;<b>₹ 509</b></h5>
              <button>Add to Cart</button>
            </Col>
            <Col md={3}>
              <div className='t3'></div>
              <p>Fringes bloom in fringe statement choker set</p>
              <h5><s>₹ 849</s>&nbsp; &nbsp; &nbsp;<b>₹ 509</b></h5>
              <button>Add to Cart</button>
            </Col>
            <Col md={3}>
              <div className='t4'></div>
              <p>Fringes bloom in fringe statement choker set</p>
              <h5><s>₹ 849</s>&nbsp; &nbsp; &nbsp;<b>₹ 509</b></h5>
              <button>Add to Cart</button>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='giftarea'>
        <Container>
          <Row>
            <Col md={6}>
              <div className='gimage1'>
                <img src={g1} alt='' className='img-fluid' />
              </div>
              <h3>Gift for her</h3>
              <p>For the woman who deserves all the sparkle in the world!</p>
              <button>GIFT NOW</button>
            </Col>
            <Col md={6}>
              <h3>Gift for him</h3>
              <p>The Perfect Gift for the Perfect Man!</p>
              <button>GIFT NOW</button>
              <div className='gimage2'>
                <img src={g2} alt='' className='img-fluid' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container fluid className='linearea'>
          <Row>
            <Col md={4}>
              <div className='line'></div>
            </Col>
            <Col md={4}>
              <h4>TRENDING ITEMS</h4>
            </Col>
            <Col md={4}>
              <div className='line'></div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container fluid>
          <Row>
            <Col md={2}>
              <video width="100%" autoPlay muted loop>
                <source src={video1} type="video/mp4" />
              </video>
            </Col>
            <Col md={2}>
              <video width="100%" autoPlay muted loop>
                <source src={video2} type="video/mp4" />
              </video>
            </Col>
            <Col md={2}>
              <video width="100%" autoPlay muted loop>
                <source src={video3} type="video/mp4" />
              </video>
            </Col>
            <Col md={2}>
              <video width="100%" autoPlay muted loop>
                <source src={video4} type="video/mp4" />
              </video>
            </Col>
            <Col md={2}>
              <video width="100%" autoPlay muted loop>
                <source src={video5} type="video/mp4" />
              </video>
            </Col>
            <Col md={2}>
              <video width="100%" autoPlay muted loop>
                <source src={video6} type="video/mp4" />
              </video>
            </Col>


          </Row>
        </Container>
      </section>

      <section>
        <Container fluid className='linearea'>
          <Row>
            <Col md={4}>
              <div className='line'></div>
            </Col>
            <Col md={4}>
              <h4>CUSTOMER REVIEWS</h4>
            </Col>
            <Col md={4}>
              <div className='line'></div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='reviewarea'>
        <Container>
          <Row>
            <Col md={3}>
              <img src={rv1} alt='' className='img-fluid' />
              <h6>In love...!!</h6>
              <p>Quality is good...Well finished jewellery.in love with this earrings.</p>
              {/* <FontAwesomeIcon icon={faCoffee}/> */}
              {/* <i className="fas fa-home">like</i> */}
              <h5>Kumkum</h5>
            </Col>
            <Col md={3}>
              <img src={rv2} alt='' className='img-fluid' />
              <h6>Very good quality..!</h6>
              <p>Love the quality of products. All the product of bagh & Fiza collection bright and beautiful</p>
              <h5>Srilina Basu Dutta</h5>
            </Col>
            <Col md={3}>
              <img src={rv3} alt='' className='img-fluid' />
              <h6>Awesome...</h6>
              <p>Beautiful necklace love it!!!!</p>
              <h5>Deepa Paul</h5>
            </Col>
            <Col md={3}>
              <img src={rv4} alt='' className='img-fluid' />
              <h6>Woww...!!</h6>
              <p>Woww.. fully satisfied with this earrings loved it looks exactly same as shown in image and the main point is that very light weight andpackaging is also very good.</p>
              <h5>Sheshadri</h5>
            </Col>
          </Row>
        </Container>
      </section>


<section className='reviewarea'>
        <Container>
          <Row>
            <Col md={3}>
              <img src={rv1} alt='' className='img-fluid' />
              <h6>In love...!!</h6>
              <p>Quality is good...Well finished jewellery.in love with this earrings.</p>
              {/* <FontAwesomeIcon icon={faCoffee}/> */}
              {/* <i className="fas fa-home">like</i> */}
              <h5>Kumkum</h5>
            </Col>
            <Col md={3}>
              <img src={rv2} alt='' className='img-fluid' />
              <h6>Very good quality..!</h6>
              <p>Love the quality of products. All the product of bagh & Fiza collection bright and beautiful</p>
              <h5>Srilina Basu Dutta</h5>
            </Col>
            <Col md={3}>
              <img src={rv3} alt='' className='img-fluid' />
              <h6>Awesome...</h6>
              <p>Beautiful necklace love it!!!!</p>
              <h5>Deepa Paul</h5>
            </Col>
            <Col md={3}>
              <img src={rv4} alt='' className='img-fluid' />
              <h6>Woww...!!</h6>
              <p>Woww.. fully satisfied with this earrings loved it looks exactly same as shown in image and the main point is that very light weight andpackaging is also very good.</p>
              <h5>Sheshadri</h5>
            </Col>
          </Row>
        </Container>
      </section>

    </div>
  )
}

export default Home
