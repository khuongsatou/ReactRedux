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

export default class TaskItemComponent extends Component {
  state = {};
  render() {
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={{fontSize: 20, padding: 10, color: '#5f5f5f'}}>
            {this.props.taskName}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
