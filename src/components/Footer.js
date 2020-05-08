import React from "react";
import ReactIcon from "../img/react";
import TwitterIcon from "../img/twitter";
import LinkedinIcon from "../img/linkedin";
import GithubSquareIcon from "../img/githubSquare";
import "./Footer.css";

function FooterComponent(props) {
  return (
    <div className="Footer">
      <div className="Footer__madeInElement">
        Made in: <ReactIcon />
      </div>
      <div className="Footer__linksElement">
        <a
          href="https://twitter.com/TomaszWagner1"
          aria-label="Link to Tom's Twitter page"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/tomasz-wagner-29126931/"
          aria-label="Link to Tom's LinkedIn page"
        >
          <LinkedinIcon />
        </a>
        <a
          href="https://github.com/tacotoemeck"
          aria-label="Link to Tom's Github profile page"
        >
          <GithubSquareIcon />
        </a>
      </div>
    </div>
  );
}

export default FooterComponent;
