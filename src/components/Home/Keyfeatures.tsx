import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "../../styles/keyfeatures.css";
import icon1 from "../../assets/features/1.svg";
import icon2 from "../../assets/features/2.svg";
import icon3 from "../../assets/features/3.svg";
import icon4 from "../../assets/features/4.svg";
import Image4 from "../../assets/banner/cta.svg";

const Keyfeatures = () => {
  return (
    <div className="keyfeatures-container pt-5 pb-5">
      <Container>
        <Row>
          <Col lg={6} md={12}>
            <span className="subheading">Features</span>
            <h2>Key Features of GU Datalogic</h2>
            <p className="mt-4">
              A software company builds innovative, user-friendly solutions
              using cutting-edge technology to meet business needs. We focus on
              quality, agility, and custom software development to drive
              efficiency and growth.
            </p>
            <Row >
              <Col md={6}>
                <Card className="mb-4">
                  <Card.Body className="card1 pt-3 pb-3">
                    <img src={icon1}></img>
                    <Card.Title>Fast Responsive to Request</Card.Title>
                    <Card.Text>
                      Swift responses ensure prompt, efficient service.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="mb-4">
                  <Card.Body className="card2 pt-3 pb-3">
                    <img src={icon2}></img>

                    <Card.Title>Customer Satification</Card.Title>
                    <Card.Text>
                      We focus on delivering quality for customer satisfaction.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Card className="mb-4">
                  <Card.Body className="card3 pt-3 pb-3">
                    <img src={icon3}></img>

                    <Card.Title>Committed to Quality</Card.Title>
                    <Card.Text>
                      We are dedicated to delivering top-quality results.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="mb-4">
                  <Card.Body className="card4 pt-3 pb-3">
                    <img src={icon4}></img>

                    <Card.Title>Our Expert Team</Card.Title>
                    <Card.Text>
                      Our team expert delivers innovative solutions with skill
                      and precision
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>

          <Col lg={6} md={12} className="d-flex justify-content-center">
            <Col id="career" lg={10} md={12} className="career-form">
              <h4 className="text-white">Course Enquiry for Free</h4>
              <p className="text-white">Fill out the form below, and we’ll get back to you shortly.</p>
              <Form>
                <Form.Group controlId="formName" className="pt-3 pb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formEmail" className="pt-3 pb-3">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group controlId="formPhone" className="pt-3 pb-3">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type="tel" placeholder="Phone number" />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group controlId="formLocation" className="pt-3 pb-3">
                  <Form.Label>Location</Form.Label>
                  <Form.Control type="text" placeholder="Location" />
                </Form.Group>

                <Form.Group
                  controlId="formTypeOfInterest"
                  className="pt-3 pb-3"
                >
                  <Form.Label>Type of Interest</Form.Label>
                  <Form.Select defaultValue="">
                    <option value="" disabled>
                      Select your interest
                    </option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group controlId="formMessage" className="pt-3 pb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    placeholder="Your message"
                  />
                </Form.Group>

                <div className="d-flex justify-content-center">
                  <Button
                    variant="primary"
                    type="submit"
                    className="career-btn mt-3"
                  >
                    Submit{" "}
                    <img
                      src={Image4}
                      alt="Instagram"
                      className=" cta1-img "
                      width={10}
                      height={10}
                    />
                  </Button>
                </div>
              </Form>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Keyfeatures;
