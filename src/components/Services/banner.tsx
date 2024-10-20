import { Container } from "react-bootstrap";
import "../../styles/service.css";
import Image9 from "../../assets/banner/cta.svg";

const banner = () => {
  return (
    <Container fluid id="services-banner" className="py-5">
      <div className="my-5 text-white text-center d-flex flex-column align-items-center">
        <h1>Software Development</h1>
        <p className="h5 my-3 service-banner-content">
          Gain a competitive edge with GU Datalogic's agile and reliable
          software solutions, designed to accelerate your digital transformation
          through innovation, scalability, and agility.
        </p>
        <div id="cta-2" className="cta-3 d-flex mt-4 p-2 ps-2 me-2">
          <p className="mb-0 align-content-center">Talk to Our Experts</p>
          <img src={Image9} alt="Instagram" className=" cta-2-icon" />
        </div>
      </div>
    </Container>
  );
};

export default banner;
