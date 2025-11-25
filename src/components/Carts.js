import React, { useState, useEffect } from 'react'
import { Col, Container, Row, Table, Modal, Badge, } from 'react-bootstrap';
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
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import Address from './Address';
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import Card from 'react-bootstrap/Card';
// import { useNavigate, Navigate } from "react-router-dom";






const Carts = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();
    


    const [products, setProducts] = useState();
    const [count, setCount] = useState(1);
    const [noCartsItems, setNoCartsItems] = useState();

    const [addresses, setAddresses] = useState();
    useEffect(() => {
        axios.get(`http://localhost:8090/api/carts/user/${currentUser.id}`).then((response) => {
            console.log(response.data.items);
            console.log(response.data)
            setProducts(response.data.items)
            setNoCartsItems(response.data.itemCount)
        })
        axios.get(`http://localhost:8090/api/addresses/user/${currentUser.id}`).then((response) => {
            console.log(response.data)
            setAddresses(response.data)
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
        //check products is an array or not, if products is not an array then exit
        if (!Array.isArray(products)) return 0;
        return products.reduce((total, product) => {
            return total + (product.quantity * product.productDetails.productPrice);
        }, 0);
    };

    const subTotal = calculateTotal();
    console.log(subTotal)



    const discount = () => {
        let value = 0
        if (subTotal > 5000) {
            value = 500;
        }
        else if (subTotal > 2000) {
            value = 200;
        }
        else {
            value = 0;
        }
        return value;
    }
    const discountValue = discount();
    console.log(discountValue)

    const grandTotal = subTotal - discountValue;


    const quantityUpdate = (productId, newQuantity) => {
        console.log(productId)
        console.log(newQuantity)
        if (newQuantity < 1) return;
        axios.put(`http://localhost:8090/api/carts/user/${currentUser.id}/item/${productId}`, { quantity: newQuantity }).then(() => {
            window.location.reload();

        }).catch((error) => { console.error("Failed to update quantity", error); });

    }




    const handleOrder = async (formValue, { resetForm }) => {
        // const formData = new FormData();

        const { addressId } = formValue;
        // setLoading(true);

        console.log(addressId)
        if (!addressId) {
            alert("must be choose address")
            return
        }

        if (noCartsItems < 1) {
            alert("cart is empty")
            return
        }

        const orderData = {
            addressId: addressId,
            products: products,
            userId: currentUser.id
        }

        console.log(orderData)
        try {
            const res = await axios.post("http://localhost:8090/api/ssorders", orderData);
            console.log("Order successfully added:", res.data);
            alert("Order added successfully!");
             navigate("/home");

            // resetForm();
            // window.location.reload();


        } catch (err) {
            console.error("Failed to add order:", err);
            alert("Failed to add order");
        }
    };



    const handleDelete = (id) => {
        if (window.confirm("Are you sure?")) {
            axios.delete(`http://localhost:8090/api/carts/user/${currentUser.id}/item/${id}`).then((response) => {
                console.log("Product Successfully deleted");
                alert("Product successfully deleted");
                window.location.reload();


            })
        }

    }

    const handleRemove = (id) => {
        if (window.confirm("Are you want remove this address?")) {
            axios.delete(`http://localhost:8090/api/addresses/${id}`).then((response) => {
                console.log("Address is Successfully removed");
                alert("Address is successfully removed");
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
                                                        <Link to={`/product/${product.productId}`} className="product-link">
                                                            <img src={`http://localhost:8090/upload/${product.productDetails.images[0]}`} alt="" />
                                                        </Link>
                                                    </td>

                                                    <td> ₹{product.quantity * product.productDetails.productPrice}.00</td>

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
                        {/* <div className='totalmoney'>
                            <h4>Sub Total: ₹{subTotal.toFixed(2)}</h4>
                            <h4>Discount: ₹{discountValue.toFixed(2)}</h4>
                            <h4>Grand Total: ₹{grandTotal.toFixed(2)}</h4>
                        </div> */}
                        <div className='nextbutton2'>
                            <button className='nextbutton'><Link to="/Address" className='customlink'>Next </Link></button>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* <Row>
                <Col>
                <h4>address</h4>

                {
                    addresses.map((addresses,index)=>{
                        return(
                            
                        )
                    })
                }
                </Col>
            </Row> */}

            <Row>
                <Col md={4} className='addnewaddress'>
                    <Card style={{ padding: "20px", borderRadius: "12px" }}>

                        <div className='addAddress'>
                            <h4>Delivery Address</h4>
                        </div>

                        <Button
                            style={{
                                background: "#fff",
                                color: "#05154D",
                                fontWeight: "700",
                                border: "none"
                            }}
                            onClick={handleShow}
                        >
                            + Add a new Address
                        </Button>

                        {/* MODAL */}
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Add Address</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Address />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>

                        {/* FORM */}
                        <Formik initialValues={{ addressId: '' }} onSubmit={handleOrder}>
                            {({ values }) => (
                                <Form style={{ marginTop: "12px" }}>

                                    {
                                        addresses && addresses.length > 0 ? (
                                            addresses.map((address, index) => (
                                                <div
                                                    key={index}
                                                    style={{
                                                        padding: "12px",
                                                        borderRadius: "10px",
                                                        marginBottom: "12px",
                                                        border: "1px solid #ddd",
                                                        background: values.addressId === address.id ? "#F5F5F5" : "#fff"
                                                    }}
                                                >
                                                    <Field
                                                        type="radio"
                                                        name="addressId"
                                                        value={address.id}
                                                        style={{ marginRight: "10px" }}
                                                    />

                                                    <b>{address.name}</b> &nbsp;
                                                    <Badge>{address.addressType}</Badge> &nbsp;
                                                    <span>{address.mobile}</span>

                                                    <p style={{ marginTop: "5px" }}>
                                                        {address.city}, {address.district}, {address.state} - <b>{address.pin}</b>
                                                    </p>

                                                    <p>
                                                        <MdEmail /> {address.email}
                                                    </p>

                                                    <Button
                                                        onClick={() => handleRemove(address.id)}
                                                        style={{
                                                            background: "silver",
                                                            color: "black",
                                                            border: "none"
                                                        }}
                                                    >
                                                        Remove
                                                    </Button>
                                                </div>
                                            ))
                                        ) : (
                                            <p>No address available</p>
                                        )
                                    }

                                    <button
                                        type="submit"
                                        className="btn btn-success"
                                        style={{
                                            background: "#05154D",
                                            border: "none"
                                        }}
                                    >
                                        Submit
                                    </button>

                                </Form>
                            )}
                        </Formik>
                    </Card>
                </Col>

                <Col>
                    <div className='totalmoney' style={{ background: "white" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                            <span>Subtotal :</span>
                            <span>Rs. {subTotal.toFixed(2)}</span>
                        </div>
                        <hr />

                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                            <span>Discount :</span>
                            <span>Rs. {discountValue.toFixed(2)}</span>
                        </div>
                        <hr />

                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                            <span>Grand Total :</span>
                            <span>Rs. {grandTotal.toFixed(2)}</span>
                        </div>
                        <hr />

                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                            <span>Coupon code:</span>
                            <span>Add Coupon</span>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Carts
