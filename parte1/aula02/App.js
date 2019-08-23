import React, { Component } from 'react';

import CalculadoraApp from './components/imc/CalculadoraApp';
import PizzaApp from './components/pizza/PizzaApp';

export default class App extends Component{
    render(){
        return (
            //<CalculadoraApp />
            <PizzaApp/>
        )
    }
}