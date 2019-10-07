import React,{Component} from 'react';
import {View,Text} from 'react-native';
import firebase from 'firebase';

import {Header} from './components/commons';
import LoginForm from './components/LoginForm';

export default class App extends Component{

  componentDidMount(){
    /*firebase.initializeApp({
      apiKey: 'AIzaSyCOWJXKYoVE74VLoC5NwDVFCtXTTDnV3Ik',
      authDomain: "autenticar-600a4.firebaseapp.com",
      databaseURL: "https://autenticar-600a4.firebaseio.com",
      projectId: "autenticar-600a4",
      storageBucket: "",
      messagingSenderId: "719799626205",
      appId: "1:719799626205:web:57281285dd3fa8bfb26e34",
      measurementId: "G-EKV411S82V"
    });*/
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