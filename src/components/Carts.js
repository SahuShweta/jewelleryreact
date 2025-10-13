import React, { useState, useEffect } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Navigate } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './../App.css'
import { login } from "../slices/auth";
import { clearMessage } from "../slices/message";
import axios from 'axios';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Carts = () => {

    

const [products,setProducts] = useState();
    

    useEffect(() => {
        axios.get(`http://localhost:8090/api/carts/user/${currentUser.id}`).then((response) => {
            console.log(response.data.items);
            setProducts(response.data.items)
        })
    }, []);

    

        const { user: currentUser } = useSelector((state) => state.auth);
        console.log(currentUser)

                       

        return (
            <div>
                <Container>
                    <Row>
                        <Col>

                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th className='text-center'>#</th>
                                        <th className='text-center'>name</th>
                                        <th> Edit </th>
                                        <th>price  </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                         products ?
                                             products.map((product, index) => {
                                                return (
                                                    <tr key={index}>

                                                        <td>{index + 1}</td>
                                                        <td>{product.productDetails.productName}</td>
                                                        
                                                    
                                                        {/* <td className='text-center'><button onClick={() => handleDelete(product.id)}><MdDelete /></button>  </td> */}
                                                        <td className='text-center'> <FaEdit /> </td>
                                                        <td>{product.productDetails.productPrice}</td>
                                                    </tr>
                                                )
                                            }

                                            )
                                            : <tr>
                                                <td colSpan={4}>
                                                    Oops! No Data available.
                                                </td>
                                            </tr>
                                    }
                                </tbody>
                            </Table>

                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

    export default Carts
