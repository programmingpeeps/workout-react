export const saveWorkout = workout => {
  return {
    type: 'ADD_WORKOUT',
    payload: workout
  }
}