import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ListItem from './components/Listitem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: 'gray',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <ListItem
        imageUrl="https://picsum.photos/200/300"
        title="Expo is a framework and a platform for universal React applications.
          It is a set of tools and services built around React Native and native
          platforms that help you develop, build, deploy, and quickly iterate on
          iOS, Android, and web apps from the same JavaScript/TypeScript
          codebase."
        author="SampleNews"
      />
      <ListItem
        imageUrl="https://picsum.photos/200/300"
        title="Expo is a framework and a platform for universal React applications.
          It is a set of tools and services built around React Native and native
          platforms that help you develop, build, deploy, and quickly iterate on
          iOS, Android, and web apps from the same JavaScript/TypeScript
          codebase."
        author="SampleNews"
      />
      <ListItem
        imageUrl="https://picsum.photos/200/300"
        title="Expo is a framework and a platform for universal React applications.
          It is a set of tools and services built around React Native and native
          platforms that help you develop, build, deploy, and quickly iterate on
          iOS, Android, and web apps from the same JavaScript/TypeScript
          codebase."
        author="SampleNews"
      />
    </View>
  );
}
