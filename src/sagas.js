import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {
  REQUEST_HELLOWORLD,
  RECEIVE_HELLOWORLD,
  receive_helloworld,
  request_helloworld,
} from './actions';
import {fetchData} from './api';
function* helloWorld(action) {
  try {
    const data = yield call(fetchData);
    yield put(receive_helloworld(data));
  } catch (e) {
    console.log(e);
    yield put({type: 'RECEIVE_HELLOWORLD', message: e.message});
  }
}

export default function* mySaga() {
  yield takeLatest('REQUEST_HELLOWORLD', helloWorld);
}
