import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        {
          name: "Tim",
          hobbies: ["sailing", "react"]
        },
        {
          name: "Matt",
          hobbies: ["math", "d3"]
        },
        {
          name: "Colt",
          hobbies: ["css", "hiking"]
        },
        {
          name: "Elie",
          hobbies: ["music", "es2015"]
        }
      ]
    };

    const randomInstructorIdx = Math.floor(
      Math.random() * this.state.instructors.length
    );
    const randomInstructor = this.state.instructors[randomInstructorIdx];
    const randomHobbyIdx = Math.floor(
      Math.random() * Object.keys(randomInstructor).length
    );

    // iterate over w/ map and return new - not modifying state
    let instructors = this.state.instructors.map((instructor, i) => {
      if (i === randomInstructorIdx) {
        // filter and return new array - not modifyign state
        const hobbies = instructor.hobbies.filter(
          (hobby, i) => i !== randomHobbyIdx
        );
        // spread for copy of instructor object - not modifying state
        return { ...instructor, hobbies };
      }
      return instructor;
    });
    // let newInstructors = [...this.state.instructors];
    // const hobbies = newInstructors[randomInstructorIdx].hobbies.filter(
    //   (hobby, i) => i !== randomHobbyIdx
    // );
    // newInstructors[randomInstructorIdx] = {
    //   ...newInstructors[randomInstructorIdx]
    // };

    // newInstructors[randomInstructorIdx].hobbies = [
    //   ...newInstructors[randomInstructorIdx].hobbies
    // ];
    // newInstructors[randomInstructorIdx].hobbies = hobbies;

    setTimeout(() => {
      this.setState({ instructors });
    }, 2000);
  }
  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <li key={index}>
        <h3>{instructor.name}</h3>
        <h4>Hobbies: {instructor.hobbies.join(", ")}</h4>
      </li>
    ));
    return (
      <div className="App">
        <ul>{instructors}</ul>
      </div>
    );
  }
}

export default App;
