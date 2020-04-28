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
import allReducers from './src/reducers/';
import createSagaMiddleware from 'redux-saga';
import mySaga from './src/sagas';
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = createStore(allReducers, applyMiddleware(sagaMiddleware));
import Home from './src/Home';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};
sagaMiddleware.run(mySaga);

export default App;
