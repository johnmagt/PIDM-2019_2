import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { mostra: true};

    setInterval(
      () =>{
        this.setState( estadoAnterior =>{
          return {mostra:!estadoAnterior.mostra}
        });
      }
      ,1000);
  }
  render() {
    if (!this.state.mostra) {
      return null;
    }

    return (
      <Text>{this.props.texto}</Text>
    );
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink texto='1' />
        <Blink texto='2' />
        <Blink texto='3' />
        <Blink texto='4' />
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('ProjetoInicial', () => BlinkApp);