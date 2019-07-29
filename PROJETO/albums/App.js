import React, {Component} from 'react';
import { AppRegistry } from 'react-native';

import Header from './src/components/header';

export default class App extends Component{
  render(){
    return (
      <Header/>
    );
  }
}

AppRegistry.registerComponent('albums',()=>App);
