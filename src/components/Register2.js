// import React from 'react'
// import ReactDOM from 'react-dom';
import React, { useState, useEffect } from "react";
import { Formik, Field, Form } from 'formik';
import { Col, Container, Row, Button } from 'react-bootstrap';
import * as Yup from 'yup';
import '../App.css'
import InputMask from 'react-input-mask';
import { register } from "../slices/auth";
import { clearMessage } from "../slices/message";
import { useDispatch, useSelector } from "react-redux";






// const SignupSchema = Yup.object().shape({
//     email: Yup.string().email('Invalid email').required('Required'),
//     // password: Yup.string().password('Invalid password').required('Required'),
//     // mobile: Yup.number().mobile('Invalid mobile').required('Required'),
// });


const SignupSchema = Yup.object().shape({
    username: Yup.string()
        .matches(/^[6-9]\d{9}$/, "Enter a valid 10 Digit Mobile No. ")
        .required("Mobile No. is Mandetory!"),
    email: Yup.string().email("Invalid email").required("E-Mail Id Required"),
    password: Yup.string()
        .min(6, "Minimum Six charecter required")
        .max(50, "Maximum 50 charecter required")
        .required("Password Required"),
});



const Register2 = () => {
    const [successful, setSuccessful] = useState(false);

    const { message } = useSelector((state) => state.message);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);


    const handleRegister = (formValue) => {
        const { username, email, password } = formValue;

        setSuccessful(false);

        dispatch(register({ username, email, password }))
            .unwrap()
            .then(() => {
                setSuccessful(true);
            })
            .catch(() => {
                setSuccessful(false);
            });
    };



    return (

        <div>
            <section>
                <Container className="profile">
                    <Row>
                        <Col>
                            <Row>
                                <Col className="heading">
                                    <h1>Registration</h1>
                                </Col>
                            </Row>
                            <Formik
                                initialValues={{
                                    username: "",
                                    email: "",
                                    password: "",
                                }}
                                validationSchema={SignupSchema}
                                // onSubmit={values => {
                                // same shape as initial values
                                // console.log(values);
                                // }}
                                onSubmit={handleRegister}
                            >
                                {({ errors, touched }) => (
                                    <Form>
                                        <div className="background">
                                            <Row>
                                                <Col md={3}>
                                                    <b>Mobile</b>
                                                </Col>
                                                <Col md={9}>
                                                    <Field name="username" className="bbb" />
                                                    {/*<InputMask mask="9999999999" maskChar={null} name="mobile" className='boxes' /> */}

                                                    <div className="error">
                                                        {errors.username && touched.username ? (
                                                            <div>{errors.username}</div>
                                                        ) : null}
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md={3}>
                                                    <b>Email Id</b>
                                                </Col>
                                                <Col md={9}>
                                                    <Field name="email" type="email" className="boxes" />
                                                    <div className="error">
                                                        {errors.email && touched.email ? (
                                                            <div>{errors.email}</div>
                                                        ) : null}
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md={3}>
                                                    <b>Password</b>
                                                </Col>
                                                <Col md={9}>
                                                    <Field
                                                        name="password"
                                                        type="password"
                                                        className="boxes"
                                                    />
                                                    <div className="error">
                                                        {errors.password && touched.password ? (
                                                            <div>{errors.password}</div>
                                                        ) : null}
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Button
                                                        className="button"
                                                        type="submit"
                                                        align-items
                                                        center
                                                    >
                                                        Submit
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {message && (
                                <div className="form-group">
                                    <div
                                        className={
                                            successful ? "alert alert-success" : "alert alert-danger"
                                        }
                                        role="alert"
                                    >
                                        {message}
                                    </div>
                                </div>
                            )}
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>




        // <div>
        //     <Container className='profile'>
        //         <Row>
        //             <Col>
        //                 <h1>Register your ID</h1>
        //                 <Formik
        //                     initialValues={{
        //                         email: '',
        //                         password: '',
        //                         mobile: '',

        //                     }}
        //                     validationSchema={SignupSchema}
        //                     // onSubmit={values => {
        //                     //     // same shape as initial values
        //                     //     console.log(values);
        //                     // }}

        //                     onSubmit = {handleRegister}
        //                 >
        //                     {({ errors, touched }) => (
        //                         <Form>
        //                             <div className='aaa'>
        //                                 <Row>
        //                                     <Col xs={12} md={4}>Email Id</Col>
        //                                     <Col xs={12} md={8}>
        //                                         <Field name="email" type="email" className="inputbox" />
        //                                         {errors.email && touched.email ? <div>{errors.email}</div> : null}

        //                                     </Col>

        //                                 </Row>
        //                                 <Row>
        //                                     <Col xs={12} md={4}>Password</Col>
        //                                     <Col xs={12} md={8}>
        //                                         <Field name="password" type="password" className="inputbox" />
        //                                         {errors.password && touched.password ? <div>{errors.password}</div> : null}

        //                                     </Col>

        //                                 </Row>
        //                                 <Row>
        //                                     <Col xs={12} md={4}>Mobile</Col>
        //                                     <Col xs={12} md={8}>
        //                                         {/* <Field name="mobile" type="mobile" className="inputbox"/> */}
        //                                         <InputMask mask="9999999999" maskChar={null} name="mobile" placeholder="Mobile" className="inputbox" />

        //                                         {errors.mobile && touched.mobile ? <div>{errors.mobile}</div> : null}

        //                                     </Col>

        //                                 </Row>

        //                                 <Row>
        //                                     <Col xs={12}>
        //                                         <button type="submit">Submit</button>
        //                                     </Col>
        //                                 </Row>
        //                             </div>
        //                         </Form>
        //                     )}
        //                 </Formik>
        //             </Col>
        //         </Row>
        //         <Row>
        //     <Col>
        //       {message && (
        //         <div className="form-group">
        //           <div
        //             className={
        //               successful ? "alert alert-success" : "alert alert-danger"
        //             }
        //             role="alert"
        //           >
        //             {message}
        //           </div>
        //         </div>
        //       )}
        //     </Col>
        //   </Row>
        //     </Container>
        // </div>
    )
}

export default Register2

