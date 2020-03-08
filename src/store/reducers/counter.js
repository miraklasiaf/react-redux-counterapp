import * as types from '../actions/actionTypes';
import { updatedObject } from '../utility'

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default: return state;
    case types.INCREMENT:
      return updatedObject(state, { counter: state.counter + 1 });
    case types.DECREMENT:
      return updatedObject(state, { counter: state.counter - 1 });
    case types.ADDER:
      return updatedObject(state, { counter: state.counter + action.payload });
    case types.SUBSTRACT:
      return updatedObject(state, { counter: state.counter - action.payload });
  }
};

export default reducer;
