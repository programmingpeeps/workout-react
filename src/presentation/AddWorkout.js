import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { saveWorkout } from "../actions";

class AddWorkoutComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "tape_speed's debugger curls",
      date: "2017-11-14",
      reps: 0,
      weight: 0.0
    };

    this.handleKraken = this.handleKraken.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleKraken(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    this.props.saveWorkout(this.state);
    event.preventDefault();
  }

  render() {
    const exercises = [
      "tape_speed's debugger curls",
      "MisutoWolf Squats",
      "kensodev PS Quads"
    ];
    const exercisesOptions = exercises.map((val, i) => {
      return (
        <option key={i} val={val}>
          {val}
        </option>
      );
    });
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Exercise:
          <select name="name" onChange={this.handleKraken}>
            {exercisesOptions}
          </select>
        </label>
        <label>
          Reps:
          <input
            type="text"
            name="reps"
            value={this.state.reps}
            onChange={this.handleKraken}
          />
        </label>
        <label>
          Weight:
          <input
            type="text"
            name="weight"
            value={this.state.weight}
            onChange={this.handleKraken}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const mapDispatchToProps = {
  saveWorkout
};

export default connect(undefined, mapDispatchToProps)(AddWorkoutComponent);
