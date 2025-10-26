import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Breadcrumb } from 'react-bootstrap';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './../App.css';

import { Link, Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";



const SignupSchema = Yup.object().shape({
    productName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    productCategory: Yup.string().required('Required'),
    productPrice: Yup.number().positive('Price must be positive'),
    productGender: Yup.string().required('Required'),
    productOccasion: Yup.string().required('Required'),
    productDiscount: Yup.number().positive('Discount must be positive'),
    productMaterial: Yup.string().required('Required'),
    productDescription: Yup.string().required('Required'),
});

// const categories = [
//     { id: "1", categoryName: "Fringes" },
//     { id: "2", categoryName: "Earrings" },
//     { id: "3", categoryName: "Rings" },
//     { id: "4", categoryName: "Sets" },
//     { id: "5", categoryName: "Necklace" },
//     { id: "6", categoryName: "Bangles" },
//     { id: "7", categoryName: "Mens collections" }
// ];

const AddProduct = () => {
    const [selectedImages, setSelectedImages] = useState([]);
    const [categories, setCategories] = useState();

    useEffect(() => {
        axios.get('http://localhost:8090/api/cats').then((response) => {
            console.log(response.data);
            setCategories(response.data)
        })
    }, []);


    const handleFileChange = (e) => {
        setSelectedImages(e.target.files);
    };
    const { user: currentUser } = useSelector((state) => state.auth);
    console.log(currentUser)
    if (!currentUser) {
        return <Navigate to="/login" />;
    }
    return (
        <div>
            <Container>

                <Row>
                    <Col>
                        <h1>Add Product</h1>
                        <Breadcrumb>
                            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/AdminDashboard" }}>Dashboard</Breadcrumb.Item>

                            <Breadcrumb.Item active>Add Product</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
                <Formik
                    initialValues={{
                        productName: '',
                        productCategory: '',
                        productPrice: '',
                        productGender: '',
                        productOccasion: '',
                        productDiscount: '',
                        productMaterial: '',
                        productDescription: '',
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={async (values, { resetForm }) => {
                        const formData = new FormData();

                        // ✅ Append userId from Redux store
                        formData.append("userId", currentUser.id);

                        // ✅ Append other form fields
                        Object.keys(values).forEach((key) => {
                            formData.append(key, values[key]);
                        });

                        // ✅ Append image files
                        for (let i = 0; i < selectedImages.length; i++) {
                            formData.append("images", selectedImages[i]);
                        }

                        try {
                            const res = await axios.post("http://localhost:8090/api/ssproducts", formData, {
                                headers: {
                                    "Content-Type": "multipart/form-data"
                                }
                            });
                            console.log("Upload success:", res.data);
                            alert("Product added successfully!");
                            resetForm();
                            setSelectedImages([]);
                        } catch (err) {
                            console.error("Upload failed:", err);
                            alert("Failed to add product");
                        }
                    }}

                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className='aaa'>
                                <Container>

                                    <Row>
                                        <Col><label>Product Name</label></Col>
                                        <Col>
                                            <Field name="productName" className="inputbox" />
                                            {errors.productName && touched.productName && <div className='error'>{errors.productName}</div>}
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col><label>Product Category</label></Col>
                                        <Col>
                                            <Field name="productCategory" as="select" className="inputbox">
                                                <option value="">Select Category</option>
                                                {
                                                    categories ?
                                                        categories.map((category, index) => {
                                                            return (
                                                                <option value={category.id} key={index} > {category.name} </option>

                                                            )
                                                        })
                                                        : ""
                                                }
                                            </Field>
                                            {errors.productCategory && touched.productCategory && <div className='error'>{errors.productCategory}</div>}
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>Product Price</Col>
                                        <Col>
                                            <Field name="productPrice" className="inputbox" />
                                            {errors.productPrice && touched.productPrice && <div className='error'>{errors.productPrice}</div>}
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col><label>Gender</label></Col>
                                        <Col>
                                            <label><Field type="radio" name="productGender" value="Women" /> Women</label>
                                            <label><Field type="radio" name="productGender" value="Men" /> Men</label>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>Product Occasion</Col>
                                        <Col>
                                            <Field name="productOccasion" as="select" className="inputbox">
                                                <option value="">Choose Occasion</option>
                                                <option value="Weddings">Weddings</option>
                                                <option value="Casuals">Casuals</option>
                                                <option value="Ethnic">Ethnic</option>
                                            </Field>
                                            {errors.productOccasion && touched.productOccasion && <div className='error'>{errors.productOccasion}</div>}
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>Product Discount</Col>
                                        <Col>
                                            <Field name="productDiscount" className="inputbox" />
                                            {errors.productDiscount && touched.productDiscount && <div className='error'>{errors.productDiscount}</div>}
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>Product Material</Col>
                                        <Col>
                                            <label><Field type="radio" name="productMaterial" value="Gold" /> Gold Plated</label>
                                            <label><Field type="radio" name="productMaterial" value="Silver" /> Silver Plated</label>
                                            {errors.productMaterial && touched.productMaterial && <div className='error'>{errors.productMaterial}</div>}
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>Description</Col>
                                        <Col>
                                            <Field as="textarea" name="productDescription" className="inputbox" />
                                            {errors.productDescription && touched.productDescription && <div className='error'>{errors.productDescription}</div>}
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>Upload Images</Col>
                                        <Col>
                                            <input
                                                type="file"
                                                multiple
                                                accept="image/*"
                                                onChange={handleFileChange}
                                            />
                                            {selectedImages.length > 0 && (
                                                <div>{selectedImages.length} image(s) selected</div>
                                            )}
                                        </Col>
                                    </Row>

                                    <Row className="mt-3">
                                        <Col>
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </Form>
                    )}
                </Formik>
            </Container>
        </div>
    );
};

export default AddProduct;
