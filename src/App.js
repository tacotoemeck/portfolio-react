import React, { useState } from "react";
import Header from "./components/Header";
import CardBox from "./components/CardBox";
import CardBoxSlider from "./components/CardBoxSlider";
import FooterComponent from "./components/Footer";
import ContactForm from "./components/ContactForm";
import CV from "./components/CV/CV";
import "./App.css";

// import SVG icon components
import JavaScriptIcon from "./img/javascript";
import ReactIcon from "./img/react";
import PostgreSQLIcon from "./img/postgresql";
import NodeIcon from "./img/nodejs-2";
import SchoolIcon from "./img/school";
import HireMe from "./img/work";
import WorkPerson from "./img/workperson";

// Content of Cards ( inner )
import DeveloperProfile from "./components/DeveloperProfile";
import Education from "./components/Education";
import HireMeComponent from "./components/HireMe";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";

const colors = {
  main: "rgb(119, 79, 56)",
  white: "rgb(255,255,255)",
};

function App() {
  const [formDisplay, setFormDisplay] = useState(false);
  const [CVDisplay, setCVDisplay] = useState(false);

  // const showForm = () => {
  //   setFormDisplay(!formDisplay);
  // };

  return (
    <div>
      <div className="parallax-wrapper">
        <div className="App">
          <header className="App-header">
            <img
              className="App-header_img"
              src={require("./img/trees.jpeg")}
              alt="background forest"
            />
            <Header
              formDisplay={formDisplay}
              setFormDisplay={setFormDisplay}
              CVDisplay={CVDisplay}
              setCVDisplay={setCVDisplay}
            />
          </header>
          <main className="mainBody">
            <div className="ContactFormCotainer">
              {formDisplay && <ContactForm setFormDisplay={setFormDisplay} />}
            </div>
            <div className="CVContainer">
              {CVDisplay && <CV setCVDisplay={setCVDisplay} />}
            </div>

            <CardBox
              buttonValue="more skills"
              icons={[
                <JavaScriptIcon
                  className="CardBoxSVGStack"
                  mainColor={colors.white}
                  secondayColor={colors.main}
                />,
                <ReactIcon mainColor={colors.main} />,
                <PostgreSQLIcon mainColor={colors.main} />,
                <NodeIcon mainColor={colors.main} />,
              ]}
              subtitle="Developer Profile"
              subtitleClass=""
              bottomBackground="white"
              innerBoxContent={<DeveloperProfile />}
            />
            <CardBox
              buttonValue="More projects"
              title="Projects"
              image={require("./img/tools.jpeg")}
              bottomBackground="brown"
              subtitle="Projects"
              innerBoxContent={<Projects />}
            />
            <CardBox
              buttonValue="more education"
              topBackground="brown"
              subtitle="Education & Courses"
              bottomBackground="white"
              icons={[<SchoolIcon />]}
              innerBoxContent={<Education />}
            />
            <CardBox
              buttonValue="What am I looking for?"
              icons={[<HireMe color={colors.main} />]}
              subtitle="Hire Me"
              bottomBackground="brown"
              innerBoxContent={<HireMeComponent />}
            />
            <CardBox
              buttonValue="See my experience"
              topBackground="brown"
              bottomBackground="white"
              subtitle="Work Experience"
              icons={[<WorkPerson color={colors.white} />]}
              innerBoxContent={<WorkExperience />}
            />
            <CardBoxSlider />

            {/* <CardBox
              buttonValue="See more "
              image={require("./img/me.jpg")}
              subtitle="About Me" // bottom part title
              // subtitleClass="title" // if bottom title is the "only" title - add title class
              bottomBackground="white" // sets the background of the bottom part of the Outer Container
              innerBoxContent={""} // pass on a component to be monted in the Inner Container Box
            /> */}
            {/* <CardBox buttonValue="See more" />
            <CardBox buttonValue="See more" /> */}
          </main>
          <footer className="footer">
            <FooterComponent />
          </footer>
        </div>
      </div>
      <div className="regular-wrapper"></div>
    </div>
  );
}

export default App;
