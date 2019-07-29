import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';

export default class FlatListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Devin', idade: 17},
            {key: 'Jackson', idade: 21},
            {key: 'James', idade: 21},
            {key: 'Joel', idade: 21},
            {key: 'John', idade: 21},
            {key: 'Jillian', idade: 21},
            {key: 'Jimmy', idade: 21},
            {key: 'Julie', idade: 21},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}-{item.idade}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('ProjetoInicial', () => FlatListBasics);
