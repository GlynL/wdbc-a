import React, { Component } from "react";
import "./Box.css";

const Box = props => (
  <div
    className="box"
    onClick={props.handleGuess}
    style={{
      backgroundColor: props.active ? props.color : "grey"
    }}
    data-id={props.id}
  >
    {props.color}
  </div>
);

export default Box;
