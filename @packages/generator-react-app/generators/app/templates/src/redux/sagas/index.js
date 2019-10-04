import { all, select, takeEvery } from 'redux-saga/effects';

export function* rootSaga() {
  yield all([
    takeEvery('*', function* logger(action) {
      const state = yield select();
      console.info('saga', action, state);
    }),
  ]);
}
