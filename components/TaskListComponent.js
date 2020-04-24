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
import TaskItemContainer from '../containers/TaskItemContainer';
export default class TaskListComponent extends Component {
  state = {};
  render() {
    //alert(JSON.stringify(this.props.tasks));
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={this.props.tasks}
          renderItem={({item, index}) => {
            return <TaskItemContainer {...item} />;
          }}
          keyExtractor={item => item.taskName.toString()}
        />
      </View>
    );
  }
}
