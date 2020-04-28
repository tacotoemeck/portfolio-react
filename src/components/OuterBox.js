import React from "react";
import "./OuterBox.css";

function OuterBox(props) {
  let topDisplay;
  let image;
  let titleText;

  if (props.image) {
    image = (
      <img
        src={props.image}
        alt={props.imageAlt}
        className="OuterBoxTopImage"
      />
    );
    topDisplay = "image";
  }
  if (props.title) {
    titleText = <h2 className="OuterBoxTitle">{props.title}</h2>;
    topDisplay = "text";
  }

  return (
    <div className="OuterBox">
      <div className="OuterBoxTop">
        {topDisplay === "image" ? image : titleText}
      </div>
      <div
        className={
          props.bottomBackground ? "BottomBox ColorBottom" : "BottomBox"
        }
      >
        <h2 className={props.subtitleClass + " BottomBoxTitle"}>
          {props.subtitle}
        </h2>
      </div>
    </div>
  );
}

export default OuterBox;
