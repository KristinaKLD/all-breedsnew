import React, { useState } from 'react';
import { View, Image } from 'react-native';
import axios from 'axios';

export default function Breeds() {
  const [image, setImage] = useState();
  const breeds = '6';
  const loadRandomImage = async () => {
    const url = `https://api.thedogapi.com/v1/breeds`;

    try {
      const response = await axios.get(url);
      const image = response.data[0];
      setImage(image);
    } catch (error) {
      console.log(error);
    }
  };
  <View style={styles.container}>
    <Image
      style={[styles.image, styles.shadow]}
      onPress={() => loadRandomImage()}
      source={{ uri: image?.url }}
    />
  </View>;
}
