import React, { Component } from "react";
import "../Styles/App.css";
import TodoList from "./TodoList";
import { Link, Route, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>TodoList</h1>
        <p>
          <Link to="/todos">See my Todos</Link>
        </p>
        <p>
          <Link to="todos/new">Add a New Todo</Link>
        </p>
        <Route path="/todos" component={TodoList} />
        <Route exact path="/" render={() => <Redirect to="/todos" />} />
      </div>
    );
  }
}

export default App;
