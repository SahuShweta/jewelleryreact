import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './../App.css'


const SignupSchema = Yup.object().shape({
    productName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    productCategory: Yup.string().required('required'),

    productPrice: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    productOccasion: Yup.string().required('required'),
        
    productDiscount: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});
const AddProduct = () => {
    return (
        <div>
            <Container>
                <Formik
                    initialValues={{
                        productName: '',
                        productCategory: '',
                        productPrice: '',
                        productOccasion: '',
                        productDiscount: '',




                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                        // same shape as initial values
                        console.log(values);
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className='aaa'>
                                <Container>
                                    <Row>
                                        <Col>
                                            Product Name
                                        </Col>

                                        <Col>
                                            <Field name="productName" />
                                            {errors.productName && touched.productName ? (
                                                <div>{errors.productName}</div>
                                            ) : null}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div id="my-radio-group">Gender</div>
                                        </Col>
                                        <Col>
                                            <div role="group" aria-labelledby='my-radio-group'>
                                                <label>
                                                    <Field type="radio" name="gender" value="Women" />
                                                    Women
                                                </label>
                                                <label>
                                                    <Field type="radio" name="gender" value="Men" />
                                                    Men
                                                </label>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>Product Category</Col>
                                        <Col>
                                            <Field name="productCategory" as="select">
                                                <option value="">Choose Category</option>
                                                <option value="red">Red</option>
                                                <option value="green">Green</option>
                                                <option value="blue">Blue</option>
                                            </Field>
                                            {errors.productCategory && touched.productCategory ? (
                                                <div>{errors.productCategory}</div>
                                            ) : null}
                                        </Col>

                                    </Row>

                                    <Row>
                                        <Col>Product Price</Col>
                                        <Col>
                                            <Field name="productPrice" />
                                            {errors.productPrice && touched.productPrice ? (
                                                <div>{errors.productPrice}</div>
                                            ) : null}
                                        </Col>

                                    </Row>

                                    <Row>
                                        <Col>Product for Occasions</Col>
                                        <Col>
                                            <Field name="productOccasion" as="select">
                                                <option value="">Choose Ocassion</option>
                                                <option value="red">Weddings</option>
                                                <option value="green">Casuals</option>
                                                <option value="blue">Ethnic</option>
                                            </Field>
                                            {errors.productOccasion && touched.productOccasion ? (
                                                <div>{errors.productOccasion}</div>
                                            ) : null}
                                        </Col>

                                    </Row>

                                    <Row>
                                        <Col>Product Discount</Col>
                                        <Col>
                                            <Field name="productDiscount" />
                                            {errors.productDiscount && touched.productDiscount ? (
                                                <div>{errors.productDiscount}</div>
                                            ) : null}
                                        </Col>

                                    </Row>
                                </Container>




                                <button type="submit">Submit</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </Container>
        </div>
    )
}

export default AddProduct
