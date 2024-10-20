import { Breadcrumb, Col, Container } from "react-bootstrap";
import "../../styles/banner2.css";

type Props = {
  title: string;
  breadcrumb?: string;
};


const Banner = ({ title, breadcrumb }: Props) => {
  return (
    <div className="breadcrumb-bg pt-5">
      <Container>
        <Breadcrumb className="d-flex flex-column">
          <Col>
            <h2 className="text-white">{title}</h2>
          </Col>
          <Col className="brdcrumb">
            <Breadcrumb.Item href="/" className="text-white">
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item active className="text-white">
              Careers
            </Breadcrumb.Item>
            {breadcrumb !== "" ? (
              <Breadcrumb.Item active className="text-white">
                {breadcrumb}
              </Breadcrumb.Item>
            ) : null}
          </Col>
        </Breadcrumb>
      </Container>
    </div>
  );
};

export default Banner;
