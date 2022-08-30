import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import axios from 'axios';

export default function Foto({ onPress }) {
  const [image, setImage] = useState();
  const breedId = '6';
  const favouritesId={favouritesId}
  const loadRandomImage = async () => {
    const url = `https://api.thedogapi.com/v1/images/search?breed_id=${breedId}&include_breeds=false`;
    try {
      const response = await axios.get(url);
      const image = response.data[0];
      setImage(image);
    } catch (error) {
      console.log(error);
      onPress();
    }
  };
  useEffect(() => {
    loadRandomImage();
  }, []);

  return (
    <View>
      <View style={styles.foto} onPress={breedId, favouritesId}>
        <Image style={styles.image} source={{ uri: image?.url }} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  foto: {
    padding: 8,
    flexDirection: 'row',
    borderRadius: 16,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },

  image: {
    borderRadius: 16,
    height: 280,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
