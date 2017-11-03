import React from 'react'
import PropTypes from 'prop-types'
import SetList from './SetList'

const Exercise = (exercise) => {
  return (
    <div className="exercise">
      <p className="exercise-name">{ exercise.name }</p>
      <SetList setIds={ exercise.sets } />
    </div>
  )
}

Exercise.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  sets: PropTypes.array.isRequired
}

export default Exercise