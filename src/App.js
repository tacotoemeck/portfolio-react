import React from "react";
import Header from "./components/Header";
import CardBox from "./components/CardBox";
import "./App.css";
import JavaScriptIcon from "./img/javascript";

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
              subtitle="About Me"
              subtitleClass="title"
            />
            <CardBox
              buttonValue="See more"
              icons={
                <JavaScriptIcon
                  className="CardBoxSVGStack"
                  mainColor={colors.white}
                  secondayColor={colors.main}
                />
              }
              subtitle="Developer Profile"
              subtitleClass=""
              bottomBackground="brown"
            />
            <CardBox buttonValue="See more" />
            <CardBox buttonValue="See more" />
            <CardBox buttonValue="See more" />
            <CardBox buttonValue="See more" />
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
