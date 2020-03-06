import * as types from './actions'

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      default: return state;
      case types.INCREMENT:
        return { ...state, counter: state.counter + 1 };
      case types.DECREMENT:
        return { ...state, counter: state.counter - 1 };
      case types.ADDER:
        return { ...state, counter: state.counter + action.payload };
      case types.SUBSTRACT:
        return { ...state, counter: state.counter - action.payload };
      case types.ADD_RESULT:
        // Immutable way using concat instead push() and splice()
        return {
          ...state,
          results: state.results.concat({
            id: new Date(),
            value: state.counter
          })
        };
      case types.DELETE_RESULT:
        // const id = 2;
        // const newResult = [...state.results];
        // newResult.splice(id, 1);
        // Immutable way
        const newArray = state.results.filter(
          result => result.id !== action.id
        );
        return { ...state, results: newArray };
    }
}

export default reducer;