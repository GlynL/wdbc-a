import React, { Component } from "react";

class NewTodoForm extends Component {
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
    this.props.handleSubmit(this.state.task);
    this.setState({ task: "" });
    this.props.history.push("/todos");
  }

  handleChange(e) {
    this.setState({ task: e.target.value });
  }

  render() {
    return (
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
    );
  }
}

export default NewTodoForm;
