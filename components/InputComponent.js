import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {addNewTask} from '../actions';
import Reactotron from 'reactotron-react-native';
export const CounterComponent = () => {
  const counter = useSelector(state => state.taskReducers);
  const dispatch = useDispatch();
  console.log(counter);
  Reactotron.display({
    name: 'KNOCK KNOCK',
    preview: "Who's there?",
    value: 'Orange.',
  });

  Reactotron.display({
    name: 'ORANGE',
    preview: 'Who?',
    value: "Orange you glad you don't know me in real life?",
    important: true,
  });
  Reactotron.error("Now you've done it.");
  Reactotron.warn('*glares*');
  Reactotron.log('hello rendering world');
  Reactotron.log({numbers: [1, 2, 3], boolean: false, nested: {here: 'we go'}});
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => dispatch(addNewTask('Kakaa'))}>
        <Text>123</Text>
      </TouchableOpacity>

      <Text>{counter[0].name}</Text>
      <FlatList
        data={counter}
        renderItem={({item, index}) => (
          <View>
            <Text>{index}</Text>
            <Text>{item.taskName}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};
