import { Container, Row, Col, Card } from 'react-bootstrap';
import '../../styles/courselisting.css'; // Add your custom styles here
import Image1 from "../../assets/Courses/python.png";
import Image2 from "../../assets/Courses/webdesign.png";
import Image3 from "../../assets/Courses/dot-net.png";
import Image4 from "../../assets/Courses/java.png";
import Image5 from "../../assets/Courses/php.png";
import Image6 from "../../assets/Courses/networking.png";
import Image7 from "../../assets/Courses/android.png";
import Image8 from "../../assets/Courses/bigdata.png";
import Image9 from "../../assets/Courses/cloud.png";
import Image10 from "../../assets/Courses/ethical-hacking.png";
import Image11 from "../../assets/Courses/blockchain.png";
import Image12 from "../../assets/Courses/robotics.png";
import Image13 from "../../assets/Courses/oracle.png";
import Image14 from "../../assets/Courses/c.png";
import Image15 from "../../assets/Courses/rprogramming.png";
import Image16 from "../../assets/Courses/networking.png";
import Image17 from "../../assets/Courses/ai (1).png";
import Image18 from "../../assets/Courses/machine-learning.png";
import Image19 from "../../assets/Courses/sql.png";
import Image20 from "../../assets/Courses/iot.png";
import Image21 from "../../assets/Courses/data-science.png";
import Image22 from "../../assets/Courses/selenium.png";
import Image23 from "../../assets/Courses/cpp.png";
import Image24 from "../../assets/Courses/linux.png";
import Image25 from "../../assets/Courses/embedded.png";
import Image26 from "../../assets/Courses/mean-stack.png";
import Image27 from "../../assets/Courses/mern.png";
import Image28 from "../../assets/Courses/mongodb.png";
import Image29 from "../../assets/Courses/data-analytics.png";
import Image30 from "../../assets/Courses/react.png";
import Image31 from "../../assets/Courses/angular.png";
import Image32 from "../../assets/Courses/data-analysis.png";
import Image33 from "../../assets/Courses/nodejs.png";
import Image34 from "../../assets/Courses/cyber-security.png";
import Image35 from "../../assets/Courses/computer-application.png";
import Image36 from "../../assets/Courses/digital-marketing.png";

// Sample data for courses
const courseData = [
  { id: 1, title: 'Python', lessons: 4, icon: Image1 },
  { id: 2, title: 'Web Design', lessons: 4, icon: Image2 },
  { id: 3, title: '.Net', lessons: 4, icon: Image3 },
  { id: 4, title: 'Java', lessons: 4, icon: Image4 }, 
  { id: 5, title: 'php', lessons: 4, icon: Image5 },
  { id: 6, title: 'Networking', lessons: 4, icon: Image6 },
  { id: 7, title: 'Android', lessons: 4, icon: Image7 },
  { id: 8, title: 'Big Data', lessons: 4, icon: Image8 },
  { id: 9, title: 'Cloud Computing', lessons: 4, icon: Image9 },
  { id: 10, title: 'Ethical Hacking', lessons: 4, icon: Image10 },
  { id: 11, title: 'Block Chain', lessons: 4, icon: Image11 },
  { id: 12, title: 'Robotics', lessons: 4, icon: Image12 }, 
  { id: 13, title: 'Oracle', lessons: 4, icon: Image13 },
  { id: 14, title: 'C', lessons: 4, icon: Image14 },
  { id: 15, title: 'R-Programming', lessons: 4, icon: Image15 },
  { id: 16, title: 'CCNA', lessons: 4, icon: Image16 },
  { id: 17, title: 'Artificial Intelligence', lessons: 4, icon: Image17 },
  { id: 18, title: 'Machine Learning ', lessons: 4, icon: Image18 },
  { id: 19, title: 'SQL Server', lessons: 4, icon: Image19 },
  { id: 20, title: 'IoT', lessons: 4, icon: Image20 }, 
  { id: 21, title: 'Data Sciene', lessons: 4, icon: Image21 },
  { id: 22, title: 'Selenium Testing', lessons: 4, icon: Image22 },
  { id: 23, title: 'C++', lessons: 4, icon: Image23 },
  { id: 24, title: 'Linux', lessons: 4, icon: Image24 },
  { id: 25, title: 'Embedded', lessons: 4, icon: Image25 },
  { id: 26, title: 'Mean Stack', lessons: 4, icon: Image26 },
  { id: 27, title: 'Mern Stack', lessons: 4, icon: Image27 },
  { id: 28, title: 'MongoDB', lessons: 4, icon: Image28 }, 
  { id: 29, title: 'Data Analytics', lessons: 4, icon: Image29 },
  { id: 30, title: 'ReactJS', lessons: 4, icon: Image30 },
  { id: 31, title: 'AngularJS', lessons: 4, icon: Image31 },
  { id: 32, title: 'Data Analysis', lessons: 4, icon: Image32 },
  { id: 33, title: 'Node JS', lessons: 4, icon: Image33 },
  { id: 34, title: 'Cyber Security', lessons: 4, icon: Image34 },
  { id: 35, title: 'Computer Application', lessons: 4, icon: Image35 },
  { id: 36, title: 'Digital Marketing', lessons: 4, icon: Image36 },
];

const CourseListing = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Software Courses</h1>
      <Row>
        {courseData.map((course) => (
          <Col lg={3} md={6} sm={12} key={course.id} className="mb-4">
            <Card className="course-card h-100">
              <Card.Body className="d-flex align-items-center">
                <div className="icon-container me-3">
                <img src={course.icon} alt={course.title} className="course-icon" />
                </div>
                <div className="course-details">
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text>{course.lessons} lessons</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CourseListing;
