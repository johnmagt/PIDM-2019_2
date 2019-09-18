import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native'

class Header extends Component {
    render() {
        return (
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        backgroundColor: '#F2F2F2',
        shadowColor: '#000',
        shadowOffset: { width:0, height: 2},
        shadowOpacity: 0.2,
        elevation: 5,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
});


export default Header;
