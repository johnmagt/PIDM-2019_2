import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

export default class TradutorDePizza extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text style={{padding: 10, fontSize: 22}}>
          {this.state.text.split(' ').map((palavra) => palavra && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('ProjetoInicial', () => TradutorDePizza);
