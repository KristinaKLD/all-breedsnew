import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Arrow({ onPress }) {
  const openDossier = () => {
    console.log('openDossier');
    onPress();
  };

  return (
    <View>
      <TouchableOpacity style={styles.dossier} onPress={openDossier}>
        <Image
          style={styles.dossier1}
          source={require('../assets/arrow3.png')}
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  dossier: {
    padding: 16,
  },
  dossier1: {
    width: 8,
    height: 14,
  },
});
