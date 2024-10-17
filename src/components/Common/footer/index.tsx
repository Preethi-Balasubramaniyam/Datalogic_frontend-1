import React from "react";
import "../../../styles/footer.css";
import { Container, Row, Col } from "react-bootstrap";
import Image1 from "../../../assets/header/5.svg";
import Image2 from "../../../assets/header/2.svg";
import Image3 from "../../../assets/header/3.svg";
import Image4 from "../../../assets/header/4.svg";
import Image5 from "../../../assets/header/1.svg";
import Imagelogo from "../../../assets/footer/white-logo.png";
import image6 from "../../../assets/footer/1.png";
import image7 from "../../../assets/footer/2.png";
import image8 from "../../../assets/footer/3.png";
import Image9 from "../../../assets/banner/cta.svg";

const Footer = () => {
  return (
    <>
      <Container fluid id="footer" className=" text-white py-4">
      <Container className="pt-2 pb-2">
        <Row>
          {/* Column 1: Logo */}
          <Col md={3} className="mb-3 align-content-center">
            <img src={Imagelogo} alt="Facebook" />
          </Col>

          {/* Column 2: Quick Links */}
          <Col md={3} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled pt-2">
              <li className="mb-3">
                <a href="#home" className="text-blue">
                  <img src={image6} /> Services
                </a>
              </li>
              <li className="mb-3">
                <a href="#about" className="text-blue">
                  <img src={image6} /> Software Training
                </a>
              </li>
              <li className="mb-3">
                <a href="#services" className="text-blue ">
                  <img src={image6} /> Careers
                </a>
              </li>
              <li className="mb-3">
                <a href="#contact" className="text-blue ">
                  <img src={image6} /> Contact Us
                </a>
              </li>
            </ul>
          </Col>

          {/* Column 3: Contact */}
          <Col md={3} className="mb-3">
            <h5>Contact</h5>
            <div className="pt-2 mb-3">
              <img src={image7} className="pe-2" /> info@example.com
            </div>
            <div className="pt-2 mb-3">
              <img src={image8} className="pe-2" /> +123 456 7890
            </div>
            <div id="cta-2" className="cta-3 d-flex mt-4 p-2 ps-2 me-2" >
                  <p className="mb-0 align-content-center">Get a Quote</p>
                  <img src={Image9} alt="Instagram" className=" cta-2-icon" />
                </div>
          </Col>

          {/* Column 4: Address and Social Icons */}
          <Col md={3} className="mb-3">
            <h5>Address</h5>
            <p>4th Floor, 14 Aldermanbury Square, London EC2V 7HS.</p>
            <p>Company Number: 103548</p>
            <h5>Follow Us</h5>
            <div className="social-icons d-flex  ">
              <div className="ps-2 pe-2">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Image1} alt="Facebook" />
                </a>
              </div>
              <div className="ps-2 pe-2">
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Image2} alt="Twitter" />
                </a>
              </div>
              <div className="ps-2 pe-2">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Image3} alt="Instagram" />
                </a>
              </div>
              <div className="ps-2 pe-2">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Image4} alt="Instagram" />
                </a>
              </div>
              <div className="ps-2 pe-2">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Image5} alt="Instagram" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
        </Container>
      </Container>
      <Container fluid id="copyrights-footer">
        <Container className="pt-2 pb-2">
          <Row className=" d-flex justify-content-between">
            <Col md={3} className="text-white">
              © 2024 GU Datalogic. All rights reserved.
            </Col>
            <Col md={3} className="d-flex  ">
              <div className="pe-4 text-white">Legal</div>
              <div className="text-white">Privacy and Cookie Policy</div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Footer;
