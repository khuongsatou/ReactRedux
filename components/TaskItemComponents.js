import React, {Component} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {Container, Content, Button, Text} from 'native-base';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class AddComponents extends Component {
  state = {};
  render() {
    return (
      <TouchableOpacity
        style={{
          height: 50,
          borderWidth: 0.3,
          marginTop: 10,
          marginHorizontal: 16,
        }}>
        <Text style={{fontSize: 20, padding: 10, color: '#5f5f5f'}}>
          {this.props.item.taskName}
        </Text>
      </TouchableOpacity>
    );
  }
}
