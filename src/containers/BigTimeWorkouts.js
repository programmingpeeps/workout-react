import { connect } from 'react-redux'
import WorkoutList from '../presentation/WorkoutList'

const mapStateToProps = state => {
  return {
    workouts: state.workouts
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

const BigTimeWorkouts = connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutList)

export default BigTimeWorkouts