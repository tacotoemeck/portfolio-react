import React, { useState } from "react";
import InnerBox from "./InnerBox";
import OuterBox from "./OuterBox";
import "./CardBox.css";
import RightIcon from "../img/right";

function CardBox(props) {
  const [open, setOpen] = useState(false);
  const [buttonArrowStateStyle, setbuttonArrowStateStyle] = useState(
    "CarBoxExpandButton__arrow"
  );

  // background colors

  const backgroundColors = {
    white: "rgb(119, 79, 56)", // brown color for white backgrounds
    brown: "rgb(255, 255, 255)", // white color for white backgrounds
  };

  function addHoverEffectToArrow() {
    // add a moving arrow effect on mouseover
    // check if CarBoxExpandButtonHoverEffect hasn't already been added
    if (buttonArrowStateStyle.split(" ").length === 1) {
      setbuttonArrowStateStyle(
        buttonArrowStateStyle + " CarBoxExpandButtonHoverEffect"
      );
    }
  }

  function removeHoverEffectFromArrow() {
    // remove moving arrow effect
    setbuttonArrowStateStyle("CarBoxExpandButton__arrow");
  }

  function handleClick() {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }

  return (
    <div
      className="CardBox"
      onClick={() => {
        handleClick();
      }}
      onMouseOver={() => {
        addHoverEffectToArrow();
      }}
      onMouseLeave={() => {
        open && setOpen(false);
        removeHoverEffectFromArrow();
      }}
      // onTouchCancel={() => {
      //   open && setOpen(false);
      //   removeHoverEffectFromArrow();
      // }}
    >
      <div className="InnerCardBox">
        {open ? (
          <InnerBox
            innerBoxContent={props.innerBoxContent}
            bottomBackground={props.bottomBackground}
          />
        ) : (
          <OuterBox
            image={props.image}
            subtitle={props.subtitle}
            subtitleClass={props.subtitleClass}
            title={props.title}
            icons={props.icons}
            bottomBackground={props.bottomBackground}
            topBackground={props.topBackground}
          />
        )}
      </div>
      <button
        onClick={handleClick}
        className="CarBoxExpandButton"
        style={{ color: backgroundColors[props.bottomBackground] }}
      >
        {props.buttonValue}
        <RightIcon
          className={buttonArrowStateStyle}
          backgroundColor={backgroundColors[props.bottomBackground]}
        />
      </button>
    </div>
  );
}

export default CardBox;
