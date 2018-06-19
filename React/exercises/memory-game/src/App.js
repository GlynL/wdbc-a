import React, { Component } from "react";
import "./App.css";
import Box from "./Box";

const NUM_BOX = 16;

class App extends Component {
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
    }
    return array;
  }

  constructor(props) {
    super(props);
    let colors = Array(NUM_BOX / 2)
      .fill()
      .map(() => {
        const rnd = Math.floor(Math.random() * this.props.allColors.length);
        return this.props.allColors[rnd];
      });
    colors = this.shuffleArray([...colors, ...colors]);
    const boxes = colors.map(color => ({ color, active: false }));
    this.state = {
      boxes,
      guess: "",
      prevGuess: {},
      guessing: false
    };

    this.handleGuess = this.handleGuess.bind(this);
  }

  handleGuess(e) {
    // current click - set guess and active box
    let boxes = [...this.state.boxes];
    const boxId = e.target.dataset.id;
    const guess = boxes[boxId].color;
    boxes[boxId] = { ...boxes[boxId], active: true };
    this.setState({ boxes, guess });

    // if guessing for match
    if (this.state.guessing) {
      // box & prev box hide color if guess is wrong
      setTimeout(() => {
        if (guess !== this.state.prevGuess.color) {
          boxes[boxId].active = false;
          boxes[this.state.prevGuess.id].active = false;
          this.setState({
            boxes,
            guess: ""
          });
        }
      }, 500);
    } else {
      this.setState({ prevGuess: { id: boxId, color: guess } });
    }

    // change guessing
    this.setState({ guessing: !this.state.guessing });
  }

  render() {
    return (
      <div className="box-grid">
        {this.state.boxes.map((box, i) => (
          <Box
            active={box.active}
            color={box.color}
            key={i}
            id={i}
            handleGuess={this.handleGuess}
          />
        ))}
      </div>
    );
  }
}

App.defaultProps = {
  allColors: [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "Darkorange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",
    "White",
    "WhiteSmoke",
    "Yellow",
    "YellowGreen"
  ]
};

export default App;
