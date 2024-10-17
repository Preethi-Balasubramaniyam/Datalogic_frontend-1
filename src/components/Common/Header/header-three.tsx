import  { useState } from "react";
import { Navbar, Offcanvas } from "react-bootstrap";
import "../../../styles/Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import dropdownIcon from "../../../assets/header/11.svg";
import close from "../../../assets/header/12.svg";

const HeaderThree = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSoftwareDropdownOpen, setIsSoftwareDropdownOpen] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false); // State for off-canvas

  const handleToggleDropdown = (
    isOpen: boolean | ((prevState: boolean) => boolean)
  ) => {
    setIsDropdownOpen(isOpen);
  };

  const handleSoftwareToggleDropdown = (
    isOpen: boolean | ((prevState: boolean) => boolean)
  ) => {
    setIsSoftwareDropdownOpen(isOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const closeSoftwareDropdown = () => {
    setIsSoftwareDropdownOpen(false);
  };

  const toggleOffcanvas = () => setShowOffcanvas(!showOffcanvas);

  return (
    <div className="header">
      <Navbar expand="lg" className="bg-body-tertiary p-0">
        <Container fluid id="nav-three">
          <Container>
           
            <Navbar.Toggle
              aria-controls="offcanvasNavbar"
              onClick={toggleOffcanvas}
            />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
              show={showOffcanvas}
              onHide={toggleOffcanvas}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="me-auto">
                  <Nav.Item className="nav-item ps-3 pe-3">
                    <Nav.Link eventKey="1" href="/">
                      Home
                    </Nav.Link>
                  </Nav.Item>

                  {/* Mega menu for Services */}
                  <NavDropdown
                    title={
                      <span>
                        Services
                        <img
                          src={dropdownIcon}
                          alt="Dropdown"
                          className={`dropdown-toggle-icon p-2 ${
                            isDropdownOpen ? "rotate-icon" : ""
                          }`}
                        />
                      </span>
                    }
                    id="services-megamenu"
                    className="nav-item ps-3 pe-3 services"
                    menuVariant="light"
                    onToggle={handleToggleDropdown}
                    show={isDropdownOpen}
                  >
                    <div className="megamenu-services">
                      <button
                        className="close-button"
                        onClick={closeDropdown}
                        aria-label="Close"
                      >
                        <img src={close} alt="" />
                      </button>
                      <Container>
                        <Row>
                          <NavDropdown.Header>All Services</NavDropdown.Header>
                        </Row>
                        <Row>
                          <Col>
                            <NavDropdown.Item
                              href="/services/software-development"
                              eventKey="2.1"
                            >
                              Software Development
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              href="/services/data-services"
                              eventKey="2.2"
                            >
                              Data Services
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              href="/services/digital-platform-services"
                              eventKey="2.3"
                            >
                              Digital Platform Services
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              href="/services/cloud-services"
                              eventKey="2.4"
                            >
                              Cloud Services
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              href="/services/security-services"
                              eventKey="2.5"
                            >
                              Security Services
                            </NavDropdown.Item>
                          </Col>
                          <Col>
                            <NavDropdown.Item
                              href="/services/ai-machine-learning"
                              eventKey="2.6"
                            >
                              AI and Machine Learning
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              href="/services/iot"
                              eventKey="2.7"
                            >
                              IoT (Internet of Things)
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              href="/services/cloud-solutions"
                              eventKey="2.8"
                            >
                              Cloud Solutions
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              href="/services/software-architecture"
                              eventKey="2.9"
                            >
                              Software Architecture
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              href="/services/blockchain-solutions"
                              eventKey="2.10"
                            >
                              Blockchain Solutions
                            </NavDropdown.Item>
                          </Col>
                          <Col>
                            <NavDropdown.Item
                              href="/services/technical-support"
                              eventKey="2.11"
                            >
                              Technical Support
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              href="/services/it-management"
                              eventKey="2.12"
                            >
                              IT Management
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              href="/services/cybersecurity"
                              eventKey="2.13"
                            >
                              Cybersecurity
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              href="/services/devops"
                              eventKey="2.14"
                            >
                              DevOps
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              href="/services/network-infrastructure"
                              eventKey="2.15"
                            >
                              Network Infrastructure
                            </NavDropdown.Item>
                          </Col>
                          <Col>
                            <NavDropdown.Item
                              href="/services/ai-ml-integration"
                              eventKey="2.16"
                            >
                              AI & ML Integration
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              href="/services/data-analytics"
                              eventKey="2.17"
                            >
                              Data Analytics
                            </NavDropdown.Item>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </NavDropdown>

                  {/* Dropdown for Software Training */}
                  <NavDropdown
                    title={
                      <span>
                        Software Training
                        <img
                          src={dropdownIcon}
                          alt="Dropdown"
                          className={`dropdown-toggle-icon p-2 ${
                            isSoftwareDropdownOpen ? "rotate-icon" : ""
                          }`}
                        />
                      </span>
                    }
                    id="software-training-dropdown"
                    className="nav-item ps-3 pe-3 services"
                    menuVariant="light"
                    onToggle={handleSoftwareToggleDropdown}
                    show={isSoftwareDropdownOpen}
                  >
                    <div className="megamenu-services">
                      <button
                        className="close-button"
                        onClick={closeSoftwareDropdown}
                        aria-label="Close"
                      >
                        <img src={close} alt="" />
                      </button>
                      <Container>
                        <Row>
                          <Col>
                            <NavDropdown.Header>Frontend</NavDropdown.Header>
                            <NavDropdown.Item
                              href="/training/react"
                              eventKey="3.1"
                            >
                              React
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              href="/training/angular"
                              eventKey="3.2"
                            >
                              Angular
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              href="/training/vue"
                              eventKey="3.3"
                            >
                              Vue.js
                            </NavDropdown.Item>
                          </Col>
                          <Col>
                            <NavDropdown.Header>Backend</NavDropdown.Header>
                            <NavDropdown.Item
                              href="/training/nodejs"
                              eventKey="3.4"
                            >
                              Node.js
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              href="/training/python-django"
                              eventKey="3.5"
                            >
                              Python (Django)
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              href="/training/java-spring"
                              eventKey="3.6"
                            >
                              Java (Spring Boot)
                            </NavDropdown.Item>
                          </Col>
                          <Col>
                            <NavDropdown.Header>Full Stack</NavDropdown.Header>
                            <NavDropdown.Item
                              href="/training/mern-stack"
                              eventKey="3.7"
                            >
                              MERN Stack
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              href="/training/mean-stack"
                              eventKey="3.8"
                            >
                              MEAN Stack
                            </NavDropdown.Item>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </NavDropdown>

                  <Nav.Item className="nav-item ps-3 pe-3">
                    <Nav.Link eventKey="4" href="/career" title="Item">
                      Careers
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item ps-3 pe-3">
                    <Nav.Link eventKey="5" href="/contact-us" title="Item">
                      Contact Us
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderThree;
