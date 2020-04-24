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
//import AddComponents from './components/AddComponents';
import AddContainer from './containers/AddContainer';

const store = createStore(allReducers);

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <AddContainer />
    </Provider>
  );
};

export default App;
