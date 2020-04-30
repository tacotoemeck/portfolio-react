import React, { useEffect, useState } from "react";
import "./InnerBox.css";

function InnerBox(props) {
  const [BoxClass, setBoxClass] = useState("InnerBox");

  useEffect(() => {
    setTimeout(() => {
      setBoxClass(BoxClass + " transitionInner");
    }, 50);
  }, []);

  return (
    <div className={BoxClass}>
      <div className="InnerBoxContent">{props.innerBoxContent}</div>
    </div>
  );
}

export default InnerBox;
