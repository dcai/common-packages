import { combineActions, handleActions } from 'redux-actions';
import { increment, decrement } from '../actions';

const defaultState = { counter: 0 };

export const counter = handleActions(
  {
    [combineActions(increment, decrement)]: (
      state,
      { payload: { amount } },
    ) => {
      return { ...state, counter: state.counter + amount };
    },
  },
  defaultState,
);
