import React from 'react'
import PropTypes from 'prop-types'
import ExerciseList from './ExerciseList'

const Workout = (workout) => {
  return (
    <div className="workout">
        <p className="workout-name">{ workout.name }</p>
        <p className="workout-weight">{ workout.weight }</p>
        <p className="workout-reps">{ workout.reps }</p>
    </div>
  )
}

Workout.propTypes = {
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
  reps: PropTypes.number.isRequired
}

export default Workout