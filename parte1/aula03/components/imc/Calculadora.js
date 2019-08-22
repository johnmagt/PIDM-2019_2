

import React, {Component} from 'react'
import {Text} from 'react-native'

export default class Calculadora extends Component{
    render(){
        if (this.props.altura == null || this.props.peso ==null)
            return null;
        const imc = this.props.peso/(this.props.altura*this.props.altura);
        return (
            <Text>
                O IMC é {imc}
            </Text>
        )
    }
}