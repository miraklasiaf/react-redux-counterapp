import * as types from "../actions";

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default: return state;
    case types.ADD_RESULT:
      // Immutable way using concat instead push() and splice()
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: action.result
        })
      };
    case types.DELETE_RESULT:
      // const id = 2;
      // const newResult = [...state.results];
      // newResult.splice(id, 1);
      // Immutable way
      const newArray = state.results.filter(result => result.id !== action.id);
      return { ...state, results: newArray };
  }
};

export default reducer;