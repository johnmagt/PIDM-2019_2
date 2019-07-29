import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';

export default class ButtonBasics extends Component {
  acaoBotao() {
    Alert.alert('Você apertou o botão!!')
  }
 
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.acaoBotao}
            title="Me Aperte"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.acaoBotao}
            title="Me Aperte"
            color="#841584"
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this.acaoBotao}
            title="Que legal!"
          />
          <Button
            onPress={this.acaoBotao}
            title="OK!"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('ProjetoInicial', () => ButtonBasics);
