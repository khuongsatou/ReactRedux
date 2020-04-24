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

const store = createStore(allReducers);
import TaskManagerComponent from './components/TaskManagerComponent';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <TaskManagerComponent />
    </Provider>
  );
};

export default App;
