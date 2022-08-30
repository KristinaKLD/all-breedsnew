import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

export default function AllBreeds({ onPressBreed }) {
  const openBreed = (breed) => {
    console.log('breed', breed);
    onPressBreed(breed);
  };
  const [breeds, setBreeds] = useState();
  const loadBreeds = async () => {
    const url = 'https://api.thedogapi.com/v1/breeds?limit=';
    try {
      const response = await axios.get(url);
      console.log(response);
      if (response?.data) {
        setBreeds(response?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadBreeds();
  }, []);
  console.log(breeds?.[0]);

  const favourites = {
    items: [
      {
        id: 52074,
        user_id: 'ectm4w',
        image_id: '607_FDb_p',
        sub_id: null,
        created_at: '2022-08-06T20:31:15.000Z',
        image: {
          id: '607_FDb_p',
          url: 'https://cdn2.thedogapi.com/images/607_FDb_p.jpg',
        },
      },
    ],
  };

  favourites.items[0].image.url;

  return (
    <ScrollView style={styles.container}>
      {breeds?.map((breed) => {
        console.log(breed.image);

        return (
          <TouchableOpacity style={styles.tab} onPress={() => openBreed({breed}, {favourites})}>
            <Image style={styles.image} source={{ uri: breed?.image?.url }} />
            <View style={styles.box}>
              <Text style={styles.name}>{breed.name}</Text>
              <Text style={styles.temperament}>{breed.temperament}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  tab: {
    flexDirection: 'row',
    padding: 8,
    borderRadius: 16,
    marginTop: 10,
    paddingVertical: 16,
    marginLeft: 16,
    marginRight: 20,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 9,
    elevation: 14,
  },
  image: {
    width: 120,
    height: 100,
    borderRadius: 16,
  },
  box: {
    flex: 1,
    marginLeft: 12,
    marginVertical: 8,
  },
  name: {
    borderColor: '#333333',
    fontWeight: '600',
    fontSize: 16,
    fontstyle: 'Bold',
    fontfamily: 'Lato',
  },
  temperament: {
    fontSize: 14,
  },
});
