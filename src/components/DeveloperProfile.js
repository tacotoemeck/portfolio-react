import React, { useEffect, useState } from "react";
import "./TextComponents.css";

function DeveloperProfile(props) {
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
        What?
        <span
          className="InnerBox__titleEmoji"
          role="img"
          aria-label="gear emoji"
        >
          ⚙️
        </span>
      </h2>
      <div className="InnerBox__TextContent">
        <h3 className="InnerBox__TextContent__title">Stack</h3>
        <p className="InnerBox__TextContent__paragraph">
          <b>FRONT:</b>
          <br></br> CSS, HTML, JavaScript, React, Vue, jQuery, Bootstrap,
          Tailwind, Material UI, Wordpress;
          <br></br>
          <br></br>
          <b>BACK:</b>
          <br></br>
          NodeJS, Express, API's ( CRUD, RESTful ), SPA;
          <br></br>
          <br></br>
          <b>DATABASE:</b>
          <br></br>PostgreSQL, MongoDB
        </p>
        <h3 className="InnerBox__TextContent__title">Other</h3>
        <p className="InnerBox__TextContent__paragraph">
          <b>TECH:</b>
          <br></br>
          git, agile, data structures and algorithms;
          <br></br>
          <b>OTHER:</b>
          <br></br>
          project management, hospitality (food and beverage), good presentation
          skills, sales
          <br></br>
        </p>
        <h3 className="InnerBox__TextContent__title">Summary</h3>
        <p className="InnerBox__TextContent__paragraph justifySpan">
          I started developing websites back in highschool but haven't pursed it
          as a career until 2019 when I started freelancing. I dedicated myself
          to a full-time study, focusing on lastest technologies as well as
          workplace preperation (agile, git, team projects).
        </p>
        <p className="InnerBox__TextContent__paragraph justifySpan">
          In June 2020, I have graduated from Founders and Coders, prominent
          full-stack London bootcamp. immediately after the course, I begun
          working on Tech for Better projects.
        </p>
        <p className="InnerBox__TextContent__paragraph justifySpan">
          I am an active member of number of front-end focused London meetup
          groups, active within Twitter tech community and mentor to beginner
          developers.
        </p>
      </div>
    </section>
  );
}

export default DeveloperProfile;
