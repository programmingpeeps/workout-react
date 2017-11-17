import React from "react";
import PropTypes from "prop-types";
import ExerciseDay from "./ExerciseDay";
import _ from "lodash";

const WorkoutList = ({ workouts }) => {
  const groupByDate = _.groupBy(workouts, "date");
  return Object.entries(groupByDate).map(([key, value]) => {
    return <ExerciseDay key={key} name={key} date={key} sets={value} />
  });
}

WorkoutList.propTypes = {
  workouts: PropTypes.array.isRequired
};

export default WorkoutList;
