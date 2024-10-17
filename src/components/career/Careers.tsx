import { Row, Col, Container } from "react-bootstrap";
import CareerLeft from '../../assets/career/careerLeftImage.png'
import Image4 from "../../assets/banner/cta.svg";

const Careers = () => {

    return (
        <div>
            <Container>
                <Row className="m-4 pt-4">
                    <Col>
                        <img src={CareerLeft} alt="" className="careerImg"/>
                    </Col>
                    <Col>
                        <Row className="d-flex gap10">
                            <Col lg={12} className="d-flex align-items-center">
                                <div>
                                    <h5 className="size18 Mid-blue manropeMedium">Careers at GU Datalogic</h5>
                                </div>
                                <span className="line">
                                </span>
                            </Col>
                            <Col lg={12}>
                                <h2 className="manropeMedium">Delight is our business. Together, we can make it yours.</h2>
                            </Col>
                            <Col lg={12}>
                                <p className="manropeRegular">Our platform strengthens customer relationships and fosters employee happiness. We focus on creating seamless interactions and enhancing satisfaction at every touchpoint, driven by the belief that happy teams create loyal, satisfied customers.</p>
                            </Col>
                            <Col lg={12}>
                                <button type="button" className="btn">Explore Our Jobs <img src={Image4} alt="" /></button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Careers
