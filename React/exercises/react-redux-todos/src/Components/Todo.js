import React from "react";

const Todo = props => (
  <li>
    {props.task} <button onClick={props.removeTodo}>X</button>
  </li>
);

export default Todo;
