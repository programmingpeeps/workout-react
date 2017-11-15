import React from "react";
import PropTypes from "prop-types";
import Exercise from "./Exercise";
import _ from "lodash";

const WorkoutList = ({ workouts }) => {
  const groupEmUp = _.groupBy(workouts, "name");
  return Object.entries(groupEmUp).map(([key, value]) => (
    <Exercise key={key} name={key} sets={value} />
  ));
};

WorkoutList.propTypes = {
  workouts: PropTypes.array.isRequired
};

export default WorkoutList;
