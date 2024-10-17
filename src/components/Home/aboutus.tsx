import React from "react";
import "../../styles/aboutus.css";
import { Container, Row, Col } from "react-bootstrap";
import Image1 from "../../assets/aboutus/1.png";
import Image2 from "../../assets/aboutus/2.png";
import Image3 from "../../assets/aboutus/3.png";

const aboutus = () => {
  return (
    <Container fluid id="aboutus">
      <Container>
        <Row className="pt-5 pb-5">
          <Col lg={6} md={12}>
            <div className="parent">
              <img className="image1" src={Image1} />
              <img className="image3" src={Image3} />
              
              <img className="image2" src={Image2} />
            </div>
          </Col>

          <Col lg={6} md={12} className="about">
            <span className="subheading">About us</span>
            <h2>Welcome To GU Datalogic</h2>
            <p className="mt-4">
              Welcome to GU Datalogic, a forward-thinking company dedicated to
              providing cutting-edge technology solutions that drive innovation
              and growth in today’s fast-paced digital world.
            </p>
            <p className="mt-4">
              Founded with a vision to deliver excellence, GU Datalogic
              specializes in a wide array of services, including custom software
              development, web and mobile application development, cloud
              services, cybersecurity, AI and machine learning, IoT solutions,
              and blockchain technology.
            </p>
            <p className="mt-4">
              Our solutions are meticulously designed to empower businesses
              across various industries, enabling them to harness the power of
              technology to achieve their strategic goals and stay ahead of the
              competition.
            </p>
            <p className="mt-4">
              At GU Datalogic, our commitment to quality, innovation, and
              customer satisfaction is at the core of everything we do.
            </p>
            <p className="mt-4">
              Founded with a vision to deliver excellence, GU Datalogic
              specializes in a wide array of services, including custom software
              development, web and mobile application development, cloud
              services, cybersecurity, AI and machine learning, IoT solutions,
              and blockchain technology.
            </p>
            <p className="mt-4">
              Our solutions are meticulously designed to empower businesses
              across various industries, enabling them to harness the power of
              technology to achieve their strategic goals and stay ahead of the
              competition.
            </p>
            <p className="mt-4">
              At GU Datalogic, our commitment to quality, innovation, and
              customer satisfaction is at the core of everything we do.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default aboutus;
