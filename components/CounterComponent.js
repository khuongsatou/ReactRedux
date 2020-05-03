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
  const funCounter = () => {
    setTimeout(() => {
      alert(`You clicked on: ${count}`);
    }, 3000);
  };

  useEffect(() => {
    console.log('Component did Update');
    //   setTimeout(() => {
    //     alert('Component did Update');
    //   }, 3000);
  });

  useEffect(() => {
    console.log('Component did Mount');
    // setTimeout(() => {
    //   alert('Component Did mount');
    // }, 3000);
  }, []);

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <Text>Count</Text>
      </TouchableOpacity>
      <Text>Start</Text>
      <Text>{count}</Text>
      <TouchableOpacity onPress={funCounter}>
        <Text>Show Alert</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
