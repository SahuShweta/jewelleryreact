import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './../App.css'

const SignupSchema = Yup.object().shape({
    
    email: Yup.string().email('Invalid email').required('Required'),
    // password: Yup.string().password('Invalid password').required('Required'),
});



const Login = () => {
    return (
        <div>
            <Container className='profile'>
                           <Row>
                               <Col xs={12} sm={8} md={6} lg={4}>
                                   <h1>Sign in</h1>
                                   <Formik
                                       initialValues={{
                                           
                                           email: '',
                                           password: '',
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
                                                   
                                               <Row>
                                                   <Col>Email ID</Col>
                                                   <Col>
                                                       <Field name="email" type="email" />
                                                       {errors.email && touched.email ? <div>{errors.email}</div> : null}
                                                   </Col>
                                               </Row>
                                               <Row>
                                                   <Col>Password</Col>
                                                   <Col>
                                                       <Field name="password" type="password" />
                                                       {errors.password && touched.password? <div>{errors.password}</div> : null}
                                                   </Col>
                                               </Row>
           
                                               <Row>
                                                   <Col>
                                                       <button type="submit">Submit</button>
                                                   </Col>
                                               </Row>
                                               </div>
                                           </Form>
                                       )}
                                   </Formik>
                               </Col>
                           </Row>
                       </Container> 
        </div>
    )
}

export default Login
