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



    const [products, setProducts] = useState();
    const [count, setCount] = useState(1);
    const [noCartsItems, setNoCartsItems] = useState();


    useEffect(() => {
        axios.get(`http://localhost:8090/api/carts/user/${currentUser.id}`).then((response) => {
            console.log(response.data.items);
            console.log(response.data)
            setProducts(response.data.items)
            setNoCartsItems(response.data.itemCount)
        })
    }, []);



    const { user: currentUser } = useSelector((state) => state.auth);
    console.log(currentUser)



    const [name, setName] = useState("");
    const decrement = () => {
        setCount(count - 1);
    }
    const increment = () => {
        setCount(count + 1);
    }

    const calculateTotal = () => {
        //   return products.reduce((total, product) => {
        //     return total + (product.quantity * product.productDetails.productPrice);
        //   }, 0);
    };
    const subTotal = calculateTotal()
    console.log(subTotal)

    const quantityUpdate = (productId, newQuantity) => {
        console.log(productId)
        console.log(newQuantity)
        if (newQuantity < 1) return;
        axios.put(`http://localhost:8090/api/carts/user/${currentUser.id}/item/${productId}`, { quantity: newQuantity }).then(() => {
            window.location.reload();

        }).catch((error) => { console.error("Failed to update quantity", error); });

    }



    const handleDelete = (id) => {
        if (window.confirm("Are you sure?")) {
            axios.delete(`http://localhost:8090/api/carts/user/${currentUser.id}/item/${id}`).then((response) => {
                console.log("Product Successfully deleted");
                alert("Product successfully deleted");
                window.location.reload();


            })
        }

    }




    return (
        <div>


            <Container>

                <Row>
                    <Col>
                        <h1 className='text-center'>Number of carts items {noCartsItems}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>

                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th className='text-center'>S. No.</th>
                                    <th className='text-center'>Name</th>
                                    <th className='text-center'>Product Images</th>

                                    <th className='text-center'>price  </th>
                                    <th className='text-center'>Quantity  </th>
                                    <th className='text-center'>Delete  </th>
                                    <th className='text-center'> Edit </th>
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
                                                    <td className='cartImage'>
                                                        <img src={`http://localhost:8090/upload/${product.productDetails.images[0]}`} alt="" />

                                                    </td>

                                                    <td>{product.quantity * product.productDetails.productPrice}</td>

                                                    <td className='text-center'>
                                                        {/* <button onClick={decrement}>-</button>
                                                        <button>{count}</button>
                                                        <button onClick={increment}>+</button> */}

                                                        <button onClick={() => quantityUpdate(product.productId, product.quantity - 1)}>-</button>
                                                         {product.quantity} 
                                                         <button onClick={() => quantityUpdate(product.productId, product.quantity + 1)}>+</button>
                                                    </td>


                                                    <td className='text-center'><button onClick={() => handleDelete(product.productId)}><MdDelete /></button>  </td>
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
                        <p>{calculateTotal}</p>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Carts
