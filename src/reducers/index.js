import { combineReducers } from 'redux'
import workouts from './workouts'

const workoutApp = combineReducers({
  workouts
})

export default workoutApp