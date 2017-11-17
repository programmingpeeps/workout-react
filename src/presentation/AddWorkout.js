import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { saveWorkout } from "../actions";
import moment from 'moment';

class AddWorkoutComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "tape_speed's debugger curls",
      date: "2017-11-14",
//      reps: 0,
//      weight: 0.0
    };
  }

  handleKraken = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    this.props.saveWorkout({...this.state,
      date: moment().format("YYYY-MM-DD")});
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
      <form onSubmit={this.handleSubmit} className="form-inline">
        <div className="form-group">
          <select name="name" onChange={this.handleKraken}
            className="form-control">
            {exercisesOptions}
          </select>
        </div>
        <div className="form-group">
          <input
            placeholder="reps"
            className="form-control"
            type="text"
            name="reps"
            value={this.state.reps}
            onChange={this.handleKraken}
          />
        </div>
        <div className="form-group">
          <input
            placeholder="weight"
            className="form-control"
            type="text"
            name="weight"
            value={this.state.weight}
            onChange={this.handleKraken}
          />
        </div>
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    );
  }
}

const mapDispatchToProps = {
  saveWorkout
};

export default connect(undefined, mapDispatchToProps)(AddWorkoutComponent);
