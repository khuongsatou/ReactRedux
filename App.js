/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers';
import MoviesManager from './components/MoviesManager';
import createSagaMiddleware from 'redux-saga';
import RootSaga from './sagas/RootSaga';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(allReducers, applyMiddleware(sagaMiddleware));
const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <MoviesManager />
    </Provider>
  );
};
sagaMiddleware.run(RootSaga);

export default App;
