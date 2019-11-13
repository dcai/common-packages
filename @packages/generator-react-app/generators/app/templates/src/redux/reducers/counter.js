import { combineActions, handleActions } from 'redux-actions';
import { counterActions } from '../actions';

const { increment, decrement } = counterActions;

const defaultState = { counter: 0 };

const counter = handleActions(
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

export default counter;
