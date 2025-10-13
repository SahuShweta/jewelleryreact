import React, { useState, useEffect } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Navigate } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './../App.css';
import { login } from "../slices/auth";
import { clearMessage } from "../slices/message";
import axios from 'axios';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";






const AddCategory = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(false);
    const { isLoggedIn } = useSelector((state) => state.auth);
    const { message } = useSelector((state) => state.message);

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);

    useEffect(() => {
        axios.get('http://localhost:8090/api/ssproducts').then((response) => {
            console.log(response.data);
            setProducts(response.data)
        })
    }, []);

    

    if (isLoggedIn) {
        // return <Navigate to="/home" />;
    }


    const handleDelete = (id) => {
        if (window.confirm("Are you sure?")) {
            axios.delete(`http://localhost:8090/api/ssproducts/${id}`).then((response) => {
                console.log("product Successfully deleted");
                alert("product successfully deleted");
                window.location.reload();


            })
        }

    }


    return (
        <div>
            



  <Container>
                <Row>
                    <Col>

                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th className='text-center'>#</th>
                                    <th className='text-center'>Products</th>
                                    <th> delete </th>
                                    <th> Edit </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products ?
                                        products.map((product, index) => {
                                            return (
                                                <tr key={index}>

                                                    <td>{index + 1}</td>
                                                    <td>{product.productName}</td>
                                                    <td className='text-center'><button onClick={() => handleDelete(product.id)}><MdDelete /></button>  </td>
                                                    <td className='text-center'> <FaEdit /> </td>
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
        </div >
    );
};

export default AddCategory
