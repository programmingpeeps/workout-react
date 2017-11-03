import { combineReducers } from 'redux';

const initState = {
  byId: {
    1: { date: new Date(2017, 10, 1), reps: 5, weight: 100.5 },
    2: { date: new Date(2017, 10, 1), reps: 5, weight: 100.5 },
    3: { date: new Date(2017, 10, 1), reps: 6, weight: 100.5 }
  },
  allIds: [1,2,3]
};

function addSetEntry(state, action) {
  const {payload} = action;
  const {setId, date, reps, weight} = payload;

  // Create our new Comment object
  const set = {id: setId, date: date, reps: reps,
     weight: weight};

  // Insert the new Comment object into the updated lookup table
  return {
      ...state,
      [setId] : set
  };
}

function setsById(state = initState, action) {
  switch(action.type) {
      case "ADD_SET" : return addSetEntry(state, action);
      default : return state;
  }
}


function addSetId(state, action) {
  const {payload} = action;
  const {setId} = payload;
  // Just append the new Set's ID to the list of all IDs
  return state.concat(setId);
}

function allSets(state = [], action) {
  switch(action.type) {
      case "ADD_SET" : return addSetId(state, action);
      default : return state;
  }
}

export default setsById