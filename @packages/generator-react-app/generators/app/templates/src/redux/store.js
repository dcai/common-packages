import createSagaMiddleware from 'redux-saga';
import { compose, applyMiddleware, createStore } from 'redux';
import { rootSaga } from './sagas';
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const defaultStore = {};
const store = createStore(
  rootReducer,
  defaultStore,
  composeEnhancers(applyMiddleware(...middlewares)),
);
sagaMiddleware.run(rootSaga);

export default store;
