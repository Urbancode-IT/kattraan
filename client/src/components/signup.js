import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Form, Card, Button, Container, InputGroup, FormCheck } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./css/login.css"; // Custom CSS for additional colors

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    termsAccepted: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.termsAccepted) {
      Swal.fire({
        icon: "error",
        title: "Terms and Conditions",
        text: "You must accept the terms and conditions to proceed.",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Sign Up Successful",
      text: `Welcome, ${formData.name}! Your account has been created.`,
      confirmButtonText: "OK",
    }).then(() => {
      // Optional: Redirect to login or dashboard after confirmation
      window.location.href = "/login";
    });
  };

  return (
    <main className="login-container">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={5} className="bg-white shadow-soft rounded p-4 p-lg-5">
            <div className="text-center mb-4">
              <h3 className="text-dark">Create an account</h3>
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group id="name" className="mb-4">
                <Form.Label className="text-muted">Enter Name</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Full Name"
                    className="text-dark"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group id="email" className="mb-4">
                <Form.Label className="text-muted">Your Email</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="email"
                    placeholder="example@company.com"
                    className="text-dark"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group id="password" className="mb-4">
                <Form.Label className="text-muted">Your Password</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className="text-dark"
                    required
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </InputGroup>
              </Form.Group>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <FormCheck>
                  <FormCheck.Input
                    id="terms"
                    className="me-2"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleInputChange}
                  />
                  <FormCheck.Label htmlFor="terms" className="text-muted">
                    I agree to the terms and conditions
                  </FormCheck.Label>
                </FormCheck>
              </div>
              <Button variant="primary" type="submit" className="w-100 btn-dark-blue mb-3">
                Sign up
              </Button>
            </Form>
            <div className="text-center mt-3">
              <span className="text-muted">or signup with</span>
              <div className="d-flex justify-content-center mt-3">
                <Button
                  variant="outline-light"
                  className="btn-icon-only btn-facebook me-2"
                  title="Login with Facebook"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </Button>
                <Button
                  variant="outline-light"
                  className="btn-icon-only btn-twitter me-2"
                  title="Login with Twitter"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </Button>
                <Button
                  variant="outline-light"
                  className="btn-icon-only btn-github"
                  title="Login with GitHub"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </Button>
              </div>
            </div>
            <div className="text-center mt-4">
              <span className="text-muted">
                Already have an account?{" "}
                <Card.Link as={Link} to="/login" className="text-primary fw-bold link-hover">
                  Login here
                </Card.Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default SignUpForm;
