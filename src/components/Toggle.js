import React, {Component} from 'react';
import {View, SafeAreaView} from 'react-native';
import {Button, Text} from 'native-base';
export default class Toggle extends Component {
  state = {
    type: 'start',
  };
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>456</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Button
              style={{
                backgroundColor:
                  this.state.type === 'start'
                    ? 'red'
                    : this.state.type === 'left'
                    ? 'violet'
                    : 'red',
              }}
              onPress={() => this.setState({type: 'left'})}>
              <Text style={{color: '#fff'}}>+</Text>
            </Button>
          </View>
          <View style={{width: 10}} />
          <View style={{flex: 1}}>
            <Button
              style={{
                backgroundColor:
                  this.state.type === 'start'
                    ? 'red'
                    : this.state.type === 'right'
                    ? 'violet'
                    : 'red',
              }}
              onPress={() => this.setState({type: 'right'})}>
              <Text style={{color: '#fff'}}>-</Text>
            </Button>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
