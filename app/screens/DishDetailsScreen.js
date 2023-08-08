import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from '../component/Icon';
import { add_to_favorite, remove_to_favorite } from '../redux/actionCreators';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        favorite: state.favorite
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add_to_favorite: (dish) => dispatch(add_to_favorite(dish)),
        remove_to_favorite: (dish) => dispatch(remove_to_favorite(dish))
    }
}

const DishDetails = (props) => {
    const dish = props.route.params.dish;

    const is_already_favorite = props.favorite?.some(item => item.id == dish.id)


    const makeFavorite = dish => {

        if (is_already_favorite) {



            props.remove_to_favorite(dish.id)
        }
        else {
            props.add_to_favorite(dish)
        }
    }

    return (


        <View>
            <Image source={{ uri: dish.image }} style={styles.image} />
            <View style={styles.details}>

                <Icon name={is_already_favorite ? "heart" : "heart-outline"} color="#F53850" size={39} action={() => makeFavorite(dish)} />

                <Text>{dish.description}</Text>

            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    name: {
        fontSize: 20,
        fontWeight: "500"
    },
    details: {
        padding: 10
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(DishDetails);