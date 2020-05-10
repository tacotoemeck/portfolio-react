import React, { useEffect, useState } from "react";
import "./TextComponents.css";
import "./Projects.css";
import GithubIcon from "../img/github";

function Projects(props) {
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
      <h2 className={titleTransitionClass}>Projects</h2>
      <div className="InnerBox__TextContent">
        {/* <hr className="Projects__hr" />
        <h3 className="InnerBox__TextContent__title">Citadel</h3>
        <p className="InnerBox__TextContent__paragraph justifySpan">
          <b>Python, Flask, VueJS, PostgreSQL</b>
          <br></br>
          <br></br>
          Hobby projects currently being built among a team of 4 developers.
          Based on a popular board/card game. Uses Flask API with VueJS
          Frontend. I am mainly responsible for delivery of the UI but also
          involved with other apsects.
        </p>
        <a
          href="https://github.com/DGHP/CITADEL---VUE"
          className="InnerBox__TextContent__link"
        >
          <GithubIcon
            mainColor="rgb(119, 79, 56)"
            className="projectSVGIcons"
          />
          View on github
        </a> */}

        <hr className="Projects__hr" />
        <h3 className="InnerBox__TextContent__title">iVe Stock</h3>
        <p className="InnerBox__TextContent__paragraph justifySpan">
          <b>NodeJs, Express, JavaScript, MongoDB</b>
          <br></br>
          <br></br>
          Application built with aim to help small food business controling
          their daily stock levels, sales and wastage. It uses passport user
          validation, MongoDB with mongoose and Express with 'ejs'.
        </p>
        <a
          href="https://github.com/tacotoemeck/iVeStock"
          className="InnerBox__TextContent__link"
        >
          <GithubIcon
            mainColor="rgb(119, 79, 56)"
            className="projectSVGIcons"
          />
          View on github
        </a>
        <hr className="Projects__hr" />
        <h3 className="InnerBox__TextContent__title">Color Picker React</h3>
        <p className="InnerBox__TextContent__paragraph justifySpan">
          <b>React, JavaScript</b>
          <br></br>
          <br></br>
          Application to create custom color pallets. Pallets can be stored,
          colors rearranged ( using draggable components ), saved and copied
          into a clipboard using various color formats. It uses MaterialUI and
          other component libraries.
        </p>
        <a
          href="https://github.com/tacotoemeck/react_color_picker"
          className="InnerBox__TextContent__link"
        >
          <GithubIcon
            mainColor="rgb(119, 79, 56)"
            className="projectSVGIcons"
          />
          View on github
        </a>
        <hr className="Projects__hr" />
        <h3 className="InnerBox__TextContent__title">Formula Calculator</h3>
        <p className="InnerBox__TextContent__paragraph justifySpan">
          <b>Vanilla JavaScript</b>
          <br></br>
          <br></br>
          Fully accessible formula calculator including brackets and powers.
          Built in vanilla JS.
        </p>
        <a
          href="https://github.com/tacotoemeck/FaC-Calculator"
          className="InnerBox__TextContent__link"
        >
          <GithubIcon
            mainColor="rgb(119, 79, 56)"
            className="projectSVGIcons"
          />
          View on github
        </a>
        <hr className="Projects__hr" />
        <h3 className="InnerBox__TextContent__title">FAC19 Project Gallery</h3>
        <p className="InnerBox__TextContent__paragraph justifySpan">
          <b>Node, PostgreSQL, JavaScript</b>
          <br></br>
          <br></br>
          Application to store and display all of the project made by our
          Founders and Coders cohort. It uses bcrypt authentication to allow an
          admin user to add/or delete projects for chosen weeks. Decent custom
          js form validation and no framework NodeJS server are the highlights.
        </p>
        <a
          href="https://github.com/tacotoemeck/project_board_fac19"
          className="InnerBox__TextContent__link"
        >
          <GithubIcon
            mainColor="rgb(119, 79, 56)"
            className="projectSVGIcons"
          />
          View on github
        </a>
        <hr className="Projects__hr" />
        <h3 className="InnerBox__TextContent__title">Pomodoro Timer</h3>
        <p className="InnerBox__TextContent__paragraph justifySpan">
          <b>Vanilla JavaScript</b>
          <br></br>
          <br></br>
          Fully functional front-end application for Pomodoro technique
          tracking. Although it was my first application made in early days of
          my coding journey, it has a decent functionallity, sounds and is
          proudly made in vanilla JS.
        </p>
        <a
          href="https://github.com/tacotoemeck/Pomodoro-Clock-Beta"
          className="InnerBox__TextContent__link"
        >
          <GithubIcon
            mainColor="rgb(119, 79, 56)"
            className="projectSVGIcons"
          />
          View on github
        </a>
        <hr className="Projects__hr" />
        <h3 className="InnerBox__TextContent__title">Various</h3>
        <p className="InnerBox__TextContent__paragraph justifySpan">
          <b>JavaScript, HTML, CSS, React</b>
          <br></br>
          <br></br>
          Over the time I have built 100s of practice projects, you can view
          some of the on my{" "}
          <a href="https://codepen.io/tacotomek"> CodePen profile</a> or my{" "}
          <a href="">GitHub account</a>.
        </p>
        <hr className="Projects__hr" />
      </div>
    </section>
  );
}

export default Projects;
