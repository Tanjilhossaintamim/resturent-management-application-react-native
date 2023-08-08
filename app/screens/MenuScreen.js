import React, { useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { connect } from "react-redux";
import { GetDishes } from '../redux/actionCreators';
import MenuItem from '../component/MenuItem';
import Spinner from '../component/Spinner';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDishes: () => dispatch(GetDishes())
    }
}

const MenuScreen = (props) => {


    useEffect(() => {
        props.getDishes()
    }, [])

    if (props.loading) {
        return (
            <Spinner />
        )
    }
    return (
        <View>
            <FlatList data={props.dishes} renderItem={({ item }) => (<MenuItem item={item} selectDish={() => props.navigation.navigate("DishDetails", { dish: item })} />)} keyExtractor={item => item.id.toString()} />
        </View>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen);