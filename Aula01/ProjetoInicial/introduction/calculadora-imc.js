import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

class Calculadora extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (!this.props.altura || !this.props.peso) return null;
        let imc = this.props.peso / (this.props.altura * this.props.altura);
        return (
            <View>
                <Text style={{ padding: 10, fontSize: 20 }}>
                    IMC:{imc}
                </Text>
            </View>
        );
    }
}

export default class CalculadoraApp extends Component {
    constructor(props) {
        super(props);
        this.state = { altura: null, peso: null };

    }

    render() {
        return (
            <View style={{ padding: 10 }}>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Digite a altura"
                    onChangeText={(altura) => this.setState({ altura })}
                />
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Digite o peso"
                    onChangeText={(peso) => this.setState({ peso })}
                />
                <Calculadora altura={this.state.altura} peso={this.state.peso} />
            </View>
        );
    }
}

//AppRegistry.registerComponent('AwesomeProject', () => CalculadoraApp);
