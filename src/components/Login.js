import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Navigate } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './../App.css'
import { login } from "../slices/auth";
import { clearMessage } from "../slices/message";

// const SignupSchema = Yup.object().shape({

//     email: Yup.string().email('Invalid email').required('Required'),
//     // password: Yup.string().password('Invalid password').required('Required'),
// });
const LoginSchema = Yup.object().shape({
    username: Yup.string()
        .matches(/^[6-9]\d{9}$/, 'Enter a valid 10-digit mobile number')
        .required('Mobile number is required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
});


const Login = () => {
        const dispatch = useDispatch();
        const navigate = useNavigate();

        const [loading, setLoading] = useState(false);
        const { isLoggedIn } = useSelector((state) => state.auth);
        const { message } = useSelector((state) => state.message);

        useEffect(() => {
            dispatch(clearMessage());
        }, [dispatch]);

        const handleLogin = (formValue) => {
            const { username, password } = formValue;
            setLoading(true);

            dispatch(login({ username, password }))
                .unwrap()
                .then(() => {
                    navigate("/home");
                })
                .catch(() => {
                    setLoading(false);
                });
        };

        if (isLoggedIn) {
            return <Navigate to="/home" />;
        }



        return (
            <div>
                <Container className='login'>
                    <Row>
                        <Col xs={12} sm={8} md={6} lg={4}>
                            <h1>Sign in</h1>
                        </Col>
                    </Row>

                    {message && (
                        <Row>
                            <Col>
                                <div className="alert alert-danger text-center">{message}</div>
                            </Col>
                        </Row>
                    )}
                    <Formik
                        initialValues={{

                            username: '',
                            password: '',
                        }}
                        validationSchema={LoginSchema}
                        // onSubmit={values => {
                        //     // same shape as initial values
                        //     console.log(values);
                        // }}
                        onSubmit={handleLogin}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <div className='aaa'>

                                    <Row>
                                        <Col>Mobile</Col>
                                        <Col>
                                            <Field name="username" className="inputbox" autoComplete="off" />
                                            {errors.username && touched.username ? <div>{errors.username}</div> : null}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>Password</Col>
                                        <Col>
                                            <Field name="password" type="password" className="inputbox" />
                                            {errors.password && touched.password ? <div>{errors.password}</div> : null}
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                                disabled={loading}
                                            >
                                                {loading ? 'Please wait...' : 'Continue'}
                                            </button>
                                        </Col>
                                        <Col>
                                             {/* <button>
                                               if not registered  
                                            </button> */}
                                        </Col>
                                    </Row>
                                </div>
                            </Form>
                        )}
                    </Formik>


                </Container >
            </div >
        );
    };

    export default Login
