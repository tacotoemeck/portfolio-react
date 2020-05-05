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
        <TwitterIcon />
        <LinkedinIcon />
        <GithubSquareIcon />
      </div>
    </div>
  );
}

export default FooterComponent;
