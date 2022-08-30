import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import DogsItem from './components/DogsItem';

export default function AllBreeds({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <DogsItem
        onPressBreed={(breed, favourites) => navigation.navigate('Portfolio', { breed, favourites})}
      />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
