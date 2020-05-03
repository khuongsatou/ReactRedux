import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
export const CounterComponent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('khuong');
  const lastestCount = useRef(count);
  const funCounter = () => {
    setTimeout(() => {
      alert(`You clicked on: ${count}`);
    }, 3000);
  };

  const changeName = input => {
    setName(input);
  };

  const changeNameBind = changeName.bind(this, 'đạt');
  const changeNameBind2 = changeName.bind(this, 'na');
  useEffect(() => {
    console.log('counter' + name);
  }, [name]);

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
      <TouchableOpacity onPress={changeNameBind}>
        <Text>Change Name</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={changeNameBind2}>
        <Text>Change Name 2</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
