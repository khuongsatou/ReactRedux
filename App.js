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
import allReducers from './src/redux/reducers';
import Toggle from '@Components/Toggle';
const store = createStore(allReducers);

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <View>
        <Text>123</Text>
        <Toggle />
      </View>
    </Provider>
  );
};

export default App;
