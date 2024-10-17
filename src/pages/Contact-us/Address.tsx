import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Image4 from "../../assets/banner/cta.svg";
import Email from "../../assets/contactUs/Email.png";
import Location from "../../assets/contactUs/Location.png";
import Telephone from "../../assets/contactUs/Telephone.png";
import "../../styles/banner2.css";

const Address = () => {
  return (
    <div className="address">
      <Container fluid>
        <Container>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <Row className="g-3">
                <Col lg={10}>
                  <h2 className="manropeMedium">
                    Don’t hesitate to reach out with any inquiries
                  </h2>
                </Col>
                <Col lg={10}>
                  <p className="manropeRegular text-black">
                    We're here to provide the information and support you need.
                    Don’t hesitate to reach out with any inquiries—our team is
                    ready to assist you. Let’s connect and explore how we can
                    work together.
                  </p>
                </Col>
                <Col lg={10}>
                  <Row>
                    <Col lg={10} style={{display:"-webkit-inline-box"}}>
                      <div className="icon">
                        <img src={Location} alt="" />
                      </div>
                      <div>
                        <h5 className="manropeMedium size16">Our Location</h5>
                        <p className="manropeRegular dark-gray size14">
                          Plot No. 33 & 34, Bidadi Industrial Area, Ramanagara  District,
                          Bidadi, Bangalore - 562109, Karnataka, India
                        </p>
                      </div>
                    </Col>
                    <Col lg={12} className="d-flex ">
                      <div className="icon">
                        <img src={Telephone} alt="" />
                      </div>
                      <div>
                        <h5 className="manropeMedium size16">Phone</h5>
                        <p className="manropeRegular dark-gray size14">
                          +91 (0)80-40823100
                        </p>
                      </div>
                    </Col>
                    <Col lg={12} className="d-flex ">
                      <div className="icon">
                        <img src={Email} alt="" />
                      </div>
                      <div>
                        <h5 className="manropeMedium size16">Mail</h5>
                        <p className="manropeRegular dark-gray size14">
                          gudatalogic@gmail.com
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <Col id="career" lg={10} md={12} className="career-form">
                <p className="text-white size24 manropeMedium">Send Us Message</p>
                <Form>
                  <Form.Group controlId="formName" className="pt-3 pb-2">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" />
                  </Form.Group>

                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="formEmail" className="pt-3 pb-2">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group controlId="formPhone" className="pt-3 pb-2">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="tel" placeholder="Phone number" />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group controlId="formLocation" className="pt-3 pb-2">
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
                        Type of your interest
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
      </Container>
    </div>
  );
};

export default Address;
