import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Search = () => {
  return (
    <div className="searchjob">
      <Container>
        <div className="m-4 pt-4 d-flex align-items-center">
          <div>
            <h5 className="size18 Mid-blue manropeMedium">Search Jobs</h5>
          </div>
          <span className="line"></span>
        </div>
        <h2 className="manropeMedium">Explore open roles</h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="search-scroll-swiper"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="searchScrollCol">
              <h5 className="manropeMedium Mid-blue size18">
                Technical Support Engineers
              </h5>
              <h6 className="manropeRegular size14">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h6>
              <p className="manropeRegular size12">
                <span className="highlight dark-green size12 manropeSemiBold">
                  Type :
                </span>{" "}
                Full Time
              </p>
              <p className="manropeRegular size12">
                <span className="highlight dark-green size12 manropeSemiBold">
                  Years of Experience:
                </span>{" "}
                2
              </p>
              <p>Posted within last 24 hours</p>
            </div>
          </SwiperSlide>

          {/* Repeat similar slides */}
          <SwiperSlide>
            <div className="searchScrollCol">
              <h5 className="manropeMedium Mid-blue size18">
                Technical Support Engineers
              </h5>
              <h6 className="manropeRegular size14">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h6>
              <p className="manropeRegular size12">
                <span className="highlight dark-green size12 manropeSemiBold">
                  Type :
                </span>{" "}
                Full Time
              </p>
              <p className="manropeRegular size12">
                <span className="highlight dark-green size12 manropeSemiBold">
                  Years of Experience:
                </span>{" "}
                2
              </p>
              <p>Posted within last 24 hours</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="searchScrollCol">
              <h5 className="manropeMedium Mid-blue size18">
                Technical Support Engineers
              </h5>
              <h6 className="manropeRegular size14">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h6>
              <p className="manropeRegular size12">
                <span className="highlight dark-green size12 manropeSemiBold">
                  Type :
                </span>{" "}
                Full Time
              </p>
              <p className="manropeRegular size12">
                <span className="highlight dark-green size12 manropeSemiBold">
                  Years of Experience:
                </span>{" "}
                2
              </p>
              <p>Posted within last 24 hours</p>
            </div>
          </SwiperSlide>

          {/* Add more slides if needed */}
        </Swiper>
      </Container>
    </div>
  );
};

export default Search;
