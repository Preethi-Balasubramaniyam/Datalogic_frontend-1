import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../styles/services.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Service1 from "../../assets/services/1.png";
import Service2 from "../../assets/services/2.png";
import Service3 from "../../assets/services/3.png";
import Image4 from "../../assets/banner/cta.svg";
import PrevArrow from "../../assets/services/prev.svg"; // Add your prev arrow image
import NextArrow from "../../assets/services/next.svg";
import Image5 from "../../assets/services/services.svg";
import { Autoplay} from "swiper/modules";

const servicesData = [
  {
    image: Service1,
    title: "Software Development",
    description:
      "Software development designs, builds, and maintains custom applications, ensuring performance, scalability, and security.",
    keyPoints: [
      "Custom Software Development",
      "Mobile App Development (iOS, Android, Cross-platform)",
      "Web Application Development",
      "Enterprise Software Development (ERP, CRM, SCM)",
      "SaaS Development",
    ],
    link: "/service-1", // Link for Service 1
  },
  {
    image: Service2,
    title: "DATA SERVICES",
    description:
      "This is the first line of description for Service 2.\nThis is the second line of the description.",
    keyPoints: [
      "Key point 1 for Service 2",
      "Key point 2 for Service 2",
      "Key point 3 for Service 2",
    ],
    link: "/service-2", // Link for Service 2
  },
  {
    image: Service3,
    title: "DIGITAL PLATFORM",
    description:
      "This is the first line of description for Service 3.\nThis is the second line of the description.",
    keyPoints: [
      "Key point 1 for Service 3",
      "Key point 2 for Service 3",
      "Key point 3 for Service 3",
    ],
    link: "/service-3", // Link for Service 3
  },
  {
    image: Service1,
    title: "AI AND MACHINE..",
    description:
      "This is the first line of description for Service 4.\nThis is the second line of the description.",
    keyPoints: [
      "Key point 1 for Service 4",
      "Key point 2 for Service 4",
      "Key point 3 for Service 4",
    ],
    link: "/service-4", // Link for Service 4
  },
  {
    image: Service2,
    title: "Service 5",
    description:
      "This is the first line of description for Service 5.\nThis is the second line of the description.",
    keyPoints: [
      "Key point 1 for Service 5",
      "Key point 2 for Service 5",
      "Key point 3 for Service 5",
    ],
    link: "/service-5", // Link for Service 5
  },
  {
    image: Service3,
    title: "Service 6",
    description:
      "This is the first line of description for Service 6.\nThis is the second line of the description.",
    keyPoints: [
      "Key point 1 for Service 6",
      "Key point 2 for Service 6",
      "Key point 3 for Service 6",
    ],
    link: "/service-6", // Link for Service 6
  },
  {
    image: Service1,
    title: "Service 7",
    description:
      "This is the first line of description for Service 7.\nThis is the second line of the description.",
    keyPoints: [
      "Key point 1 for Service 7",
      "Key point 2 for Service 7",
      "Key point 3 for Service 7",
    ],
    link: "/service-7", // Link for Service 7
  },
  {
    image: Service2,
    title: "Service 8",
    description:
      "This is the first line of description for Service 8.\nThis is the second line of the description.",
    keyPoints: [
      "Key point 1 for Service 8",
      "Key point 2 for Service 8",
      "Key point 3 for Service 8",
    ],
    link: "/service-8", // Link for Service 8
  },
  {
    image: Service3,
    title: "Service 9",
    description:
      "This is the first line of description for Service 9.\nThis is the second line of the description.",
    keyPoints: [
      "Key point 1 for Service 9",
      "Key point 2 for Service 9",
      "Key point 3 for Service 9",
    ],
    link: "/service-9", // Link for Service 9
  },
  {
    image: Service1,
    title: "Service 10",
    description:
      "This is the first line of description for Service 10.\nThis is the second line of the description.",
    keyPoints: [
      "Key point 1 for Service 10",
      "Key point 2 for Service 10",
      "Key point 3 for Service 10",
    ],
    link: "/service-10", // Link for Service 10
  },
  {
    image: Service2,
    title: "Service 11",
    description:
      "This is the first line of description for Service 11.\nThis is the second line of the description.",
    keyPoints: [
      "Key point 1 for Service 11",
      "Key point 2 for Service 11",
      "Key point 3 for Service 11",
    ],
    link: "/service-11", // Link for Service 11
  },
  {
    image: Service3,
    title: "Service 12",
    description:
      "This is the first line of description for Service 12.\nThis is the second line of the description.",
    keyPoints: [
      "Key point 1 for Service 12",
      "Key point 2 for Service 12",
      "Key point 3 for Service 12",
    ],
    link: "/service-12", // Link for Service 12
  },
  {
    image: Service1,
    title: "Service 13",
    description:
      "This is the first line of description for Service 13.\nThis is the second line of the description.",
    keyPoints: [
      "Key point 1 for Service 13",
      "Key point 2 for Service 13",
      "Key point 3 for Service 13",
    ],
    link: "/service-13", // Link for Service 13
  },
  {
    image: Service2,
    title: "Service 14",
    description:
      "This is the first line of description for Service 14.\nThis is the second line of the description.",
    keyPoints: [
      "Key point 1 for Service 14",
      "Key point 2 for Service 14",
      "Key point 3 for Service 14",
    ],
    link: "/service-14", // Link for Service 14
  },
  {
    image: Service3,
    title: "Service 15",
    description:
      "This is the first line of description for Service 15.\nThis is the second line of the description.",
    keyPoints: [
      "Key point 1 for Service 15",
      "Key point 2 for Service 15",
      "Key point 3 for Service 15",
    ],
    link: "/service-15", // Link for Service 15
  },
  {
    image: Service1,
    title: "Service 16",
    description:
      "This is the first line of description for Service 16.\nThis is the second line of the description.",
    keyPoints: [
      "Key point 1 for Service 16",
      "Key point 2 for Service 16",
      "Key point 3 for Service 16",
    ],
    link: "/service-16", // Link for Service 16
  },
  {
    image: Service2,
    title: "Service 17",
    description:
      "This is the first line of description for Service 17.\nThis is the second line of the description.",
    keyPoints: [
      "Key point 1 for Service 17",
      "Key point 2 for Service 17",
      "Key point 3 for Service 17",
    ],
    link: "/service-17", // Link for Service 17
  },
  {
    image: Service3,
    title: "Service 18",
    description:
      "This is the first line of description for Service 18.\nThis is the second line of the description.",
    keyPoints: [
      "Key point 1 for Service 18",
      "Key point 2 for Service 18",
      "Key point 3 for Service 18",
    ],
    link: "/service-18", // Link for Service 18
  },
  {
    image: Service1,
    title: "Service 19",
    description:
      "This is the first line of description for Service 19.\nThis is the second line of the description.",
    keyPoints: [
      "Key point 1 for Service 19",
      "Key point 2 for Service 19",
      "Key point 3 for Service 19",
    ],
    link: "/service-19", // Link for Service 19
  },
];

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevClick = () => {
    setCurrentSlide(
      (currentSlide - 1 + servicesData.length) % servicesData.length
    );
  };

  const handleNextClick = () => {
    setCurrentSlide((currentSlide + 1) % servicesData.length);
  };
  const handleThumbnailClick = (index: React.SetStateAction<number>) => {
    setCurrentSlide(index);
  };

  return (
    <Container fluid className="services-slider pt-5 ">
      <Row>
        <Col className="align-content-center mb-3">
          <h4 className="text-white text-center">Services</h4>
          <h2 className="text-white text-center">
            We offering best services for you
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Col lg={11} className="d-flex p-0 flex-wrap">
          {/* Main image (first column) */}
          <Col md={6} sm={12} className="slider-image">
            <img
              src={servicesData[currentSlide].image}
              alt={servicesData[currentSlide].title}
              className="img-fluid"
            />
            <div className="overlay-content">
              <h2 className="overlay-title">
                {servicesData[currentSlide].title}
              </h2>
              <a
                href={servicesData[currentSlide].link}
                className="explore-btn d-flex"
              >
                Explore More
                <img
                  src={Image4}
                  alt="Instagram"
                  className=" cta1-img "
                  width={10}
                  height={10}
                />
              </a>
            </div>
            <div className=" overlay-content slider-count d-flex justify-content-end">
              <img
                src={PrevArrow}
                alt="Previous"
                className="slider-arrow prev-arrow"
                onClick={handlePrevClick}
              />
              <div className="slide-count">
                {currentSlide + 1} / {servicesData.length}
              </div>
              <img
                src={NextArrow}
                alt="Next"
                className="slider-arrow next-arrow"
                onClick={handleNextClick}
              />
            </div>
          </Col>

          <Col
            md={6}
            sm={12}
            className="service-content pt-5 ps-5 d-flex flex-column justify-content-around "
          >
            {/* <h2>{servicesData[currentSlide].title}</h2> */}
            <div className="service-description">
              <p>
                {servicesData[currentSlide].description
                  .split("\n")
                  .map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
              </p>

              {/* Display key points as a list */}
              <ul>
                {servicesData[currentSlide].keyPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="other-service">
              <div className="service-txtimg d-flex justify-content-end">
                <img src={Image5} alt="Service" />
              </div>
              <div className="other-services-thumbnails  d-block">
                <h4>Other Services</h4>
                <div className="service-slider">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={3}
                    className="thumbnail-slider"
                    modules={[Autoplay]} // Add Autoplay module
                    autoplay={{ delay: 3000, disableOnInteraction: false }} // Enable autoplay
                  >
                    {servicesData.map((service, index) => (
                      <SwiperSlide
                        key={index}
                        onClick={() => handleThumbnailClick(index)}
                      >
                        <div className="thumbnail-wrapper">
                          <img
                            src={service.image}
                            alt={service.title}
                            className={`img-thumbnail ${
                              currentSlide === index ? "active" : ""
                            }`}
                          />
                          <div className="overlay-content">
                            <div className="overlay-title">
                              {service.title}
                              <img src={Image4} alt="Overlay Icon" />
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
