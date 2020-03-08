import * as actionTypes from './actionTypes'

/*
 * action creators
 */
export const increment = () => {
  return { type: actionTypes.INCREMENT };
};

export const decrement = () => {
  return { type: actionTypes.DECREMENT };
};

export const adder = value => {
  return { 
      type: actionTypes.ADDER, 
      payload: value 
};
};

export const substract = value => {
  return { 
    type: actionTypes.SUBSTRACT, 
    payload: value 
  };
};
