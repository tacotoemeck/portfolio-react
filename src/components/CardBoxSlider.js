import React, { useState, useEffect, useRef } from "react";

import RightSliderArrow from "../img/rightSlider";
import LeftSliderArrow from "../img/leftSlider";
import "./CardBoxSlider.css";

const sliderContent = [
  {
    imgSrc: "https://media.giphy.com/media/4N1BrLh0okzuK0bzFw/giphy.gif",
    imgAlt: "climbing",
  },
  {
    imgSrc:
      "https://img.buzzfeed.com/buzzfeed-static/static/2015-10/14/16/enhanced/webdr11/anigif_enhanced-30339-1444853645-8.gif",
    imgAlt: "street food",
  },
  {
    imgSrc: "https://thumbs.gfycat.com/SkeletalSelfreliantAuklet-small.gif",
    imgAlt: "nature",
  },
];

function CardBoxSlider(props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide(currentSlide) {
    if (currentSlide < 2) setCurrentSlide(currentSlide + 1);

    if (currentSlide === 2) {
      setCurrentSlide(0);
      currentSlide = -1;
    }
    currentSlide += 1;
    console.log("in next :" + currentSlide);
    document.querySelector(`#slide${currentSlide}`).scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest",
    });
  }

  function previousSlide(currentSlide) {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);

    if (currentSlide === 0) {
      setCurrentSlide(2);
      currentSlide = 3;
    }
    currentSlide -= 1;
    console.log("in previous :" + currentSlide);
    document.querySelector(`#slide${currentSlide}`).scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest",
    });
  }

  return (
    <div className="CardBox">
      <h2 className="CardBoxSliderContainer_title">Hobbies</h2>
      <div className="CardBoxSliderContainer">
        <ul className="CardBoxSliderList">
          {sliderContent.map((elem, i) => (
            <li key={i} id={`slide${i}`} className="CardBoxSliderList__element">
              <img
                className="CardBoxSliderList__element__img"
                src={elem.imgSrc}
                alt={elem.imgAlt}
              />
            </li>
          ))}
        </ul>
      </div>
      <button
        className="carouselNav"
        aria-label="navigate left"
        onClick={() => previousSlide(currentSlide)}
      >
        {/* <i className="fas fa-angle-left">A</i> */}
        <LeftSliderArrow />
      </button>
      <button
        className="carouselNav"
        id="navButtonRightCarousel"
        aria-label="navigate right"
        onClick={() => nextSlide(currentSlide)}
      >
        <RightSliderArrow />
      </button>
    </div>
  );
}

export default CardBoxSlider;
