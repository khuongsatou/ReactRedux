import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import {Container, Content} from 'native-base';
export default class MoviesComponent extends Component {
  state = {
    newMovies: '',
    releaseYear: '',
  };
  render() {
    console.log(JSON.stringify(this.props.movies));
    //alert(this.props.movies);
    return (
      <Container>
        <Content style={{marginHorizontal: 16}} scrollEnabled={false}>
          <View style={{flex: 1}}>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 20, color: 'green'}}>
                Redux Saga tutorials
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 16}}>New Movies Information</Text>
            </View>
            <View
              style={{
                flex: 1,
                marginVertical: 10,
              }}>
              <View style={{borderWidth: 1, padding: 10}}>
                <TextInput placeholder="Enter new movies name" />
              </View>
              <View style={{borderWidth: 1, padding: 10, marginTop: 10}}>
                <TextInput placeholder="Release Year" />
              </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  height: 50,
                  backgroundColor: 'red',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => this.props.fetchMovie('asc')}>
                <Text style={{color: '#fff'}}>Fetch Movies</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  height: 50,
                  backgroundColor: 'green',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 10,
                }}>
                <Text style={{color: '#fff'}}>Add Movies</Text>
              </TouchableOpacity>
            </View>
            <View>
              <FlatList
                data={this.props.movies.results}
                renderItem={({item}) => (
                  <View style={{flex: 1}}>
                    <Text>{item.gender}</Text>
                    <Text>{item.name.last}</Text>
                  </View>
                )}
                keyExtractor={item => item.toString()}
              />
            </View>
            <View />
          </View>
        </Content>
      </Container>
    );
  }
}
