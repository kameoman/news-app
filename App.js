import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

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
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{
              uri: 'https://picsum.photos/200/300',
            }}
          ></Image>
        </View>
        <View style={styles.rightContainer}>
          {/* 3行で省略 */}
          <Text numberOfLines={3} styles={styles.text}>
            Expo is a framework and a platform for universal React applications.
            It is a set of tools and services built around React Native and
            native platforms that help you develop, build, deploy, and quickly
            iterate on iOS, Android, and web apps from the same
            JavaScript/TypeScript codebase.
          </Text>
          <Text style={styles.subText}>ReactNews</Text>
        </View>
      </View>
    </View>
  );
}
