import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

import Card from './Card';
import CardItem from './CartItem';


class AlbumDetail extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <CardItem>
                    <Text>{this.props.album.title}</Text>
                </CardItem>
            </Card>
        );
    }
}

export default AlbumDetail;