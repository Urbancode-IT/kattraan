import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Form, Card, Button, Container, InputGroup, FormCheck } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/login.css";

const LoginForm = () => {
  // State to hold email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();  // Hook for navigation

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically handle validation or integration with backend
    console.log("Submitted with Email:", email, "Password:", password);
    // Example: navigate to a dashboard after successful login
    // navigate('/dashboard');
  };

  return (
    <main className="login-container">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={5} className="bg-white shadow-soft rounded p-3 p-lg-5">
            <div className="text-center mb-4">
              <h3 className="text-dark">Sign in to our platform</h3>
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email" className="mb-4">
                <Form.Label className="text-muted">Your Email</Form.Label>
                <InputGroup>
                  <InputGroup.Text className="bg-light text-muted">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </InputGroup.Text>
                  <Form.Control
                    autoFocus
                    required
                    type="email"
                    placeholder="example@company.com"
                    className="text-dark"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group id="password" className="mb-4">
                <Form.Label className="text-muted">Your Password</Form.Label>
                <InputGroup>
                  <InputGroup.Text className="bg-light text-muted">
                    <FontAwesomeIcon icon={faUnlockAlt} />
                  </InputGroup.Text>
                  <Form.Control
                    required
                    type="password"
                    placeholder="Password"
                    className="text-dark"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <FormCheck>
                  <FormCheck.Input id="rememberMe" className="me-2" />
                  <FormCheck.Label htmlFor="rememberMe" className="text-muted mb-0">
                    Remember me
                  </FormCheck.Label>
                </FormCheck>
                <Card.Link as={Link} to="/forgotpassword" className="text-primary link-hover small">
                  Lost password?
                </Card.Link>
              </div>
              <Button variant="primary" type="submit" className="w-100 btn-dark-blue mb-3">
                Sign in
              </Button>
            </Form>
            <div className="text-center mt-3">
              <span className="text-muted">or login with</span>
              <div className="d-flex justify-content-center mt-3">
                <Button variant="outline-light" className="btn-icon-only btn-facebook me-2" title="Login with Facebook">
                  <FontAwesomeIcon icon={faFacebookF} />
                </Button>
                <Button variant="outline-light" className="btn-icon-only btn-twitter me-2" title="Login with Twitter">
                  <FontAwesomeIcon icon={faTwitter} />
                </Button>
                <Button variant="outline-light" className="btn-icon-only btn-github" title="Login with GitHub">
                  <FontAwesomeIcon icon={faGithub} />
                </Button>
              </div>
            </div>
            <div className="text-center mt-4">
              <span className="text-muted">
                Not registered?{" "}
                <Card.Link as={Link} to="/signup" className="text-primary fw-bold link-hover">
                  Create account
                </Card.Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default LoginForm;
