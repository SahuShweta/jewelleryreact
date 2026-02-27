import React, { useState, useEffect } from "react";
import { Formik, Field, Form } from 'formik';
import { Col, Container, Row, Button } from 'react-bootstrap';
import * as Yup from 'yup';
import '../App.css';
import { register } from "../slices/auth";
import { clearMessage } from "../slices/message";
import { useDispatch, useSelector } from "react-redux";

const SignupSchema = Yup.object().shape({
    username: Yup.string()
        .matches(/^[6-9]\d{9}$/, "Enter a valid 10 Digit Mobile No.")
        .required("Mobile number is required"),
    email: Yup.string().email("Invalid email").required("Email required"),
    password: Yup.string()
        .min(6, "Minimum 6 characters")
        .max(50, "Max 50 characters")
        .required("Password required"),
});

const Register = () => {
    const [successful, setSuccessful] = useState(false);
    const dispatch = useDispatch();
    const { message } = useSelector((state) => state.message);

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);

    const handleRegister = (formValue) => {
        const { username, email, password } = formValue;
        setSuccessful(false);

        dispatch(register({ username, email, password }))
            .unwrap()
            .then(() => setSuccessful(true))
            .catch(() => setSuccessful(false));
    };

    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
            <div className="auth-card shadow-lg p-4 rounded-4">
                <h2 className="text-center mb-4 fw-bold">Create Account</h2>

                <Formik
                    initialValues={{ username: "", email: "", password: "" }}
                    validationSchema={SignupSchema}
                    onSubmit={handleRegister}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Mobile Number</label>
                                <Field name="username"
                                       className="form-control form-control-lg rounded-3" />
                                {errors.username && touched.username && (
                                    <div className="text-danger small">{errors.username}</div>
                                )}
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">Email ID</label>
                                <Field type="email"
                                       name="email"
                                       className="form-control form-control-lg rounded-3" />
                                {errors.email && touched.email && (
                                    <div className="text-danger small">{errors.email}</div>
                                )}
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">Password</label>
                                <Field
                                    type="password"
                                    name="password"
                                    className="form-control form-control-lg rounded-3"
                                />
                                {errors.password && touched.password && (
                                    <div className="text-danger small">{errors.password}</div>
                                )}
                            </div>

                            <Button type="submit" className="btn-primary w-100 py-2 rounded-3 fw-semibold">
                                Submit
                            </Button>
                        </Form>
                    )}
                </Formik>

                {message && (
                    <div className={`alert mt-3 text-center 
                        ${successful ? "alert-success" : "alert-danger"}`}>
                        {message}
                    </div>
                )}
            </div>
        </Container>
    );
};

export default Register;
