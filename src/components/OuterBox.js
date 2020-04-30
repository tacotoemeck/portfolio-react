import React from "react";
import "./OuterBox.css";

function OuterBox(props) {
  let content = {
    image: undefined,
    titleText: undefined,
    iconsDiv: undefined,
  };

  // add class depending on a color background
  const backgroundColorClass = {
    white: "BottomBox",
    brown: "BottomBox ColorBottom",
  };

  if (props.image) {
    content.image = (
      <img
        src={props.image}
        alt={props.imageAlt}
        className="OuterBoxTopImage"
      />
    );
  }

  if (props.title) {
    content.titleText = <h2 className="OuterBoxTitle">{props.title}</h2>;
  }

  if (props.icons) {
    content.iconsDiv = (
      <div className="OutherBoxSVGdiv">
        {props.icons.map((icon) => (
          <div className="SVG">{icon}</div>
        ))}
      </div>
    );
  }

  return (
    <div className="OuterBox">
      <div className="OuterBoxTop">
        {content.image || content.titleText || content.iconsDiv}
      </div>
      <div className={backgroundColorClass[props.bottomBackground]}>
        <h2 className={props.subtitleClass + " BottomBoxTitle"}>
          {props.subtitle}
        </h2>
      </div>
    </div>
  );
}

export default OuterBox;
