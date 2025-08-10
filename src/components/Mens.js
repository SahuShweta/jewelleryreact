import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';


const Mens = () => {
  return (
    <div>

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

export default Mens
