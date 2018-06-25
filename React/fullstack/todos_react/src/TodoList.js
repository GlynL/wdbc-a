import React, { Component } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import * as apiCalls from "./api";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
  }

  componentDidMount() {
    this.loadTodos();
  }

  async loadTodos() {
    const todos = await apiCalls.getTodos();
    this.setState({ todos });
  }

  async addTodo(todo) {
    const newTodo = await apiCalls.createTodo(todo);
    this.setState(prevState => ({ todos: [...prevState.todos, newTodo] }));
  }

  async deleteTodo(id) {
    await apiCalls.deleteTodo(id);
    const todos = this.state.todos.filter(todo => todo._id !== id);
    this.setState({ todos });
  }

  async toggleTodo(todo) {
    const updatedTodo = await apiCalls.toggleTodo(todo);
    const todos = this.state.todos.map(item => {
      return item._id === updatedTodo._id
        ? { ...item, completed: !item.completed }
        : item;
    });
    this.setState({ todos });
  }

  render() {
    const todos = this.state.todos.map(todo => (
      <TodoItem
        key={todo._id}
        {...todo}
        onDelete={this.deleteTodo.bind(this, todo._id)}
        onToggle={this.toggleTodo.bind(this, todo)}
      />
    ));
    return (
      <div>
        <h1>TodoList component</h1>
        <TodoForm addTodo={this.addTodo} />
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default TodoList;
