import { Swiper, SwiperSlide } from "swiper/react"; 
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "../../styles/services.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image1 from "../../assets/technology-stack/1.png";
import Image2 from "../../assets/technology-stack/2.png";
import Image3 from "../../assets/technology-stack/3.png";
import Image4 from "../../assets/technology-stack/4.png";
import Image5 from "../../assets/technology-stack/5.png";
import Image6 from "../../assets/technology-stack/6.png";
import Image7 from "../../assets/technology-stack/7.png";
import Image8 from "../../assets/technology-stack/8.png";
import { Container } from "react-bootstrap";

const TechStack = () => {
  return (
    <Container  className="my-5 py-5" >
      <h4 className="text-center subheading">Tech Stack</h4>
      <h2 className="h1 text-center pb-3">Technology Expertise</h2>
      <Swiper
      id="tech-stack"
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000 }} // Slows down autoplay a little for better UX
        loop={true}
        spaceBetween={30} // Default space between slides
        slidesPerView={5} // Default number of slides per view
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1, // Show 1 slide on small screens
            spaceBetween: 10,
          },
          // when window width is >= 576px (sm devices)
          576: {
            slidesPerView: 2, // Show 2 slides on small devices
            spaceBetween: 20,
          },
          // when window width is >= 768px (md devices)
          768: {
            slidesPerView: 3, // Show 3 slides on medium devices
            spaceBetween: 20,
          },
          // when window width is >= 992px (lg devices)
          992: {
            slidesPerView: 4, // Show 4 slides on large devices
            spaceBetween: 30,
          },
          // when window width is >= 1200px (xl devices)
          1200: {
            slidesPerView: 5, // Show 5 slides on extra-large devices
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <img src={Image1} alt="Tech 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image2} alt="Tech 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image3} alt="Tech 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image4} alt="Tech 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image5} alt="Tech 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image6} alt="Tech 6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image7} alt="Tech 7" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image8} alt="Tech 8" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default TechStack;
