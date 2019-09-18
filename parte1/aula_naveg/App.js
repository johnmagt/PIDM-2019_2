import React,{Component} from 'react';

import Routes from './components/stack/Routes';
import TabSimples from './components/tabs/TabSimples';
import DrawerSimples from './components/drawer/DrawerSimples';
import RoutesSwitch from './components/switch/Routes';

export default class App extends Component{
  render(){
    return(
      //<Routes/> //stack
      //<TabSimples/>
      //<DrawerSimples/>
      <RoutesSwitch/> //switch
    )
  }
}