import React from "react";
import "./Guesses.css";

const Guesses = props => {
  const choices = props.options.map((flag, idx) => {
    return [
      <input
        key={`input-${flag.name}`}
        type="radio"
        name="flag"
        value={flag.name}
        id={flag.name}
        onChange={props.handleChange}
      />,
      <label
        key={`label-${flag.name}`}
        className="guess-form__label"
        htmlFor={flag.name}
      >
        {flag.name}
      </label>
    ];
  });

  if (props.correctGuess === "guessing") {
    return (
      <form className="guess-form" onSubmit={props.handleSubmit}>
        {choices}
        <button>Guess</button>
      </form>
    );
  } else {
    return (
      <div className="guess-result">
        <p>
          {props.guess}:{" "}
          {props.correctGuess ? "Correct!" : `Wrong! It is ${props.flag}`}
        </p>
        <button onClick={props.handleNew}>New</button>
      </div>
    );
  }
};

export default Guesses;
