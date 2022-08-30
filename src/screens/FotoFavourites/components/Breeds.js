import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import axios from 'axios';

const deleteImageFromFavourites = async (favouritesId, loadFavorites) => {
  console.log(favouritesId);
  const url = `favourites/${favouritesId}`;

  try {
    const response = await axios.delete(url);
    console.log('response', response);
  } catch (error) {
    console.log(error);
  } finally {
    loadFavorites();
    console.log('finally');
  }
};

function FavouritesItem({ favourite, onDelete }) {
  console.log('onDelete', onDelete, 'favourite', favourite);

  return (
    <View style={styles.button}>
      <Image style={styles.image} source={{ uri: favourite?.image?.url }} />
      <TouchableOpacity
        style={styles.circle}
        onPress={() => onDelete(favourite?.id)}>
        <Text style={styles.buttonText}>X</Text>
      </TouchableOpacity>
    </View>
  );
}
export default function Breeds() {
  const [favourites, setFavourites] = useState();
  const breeds = '8';
  const loadFavourites = async () => {
    const url = '/favourites?limit=';

    try {
      const response = await axios.get(url);
      console.log('response', response.data);
      setFavourites(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadFavourites();
  }, []);

  const deleteFavourite = (favouriteId) => {
    deleteImageFromFavourites(favouriteId, loadFavourites);
  };
  const renderItem = ({ item }) => {
    console.log(item);

    return <FavouritesItem favourite={item} onDelete={deleteFavourite} />;
  };

  console.log('favourites', favourites?.length);
  return (
    <View>
      <FlatList
        data={favourites}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    padding: 6,
    flexDirection: 'row',
    borderRadius: 16,
    margin: 5,
    backgroundColor: '#F7F7F7',
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
    flex: 1,
    borderRadius: 16,
    height: 290,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
  },
  circle: {
    position: 'absolute',
    backgroundColor: '#ecf0f1',
    width: 25,
    padding: 5,
    paddingLeft: 8,
    borderRadius: 16,
    top: 5,
    right: 270,
    zIndex: 10,
  },
});
