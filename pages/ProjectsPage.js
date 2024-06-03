import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProjectsPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projects Page</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
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

export default ProjectsPage;