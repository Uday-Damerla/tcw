import React from "react";

import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import Wrapper from "./../../components/Wrapper";
import ProductDetailsCarousel from "./../../components/ProductDetailsCarousel";

const ProductDetails = () => {
  return (
    <div className=" w-full md:py-20">
      <Wrapper>
        <div className=" flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start */}
          <div className=" w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel />
          </div>
          {/* left column end */}
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
