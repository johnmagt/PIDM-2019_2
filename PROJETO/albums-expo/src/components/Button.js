import React, { Component } from 'react';
import { AppRegistry, View, Text, TouchableOpacity, StyleSheet} from 'react-native';


export default class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity
                onPress = {this.props.action} 
                style={styles.buttonStyle}>
                <Text style={styles.textStyle}>{this.props.name}</Text>
            </TouchableOpacity>

        );
    }
}

const styles = StyleSheet.create({
    buttonStyle : {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10

    }
});


AppRegistry.registerComponent('albums', () => Button);