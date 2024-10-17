import React from "react";
import "../../styles/whychoose.css"
import { Container, Row, Col } from "react-bootstrap";
import image1 from "../../assets/whychoose/1.png";
import image2 from "../../assets/whychoose/2.png";

const whychoose = () => {
  return (
    <Container id="chhoseus">
      <Row className="pt-5 pb-5">
        <Col lg={6} md={12}>
          <img src={image1} className="why-img1" />
        </Col>
        <Col lg={6} md={12} >
          <h2>Why Choose US</h2>
          <h4 className="pt-4">Mission</h4>
          <p className="mt-4">
            To foster a work environment that encourages continuous learning,
            personal development, team cohesion, and creativity, enabling us to
            tackle challenges and achieve our goals.
          </p>
          <h4 className="pt-4">Vision</h4>
          <p className="mt-4">Growing towards success with each passing day.</p>
          <div id="why-us">
            <span className="subheading">Why Choose US</span>
            <div className="why-points ">
              <Row>
                <Col lg={6} md={12} className="d-flex why">
                  <img src={image2} />
                  <p>
                    We GU Datalogic for our commitment to delivering innovative,
                    tailored technology solutions that drive your business
                    forward.
                  </p>
                </Col>
                <Col lg={6} md={12} className="d-flex why">
                  <img src={image2} />
                  <p>
                    We GU Datalogic for our commitment to delivering innovative,
                    tailored technology solutions that drive your business
                    forward.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={12} className="d-flex why">
                  <img src={image2} />
                  <p>
                    We GU Datalogic for our commitment to delivering innovative,
                    tailored technology solutions that drive your business
                    forward.
                  </p>
                </Col>
                <Col lg={6} md={12} className="d-flex why">
                  <img src={image2} />
                  <p>
                    We GU Datalogic for our commitment to delivering innovative,
                    tailored technology solutions that drive your business
                    forward.
                  </p>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default whychoose;
