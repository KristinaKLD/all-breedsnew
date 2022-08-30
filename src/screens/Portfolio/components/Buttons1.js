import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function Buttons1({ onPress }) {
  const openButton2 = () => {
    console.log('openButton2');
    onPress(loadRandomImage);
  };
  const loadRandomImage = () => {
    console.log('loadRandomImage');
    onPress();
  };

  return (
    <View style={styles.button}>
      <TouchableOpacity
        style={styles.button1}
        onPress={() => loadRandomImage()}>
        <Text style={styles.buttonText}>Другое фото</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={openButton2}>
        <Text style={styles.buttonText}>Добавить в избранное</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    padding: 16,
    marginTop: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button1: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderRadius: 12,
    marginTop: 40,
    padding: 22,
  },
  button2: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderRadius: 12,
    marginTop: 40,
  },
  buttonText: {
    color: '#5533EA',
    fontSize: 14,
    fontWeight: '500',
  },
});
