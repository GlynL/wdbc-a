import React from "react";

const TodoList = props => (
  <div className="todo-content">
    {props.todos.map((todo, i) => <li key={i}>{todo}</li>)}
  </div>
);

export default TodoList;
