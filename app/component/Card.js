import React from 'react';
import { View, Text, Image, StyleSheet, Alert } from 'react-native';
import { connect } from 'react-redux';
import Icon from './Icon';
import { remove_to_favorite } from '../redux/actionCreators';



const mapDispatchToProps = dispatch => {
    return {

        remove_to_favorite: (dish) => dispatch(remove_to_favorite(dish))
    }
}

const Card = (props) => {
    const dish = props.item;
    const removeDishFromFavorite = (id) => {
        Alert.alert(
            "Delete Favorite ?",
            `Are Sure To Remove ${dish.name} ?`,
            [
                { text: 'cencel' },
                { text: 'Ok', onPress: () => props.remove_to_favorite(id) }
            ],
            { cancelable: false }
        )
    }
    return (
        <View style={styles.card}>
            <Image source={{ uri: dish.image }} style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.name}>{dish.name}</Text>
                <Icon name="heart" size={39} color="#F53850" action={() => removeDishFromFavorite(dish.id)} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: '#fff',
        elevation: 5,
        margin: 15
    },
    details: {
        padding: 25,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    image: {
        width: '100%',
        height: 150
    },
    name: {
        fontSize: 20,
        fontWeight: '700'
    }
})
export default connect(null, mapDispatchToProps)(Card);