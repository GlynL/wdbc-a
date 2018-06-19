import React, { Component } from "react";
import "./App.css";
import TodoList from "./TodoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInput: "",
      todos: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ todoInput: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      todos: [...this.state.todos, this.state.todoInput],
      todoInput: ""
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Simple Todo App</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            className="todo-input"
            autoComplete="off"
            type="text"
            name="newTodo"
            placeholder="What needs to be done?"
            value={this.state.todoInput}
            onChange={this.handleChange}
          />
          <button type="submit" className="save-button">
            SAVE
          </button>
        </form>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
