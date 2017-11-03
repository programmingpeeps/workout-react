import { combineReducers } from 'redux';

const initState = {
  byId: {
    1: { name: "Bench", sets: [1,2,3] },
    2: { name: "Chinups", sets: [] },
    3: { name: "Shoulder press", sets: [] }
  },
  allIds: [1,2,3]
}

function addSet(state, action) {
  const {payload} = action;
  const {exerciseId, setId} = payload;

  // Look up the correct exercise, to simplify the rest of the code
  const exercise = state[exerciseId];

  return {
      ...state,
      // Update our Exercise object with a new "sets" array
      [exerciseId] : {
           ...exercise,
           sets : exercise.sets.concat(setId)             
      }
  };
}

function setsById(state = initState, action) {
  switch(action.type) {
      case "ADD_SET" : return addSet(state, action);
      default : return state;
  }
}

function allSets(state = initState, action) {
  // omitted - no work to be done for this example
  return state;
}

export default setsById