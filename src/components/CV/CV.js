import React, { useState, useRef } from "react";
import "./CV.css";
import useOnClickOutside from "../../utils/helpers.js";

// SVG
import TwitterIcon from "../../img/twitter";
import LinkedinIcon from "../../img/linkedin";
import GithubSquareIcon from "../../img/githubSquare";
import GithubIcon from "../../img/github";

const colors = {
  main: "rgb(119, 79, 56)",
  white: "rgb(255,255,255)",
};

function CV(props) {
  const ref = useRef();
  // console.log(ref);
  useOnClickOutside(ref, () => {
    console.log("clicked outside");
    props.setCVDisplay(false);
  });

  return (
    <div className="CV" ref={ref}>
      <div className="CV__container">
        <div className="resume__top-section">
          <div className="resume__top-section__controls">
            <button className="resume__top-section__control-download">
              DOWNLOAD
            </button>
            <button
              className="resume__top-section__control-close"
              aria-label="Close this window"
            >
              X
            </button>
          </div>
          <h1 className="resume__top-section__resume__name">Tomasz Wagner</h1>
          <div className="resume__top-section__links">
            <div className="resume__top-section__links--link">
              <GithubSquareIcon />
              <p className="resume__top-section__links--link__text">
                tacotoemeck
              </p>
            </div>
            <div className="resume__top-section__links--link">
              <LinkedinIcon mainColor={colors.main} />
              <p className="resume__top-section__links--link__text">
                Tomasz Wagner
              </p>
            </div>
            <div className="resume__top-section__links--link">
              <TwitterIcon />
              <p className="resume__top-section__links--link__text">
                TomaszWagner1
              </p>
            </div>
          </div>
        </div>
        <h2 className="resume__personal-info">Personal Information</h2>
        <hr />
        <address className="resume__personal-info__Content">
          <div class="addressContent">London</div>
          <div class="addressContent">SE17</div>
          <div class="addressContent">07817251870</div>
          <div class="addressContent">wagner.tomek@gmail.com</div>
        </address>
        <h2 className="resume__work-experience">Work Experience</h2>
        <hr />
        <h3 className="resume__jobs">Frontend Developer - Freelance </h3>
        <h5 className="resume__jobs__dates">June 2019 - Present</h5>
        <ul className="resume__jobs__duties">
          <li>
            Developed and deployed number of full stack applications using
            React, Node, Express, JavaScript, jQuery, MongoDB and PostgreSQL
          </li>
          <li>
            Built a good level of Vanilla JavaScript, HTML and CSS by making
            interactive, visually attractive and fully functional front-end
            applications and websites
          </li>
          <li>Heroku and Netlifly</li>
          <li>
            Regularly attended industry meetups, completed multiple courses and
            generally dedicated all my time to learning new concepts and staying
            up to date via forums, podcasts, social media and blogs
          </li>
          <li>
            Active member of Founders and Coders and Free Code Camp Community
          </li>
          <li>Performed small jobs within Wordpress, Deployment, Design etc</li>
        </ul>
        <h3 className="resume__jobs">
          Full Stack Developer - Founders and Coders
        </h3>
        <h5 className="resume__jobs__dates">March 2020 - Present</h5>
        <ul className="resume__jobs__duties">
          <li>
            Student and mentor of one of the top full stack bootcamps in London
          </li>
          <li>
            Project based learning using CSS, HTML, Vanilla JS, React, NodeJS,
            Express, PostgreSQL
          </li>
          <li>
            Agile methodology, weekly sprints, kanban board planning, git and
            github, pair programming
          </li>
          <li>Building full stack applications</li>
          <li>Testing and deployment ( also CLI )</li>
          <li>Mentoring of new students during weekly meetups</li>
        </ul>
        <h3 className="resume__jobs">Founder - Maria Sabina</h3>
        <h5 className="resume__jobs__dates">May 2015 June 2019</h5>
        <ul className="resume__jobs__duties">
          <li>
            I designed our website and maintained a social media presence and
            advertising.{" "}
          </li>
          <li>
            I have built, ran and sold a small street-food restaurant. I covered
            all admin, finance, business development, people management/HR,
            marketing and supplier management with my partner covering the
            remaining.
          </li>
        </ul>
        <h3 className="resume__jobs">Recruiter - Sky plc</h3>
        <h5 className="resume__jobs__dates">September 2013 - June 2015</h5>
        <ul className="resume__jobs__duties">
          <li>I covered areas of Technology and then Sales and Marketing</li>
          <li>Managed multiple stakeholders and their expectations.</li>
          <li>
            Built a strong social media presence through LinkedIn, Twitter and
            Google Plus
          </li>
          <li>Managed candidates pre and post onboarding</li>
          <li>
            Built a strong understanding of corporate technology sector and some
            Agile practices
          </li>
        </ul>
        <h3 className="resume__jobs">
          Business Development Executive - GBI Research
        </h3>
        <h5 className="resume__jobs__dates">March 2013 - September 2013</h5>
        <h3 className="resume__jobs">
          Sales Development Executive - MSC Cruises
        </h3>
        <h5 className="resume__jobs__dates">May 2010 - June 2015</h5>
        <h2 className="resume__skills">Skills</h2>
        <hr />
        <div className="resume__skills_list">
          <h3>FRONT:</h3>
          CSS, HTML, JavaScript, React, Vue, jQuery, Bootstrap, Tailwind,
          Material UI, Wordpress;
        </div>
        <h3>BACK: </h3>NodeJS, Express, API's ( CRUD, RESTful ), SPA,
        PostgreSQL, MongoDB
        <h2 className="resume__education">Education</h2>
        <hr />
        <p>West London University, London - 2.1 BA(Hons) Business Studies</p>
        <p>Founders and Coders, London - 18 Week Full Stack Development</p>
        <hr />
        <div className="resume__top-section__controls">
          <a
            href={require("./TOM_WAGNER_CV.pdf")}
            download
            className="resume__top-section__control-download"
          >
            DOWNLOAD
          </a>
          <button
            className="resume__top-section__control-close"
            aria-label="Close this window"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}

export default CV;
