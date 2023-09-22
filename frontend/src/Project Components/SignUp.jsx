import React, { useState } from "react";
import { Modal, Button, Form, Nav } from "react-bootstrap";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setLoginInfo } from "../utils/loginInfo";

function RegistrationForm({ handleClose }) {
  let navigate = useNavigate()
  const initialValues = {
    name: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Username is required."),
    age: Yup.string().required("Age is required."),
    email: Yup.string().email("Invalid email").required("Email is required."),
    password: Yup.string().min(6, "Password must be at least 6 characters.").required("Password is required."),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match.")
      .required("Confirm Password is required."),
  });

  let handleSubmit = async (info) => {
    try {
      let result = await axios({
        url: `http://localhost:8000/users`,
        method: 'post',
        data: info,
      });
      
      // Close the modal when registration is successful
      handleClose();
  
      // Navigate to the success page
      navigate('/registration-success');
    } catch (error) {
      console.log('Unable to create');
    }
  };
  

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <FormikForm>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Username</Form.Label>
            <Field type="text" name="name" as={Form.Control} />
            <ErrorMessage name="name" component="div" className="error-message" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="age">
            <Form.Label>Age</Form.Label>
            <Field type="number" name="age" as={Form.Control} />
            <ErrorMessage name="age" component="div" className="error-message" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Field type="email" name="email" as={Form.Control} />
            <ErrorMessage name="email" component="div" className="error-message" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Field type="password" name="password" as={Form.Control} />
            <ErrorMessage name="password" component="div" className="error-message" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Field type="password" name="confirmPassword" as={Form.Control} />
            <ErrorMessage name="confirmPassword" component="div" className="error-message" />
          </Form.Group>

          <Button variant="primary" type="submit" disabled={isSubmitting}>
            Sign Up
          </Button>
        </FormikForm>
      )}
    </Formik>
  );
}

function LoginForm({ handleClose }) {
  let navigate = useNavigate()
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required."),
    password: Yup.string().required("Password is required."),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post('http://localhost:8000/users/login', values);
      const token = response.data.token;
      setLoginInfo({token})
      navigate('/hello');
    } catch (error) {
      console.log('Unable to submit:', error);
    } finally {
      handleClose()
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <FormikForm>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Field type="email" name="email" as={Form.Control} />
            <ErrorMessage name="email" component="div" className="error-message" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Field type="password" name="password" as={Form.Control} />
            <ErrorMessage name="password" component="div" className="error-message" />
          </Form.Group>

          <Button variant="primary" type="submit" disabled={isSubmitting}>
            Login
          </Button>
        </FormikForm>
      )}
    </Formik>
  );
}

function SignUp() {
  const [show, setShow] = useState(false);
  const [isSignup, setIsSignup] = useState(true); // To track whether the signup or login section is active

  const handleClose = () => {
    setShow(false);
    setIsSignup(true); // Reset to the signup section when the modal is closed
  };

  const handleShow = () => {
    setShow(true);
    setIsSignup(true); // Show the signup section by default when the modal is opened
  };

  const toggleSection = () => {
    setIsSignup(!isSignup); // Toggle between signup and login sections
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Sign Up / Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {isSignup ? "Sign Up" : "Login"}
            <Button
              variant="link"
              className="switch-button"
              onClick={toggleSection}
            >
              {isSignup ? "Switch to Login" : "Switch to Sign Up"}
            </Button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isSignup ? <RegistrationForm handleClose={handleClose} /> : <LoginForm handleClose={handleClose} />}
        </Modal.Body>
        <Modal.Footer>{/* Empty footer */}</Modal.Footer>
      </Modal>
    </>
  );
}

export default SignUp;
