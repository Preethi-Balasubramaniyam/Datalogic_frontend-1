import React from 'react'
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "../../styles/keyfeatures.css";

import Image4 from "../../assets/banner/cta.svg";
const contact = () => {
  return (
    <div className="keyfeatures-container pt-5 pb-5">
    <Container>
      <Row>
        

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
  )
}

export default contact
