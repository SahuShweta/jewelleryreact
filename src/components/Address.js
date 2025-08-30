import React from 'react'
import { Formik, Field, Form } from 'formik';
import { Col, Container, Row } from 'react-bootstrap';
import * as Yup from 'yup';
import '../App.css'


const AddressSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    mobile: Yup.string()
        .matches(/^[0-9]{10}$/, "Invalid mobile number")
        .required("Required"),
    address1: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    state: Yup.string().required("Required"),
    pin: Yup.string().required("Required"),
    // country: Yup.string().required("Required"),
});

const Address = () => {
    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    mobile: '',
                    address1: '',
                    address2: '',
                    city: '',
                    state: '',
                    pin: '',
                    // country: '',
                }}
                validationSchema={AddressSchema}
                onSubmit={values => console.log(values)}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className='aaa'>
                            <Container>
                                <Row>
                                    <Col xs={12} md={4}><h5>Name</h5></Col>
                                    <Col xs={12} md={8}>
                                    <Field name="name" placeholder="Full Name" className="inputbox"/>
                                        {errors.name && touched.name && <div>{errors.name}</div>}
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xs={12} md={4}><h5>Email</h5></Col>
                                    <Col xs={12} md={8}>
                                    <Field name="email" type="email" placeholder="Email" className="inputbox"/>
                                        {errors.email && touched.email && <div>{errors.email}</div>}
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xs={12} md={4}><h5> Mobile Number </h5>  </Col>
                                    <Col xs={12} md={8}>
                                    <Field name="mobile" type="tel" placeholder="Mobile" className="inputbox"/>
                                        {errors.mobile && touched.mobile && <div>{errors.mobile}</div>}
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xs={12} md={4}><h5> Address </h5>  </Col>
                                    <Col xs={12} md={8}>
                                    <Field name="address1" placeholder="Address Line 1" className="inputbox" />
                                        {errors.address1 && touched.address1 && <div>{errors.address1}</div>}
                                    
                                    <Col>
                                        <Field name="address2" placeholder="Address Line 2 (Optional)" className="inputbox" />
                                    </Col>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xs={12} md={4}><h5> City </h5>  </Col>
                                    <Col xs={12} md={8}>
                                    <Field name="city" placeholder="City" className="inputbox"/>
                                        {errors.city && touched.city && <div>{errors.city}</div>}
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xs={12} md={4}> <h5>State </h5>  </Col>
                                    <Col xs={12} md={8}>
                                    <Field name="state" placeholder="State" className="inputbox" />
                                        {errors.state && touched.state && <div>{errors.state}</div>}
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xs={12} md={4}><h5>Pin Code</h5></Col>
                                    <Col xs={12} md={8}><Field name="pin" placeholder="PIN / pin Code" className="inputbox"/>
                                        {errors.pin && touched.pin && <div>{errors.pin}</div>}
                                    </Col>
                                </Row>

                                {/* <Row>
                                    <Col xs={12} md={4}>  Country  </Col>
                                    <Col xs={12} md={8}>
                                    <Field name="country" placeholder="Country" />
                                        {errors.country && touched.country && <div>{errors.country}</div>}
                                    </Col>
                                </Row> */}


                                <button type="submit">Submit</button>
                            </Container>
                        </div>
                    </Form>
                )}
            </Formik>

        </div>
    )
}

export default Address
