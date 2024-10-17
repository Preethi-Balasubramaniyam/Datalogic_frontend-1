import React from "react";
import { Navbar } from "react-bootstrap";
import "../../../styles/Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Image1 from "../../../assets/header/5.svg";
import Image2 from "../../../assets/header/2.svg";
import Image3 from "../../../assets/header/3.svg";
import Image4 from "../../../assets/header/4.svg";
import Image5 from "../../../assets/header/1.svg";
import Image6 from "../../../assets/header/6.svg";

const Header = () => {
  return (
    <div className="header">
      <Navbar expand="lg" className="bg-body-tertiary p-0">
        <Container fluid id="nav-first">
          <Container className="d-flex justify-content-between">
            <Navbar className="navLeft">
              
                <div className="social-icons d-flex justify-content-around ">
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
              
            </Navbar>

            <Navbar className="navRight justify-content-end">
              <Nav>
                <div className="contact">
                <img src={Image6} alt="Instagram" className=" pe-2" />
                  <a href="mailto:gudatalogic@gmail.com" className="text-white manropeRegular">gudatalogic@gmail.com</a>
                </div>
              </Nav>
            </Navbar>
          </Container>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
