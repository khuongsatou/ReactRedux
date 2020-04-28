import React, {Component} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import {receive_helloworld, request_helloworld} from './actions';
class Home extends Component {
  state = {};
  render() {
    const {info} = this.props.helloworld;
    const infor = info ? info.page : 0;
    return (
      <SafeAreaView style={{flex: 1}}>
        <View>
          <Text>{infor}</Text>
          <TouchableOpacity
            onPress={() => this.props.addReceiveHelloWorld('Số Khác')}>
            <Text>OnPress</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.addRequestHelloWorld()}>
            <Text>OnPress</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
  componentDidMount() {
    this.props.addRequestHelloWorld();
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {helloworld: state};
};
const mapDispatchToProps = dispatch => {
  return {
    addReceiveHelloWorld: text => dispatch(receive_helloworld(text)),
    addRequestHelloWorld: () => dispatch(request_helloworld()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
