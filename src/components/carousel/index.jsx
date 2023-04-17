import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1300, min: 1000 },
    items: 2,
  },

  tablet: {
    breakpoint: { max: 1000, min: 800 },

    items: 2,
  },

  mobile: {
    breakpoint: { max: 800, min: 0 },
    items: 1,
  },
};

function CustomCarousel({ items, renderItem, ...others }) {
  return (
    <Carousel
      {...others}
      swipeable={false}
      draggable={false}
      showDots={false}
      responsive={responsive}
      itemClass="lg:mr-4"
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />}
    >
      {items.map(renderItem)}
    </Carousel>
  );
}

export default CustomCarousel;

const CustomLeftArrow = ({ onClick, ...rest }) => {
  return (
    <button
      className="absolute left-0 w-[42px] h-[42px] border border-txtPrimary z-10 rounded-full "
      onClick={onClick}
    >
      <span className="relative before:absolute before:content-['\279C'] inline-block text-txtPrimary before:-left-[8px] before:rotate-180 before:-top-[18px]"></span>
    </button>
  );
};
const CustomRightArrow = ({ onClick, ...rest }) => {
  return (
    <button
      className="absolute right-0 w-[42px] h-[42px] border border-txtPrimary z-10 rounded-full "
      onClick={onClick}
    >
      <span className="relative before:absolute before:content-['\279C'] inline-block text-txtPrimary before:-left-[8px] z-10 before:-top-[16px] "></span>
    </button>
  );
};
