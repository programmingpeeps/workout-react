import React from 'react'
import PropTypes from 'prop-types'
import ExerciseList from './ExerciseList'

const Workout = (workout) => {
  return (
    <div className="workout">
        <p className="workout-name">{ workout.name }</p>
        <ExerciseList exercises={workout.exercises} />
    </div>
  )
}

Workout.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  exercises: PropTypes.array.isRequired
}

export default Workout