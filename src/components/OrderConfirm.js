import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import { BsCheck2Circle } from "react-icons/bs";
import { Link } from 'react-router';

const OrderConfirm = () => {
    return (
        <div>
            <section>
                <Container>
                    <Row>
                        <Col style={{ backgroundColor: "#D4D4D4", borderRadius: "10px", margin: "30px" }}>
                            <p className='text-center' style={{ color: "#05154D", fontSize: "80px" }}>
                                <BsCheck2Circle />
                            </p>
                            <p className='text-center' style={{ color: "#05154D" }}>
                                Hey! Shweta Sahu
                            </p>
                            <h2 className='text-center' style={{ color: "#05154D" }}>
                                Your Order is Confirmed !
                            </h2>
                            <p className='text-center' style={{ color: "#05154D" }}>
                                We will send you a shopping confirmation email as soon as your order ships
                            </p>
                            <div style={{ textAlign: "center", margin: "10px" }}>
                                <Button
                                    style={{
                                        backgroundColor: "#05154D",
                                        color: "white",
                                        border: "none",
                                        padding: "10px",
                                        fontSize: "22px"
                                    }}
                                >
                                    <Link to="/Orders" className='customlink'>
                                    Check status
                                    </Link>
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default OrderConfirm
