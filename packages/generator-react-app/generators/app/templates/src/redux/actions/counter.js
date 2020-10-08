import { createActions } from 'redux-actions';

const actions = createActions({
  INCREMENT: (amount = 1) => ({ amount }),
  DECREMENT: (amount = 1) => ({ amount: -amount }),
});

export default actions;
