import React from "react";
import { Navbar } from "react-bootstrap";
import "../../../styles/Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Image1 from "../../../assets/header/logo.svg";

import Image2 from "../../../assets/header/8.svg";
import Image3 from "../../../assets/header/7.svg";
import Image4 from "../../../assets/header/cta-2.svg";

const headertwo = () => {
  return (
    <div className="header">
      <Navbar expand="lg" className="bg-body-tertiary p-0">
        <Container fluid id="nav-second">
          <Container className="d-flex justify-content-between">
            <Navbar className="navLeft">
              <div className="social-icons d-flex justify-content-around ">
                <div className="p-2">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Image1} alt="Facebook" />
                  </a>
                </div>
              </div>
            </Navbar>
            <Navbar id="search-section" className="col-lg-6">
              <div className="search d-flex justify-content-between align-items-center">
                <p className="mb-0 p-2">What do you want to search?</p>
                <div className="search-icon  d-flex justify-content-center align-items-center m-2">
                  <img
                    src={Image2}
                    alt="Instagram"
                    className=" "
                    width={14}
                    height={14}
                  />
                </div>
              </div>
            </Navbar>

            <Navbar className="navRight justify-content-end">
              <Nav className="col-lg-12 d-flex align-items-center">
                <div className="cta-img">
                  <img src={Image3} alt="Instagram" className="p-2 " />
                </div>
                <div className="cta-1">
                  <p className="mb-0">Get a Free Enquiry</p>
                  <a href="tel:+91-7669100251"> +91-7669 100 251</a>
                </div>
                <div id="cta-2" className="cta-2 d-flex p-2 ms-2 me-2">
                  <p className="mb-0">Get a Quote</p>
                  <img src={Image4} alt="Instagram" className="p-2  cta-2-icon" />
                </div>
              </Nav>
              
            </Navbar>
          </Container>
        </Container>
      </Navbar>
    </div>
  );
};

export default headertwo;
