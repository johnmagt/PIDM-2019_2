import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';

export default class Logo extends Component {
    render() {
        return (
            <View style={{flexDirection:"row"}}>
                <Image
                    source={require('./jeff.png')}
                    style={{ width: 30, height: 30 }}
                />
                <Text>{this.props.titulo}</Text>
            </View>
        )
    }
}