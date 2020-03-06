import * as types from "../actions";

const initialState = {
  counter: 0
};

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
  }
};

export default reducer;
