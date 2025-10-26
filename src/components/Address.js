import React from 'react'
import { Formik, Field, Form } from 'formik';
import { Col, Container, Row } from 'react-bootstrap';
import * as Yup from 'yup';
import '../App.css'
import InputMask from 'react-input-mask';






const allStates = [
    {
        "states": [
            { "key": "AP", "name": "Andhra Pradesh" },
            { "key": "AR", "name": "Arunachal Pradesh" },
            { "key": "AS", "name": "Assam" },
            { "key": "BR", "name": "Bihar" },
            { "key": "CG", "name": "Chhattisgarh" },
            { "key": "GA", "name": "Goa" },
            { "key": "GJ", "name": "Gujarat" },
            { "key": "HR", "name": "Haryana" },
            { "key": "HP", "name": "Himachal Pradesh" },
            { "key": "JH", "name": "Jharkhand" },
            { "key": "KA", "name": "Karnataka" },
            { "key": "KL", "name": "Kerala" },
            { "key": "MP", "name": "Madhya Pradesh" },
            { "key": "MH", "name": "Maharashtra" },
            { "key": "MN", "name": "Manipur" },
            { "key": "ML", "name": "Meghalaya" },
            { "key": "MZ", "name": "Mizoram" },
            { "key": "NL", "name": "Nagaland" },
            { "key": "OD", "name": "Odisha" },
            { "key": "PB", "name": "Punjab" },
            { "key": "RJ", "name": "Rajasthan" },
            { "key": "SK", "name": "Sikkim" },
            { "key": "TN", "name": "Tamil Nadu" },
            { "key": "TS", "name": "Telangana" },
            { "key": "TR", "name": "Tripura" },
            { "key": "UP", "name": "Uttar Pradesh" },
            { "key": "UK", "name": "Uttarakhand" },
            { "key": "WB", "name": "West Bengal" }
        ],
        "union_territories": [
            { "key": "AN", "name": "Andaman & Nicobar Islands" },
            { "key": "CH", "name": "Chandigarh" },
            { "key": "DN", "name": "Dadra & Nagar Haveli and Daman & Diu" },
            { "key": "DL", "name": "Delhi" },
            { "key": "JK", "name": "Jammu & Kashmir" },
            { "key": "LA", "name": "Ladakh" },
            { "key": "LD", "name": "Lakshadweep" },
            { "key": "PY", "name": "Puducherry" }
        ]
    }
]

const AddressSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    mobile: Yup.string()
        .matches(/^[6-9]\d{9}$/, 'Enter a valid 10 Digit Mobile Number')
        .required("Required"),
    address1: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    state: Yup.string().required("Required"),
    pin: Yup.string().required("Required").matches(/^[1-9]\d{5}$/, "Invalid pin code"),

    // country: Yup.string().required("Required"),
});

const Address = () => {
    return (
        <div className='zzz'>

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
                            <Container fluid>
                                <Row>
                                    <Col xs={12} md={4}><h5>Name</h5></Col>
                                    <Col xs={12} md={8}>
                                        <Field name="name" placeholder="Full Name" className="inputbox" />
                                        {errors.name && touched.name && <div>{errors.name}</div>}
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xs={12} md={4}><h5>Email</h5></Col>
                                    <Col xs={12} md={8}>
                                        <Field name="email" type="email" placeholder="Email" className="inputbox" />
                                        {errors.email && touched.email && <div>{errors.email}</div>}
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xs={12} md={4}><h5> Mobile Number </h5>  </Col>
                                    <Col xs={12} md={8}>
                                        {/* <Field name="mobile" type="tel" placeholder="Mobile" className="inputbox"/> */}
                                        <InputMask mask="9999999999" maskChar={null} name="mobile" placeholder="Mobile" className="inputbox" />

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
                                        <Field name="city" placeholder="City" className="inputbox" />
                                        {errors.city && touched.city && <div>{errors.city}</div>}
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xs={12} md={4}> <h5>State </h5>  </Col>
                                    <Col xs={12} md={8}>
                                        <Field name="state" as="select" placeholder="State" className="inputbox">
                                            <option>Choose your State</option>

                                            {
                                                allStates.map((items) => {
                                                    return (
                                                        <option key={items.key} value={items.name}>{items.name}</option>
                                                    )
                                                }
                                                )
                                            }

                                        </Field>
                                        {errors.state && touched.state && <div>{errors.state}</div>}
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xs={12} md={4}><h5>Pin Code</h5></Col>
                                    <Col xs={12} md={8}>
                                        {/* <Field name="pin" placeholder="PIN / pin Code" className="inputbox"/> */}
                                        <InputMask mask="999999" maskChar={null} name="Pin code" placeholder="pin code" className="inputbox" />

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
