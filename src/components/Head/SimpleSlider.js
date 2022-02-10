import React, { Component } from "react";
import Slider from "react-slick";
import { MyBigButton } from "../common/MyBigButton";
import "./Slider.css";

const MyContent = (props) => {
  return (
    <div className="crative-content">
      <h1>We Are Awesome Creative Agency</h1>
      <p>
        This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit
        auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi
        elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit
        amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
        velit.
      </p>
      <MyBigButton color="aqua" text="learn more" />
    </div>
  );
};

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <MyContent />
          </div>
          <div>
            <MyContent />
          </div>
          <div>
            <MyContent />
          </div>
          <div>
            <MyContent />
          </div>
        </Slider>
      </div>
    );
  }
}
