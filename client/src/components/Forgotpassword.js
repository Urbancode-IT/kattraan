import React, { useState } from "react";
import { Col, Row, Form, Card, Button, Container, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import API from '../api/index'; // Import the centralized API configuration

import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/login.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Use the centralized API instance to make the POST request
      const response = await API.post('/auth/forgot-password', { email });
      if (response.data.success) {
        Swal.fire({
          icon: "success",
          title: "Password Recovery Email Sent",
          text: `An email has been sent to ${email} with instructions to reset your password.`,
          confirmButtonText: "OK",
        }).then(() => {
          // Optional: Redirect to login after confirmation
          window.location.href = "/login";
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed to Send Email",
        text: error.response ? error.response.data.message : 'Network Error',
        confirmButtonText: "OK"
      });
    }
  };

  return (
    <main
      style={{
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
        padding: "80px 20px",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={5} className="bg-white shadow-soft rounded p-4 p-lg-5">
            <div className="text-center mb-4">
              <h3 className="text-dark">Forgot your password?</h3>
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email" className="mb-4">
                <Form.Label className="text-muted">Your Email</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="email"
                    placeholder="example@company.com"
                    className="text-dark"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100 btn-dark-blue mb-3">
                Recover Password
              </Button>
            </Form>
            <div className="text-center mt-4">
              <span className="text-muted">
                Back to {" "}
                <Card.Link as={Link} to="/login" className="text-primary fw-bold link-hover">
                  Login
                </Card.Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default ForgotPassword;
