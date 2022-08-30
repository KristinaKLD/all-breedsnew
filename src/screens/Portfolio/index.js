import React from 'react';
import { View, StyleSheet } from 'react-native';
import axios from 'axios';

import Arrow from './components/Arrow';
import Foto from './components/Foto';
import Header from './components/Header';
import Buttons1 from './components/Buttons1';

axios.defaults.baseURL = 'https://api.thedogapi.com/v1/';
axios.defaults.headers.common['x-api-key'] =
  '8a22da84-5aa2-40ac-9bef-ef59efdf354d';
export default function Portfolio({ navigation, route }) {
  const favouritesId= route.params?.favouritesId;
  console.log('favouritesId in portfolio', favouritesId);
  return (
    <View style={styles.container}>
      <View>
        <Arrow onPress={() => navigation.goBack()}  />
        <Foto onPress={favouritesId} />
        <Header />
        <Buttons1
          onPress={() => {
            loadRandomImage;
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 22,
    justifyContent: 'center',
    backgroundColor: '#FFF8F8',
  },
});
