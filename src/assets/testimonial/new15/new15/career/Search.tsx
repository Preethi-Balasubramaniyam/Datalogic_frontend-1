import { Row, Col, Container } from "react-bootstrap";





const Search = () => {
  return (
    <div className="searchjob">
      <Container>
        <Row className="m-4 pt-4">
          <Col lg={12} className="d-flex align-items-center">
            <div>
              <h5 className="size18 Mid-blue manropeMedium">Search Jobs</h5>
            </div>
            <span className="line">
            </span>
          </Col>
          <Col lg={12}>
             <h2 className="manropeMedium">Explore open roles</h2>
          </Col>
        </Row>

        <Row className="m-4 pt-4 searchscroll gap10">
            <Col className="searchScrollCol" lg={4}>
                <div>
                  <h5 className="manropeMedium Mid-blue size18">Technical Support Engineers</h5>
                  <h6 className="manropeRegular size14">Lorem ipsum dolor sit amet, consectetur post adipiscing elit, sed do eiusmod tempor dolor an incididunt.</h6>
                  <p className="manropeRegular size12"><span className="highlight dark-green size12 manropeSemiBold">Type :</span> Full Time</p>
                  <p className="manropeRegular size12"><span className="highlight dark-green size12 manropeSemiBold">Years of Experience:</span>2</p>
                </div>
            
                <div>
                  <p>Posted within last 24 hours</p>
                </div>
            </Col>
            <Col className="searchScrollCol" lg={4}>
            <div>
                  <h5 className="manropeMedium Mid-blue size18">Technical Support Engineers</h5>
                  <h6 className="manropeRegular size14">Lorem ipsum dolor sit amet, consectetur post adipiscing elit, sed do eiusmod tempor dolor an incididunt.</h6>
                  <p className="manropeRegular size12"><span className="highlight dark-green size12 manropeSemiBold">Type :</span> Full Time</p>
                  <p className="manropeRegular size12"><span className="highlight dark-green size12 manropeSemiBold">Years of Experience:</span>2</p>
                </div>
            
                <div>
                  <p>Posted within last 24 hours</p>
                </div>
            </Col>
            <Col className="searchScrollCol" lg={4}>
            <div>
                  <h5 className="manropeMedium Mid-blue size18">Technical Support Engineers</h5>
                  <h6 className="manropeRegular size14">Lorem ipsum dolor sit amet, consectetur post adipiscing elit, sed do eiusmod tempor dolor an incididunt.</h6>
                  <p className="manropeRegular size12"><span className="highlight dark-green size12 manropeSemiBold">Type :</span> Full Time</p>
                  <p className="manropeRegular size12"><span className="highlight dark-green size12 manropeSemiBold">Years of Experience:</span>2</p>
                </div>
            
                <div>
                  <p>Posted within last 24 hours</p>
                </div>
            </Col>
            <Col className="searchScrollCol" lg={4}>
            <div>
                  <h5 className="manropeMedium Mid-blue size18">Technical Support Engineers</h5>
                  <h6 className="manropeRegular size14">Lorem ipsum dolor sit amet, consectetur post adipiscing elit, sed do eiusmod tempor dolor an incididunt.</h6>
                  <p className="manropeRegular size12"><span className="highlight dark-green size12 manropeSemiBold">Type :</span> Full Time</p>
                  <p className="manropeRegular size12"><span className="highlight dark-green size12 manropeSemiBold">Years of Experience:</span>2</p>
                </div>
            
                <div>
                  <p>Posted within last 24 hours</p>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Search
