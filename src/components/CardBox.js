import React, { useState } from "react";
import InnerBox from "./InnerBox";
import OuterBox from "./OuterBox";
import "./CardBox.css";

function CardBox(props) {
  const [open, setOpen] = useState(false);

  function handleClick() {
    if (open) {
      setOpen(false);
      console.log("set to false");
    } else {
      setOpen(true);
      console.log("set to true");
    }
  }

  return (
    <div className="CardBox">
      <div className="InnerCardBox">
        {open ? (
          <InnerBox />
        ) : (
          <OuterBox
            image={props.image}
            subtitle={props.subtitle}
            subtitleClass={props.subtitleClass}
            title={props.title}
            bottomBackground={props.bottomBackground}
          />
        )}
      </div>
      <button onClick={handleClick} className="CarBoxExpandButton">
        {props.buttonValue}{" "}
        <img
          className="CarBoxExpandButton__arrow"
          src={require("../img/right.svg")}
          alt="additional content"
          aria-expanded={open}
        />
      </button>
    </div>
  );
}

export default CardBox;
