import React, {Component} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Alert,
} from 'react-native';
import TaskListComponents from './TaskListComponents';
import {Container, Content, Button, Text} from 'native-base';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
console.disableYellowBox = true;
export default class AddComponents extends Component {
  state = {
    taskName: '',
  };

  render() {
    return (
      <Container>
        <Content style={{flex: 1, height: screenHeight}}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#f14843',
              height: screenHeight / 11,
              flexDirection: 'row',
            }}>
            <View
              style={{
                flexDirection: 'row-reverse',
                alignItems: 'center',
                flex: 1,
                width: screenWidth - 32,
                //backgroundColor: 'green',
              }}>
              <TextInput
                style={{
                  //flex: 1,
                  height: 50,
                  width: 200,
                  borderWidth: 1,
                  fontSize: 20,
                  borderColor: '#fff',
                  color: '#fff',
                  borderRadius: 10,
                  paddingLeft: 10,
                }}
                autoCapitalize="none"
                autoCorrect={false}
                value={this.state.taskName}
                placeholder="write..."
                placeholderTextColor="#fff"
                onChangeText={value => this.setState({taskName: value})}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
              }}>
              <Button
                //onPress={() => this.props.onClickAdd(this.state.taskName)}
                onPress={() => {
                  this.props.onClickAdd(this.state.taskName);
                  //Alert.alert(JSON.stringify(this.props.tasks));
                }}>
                <Text>Add</Text>
              </Button>
            </View>
          </View>
          <View>
            <TaskListComponents tasks={this.props.tasks} />
          </View>
        </Content>
      </Container>
    );
  }
}
