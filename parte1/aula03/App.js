import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default class BotaoInput extends Component {

    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    acaoCliqueBotao = ()=>{
      //const {text} = this.state;
      console.log(this.state.text);
    }

    render() {
      return (
          <View style={styles.container}>
              <Text style={styles.headerText}>
                  Entrada de Texto com Botão
              </Text>
              <TextInput
                  style={styles.textInput}
                  onChangeText={(text) => this.setState({ text:text })}
                  placeholder="Digite o texto"
              />
              <View style={[styles.viewButton]}>
                  <Button
                      title="Pegar Texto!"
                      onPress={this.acaoCliqueBotao}
                  />
              </View>
          </View>
      );
    }

}





const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#e5e5e5"
  },
  headerText: {
      fontSize: 20,
      margin: 10,
      fontWeight: "bold"
  },
  textInput: {
      height: 45,
      width: "95%",
      borderColor: "gray",
      borderWidth: 2,
      paddingLeft: 20
  },
  viewButton: {
      width: "93%",
      margin: 15,
      backgroundColor: "red"
  }
});