import React from 'react';
import { View, StyleSheet } from 'react-native';
import axios from 'axios';
import Breeds from './components/Breeds';

axios.defaults.baseURL = `https://api.thedogapi.com/v1/`;
axios.defaults.headers.common['x-api-key'] =
  '8a22da84-5aa2-40ac-9bef-ef59efdf354d';

export default function Foto({ navigation }) {
  return (
    <View style={styles.container}>
      <Breeds onPress={() => navigation.goBack('')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    justifyContent: 'center',
    backgroundColor: '#FFF8F8',
  },
});
