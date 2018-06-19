import React, { Component } from "react";
import TodoItem from "./TodoItem";

const API_URL = "/api/todos";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    this.loadTodos();
  }

  loadTodos() {
    fetch(API_URL)
      .then(res => {
        if (!res.ok) throw new Error("Network resposne not ok");
        return res.json();
      })
      .then(data => this.setState({ todos: data }))
      .catch(err => err);
  }

  render() {
    const todos = this.state.todos.map(todo => (
      <TodoItem key={todo._id} {...todo} />
    ));
    return (
      <div>
        <h1>TodoList component</h1>;
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default TodoList;
