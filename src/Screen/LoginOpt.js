import "./LoginOpt.css";  // Make sure to import your CSS file
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function LoginOpt() {
  return (
    <>
      <Navbar />

      <Container fluid className="my-5">
        <Row className="align-items-center">
          <Col md={6} className="card-container">
            <Card className="mb-4 crd">
              <Card.Body>
                <Card.Title className="card-title">DOCTOR</Card.Title>
                <Card.Text>
                  Description for login option 1.
                </Card.Text>
                <Link to="/doctLogin">
                <Button variant="primary">Login</Button>
                </Link>
              </Card.Body>
            </Card>
            
            <Card className="mb-4 crd">
              <Card.Body>
                <Card.Title className="card-title">USER</Card.Title>
                <Card.Text>
                  Description for login option 2.
                </Card.Text>
                <Link to="/userLogin">
                  <Button variant="primary">Login</Button>
                </Link> 
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="d-flex justify-content-center align-items-center">
            <img src="" alt="Description" className="img-fluid" />
            <Button type="submit">Apply for card</Button>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default LoginOpt;