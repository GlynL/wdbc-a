import React from "react";

const TodoItem = props => (
  <li>
    <span
      style={{ textDecoration: props.completed ? "line-through" : "none" }}
      onClick={props.onToggle}
    >
      {props.name}
    </span>
    <span onClick={props.onDelete}> X </span>
  </li>
);

export default TodoItem;
