import React, { useState, useRef } from "react";
import useOnClickOutside from "../utils/helpers";

import InnerBox from "./InnerBox";
import OuterBox from "./OuterBox";
import "./CardBox.css";
import RightIcon from "../img/right";

function CardBox(props) {
  const [open, setOpen] = useState(false);
  const [buttonArrowStateStyle, setbuttonArrowStateStyle] = useState(
    "CarBoxExpandButton__arrow"
  );
  // const [isHovered, setIsHoevered] = useState(false);

  const ref = useRef();

  useOnClickOutside(ref, () => {
    removeHoverEffectFromArrow();
    setOpen(false);
  });

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
    setOpen(!open);
  }

  // do not delete below! it will work for passing state to a component

  // // adding props to props for svg animations
  // let icon = React.Children.toArray(props.icons);
  // if (Array.from(icon).length === 0) {
  //   // clone elements so props can be passed to it

  //   if (icon.length === 1) {
  //     icon = React.cloneElement(icon[0], { isHovered: isHovered });
  //   }
  // }

  return (
    <div
      ref={ref}
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
      onTouchStart={() => {
        addHoverEffectToArrow();
      }}
      onTouchEnd={() => {
        removeHoverEffectFromArrow();
      }}
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
            // icons={Array.from(icon)} // how to pass on state to a component's prop?
            icons={props.icons}
            bottomBackground={props.bottomBackground}
            topBackground={props.topBackground}
          />
        )}
      </div>
      <button
        onClick={handleClick}
        className={!open ? "CarBoxExpandButton" : "HideCarBoxExpandButton"}
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
