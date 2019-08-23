import React, { Component } from 'react';

import CalculadoraApp from './components/imc/CalculadoraApp';
import PizzaApp from './components/pizza/PizzaApp';
import BotoesApp from './components/botoes/BotoesApp'
import BotoesInputApp from './components/botoes_input/BotoesInputApp'

export default class App extends Component{
    render(){
        return (
            //<CalculadoraApp />
            //<PizzaApp/>
            //<BotoesApp/>
            <BotoesInputApp/>
        )
    }
}