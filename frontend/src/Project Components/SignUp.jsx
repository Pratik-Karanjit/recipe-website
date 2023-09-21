import React, { useState } from "react";
import { Modal, Button, Form, Nav } from "react-bootstrap";

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
          {isSignup ? (
            <Form>
              {/* Signup Form */}
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm your password"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Sign Up
              </Button>
            </Form>
          ) : (
            <Form>
              {/* Login Form */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>{/* Empty footer */}</Modal.Footer>
      </Modal>
    </>
  );
}

export default SignUp;
