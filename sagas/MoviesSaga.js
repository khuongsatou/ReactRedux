import {
  FETCH_FAILED,
  FETCH_SUCCESS,
  FETCH_MOVIES,
  ADD_MOVIES,
} from '../actions/actionTypes';

import {put, takeLatest} from 'redux-saga/effects';
import {Api} from './Api';
function* fetchMovies() {
  console.log('fetchMovies');
  try {
    const receivedMovies = yield Api.getMoviesFormApi();
    console.log(receivedMovies);
    //Dispatch Action
    yield put({
      type: FETCH_SUCCESS,
      receivedMovies: receivedMovies,
    });
  } catch (error) {
    yield put({
      type: FETCH_FAILED,
      error,
    });
  }
}
export function* watchFetchMovies() {
  console.log('watchFetchMovies');
  yield takeLatest(FETCH_MOVIES, fetchMovies);
}
