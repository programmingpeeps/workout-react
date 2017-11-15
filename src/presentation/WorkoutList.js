import React from 'react'
import PropTypes from 'prop-types'
import Workout from './Workout'

const WorkoutList = ({ workouts }) => {
  return (
    workouts.map(w => {
      return <Workout key={w.id} {...w} />
    })
  )
}

WorkoutList.propTypes = {
  workouts: PropTypes.object.isRequired
  //onClick: PropTypes.func.isRequired
}

export default WorkoutList