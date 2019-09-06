import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home ;D</Text>
                <Button
                    title="Ir para About"
                    onPress={() => this.props.navigation.navigate('About')}
                />
            </View>
        )
    }
}