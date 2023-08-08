import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Card from '../component/Card';

const mapStateToProps = state => {
    return {
        favorites: state.favorite
    }
}

const FavoriteDish = (props) => {

    if (props.favorites.length == 0) {
        return (
            <Text>No Favorite Item ....</Text>
        )
    }
    return (
        <View>
            <FlatList data={props.favorites} renderItem={({ item }) => (<Card item={item} />)} keyExtractor={(item) => item.id} />

        </View>
    )
}

export default connect(mapStateToProps)(FavoriteDish);