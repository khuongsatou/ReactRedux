import React, {Component} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  FlatList,
} from 'react-native';
import {Container, Content, Button, Text} from 'native-base';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import AddContainer from '../containers/AddContainer';
import TaskListContainer from '../containers/TaskListContainer';
export default class TaskManagerComponent extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Content style={{flex: 1, height: screenHeight}}>
          <AddContainer />
          <TaskListContainer />
        </Content>
      </Container>
    );
  }
}
