"use client"

import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
      };
      return (
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <img src={"https://images.pexels.com/photos/30885406/pexels-photo-30885406/free-photo-of-black-and-white-urban-architecture-scene.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} />
            </div>
            <div>
              <img src={"https://picsum.photos/seed/picsum/200/300"} />
            </div>
            <div>
              <img src={"https://picsum.photos/seed/picsum/200/400"} />
            </div>
            <div>
              <img src={"https://picsum.photos/200/300?grayscale"} />
            </div>
          </Slider>
        </div>
      );
}

export default ImageSlider