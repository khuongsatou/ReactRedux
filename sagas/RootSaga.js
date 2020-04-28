import {all} from 'redux-saga/effects';
import {watchFetchMovies} from './MoviesSaga';
export default function* RootSaga() {
  console.log('runSagas');
  yield all([watchFetchMovies()]);
}
