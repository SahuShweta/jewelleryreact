
import React, { useState, useEffect } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Navigate } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './../App.css'
import { login } from "../slices/auth";
import { clearMessage } from "../slices/message";
import axios from 'axios';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";




const checkNameExists = async (name) => {
    // Replace this with your actual API call
    const response = await fetch(`http://localhost:8090/api/cats/check?name=${name}`);
    const data = await response.json();
    return data.exists; // Should return true if mobile number exists
};

const CategorySchema = Yup.object().shape({
    name: Yup.string()
        .required("Category name is required")
        .test(
            "checkDuplicateCategory",
            "Category Name already exists",
            async function (value) {
                if (!value) return false;
                const exists = await checkNameExists(value);
                return !exists;
            }
        ),
});

const AddCategory = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [categories, setCategories] = useState();
    const [loading, setLoading] = useState(false);
    const { isLoggedIn } = useSelector((state) => state.auth);
    const { message } = useSelector((state) => state.message);

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);

    useEffect(() => {
        axios.get('http://localhost:8090/api/cats').then((response) => {
            console.log(response.data);
            setCategories(response.data)
        })
    }, []);

    const handleSubmit = async (formValue, { resetForm }) => {
        // const formData = new FormData();

        const { name } = formValue;
        setLoading(true);

        console.log(formValue)
        try {
            const res = await axios.post("http://localhost:8090/api/cats", formValue);
            console.log("Category name successfully added:", res.data);
            alert("Category name added successfully!");
            resetForm();
            window.location.reload();


        } catch (err) {
            console.error("Failed to add category name:", err);
            alert("Failed to add category name");
        }
    };

    if (isLoggedIn) {
        // return <Navigate to="/home" />;
    }


    const handleDelete = (id) => {
        if (window.confirm("Are you sure?")) {
            axios.delete(`http://localhost:8090/api/cats/${id}`).then((response) => {
                console.log("category Successfully deleted");
                alert("Category successfully deleted");
                window.location.reload();


            })
        }

    }


    return (
        <div>
            <Container className='login'>
                <Row>
                    <Col xs={12} sm={8} md={6} lg={4}>
                        <h1>Add Category</h1>
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

                        name: '',

                    }}
                    validationSchema={CategorySchema}
                    // onSubmit={values => {
                    //     // same shape as initial values
                    //     console.log(values);
                    // }}
                    onSubmit={handleSubmit}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className='aaa'>

                                <Row>
                                    <Col><label>Category Name</label></Col>
                                    <Col>
                                        <Field name="name" className="inputbox" autoComplete="off" />
                                        {errors.name && touched.name ? <div>{errors.name}</div> : null}
                                    </Col>
                                </Row>


                                <Row>
                                    <Col>
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            disabled={loading}
                                        >
                                            {loading ? 'Please wait...' : 'Add Category'}
                                        </button>
                                    </Col>
                                </Row>
                            </div>
                        </Form>
                    )}
                </Formik>


            </Container >



            <Container>
                <Row>
                    <Col>

                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th className='text-center'>#</th>
                                    <th className='text-center'>category</th>
                                    <th>  </th>
                                    <th>  </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    categories ?
                                        categories.map((category, index) => {
                                            return (
                                                <tr key={index}>

                                                    <td>{index + 1}</td>
                                                    <td>{category.name}</td>
                                                    <td className='text-center'><button onClick={() => handleDelete(category.id)}><MdDelete /></button>  </td>
                                                    <td className='text-center'> <FaEdit /> </td>
                                                </tr>
                                            )
                                        }

                                        )
                                        : <tr>
                                            <td colSpan={4}>
                                                Oops! No Data available.
                                            </td>
                                        </tr>
                                }
                            </tbody>
                        </Table>

                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default AddCategory
