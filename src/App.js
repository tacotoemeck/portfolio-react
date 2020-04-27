import React from "react";
import "./App.css";

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
          </header>
          <main className="mainBody">{/* components including  */}</main>
          <footer className="footer"></footer>
        </div>
      </div>
      <div className="regular-wrapper"></div>
    </div>
  );
}

export default App;
