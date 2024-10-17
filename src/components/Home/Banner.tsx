// Banner.js

import React from "react";
import "../../styles/banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image1 from "../../assets/banner/2.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image4 from "../../assets/banner/cta.svg";

// Sample images (replace these with actual banner image paths)
const bannerImages = [
  { image: Image1, text: "Welcome to Our Website" },
  { image: Image1, text: "Best Deals of the Season" },
  { image: Image1, text: "Shop Now and Save Big" },
  { image: Image1, text: "Discover New Arrivals" },
];

const Banner = () => {
  return (
    <div className="banner-container">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {bannerImages.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="banner-slide">
              <img src={slide.image} alt={`Banner ${index + 1}`} />
              <div className="banner-text">
                <span className="text-white text-left">We provide best solution
                Company for <strong> Digital Platform
              
                Services</strong>
                </span>
                <p>Strengthen your online presence with a dynamic website, e-commerce integration, and strategic digital marketing. Engage customers and drive business growth effectively.</p>
                <button  className="banner-btn d-flex" >
                    Explore Details
                    <img src={Image4} alt="Instagram" className=" cta1-img " width={10} height={10}/>

                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
