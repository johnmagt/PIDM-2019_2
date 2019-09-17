import React,{Component} from 'react';

import Routes from './components/stack/Routes';
import TabSimples from './components/tabs/TabSimples';
import DrawerSimples from './components/drawer/DrawerSimples';

export default class App extends Component{
  render(){
    return(
      //<Routes/>
      //<TabSimples/>
      <DrawerSimples/>
    )
  }
}