import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'

import Card from './Card';
import CardItem from './CartItem';
import Button from './Button'


class AlbumDetail extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <CardItem style={styles.cardItemStyle}>
                    <View style={styles.thumbContentStyle}>
                        <Image
                            style={styles.thumbStyle} 
                            source={{uri:this.props.album.thumbnail_image}} />
                    </View>
                    <View style={styles.textStyle}>
                        <Text style={styles.titleStyle}>{this.props.album.title}</Text>
                        <Text>{this.props.album.artist}</Text>
                    </View>
                </CardItem>

                <CardItem>
                    <Image style={styles.albumImage}
                           source={{uri:this.props.album.image}}/>
                </CardItem>

                <CardItem>
                    <Button 
                        name={'Clique Aqui!'}
                        action={()=>alert("Clicou em "+this.props.album.title+"!")}/>
                </CardItem>

            </Card>
        );
    }
}

const styles = StyleSheet.create({

    cardItemStyle: {
        justifyContent: 'flex-start',
        flexDirection:'row'
    },
    textStyle: {
        justifyContent: 'space-around',
        flexDirection: 'column'
    },
    thumbStyle: {
        height:50,
        width:50
    },
    thumbContentStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight:10
    },
    titleStyle:{
        fontSize: 18,
        fontWeight: "bold"
    },
    albumImage: {
        flex: 1,
        height: 300,
        width: null
    }


});

export default AlbumDetail;