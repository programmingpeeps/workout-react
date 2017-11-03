import React from 'react'
import PropTypes from 'prop-types'
import Exercise from './Exercise'
import { connect } from 'react-redux'

const ExerciseList = ({ exercises }) => {
  let exercisesYall = [];
  for (let exerciseId in exercises.byId) {
    exercisesYall.push(
      {
        id: exerciseId,
        ...exercises.byId[exerciseId]
      }
    );
  }
  return (
    exercisesYall.map(e => {
      return <Exercise key={e.id} {...e} />
    })
  )
}

ExerciseList.propTypes = {
  exercises: PropTypes.object.isRequired
  //onClick: PropTypes.func.isRequired
}


const mapStateToProps = state => {
  return {
    exercises: state.exercises
  }
}

export default connect(
  mapStateToProps
)(ExerciseList);