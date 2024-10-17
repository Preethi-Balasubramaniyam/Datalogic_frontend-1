import React from "react";
import "../../styles/testimonial.css";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import icon from "../../assets/testimonial/Icon.svg";
import Client from "../../assets/testimonial/client.png";

const Testimonial = () => {
  return (
    <Container fluid id="testimonial" className="py-5">
      <Container className="py-5">
        <Row className="pt-5 pb-5 justify-content-around">
          <Col
            lg={4}
            md={12}
            className="d-flex flex-column justify-content-center "
          >
            <h5 className="subheading">Testimonials</h5>
            <h2 className="testimonial-heading text-left text-black">
              The Stories that inspire us everyday
            </h2>
            <div id="testimonials" className="swiper-controls mt-3">
              <div className="swiper-navigation">
                <div className="swiper-button-prev testimonial-slide"></div>
                <div className="swiper-button-next testimonial-slide"></div>
              </div>
              <div className="swiper-pagination mt-3"></div>
            </div>
          </Col>

          <Col lg={6} md={12}>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
              }}
              autoplay={{ delay: 5000 }}
              loop={true}
              spaceBetween={30}
              slidesPerView={2}
              className="testimonial-swiper"
            >
              <SwiperSlide>
                <div className="testimonial-slide">
                  <img src={icon} className="qoute-icon" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <div className="client-data d-flex">
                    <img src={Client} className="client-image" />
                    <div className="ps-3 client-info">
                    <p className="mb-0">Aabidah Hussian</p>
                    <span className="mt-0">-Student</span>
                    </div>
                   
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial-slide">
                  <img src={icon} className="qoute-icon" />

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <div className="client-data d-flex">
                    <img src={Client} className="client-image" />
                    <div className="ps-3 client-info">
                    <p className="mb-0">Aabidah Hussian</p>
                    <span className="mt-0">-Student</span>
                    </div>
                   
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial-slide">
                  <img src={icon} className="qoute-icon" />

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <div className="client-data d-flex">
                    <img src={Client} className="client-image" />
                    <div className="ps-3 client-info">
                    <p className="mb-0">Aabidah Hussian</p>
                    <span className="mt-0">-Student</span>
                    </div>
                   
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Testimonial;
