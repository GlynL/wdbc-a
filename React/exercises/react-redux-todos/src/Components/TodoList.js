import React, { Component } from "react";
import Todo from "./Todo";
import { connect } from "react-redux";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch({
      type: "ADD_TODO",
      task: this.state.task
    });
    this.setState({ task: "" });
  }

  handleChange(e) {
    this.setState({ task: e.target.value });
  }

  removeTodo(id) {
    this.props.dispatch({
      type: "REMOVE_TODO",
      id
    });
  }

  render() {
    let todos = this.props.todos.map((task, i) => (
      <Todo
        key={i}
        task={task.task}
        removeTodo={this.removeTodo.bind(this, task.id)}
      />
    ));
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task">Task</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="task"
            id="task"
            value={this.state.task}
          />
          <button>Add Todo</button>
        </form>
        <div>{todos}</div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    todos: reduxState.todos
  };
}

export default connect(mapStateToProps)(TodoList);
