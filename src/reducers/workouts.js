const initState = [
    {id: 1, name: 'P90MisutoWolf', exercises: [
      {id: 1, date: new Date(2017, 10, 1), sets: [
        { id: 1, reps: 10, weight: 45 },
        { id: 2, reps: 20, weight: 55 }
      ]}
    ]},
    {id: 2, name: 'EnduroMax', exercises: []},
    {id: 3, name: 'There\'s Ultimate Gains Guide', exercises: []}];

const workouts = (state = initState, action) => {
    switch (action.type) {
      case 'ADD_WORKOUT':
        return [
          ...state,
          {
            id: action.id,
            name: action.name,
            exercises: []
          }
        ]
      default:
        return state
    }
  }
  
  export default workouts