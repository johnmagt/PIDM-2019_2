import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const Routes = createAppContainer(
    createStackNavigator(
        {
            Home:HomeScreen,
            About:AboutScreen    
        },
        {
            initialRouteName: 'Home'
        }
    )
);

export default Routes;