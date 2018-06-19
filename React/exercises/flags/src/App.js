import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import GameBox from "./GameBox";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <GameBox />
      </div>
    );
  }
}

export default App;
