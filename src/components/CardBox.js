import React, { useState } from "react";
import "./CardBox.css";

function CardBox(props) {
  const [open, setOpen] = useState(false);

  function handleClick() {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }

  return (
    <div className="CardBox">
      <div className="InnerCardBox"></div>
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
