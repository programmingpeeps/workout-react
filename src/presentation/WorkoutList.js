import React from 'react'
import PropTypes from 'prop-types'
import Workout from './Workout'

const WorkoutList = ({ workouts }) => {
  let workoutsYall = [];
  for (let workoutId in workouts.byId) {
    workoutsYall.push(
      {
        id: workoutId,
        ...workouts.byId[workoutId]
      }
    );
  }
  return (
    workoutsYall.map(w => {
      return <Workout key={w.id} {...w} />
    })
  )
}

WorkoutList.propTypes = {
  workouts: PropTypes.object.isRequired
  //onClick: PropTypes.func.isRequired
}

export default WorkoutList