import React from "react";
import Banner from "../../components/Home/Banner";
import Keyfeatures from "../../components/Home/Keyfeatures";
import About from "../../components/Home/aboutus";
import Whychoose from "../../components/Home/whychoose";
import Faq from "../../components/Home/faq";
import Cta from "../../components/Home/cta";
import Services from "../../components/Home/services";

import Testimonial from "../../components/Home/testimonial";
const home = () => {
  return (
    <div>
      <Banner />
      <Keyfeatures />
      <About/>
      <Services/>
      <Whychoose/>
      <Testimonial/>
      <Faq/>
      <Cta/>
    </div>
  );
};

export default home;
