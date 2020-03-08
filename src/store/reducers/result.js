import * as types from '../actions/actionTypes';
import { updatedObject } from '../utility'

const initialState = {
  results: []
};

const deleteResult = (state, action) => {
  const newArray = state.results.filter( result => result.id !== action.id );
  return updatedObject(state, { results: newArray });
}

// Transforming logic can put at reducer *BEST PRACTICE*
const reducer = (state = initialState, action) => {
  switch (action.type) {
    default: return state;
    case types.ADD_RESULT:
      return updatedObject(state, { results: state.results.concat({id: new Date(), value: action.result }) });
    case types.DELETE_RESULT: return deleteResult(state, action)
  }
};

export default reducer;
