import { Row, Col, Container } from "react-bootstrap";
import Image4 from "../../assets/banner/cta.svg";

const JobDetails = () => {
  return (
    <div id="careers">
      <Container>
            <Row className="m-4 pt-4">
                    <Col>
                        <div>
                            <h2 className="manropeMedium">Job Description</h2>
                        </div>
                        <div>
                            <ul className="manropeLight size14">
                                <li>Provide voice-based support to international/domestic customers over the phone (Inbound and Outbound).</li>
                                <li>Build a rapport with customers with clear and confident communication.</li>
                                <li>Focus on customer satisfaction and first-time-resolution.</li>
                                <li>Engage with the technical team to provide faster resolutions to technical issues.</li>
                                <li>Work closely with the technical content team to identify gaps in the help module.</li>
                                <li>Should be willing to work night shifts.</li>
                                <li>Engage with the technical team to provide faster resolutions to technical issues.</li>
                                <li>Work closely with the technical content team to identify gaps in the help module.</li>
                                <li>Should be willing to work night shifts.</li>
                             </ul>
                        </div>
                    </Col>
                    <Col>
                        <div className='fileupload'>
                            <h5 className="manropeMedium text-white">Upload Your Resume</h5>

                            <div className='fileDiv'>
                                    <div className='d-flex'>
                                    <input type="file" name="" id="" />
                                    <button>Browse</button>
                                    </div>
                                <p className="manropeRegular size12">Only .doc, .docx, .pdf.</p>

                            </div>
                        </div>
                        <div>
                            <button className='btn '>Submit Application <img src={Image4} alt="" /></button>
                        </div>
                    </Col>
            </Row>
      </Container>
    </div>
  )
}

export default JobDetails
