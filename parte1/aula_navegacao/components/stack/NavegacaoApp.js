import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class About extends Component {

    static navigationOptions = {
        title: 'Home',
        /*headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },*/
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home ;D</Text>
                <Button
                    title="Ir para About"
                    onPress={() => this.props.navigation.navigate('About', { nome: 'Jefferson' })}
                />
            </View>
        )
    }
}
