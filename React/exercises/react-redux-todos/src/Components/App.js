import React, { Component } from "react";
import "../Styles/App.css";
import TodoList from "./TodoList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>TodoList</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
