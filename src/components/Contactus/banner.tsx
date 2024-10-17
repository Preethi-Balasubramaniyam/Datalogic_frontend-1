import { Breadcrumb, Col, Container } from "react-bootstrap";
import "../../styles/banner2.css";
const banner = () => {
  return (
    <div className="breadcrumb-bg pt-5">
      <Container>
        <Breadcrumb className="d-flex flex-column">
          <Col>
            <h2 className="text-white">Contact Us</h2>
          </Col>
          <Col className="brdcrumb">
            <Breadcrumb.Item href="/" className="text-white">
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item active className="text-white">
              Contact Us
            </Breadcrumb.Item>
          </Col>
        </Breadcrumb>
      </Container>
    </div>
  );
};

export default banner;
