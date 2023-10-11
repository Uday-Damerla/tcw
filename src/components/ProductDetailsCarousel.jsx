import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ProductDetailsCarousel = () => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1300px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        
        <img src="/s.png" alt="" />
        <img src="/s1.png" alt="" />
        <img src="/s2.png" alt="" />
        <img src="/s3.png" alt="" />
        <img src="/s4.png" alt="" />
        <img src="/s5.png" alt="" />
        <img src="/s6.png" alt="" />
        <img src="/s7.png" alt="" />
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;
