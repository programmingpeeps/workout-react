import { combineReducers } from 'redux'
import workouts from './workouts'

const workoutApp = combineReducers({
  workouts
})

//    Mon 10/9  [workout]
//    Bench [exercise] 100x5 [set] 100x5 100x7
//    Chinups 100x5 100x5 100x8
//    Shoulder press 80x5 80x5 80x6
//    20min cardio

export default workoutApp
