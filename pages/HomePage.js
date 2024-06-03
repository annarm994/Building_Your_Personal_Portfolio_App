import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Page</Text>
      <Button title="Projects" onPress={() => navigation.navigate('Projects')} />
      <Button title="Skills" onPress={() => navigation.navigate('Skills')} />
      <Button title="Contact" onPress={() => navigation.navigate('Contact')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomePage;