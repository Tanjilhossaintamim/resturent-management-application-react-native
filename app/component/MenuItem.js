import React from 'react';
import { View, Text, TouchableHighlight, Image, StyleSheet } from 'react-native';

const MenuItem = (props) => {
    return (
        <TouchableHighlight onPress={props.selectDish} >

            <View style={styles.container}>
                <View>
                    {props.item.image && <Image source={{ uri: props.item.image }} style={{ width: 80, height: 80 }} />}
                </View>
                <View style={styles.details}>
                    <Text style={styles.name}>{props.item.name}</Text>
                    <Text style={styles.description} numberOfLines={3}>{props.item.description}</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 15

    },
    details: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 10
    },
    name: {
        fontWeight: '500'
    },

    description: {
        color: '#6e6969'
    }
})

export default MenuItem;