import React, { useEffect, useState } from "react";
import "./TextComponents.css";

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
      <h2 className={titleTransitionClass}>
        Training
        <span
          className="InnerBox__titleEmoji"
          role="img"
          aria-label="graduation cap emoji"
        >
          🎓
        </span>
      </h2>
      <div className="InnerBox__TextContent">
        <h3 className="InnerBox__TextContent__title">Formal</h3>
        <p className="InnerBox__TextContent__paragraph">
          BA(Hons) Business Studies 2.1 <br></br>
          University of West London
        </p>
        <h3 className="InnerBox__TextContent__title">Other</h3>
        <p className="InnerBox__TextContent__paragraph">
          <b>Founders and Coders</b>
          <br></br>
          Full Stack Web Development, London <br></br>
          18 weeks Intensive Full-Time
          <br></br>
          <br></br>
          <b>OTHER:</b>
          <ul>
            <li>Web Development Bootcamp - Colt Steele - Udemy</li>
            <li>Advanced Web Development Bootcamp - Colt Steele - Udemy</li>
            <li>Modern React Bootcamp - Colt Steele - Udemy</li>
            <li>Data Structures and Algorihtms - Colt Steele - Udemy</li>
            <li>Responsive Web Design Certification - FreeCodeCamp</li>
            <li>
              JavaScript Algorithms and Data Structures Certification -
              FreeCodeCamp
            </li>
            <li>Front End Libraries Certification - FreeCodeCamp</li>
            <li>API's and Microservices Certification - FreeCodeCamp</li>
            <li>Learn ReactJS P1 & P2 - CodeCademy</li>
          </ul>
        </p>
      </div>
    </section>
  );
}

export default Education;
