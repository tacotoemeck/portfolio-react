import React from "react";
import Header from "./components/Header";
import CardBox from "./components/CardBox";
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

const colors = {
  main: "rgb(119, 79, 56)",
  white: "rgb(255,255,255)",
};

function App() {
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
            <Header />
          </header>
          <main className="mainBody">
            <CardBox
              buttonValue="See more "
              image="https://images.unsplash.com/photo-1471115853179-bb1d604434e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              subtitle="About Me" // bottom part title
              // subtitleClass="title" // if bottom title is the "only" title - add title class
              bottomBackground="white" // sets the background of the bottom part of the Outer Container
              innerBoxContent={""} // pass on a component to be monted in the Inner Container Box
            />
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
            <CardBox
              buttonValue="See more"
              image="https://1.bp.blogspot.com/-JzExm5L22Zs/UVoxh6DfnrI/AAAAAAAAJCk/s12a2imZIu4/s1600/chef+chop+wide.gif"
            />
            <CardBox buttonValue="See more" />
            <CardBox buttonValue="See more" />
            <CardBox buttonValue="See more" />
          </main>
          <footer className="footer"></footer>
        </div>
      </div>
      <div className="regular-wrapper"></div>
    </div>
  );
}

export default App;
