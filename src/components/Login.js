import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Navigate, Link } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { login } from "../slices/auth";
import { clearMessage } from "../slices/message";
import './../App.css';

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

  const handleLogin = (values) => {
    const { username, password } = values;
    setLoading(true);

    dispatch(login({ username, password }))
      .unwrap()
      .then(() => navigate("/home"))
      .catch(() => setLoading(false));
  };

  if (isLoggedIn) return <Navigate to="/home" />;

  return (
    <Container className="login-container d-flex justify-content-center align-items-center">
      <Card className="login-card shadow-lg p-4">
        <h2 className="text-center mb-4">Sign in</h2>

        {message && (
          <div className="alert alert-danger text-center">{message}</div>
        )}

        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={handleLogin}
        >
          {({ errors, touched }) => (
            <Form>

              <div className="mb-3">
                <label className="form-label">Mobile</label>
                <Field
                  name="username"
                  className="form-control"
                  autoComplete="off"
                />
                {errors.username && touched.username && (
                  <div className="text-danger small">{errors.username}</div>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <Field
                  name="password"
                  type="password"
                  className="form-control"
                  autoComplete="off"
                />
                {errors.password && touched.password && (
                  <div className="text-danger small">{errors.password}</div>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 mt-2"
                disabled={loading}
              >
                {loading ? "Please wait..." : "Continue"}
              </button>

              <div className="text-center mt-3">
                <Link to="/Register" className="text-decoration-none">
                  Not registered? Create an account
                </Link>
              </div>

            </Form>
          )}
        </Formik>
      </Card>
    </Container>
  );
};

export default Login;