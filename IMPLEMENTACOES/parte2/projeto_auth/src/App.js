import React,{Component} from 'react';
import {View,Text} from 'react-native';
import firebase from 'firebase';

import {Header} from './components/commons';
import LoginForm from './components/LoginForm';

export default class App extends Component{

  componentDidMount(){
    
  }

  render(){
    return(
      <View>
        <Header title="Autenticação"/>
        <LoginForm/>
      </View>
    );
  }
}