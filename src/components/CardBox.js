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
      OnBlur={() => {
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

// Hook
// function useOnClickOutside(ref, handler) {
//   useEffect(
//     () => {
//       const listener = (event) => {
//         // Do nothing if clicking ref's element or descendent elements
//         if (!ref.current || ref.current.contains(event.target)) {
//           return;
//         }

//         handler(event);
//       };

//       document.addEventListener("mousedown", listener);
//       document.addEventListener("touchstart", listener);

//       return () => {
//         document.removeEventListener("mousedown", listener);
//         document.removeEventListener("touchstart", listener);
//       };
//     },
//     // Add ref and handler to effect dependencies
//     // It's worth noting that because passed in handler is a new ...
//     // ... function on every render that will cause this effect ...
//     // ... callback/cleanup to run every render. It's not a big deal ...
//     // ... but to optimize you can wrap handler in useCallback before ...
//     // ... passing it into this hook.
//     [ref, handler]
//   );
// }

export default CardBox;
