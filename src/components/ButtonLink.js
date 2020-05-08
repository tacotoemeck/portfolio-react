import React from "react";
import "./ButtonLink.css";

function ButtonLink(props) {
  return (
    <button onClick={props.onClick} className="ButtonLink">
      {props.value}
    </button>
  );
}

export default ButtonLink;
