import React, { Component } from "react";
import Guesses from "./Guesses";
import Flag from "./Flag";
import "./GameBox.css";
import { RingLoader } from "react-spinners";

class GameBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allFlags: [],
      flags: [],
      selectedFlag: "",
      guess: "",
      correctGuess: "guessing",
      loading: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleNew = this.handleNew.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.selectedFlag.name === this.state.guess) {
      // handle correct choice
      this.setState({ correctGuess: true });
    } else {
      //  handle wrong choice
      this.setState({ correctGuess: false });
    }
  }

  handleChange(e) {
    this.setState({ guess: e.target.value });
  }

  handleNew(e) {
    e.preventDefault();
    this.setState({ correctGuess: "guessing" });
    this.selectFlags();
  }

  async componentDidMount() {
    const url = "https://restcountries.eu/rest/v2/all";
    const allFlags = await fetch(url)
      .then(res => res.json())
      .then(data => data)
      .catch(err => console.log(err));
    await this.setState({ allFlags });
    this.selectFlags();
  }

  selectFlags() {
    let rndNums = [];
    while (rndNums.length < 4) {
      const rndNum = Math.floor(Math.random() * this.state.allFlags.length);
      if (!rndNums.includes(rndNum)) rndNums.push(rndNum);
    }
    const rndFlags = rndNums.map(num => this.state.allFlags[num]);
    const selectedFlagIdx = Math.floor(Math.random() * rndFlags.length);
    const selectedFlag = rndFlags[selectedFlagIdx];
    this.setState({ flags: rndFlags, selectedFlag, loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="sweet-loading game-box">
          <RingLoader color={"#123abc"} loading={this.state.loading} />
        </div>
      );
    }
    return (
      <div className="game-box">
        <Guesses
          options={this.state.flags}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleNew={this.handleNew}
          correctGuess={this.state.correctGuess}
          guess={this.state.guess}
          flag={this.state.selectedFlag.name}
        />
        <Flag flag={this.state.selectedFlag.flag} />
      </div>
    );
  }
}

export default GameBox;
