const initState = [
  {
    id: 1,
    date: "2017-11-14",
    name: "tape_speed's debugger curls",
    weight: 100,
    reps: 5
  },
  {
    id: 2,
    date: "2017-11-14",
    name: "MisutoWolf Squats",
    weight: 50,
    reps: 10
  },
  {
    id: 3,
    date: "2017-11-14",
    name: "kensodev PS Quads",
    weight: 200,
    reps: 4
  }
];

const workouts = (state = initState, action) => {
  switch (action.type) {
    case "ADD_WORKOUT":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default workouts;
