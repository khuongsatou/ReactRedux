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
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers';
import {InputComponent} from './components/InputComponent';
import {CounterComponent} from './components/CounterComponent';
import Reactotron from './Reactotron';
const store = createStore(allReducers, Reactotron.createEnhancer());

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <CounterComponent />
    </Provider>
  );
};

export default App;
