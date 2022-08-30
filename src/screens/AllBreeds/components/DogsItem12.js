import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';

export default function Dogs({ breeds, props }) {
  const openDogs = () => {
    console.log('openDogs', openDogs);
    onPress();
    console.log(props);
    console.log(props.openDogs);
    {
      openDogs;
    }
  };
  console.log('dogs');
  const renderItem = ({ item }) => (
    <Dogs breeds={item} onPress={(() => onPressbreed(item), { onPress })} />
  );

  return (
    <SafeAreaView>
      <FlatList
        data={breeds}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
