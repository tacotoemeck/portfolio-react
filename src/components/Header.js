import React from "react";
import ButtonLink from "./ButtonLink";
import "./Header.css";

function Header({ formDisplay, setFormDisplay }) {
  return (
    <div className="Header">
      <div className="Header__personalInfo">
        <img
          className="Header__personalInfo__img"
          src={require("../img/tom.jpg")}
          alt="Tom Wagner cartoon"
        />
        <div className="Header__personalInfo__details">
          <h2 className="Header__personalInfo__details__name">Tom Wagner</h2>
          <h3 className="Header__personalInfo__details__title">
            Full-Stack Developer
          </h3>
        </div>
      </div>
      <div className="header__buttons">
        {/* need to create button functionality, it will take a path as prop */}
        {/* will open a pop up contact form with good validation  */}
        <ButtonLink
          value="Contact Me"
          onClick={() => setFormDisplay(!formDisplay)}
        />
        {/* will open a pop up window with cv inside  */}
        <ButtonLink value="View CV" />
      </div>
    </div>
  );
}

export default Header;
