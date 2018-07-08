import React, { Component } from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import { addTodo, removeTodo, getTodos } from "../Actions/actionCreators";
import { Route } from "react-router-dom";
import NewTodoForm from "./NewTodoForm";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(val) {
    this.props.addTodo(val);
  }

  removeTodo(id) {
    this.props.removeTodo(id);
  }

  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    let todos = this.props.todos.map(task => (
      <Todo
        key={task._id}
        task={task.task}
        removeTodo={this.removeTodo.bind(this, task._id)}
      />
    ));
    return (
      <div>
        <Route
          path="/todos/new"
          component={props => (
            <NewTodoForm {...props} handleSubmit={this.handleAdd} />
          )}
        />
        <Route exact path="/todos" component={() => <div>{todos}</div>} />
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    todos: reduxState.todos
  };
}

export default connect(
  mapStateToProps,
  { addTodo, removeTodo, getTodos }
)(TodoList);
