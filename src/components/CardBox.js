import React, { useState } from "react";
import InnerBox from "./InnerBox";
import OuterBox from "./OuterBox";
import "./CardBox.css";

function CardBox(props) {
  const [open, setOpen] = useState(false);
  const [buttonArrowStateStyle, setbuttonArrowStateStyle] = useState(
    "CarBoxExpandButton__arrow"
  );

  function addHoverEffectToArrow() {
    // add a moving arrow effect on mouseover
    setbuttonArrowStateStyle(
      buttonArrowStateStyle + " CarBoxExpandButtonHoverEffect"
    );
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
      onMouseDown={() => {
        handleClick();
      }}
      onMouseOver={() => {
        addHoverEffectToArrow();
      }}
      onMouseLeave={() => {
        open && setOpen(false);
        removeHoverEffectFromArrow();
      }}
    >
      <div className="InnerCardBox">
        {open ? (
          <InnerBox />
        ) : (
          <OuterBox
            image={props.image}
            subtitle={props.subtitle}
            subtitleClass={props.subtitleClass}
            title={props.title}
            icons={props.icons}
            bottomBackground={props.bottomBackground}
          />
        )}
      </div>
      <button onClick={handleClick} className="CarBoxExpandButton">
        {props.buttonValue}{" "}
        <img
          className={buttonArrowStateStyle}
          src={require("../img/right.svg")}
          alt="additional content"
          aria-expanded={open}
        />
      </button>
    </div>
  );
}

export default CardBox;
