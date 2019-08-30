import React, {Component} from 'react';
import {View,Text,TextInput,Button,StyleSheet} from 'react-native';

import IMCCalc from './IMCCalc'

export default class IMCApp extends Component{

    constructor(props){
        super(props);
        this.state = {peso: null, altura: null}
        
    }

    render(){
        return(
            <View style={estilos.container}>
                <Text style={estilos.cabecalho}> Cálculo do IMC</Text>
                <View style={estilos.view_input}>
                    <Text>Peso(kg): </Text>
                    <TextInput 
                        style={estilos.input}
                        placeholder="Digite seu peso."/>
                </View>
                <View style={estilos.view_input}>
                    <Text>Altura(m): </Text>
                    <TextInput 
                        style={estilos.input}
                        placeholder="Digite sua altura."/>
                        
                </View>
                <View style={estilos.view_botao}>
                    <Button title = "CALCULAR"
                    />
                </View>
                <IMCCalc peso={this.state.peso} 
                         altura={this.state.altura}/>
            </View>
        )
    }        
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#f1f1f1"
    },
    cabecalho: {
        fontSize: 20,
        textAlign: "center",
        marginTop: 10,
        fontWeight: "bold",
    },
    view_input: {
        flexDirection: "column",
        margin:10
    },
    input:{
        height: 45,
        width: "95%",
        borderColor: "gray",
        borderWidth: 2,
        paddingLeft: 5
    },
    view_botao: {
        width: "35%",
        margin: 15,
    }
})