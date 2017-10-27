import React from 'react'
import PropTypes from 'prop-types'
import SetList from './SetList'
import moment from 'moment'

const Exercise = (exercise) => {
  return (
    <div className="exercise">
        <p className="exercise-date">{ moment(exercise.date).format("L") }</p>
        <SetList sets={ exercise.sets } />
    </div>
  )
}

Exercise.propTypes = {
  id: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  sets: PropTypes.array.isRequired
}

export default Exercise