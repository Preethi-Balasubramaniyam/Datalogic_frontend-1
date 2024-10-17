import React from "react";
import "../../styles/cta.css";
import { Container, Row, Col } from "react-bootstrap";
import image1 from "../../assets/cta/1.svg";
const cta = () => {
  return (
    <Container fluid id="cta">
      <Row className=" d-flex flex-column justify-content-center align-items-center mt-5 mb-5">
        <Col
          lg={8}
          md={10}
          className="d-flex   justify-content-around last-cta p-0"
        >
             <Col
          lg={8}
          md={12}
          className="ps-5 pt-2 pb-2 align-content-center"
         
        >
          <div className="align-content-center">
            <h4>NEED HELP WITH SERVICE ?</h4>
            <p>
              We are available all days of the week from <br></br>
              10am to 6pm
            </p>
            <div
              id="cta-3"
              className="cta-3 d-flex justify-content-center p-2 FF"
            >
              <p className="mb-0">+91-7669 100 251</p>
            </div>
          </div>
          </Col>
          <Col
          lg={4}
          md={12}
      
        >
          <div className="d-flex justify-content-center">
            <img src={image1}  className="cta-width pt-4"/>
          </div>
        </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default cta;
