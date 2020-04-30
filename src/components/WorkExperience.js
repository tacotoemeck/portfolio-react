import React, { useEffect, useState } from "react";
import "./TextComponents.css";

function WorkExperience(props) {
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
        When?
        <span
          className="InnerBox__titleEmoji"
          role="img"
          aria-label="briefcase cap emoji"
        >
          💼
        </span>
      </h2>
      <div className="InnerBox__TextContent">
        <h3 className="InnerBox__TextContent__title">Tech For Better</h3>
        <p className="InnerBox__TextContent__paragraph">
          <b>Developer</b>
          <br></br>
          <b>
            May '20 - July '20
            <span
              className="InnerBox__titleEmoji"
              role="img"
              aria-label="Round Pushpin emoji"
            >
              📍
            </span>
            London
          </b>
          <br></br>
          Developer delivering React, Node, PostgreSQL web application.
        </p>
        <h3 className="InnerBox__TextContent__title">Founders and Coders</h3>
        <p className="InnerBox__TextContent__paragraph">
          <b>
            <b>Developer Student</b>
            <br></br>
            May '20 - Present
            <span
              className="InnerBox__titleEmoji"
              role="img"
              aria-label="Round Pushpin emoji"
            >
              📍
            </span>
            London
          </b>
          <br></br>
          Member, graduate and mentor. Develped number of applications and other
          learning tools.
        </p>
        <h3 className="InnerBox__TextContent__title">Freelance</h3>
        <p className="InnerBox__TextContent__paragraph">
          <b>Web Developer</b>
          <br></br>
          <b>
            May '19 - Present
            <span
              className="InnerBox__titleEmoji"
              role="img"
              aria-label="Round Pushpin emoji"
            >
              📍
            </span>
            London
          </b>
          <br></br>
          Full time project based study of Frontend Web technologies. Small paid
          and unpaid gigs invloving simple Wordpress sites, assitance and
          passion projects.
        </p>
        <h3 className="InnerBox__TextContent__title">Maria Sabina</h3>
        <p className="InnerBox__TextContent__paragraph">
          <b>Founder</b>
          <br></br>
          <b>
            May '15 - June '19
            <span
              className="InnerBox__titleEmoji"
              role="img"
              aria-label="Round Pushpin emoji"
            >
              📍
            </span>
            London
          </b>
          <br></br>
          Founder of a street food business and a restaurant in Brixton.
          Employed up to 12 members of staff and achiieved a turonover of up to
          £350,000 pa.
        </p>
        <h3 className="InnerBox__TextContent__title">Sky</h3>
        <p className="InnerBox__TextContent__paragraph">
          <b>Recruiter</b>
          <br></br>
          <b>
            Aug '13 - Aug '15
            <span
              className="InnerBox__titleEmoji"
              role="img"
              aria-label="Round Pushpin emoji"
            >
              📍
            </span>
            London
          </b>
          <br></br>
          Tech recruiter, covered areas of testers, software developers, scrum
          masters etc.
        </p>
      </div>
    </section>
  );
}

export default WorkExperience;
