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

    productPrice: Yup.number()
        .positive('Price must be positive'),
    productGender: Yup.string().required('required'),

    productOccasion: Yup.string().required('required'),

    productDiscount: Yup.number()
        .positive('Discount must be positive'),
    productMaterial: Yup.string()
        .required('Required'),
    productDescription: Yup.string()
        .required('Required'),
});

const categories = [
    {
        "id" : "1",
        "categoryName" : "Fringes"
    },
    {
        "id" : "2",
        "categoryName" : "Earrings"
    },
    {
        "id" : "3",
        "categoryName" : "Rings"
    },
    {
        "id" : "4",
        "categoryName" : "Sets"
    },
    {
        "id" : "5",
        "categoryName" : "Necklace"
    },
    {
        "id" : "6",
        "categoryName" : "Bangles"
    },
    {
        "id" : "7",
        "categoryName" : "Mens collections"
    }
]
const AddProduct = () => {
    return (
        <div>
            <Container>
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
                                            <label>Product Name</label>
                                        </Col>

                                        <Col>
                                            <Field name="productName" className="inputbox" />
                                            {errors.productName && touched.productName ? (
                                                <div>{errors.productName}</div>
                                            ) : null}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        <label>Product Category</label>
                                        </Col>
                                        <Col>
                                            <Field name="productCategory" as="select" className="inputbox">
                                                {/* <option value="">Choose Category</option>
                                                <option value="red">Fringes</option>
                                                <option value="green">Earrings</option>
                                                <option value="blue">Rings</option>
                                                <option value="blue">Necklaces</option>
                                                <option value="blue">Sets</option>
                                                <option value="blue">Bangles</option>
                                                <option value="blue">Mens Collections</option> */}
                                                {categories.map((category)=>{
                                                    return(
                                                <option value={category.id}>{category.categoryName}</option>

                                                    )
                                                })
                                                }
                                            </Field>
                                            {errors.productCategory && touched.productCategory ? (
                                                <div>{errors.productCategory}</div>
                                            ) : null}
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col>Product Price</Col>
                                        <Col>
                                            <Field name="productPrice" className="inputbox"/>
                                            {errors.productPrice && touched.productPrice ? (
                                                <div>{errors.productPrice}</div>
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
                                                    <Field type="radio" name="productGender" value="Women" />
                                                    Women
                                                </label>
                                                <label>
                                                    <Field type="radio" name="productGender" value="Men" />
                                                    Men
                                                </label>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>Product for Occasions</Col>
                                        <Col>
                                            <Field name="productOccasion" as="select" className="inputbox">
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
                                            <Field name="productDiscount" className="inputbox"/>
                                            {errors.productDiscount && touched.productDiscount ? (
                                                <div>{errors.productDiscount}</div>
                                            ) : null}
                                        </Col>

                                    </Row>


                                    <Row>
                                        <Col>
                                            <div id="my-radio-group">Product Material</div>
                                        </Col>
                                        <Col>
                                            <div role="group" aria-labelledby='my-radio-group'>
                                                <label>
                                                    <Field type="radio" name="productMaterial" value="gold" />
                                                    Gold Plated
                                                </label>
                                                <label>
                                                    <Field type="radio" name="productMaterial" value="silver" className="inputbox" />
                                                    Silver Plated
                                                </label>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>Description</Col>
                                        <Col>
                                            <div>
                                                <Field as="textarea" id="productDescription" name="productDescription" className="inputbox"/>
                                            </div>
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
