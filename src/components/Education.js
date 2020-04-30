import React, { useEffect, useState } from "react";
import "./DeveloperProfile.css";

function Education(props) {
  const [titleTransitionClass, setTitleTransitionClass] = useState(
    "InnerCard_title"
  );

  useEffect(() => {
    setTimeout(() => {
      setTitleTransitionClass(titleTransitionClass + " titleTransitionClass");
    }, 50);
  }, []);

  return (
    <section className="DeveloperProfile">
      <h1></h1>
    </section>
  );
}

export default Education;
