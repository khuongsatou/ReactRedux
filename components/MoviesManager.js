import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import MoviesContainer from '../containers/MoviesContainer';

export default class MoviesManager extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <MoviesContainer />
      </SafeAreaView>
    );
  }
}
