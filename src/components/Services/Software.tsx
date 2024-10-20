import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Image1 from "../../assets/software/1.png";
const Software = () => {
  return (
    <Container fluid id="service-section-2" className="py-5">
      <Container className="py-5">
        <Tab.Container id="service-tabs" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link
                    eventKey="first"
                    className="d-flex align-items-center"
                  >
                    <h3 className="mb-0 pe-2">01</h3>Custom Software Development
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="second"
                    className="d-flex align-items-center"
                  >
                    <h3 className="mb-0 pe-2">02</h3>Mobile App Development
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="third"
                    className="d-flex align-items-center"
                  >
                    <h3 className="mb-0 pe-2">03</h3>Web Application Development
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="fourth"
                    className="d-flex align-items-center"
                  >
                    <h3 className="mb-0 pe-2">04</h3>Enterprise Software
                    Development
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="fifth"
                    className="d-flex align-items-center"
                  >
                    <h3 className="mb-0 pe-2">05</h3>SaaS Development
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="sixth"
                    className="d-flex align-items-center"
                  >
                    <h3 className="mb-0 pe-2">06</h3>API Development &
                    Integration
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row className="my-4 justify-content-center align-items-center">
                    <Col md={4}>
                      <img src={Image1} />
                    </Col>
                    <Col md={6}>
                      <h4>Tailored Solutions for Specific Needs</h4>
                      <p>
                        Custom software development involves designing and
                        building software tailored to meet specific business
                        requirements. This contrasts with off-the-shelf
                        software, which is designed for a broad audience. Custom
                        solutions ensure that unique operational needs are met
                        efficiently.
                      </p>
                    </Col>
                  </Row>
                  <Row className="my-4 justify-content-center align-items-center">
                    <Col lg={10}>
                      <h4>Enhanced Flexibility and Scalability</h4>
                      <p>
                        One of the key advantages of custom software is its
                        ability to scale as your business grows. Custom
                        solutions can be expanded with new features or modules,
                        allowing for future development and adaptability without
                        being constrained by the limitations of pre-built
                        software.
                      </p>
                    </Col>
                    <Col lg={10}>
                      <h4>Improved Efficiency and Integration</h4>
                      <p>
                        Custom software can be designed to integrate seamlessly
                        with existing systems, improving efficiency. It reduces
                        the need for multiple platforms and minimizes the risk
                        of errors or delays caused by the lack of system
                        interoperability.
                      </p>

                      <p>
                        With custom software, you have greater control over the
                        security protocols and can implement specific measures
                        to protect sensitive data. This is particularly
                        important for businesses handling confidential
                        information, where off-the-shelf software may not
                        provide adequate protection.
                      </p>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row className="my-4 justify-content-center align-items-center">
                    <Col md={4}>
                      <img src={Image1} />
                    </Col>
                    <Col md={6}>
                      <h4>Tailored Solutions for Specific Needs</h4>
                      <p>
                        Custom software development involves designing and
                        building software tailored to meet specific business
                        requirements. This contrasts with off-the-shelf
                        software, which is designed for a broad audience. Custom
                        solutions ensure that unique operational needs are met
                        efficiently.
                      </p>
                    </Col>
                  </Row>
                  <Row className="my-4 justify-content-center align-items-center">
                    <Col lg={10}>
                      <h4>Enhanced Flexibility and Scalability</h4>
                      <p>
                        One of the key advantages of custom software is its
                        ability to scale as your business grows. Custom
                        solutions can be expanded with new features or modules,
                        allowing for future development and adaptability without
                        being constrained by the limitations of pre-built
                        software.
                      </p>
                    </Col>
                    <Col lg={10}>
                      <h4>Improved Efficiency and Integration</h4>
                      <p>
                        Custom software can be designed to integrate seamlessly
                        with existing systems, improving efficiency. It reduces
                        the need for multiple platforms and minimizes the risk
                        of errors or delays caused by the lack of system
                        interoperability.
                      </p>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row className="my-4 justify-content-center align-items-center">
                    <Col md={4}>
                      <img src={Image1} />
                    </Col>
                    <Col md={6}>
                      <h4>Tailored Solutions for Specific Needs</h4>
                      <p>
                        Custom software development involves designing and
                        building software tailored to meet specific business
                        requirements. This contrasts with off-the-shelf
                        software, which is designed for a broad audience. Custom
                        solutions ensure that unique operational needs are met
                        efficiently.
                      </p>
                    </Col>
                  </Row>
                  <Row className="my-4 justify-content-center align-items-center">
                    <Col lg={10}>
                      <h4>Enhanced Flexibility and Scalability</h4>
                      <p>
                        One of the key advantages of custom software is its
                        ability to scale as your business grows. Custom
                        solutions can be expanded with new features or modules,
                        allowing for future development and adaptability without
                        being constrained by the limitations of pre-built
                        software.
                      </p>
                    </Col>
                    <Col lg={10}>
                      <h4>Improved Efficiency and Integration</h4>
                      <p>
                        Custom software can be designed to integrate seamlessly
                        with existing systems, improving efficiency. It reduces
                        the need for multiple platforms and minimizes the risk
                        of errors or delays caused by the lack of system
                        interoperability.
                      </p>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <Row className="my-4 justify-content-center align-items-center">
                    <Col md={4}>
                      <img src={Image1} />
                    </Col>
                    <Col md={6}>
                      <h4>Tailored Solutions for Specific Needs</h4>
                      <p>
                        Custom software development involves designing and
                        building software tailored to meet specific business
                        requirements. This contrasts with off-the-shelf
                        software, which is designed for a broad audience. Custom
                        solutions ensure that unique operational needs are met
                        efficiently.
                      </p>
                    </Col>
                  </Row>
                  <Row className="my-4 justify-content-center align-items-center">
                    <Col lg={10}>
                      <h4>Enhanced Flexibility and Scalability</h4>
                      <p>
                        One of the key advantages of custom software is its
                        ability to scale as your business grows. Custom
                        solutions can be expanded with new features or modules,
                        allowing for future development and adaptability without
                        being constrained by the limitations of pre-built
                        software.
                      </p>
                    </Col>
                    <Col lg={10}>
                      <h4>Improved Efficiency and Integration</h4>
                      <p>
                        Custom software can be designed to integrate seamlessly
                        with existing systems, improving efficiency. It reduces
                        the need for multiple platforms and minimizes the risk
                        of errors or delays caused by the lack of system
                        interoperability.
                      </p>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <Row className="my-4 justify-content-center align-items-center">
                    <Col md={4}>
                      <img src={Image1} />
                    </Col>
                    <Col md={6}>
                      <h4>Tailored Solutions for Specific Needs</h4>
                      <p>
                        Custom software development involves designing and
                        building software tailored to meet specific business
                        requirements. This contrasts with off-the-shelf
                        software, which is designed for a broad audience. Custom
                        solutions ensure that unique operational needs are met
                        efficiently.
                      </p>
                    </Col>
                  </Row>
                  <Row className="my-4 justify-content-center align-items-center">
                    <Col lg={10}>
                      <h4>Enhanced Flexibility and Scalability</h4>
                      <p>
                        One of the key advantages of custom software is its
                        ability to scale as your business grows. Custom
                        solutions can be expanded with new features or modules,
                        allowing for future development and adaptability without
                        being constrained by the limitations of pre-built
                        software.
                      </p>
                    </Col>
                    <Col lg={10}>
                      <h4>Improved Efficiency and Integration</h4>
                      <p>
                        Custom software can be designed to integrate seamlessly
                        with existing systems, improving efficiency. It reduces
                        the need for multiple platforms and minimizes the risk
                        of errors or delays caused by the lack of system
                        interoperability.
                      </p>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="sixth">
                  <Row className="my-4 justify-content-center align-items-center">
                    <Col md={4}>
                      <img src={Image1} />
                    </Col>
                    <Col md={6}>
                      <h4>Tailored Solutions for Specific Needs</h4>
                      <p>
                        Custom software development involves designing and
                        building software tailored to meet specific business
                        requirements. This contrasts with off-the-shelf
                        software, which is designed for a broad audience. Custom
                        solutions ensure that unique operational needs are met
                        efficiently.
                      </p>
                    </Col>
                  </Row>
                  <Row className="my-4 justify-content-center align-items-center">
                    <Col lg={10}>
                      <h4>Enhanced Flexibility and Scalability</h4>
                      <p>
                        One of the key advantages of custom software is its
                        ability to scale as your business grows. Custom
                        solutions can be expanded with new features or modules,
                        allowing for future development and adaptability without
                        being constrained by the limitations of pre-built
                        software.
                      </p>
                    </Col>
                    <Col lg={10}>
                      <h4>Improved Efficiency and Integration</h4>
                      <p>
                        Custom software can be designed to integrate seamlessly
                        with existing systems, improving efficiency. It reduces
                        the need for multiple platforms and minimizes the risk
                        of errors or delays caused by the lack of system
                        interoperability.
                      </p>
                    </Col>
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </Container>
  );
};

export default Software;
