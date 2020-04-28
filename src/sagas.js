import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {
  REQUEST_HELLOWORLD,
  RECEIVE_HELLOWORLD,
  receive_helloworld,
  request_helloworld,
} from './actions';
import {fetchData} from './api';
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* helloWorld(action) {
  try {
    const data = yield call(fetchData);
    //const user = yield call(Api.fetchUser, action.payload.userId);
    yield put(receive_helloworld(data));
  } catch (e) {
    console.log(e);
    yield put({type: 'RECEIVE_HELLOWORLD', message: e.message});
  }
}

export default function* mySaga() {
  yield takeLatest('REQUEST_HELLOWORLD', helloWorld);
}
