import React, { useState } from "react";
import { Modal, Button, Form, Nav } from "react-bootstrap";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setLoginInfo } from "../utils/loginInfo";
import { FaRegUserCircle } from "react-icons/fa";

function RegistrationForm({ handleClose }) {
  let navigate = useNavigate();
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
    password: Yup.string()
      .min(6, "Password must be at least 6 characters.")
      .required("Password is required."),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match.")
      .required("Confirm Password is required."),
  });

  let handleSubmit = async (info) => {
    try {
      let result = await axios({
        url: `http://localhost:8000/users`,
        method: "post",
        data: info,
      });

      // Close the modal when registration is successful
      handleClose();

      // Navigate to the success page
      navigate("/registration-success");
    } catch (error) {
      console.log("Unable to create");
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
            <ErrorMessage
              name="name"
              component="div"
              className="error-message"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="age">
            <Form.Label>Age</Form.Label>
            <Field type="number" name="age" as={Form.Control} />
            <ErrorMessage
              name="age"
              component="div"
              className="error-message"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Field type="email" name="email" as={Form.Control} />
            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Field type="password" name="password" as={Form.Control} />
            <ErrorMessage
              name="password"
              component="div"
              className="error-message"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Field type="password" name="confirmPassword" as={Form.Control} />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="error-message"
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            disabled={isSubmitting}
            style={{ marginLeft: "10rem" }}
          >
            Sign Up
          </Button>
        </FormikForm>
      )}
    </Formik>
  );
}

function LoginForm({ handleClose }) {
  let navigate = useNavigate();
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
      const response = await axios.post(
        "http://localhost:8000/users/login",
        values
      );
      const token = response.data.token;
      const name = response.data.name;
      console.log("**************", response.data);

      setLoginInfo({ token, name });
      navigate("/");
    } catch (error) {
      console.log("Unable to submit:", error);
    } finally {
      handleClose();
    }
  };

  const handleForgotPasswordClick = () => {
    // Navigate to the "Forgot Password" page when the button is clicked
    navigate("/forgot-password");
    handleClose();
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
            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Field type="password" name="password" as={Form.Control} />
            <ErrorMessage
              name="password"
              component="div"
              className="error-message"
            />
          </Form.Group>

          <button
            type="button"
            onClick={handleForgotPasswordClick}
            style={{
              color: "blue",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              marginLeft: "20rem",
            }}
          >
            <div style={{ color: "grey" }}>Forgot Password?</div>
          </button>

          <br />

          <Button
            variant="primary"
            type="submit"
            disabled={isSubmitting}
            style={{
              marginLeft: "12rem",
            }}
          >
            Login
          </Button>
        </FormikForm>
      )}
    </Formik>
  );
}

function SignUp() {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("signup"); // Initialize with "signup" active

  const handleClose = () => {
    setShow(false);
    setActiveTab("signup"); // Reset to "signup" when the modal is closed
  };

  const handleShow = () => {
    setShow(true);
    setActiveTab("login"); // Show the signup section by default when the modal is opened
  };

  const toggleSection = (tab) => {
    setActiveTab(tab); // Toggle between "signup" and "login" sections
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className="transparent-button"
      >
        <FaRegUserCircle></FaRegUserCircle>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {activeTab === "signup" ? "Sign Up" : "Login"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <Button
              variant={activeTab === "login" ? "primary" : "outline-primary"}
              onClick={() => toggleSection("login")}
            >
              Login
            </Button>

            <span className="mx-2">
              {" "}
              {/* Add some space between the buttons */}
            </span>

            <Button
              variant={activeTab === "signup" ? "primary" : "outline-primary"}
              onClick={() => toggleSection("signup")}
            >
              Sign Up
            </Button>
          </div>
          {/* Render the respective form based on the activeTab */}
          {activeTab === "signup" ? (
            <RegistrationForm handleClose={handleClose} />
          ) : (
            <LoginForm handleClose={handleClose} />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SignUp;
