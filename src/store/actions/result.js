import * as actionTypes from "./actionTypes";

/*
 * action creators
 */
export const saveResult = res => {
    return {
        type: actionTypes.ADD_RESULT,
        result: res
    };
};

export const deleteResult = id => {
  return { type: actionTypes.DELETE_RESULT, id };
};

/*
 * Asynchronous Task - Redux Thunk
 */
export const addResult = res => {
  return (dispatch) => {
    setTimeout(() => {
    //   const oldCounter = getState().ctr.counter;
    //   console.log(oldCounter)
        dispatch(saveResult(res));
    }, 2000);
  };
};
