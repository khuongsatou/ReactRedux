import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
export const CounterComponent = ({name}) => {
  const [count, setCount] = useState(0);

  const lastestCount = useRef(count);

  function handleAlertClick() {
    setTimeout(() => {
      alert(`You clicked on: ${count}`);
    }, 3000);
  }

  useEffect(() => {
    //console.log('Counter' + count);
    lastestCount.current = count;
    setTimeout(() => {
      alert(`You clicked on: ${lastestCount.current}`);
    }, 3000);
  });

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <Text>Count</Text>
      </TouchableOpacity>
      <Text>Start</Text>
      <Text>{count}</Text>
      <TouchableOpacity onPress={() => handleAlertClick()}>
        <Text>Show Alert</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
