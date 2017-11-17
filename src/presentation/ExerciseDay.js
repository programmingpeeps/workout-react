import React from 'react'
import PropTypes from 'prop-types'
import Exercise from "./Exercise";
import _ from "lodash";

const ExerciseDay = (props) => {
  let groupByName = _.groupBy(props.sets, "name");
  console.log(groupByName);
  const exercises = Object.entries(groupByName).map(([key, value]) => (
    <Exercise key={key} name={key} sets={value} />
  ));
  return (
    <div>
      <h2>{ props.date }</h2>
      <div>{ exercises }</div>
    </div>
  );
}

ExerciseDay.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  sets: PropTypes.array.isRequired
}

export default ExerciseDay
