import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View>
      <Text style={styles.header}>Pomeranian</Text>
      <Text style={styles.description}>
        Taking care of a pet is my favorite, it helps me to...
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    padding: 22,
    marginTop: 42,
    fontWeight: 'bold',
    fontSize: 20,
  },
  description: {
    padding: 22,
    marginTop: 8,
  },
});
