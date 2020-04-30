import React, { useEffect, useState } from "react";
import "./TextComponents.css";

function HireMeComponent(props) {
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
        Junior Developer
        <span
          className="InnerBox__titleEmoji"
          role="img"
          aria-label="technologis person emoji"
        >
          👨‍💻
        </span>
      </h2>
      <div className="InnerBox__TextContent">
        <h3 className="InnerBox__TextContent__title">
          Location
          <span
            className="InnerBox__titleEmoji"
            role="img"
            aria-label="Round Pushpin emoji"
          >
            📍
          </span>
        </h3>
        <p className="InnerBox__TextContent__paragraph">
          London, UK based, but open to relocate or work remote.
        </p>
        <h3 className="InnerBox__TextContent__title">
          Salary
          <span
            className="InnerBox__titleEmoji"
            role="img"
            aria-label="Money bag emoji"
          >
            💰
          </span>
        </h3>
        <p className="InnerBox__TextContent__paragraph">
          For London min £32000 pa
        </p>
        <h3 className="InnerBox__TextContent__title">
          Perks
          <span
            className="InnerBox__titleEmoji"
            role="img"
            aria-label="Park emoji"
          >
            🏞️
          </span>
        </h3>
        <p className="InnerBox__TextContent__paragraph">
          <ul>
            <li>Opportunity to learn</li>
            <li>Sound environmental policy</li>
            <li>Good working culture</li>
            <li>Growth potential</li>
            <li>Remote work days</li>
          </ul>
        </p>
      </div>
    </section>
  );
}

export default HireMeComponent;
