import React, {Component} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Dimensions,
  RefreshControl,
} from 'react-native';
import {Container, Content, Button, Text} from 'native-base';
import TaskItemComponents from './TaskItemComponents';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const data = [
  {
    id: 1,
    text: 'task 1',
  },
  {
    id: 2,
    text: 'task 2',
  },
  {
    id: 3,
    text: 'task 3',
  },
];
export default class TaskListComponents extends Component {
  state = {};

  render() {
    return (
      <View>
        <FlatList
          data={this.props.tasks}
          renderItem={({item}) => {
            console.log(item);
            return <TaskItemComponents item={item} />;
          }}
          keyExtractor={item => item.toString()}
        />
      </View>
    );
  }
}
