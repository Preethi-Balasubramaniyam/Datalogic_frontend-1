import { Row, Col, Container } from "react-bootstrap";
import CareerLeft from '../../assets/career/careerRight.png'
import Image4 from "../../assets/banner/cta.svg";

const Work = () => {
  return (
    <div>
    <Container>
        <Row className="m-4 pt-5">

            <Col>
                <Row className="d-flex gap10">
                    <Col lg={12} className="d-flex align-items-center">
                        <div>
                            <h5 className="size18 Mid-blue manropeMedium">Works at GU Datalogic</h5>
                        </div>
                        <span className="line">
                        </span>
                    </Col>
                    <Col lg={12} className="d-flex align-items-center">
                            <h2 className="manropeMedium">What we value at work</h2>                        
                    </Col>
                    <Col lg={12}>
                    <div className="HappyDiv">
                      <h4 className="manropeSemiBold size18 Mid-blue">Happy environment</h4>
                      <p className="manropeRegular size14">A happy environment fuels positivity, innovation, and teamwork. When employees feel supported and valued, their productivity and satisfaction soar. In turn, this leads to stronger results and a thriving company culture.</p>
                    </div>
                    </Col>
                    <Col lg={12}>
                      <h6 className="manropeMedium my-3">Agility with accountability</h6>
                      <h6 className="manropeMedium my-3">True friend of the customer</h6>
                      <h6 className="manropeMedium my-3">Be a lifelong learner</h6>
                    </Col>
                   
                </Row>
            </Col>
            <Col>
                <img src={CareerLeft} alt="" className="careerImg"/>
            </Col>
        </Row>
    </Container>
</div>
  )
}

export default Work
