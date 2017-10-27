import React from 'react'
import PropTypes from 'prop-types'
import Exercise from './Exercise'

const ExerciseList = ({ exercises }) => {
  return (
      exercises.map(e => {
          return <Exercise key={e.id} {...e} />
      })
  )
}

ExerciseList.propTypes = {
  exercises: PropTypes.array.isRequired
  //onClick: PropTypes.func.isRequired
}

export default ExerciseList