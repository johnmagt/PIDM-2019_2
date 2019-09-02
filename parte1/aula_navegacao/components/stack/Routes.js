import NavegacaoApp from './NavegacaoApp';
import About from './About';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const Routes = createAppContainer(

    createStackNavigator(
        {
            Home: NavegacaoApp,
            About: About,
        },
        {
            initialRouteName: 'Home',
            defaultNavigationOptions: {
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            },
        }
    )
);

export default Routes;