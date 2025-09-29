// import React from 'react'
// import ReactDOM from 'react-dom';
import React, { useState, useEffect } from "react";
import { Formik, Field, Form } from 'formik';
import { Col, Container, Row } from 'react-bootstrap';
import * as Yup from 'yup';
import '../App.css'
import InputMask from 'react-input-mask';
import { register } from "../slices/auth";
import { clearMessage } from "../slices/message";
import { useDispatch, useSelector } from "react-redux";






const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    // password: Yup.string().password('Invalid password').required('Required'),
    // mobile: Yup.number().mobile('Invalid mobile').required('Required'),
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
            <Container className='profile'>
                <Row>
                    <Col>
                        <h1>Register your ID</h1>
                        <Formik
                            initialValues={{
                                email: '',
                                password: '',
                                mobile: '',

                            }}
                            validationSchema={SignupSchema}
                            // onSubmit={values => {
                            //     // same shape as initial values
                            //     console.log(values);
                            // }}

                            onSubmit = {handleRegister}
                        >
                            {({ errors, touched }) => (
                                <Form>
                                    <div className='aaa'>
                                        <Row>
                                            <Col xs={12} md={4}>Email Id</Col>
                                            <Col xs={12} md={8}>
                                                <Field name="email" type="email" className="inputbox" />
                                                {errors.email && touched.email ? <div>{errors.email}</div> : null}

                                            </Col>

                                        </Row>
                                        <Row>
                                            <Col xs={12} md={4}>Password</Col>
                                            <Col xs={12} md={8}>
                                                <Field name="password" type="password" className="inputbox" />
                                                {errors.password && touched.password ? <div>{errors.password}</div> : null}

                                            </Col>

                                        </Row>
                                        <Row>
                                            <Col xs={12} md={4}>Mobile</Col>
                                            <Col xs={12} md={8}>
                                                {/* <Field name="mobile" type="mobile" className="inputbox"/> */}
                                                <InputMask mask="9999999999" maskChar={null} name="mobile" placeholder="Mobile" className="inputbox" />

                                                {errors.mobile && touched.mobile ? <div>{errors.mobile}</div> : null}

                                            </Col>

                                        </Row>

                                        <Row>
                                            <Col xs={12}>
                                                <button type="submit">Submit</button>
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
        </div>
    )
}

export default Register2

