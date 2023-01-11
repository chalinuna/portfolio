import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import '../Carosel/Carousel.scss'

function SimpleSlider(props){

  
  const inner = props.inner
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return(
    <div>
      <Slider {...settings} className="Slider-area" > 
      {
        inner.map(function(inner,th) {
          return(
            <div>
              <img src="/img/html.png"/>
              <div className="content-area">
                  <h3>{inner.subject}</h3>
                  <div>{inner.tool}</div>
                  <div>{inner.content}</div>
                  <div className="link-list">
                    <span>블로그</span>
                    <span>Github</span>
                    <span>Demo</span>
                  </div>
              </div>
            </div>
          )
        })
      }
      </Slider>      
  </div>
  )
}



export default SimpleSlider;
