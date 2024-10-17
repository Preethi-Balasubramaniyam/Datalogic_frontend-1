import { Breadcrumb, Col, Container } from "react-bootstrap";
import "../../styles/banner2.css";

const Banner = () => {
  return (
    <div className="breadcrumb-bg pt-5">
    <Container>
      <Breadcrumb className="d-flex flex-column">
        <Col>
          <h2 className="text-white">Careers</h2>
        </Col>
        <Col className="brdcrumb">
          <Breadcrumb.Item href="/" className="text-white">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="text-white">
            Careers
          </Breadcrumb.Item>
        </Col>
      </Breadcrumb>
    </Container>
  </div>
  )
}

export default Banner
