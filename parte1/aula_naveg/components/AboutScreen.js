import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class AboutScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>About</Text>
            </View>
        )
    }
}