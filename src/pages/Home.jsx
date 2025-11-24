import React from "react";
import Slider from "../components/Slider";
import "swiper/css";
import "swiper/css/navigation";
import PopularServices from "../components/PopularServices";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <PopularServices></PopularServices>
    </div>
  );
};

export default Home;
