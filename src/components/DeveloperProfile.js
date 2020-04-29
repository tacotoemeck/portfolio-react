import React from "react";
import "./DeveloperProfile.css";

function DeveloperProfile(props) {
  return (
    <section className="DeveloperProfile">
      <h3 className="DeveloperProfile__title">Stack</h3>
      <p className="DeveloperProfile__text">Frontend</p>
      <ul className="DeveloperProfile__list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Vue</li>
        <li>jQuery</li>
      </ul>
      <p className="DeveloperProfile__text">Backend</p>
      <ul className="DeveloperProfile__list">
        <li>Node</li>
        <li>PostgreSQL</li>
        <li>Express</li>
        <li>MongoDB</li>
      </ul>
    </section>
  );
}

export default DeveloperProfile;
