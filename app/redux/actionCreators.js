import * as actionTypes from "./actionTypes";
import axios from "axios";

export const load_dishes = dishes => {
    return {
        type: actionTypes.LOAD_DISHES,
        payload: dishes
    }
}

export const add_to_favorite = dish => {

    return {
        type: actionTypes.ADD_TO_FAVORITE,
        payload: dish
    }
}

export const remove_to_favorite = dish => {
    return {
        type: actionTypes.REMOVE_TO_FAVORITE,
        payload: dish
    }
}

const loading = state => {
    return {
        type: actionTypes.LOADING,
        payload: state
    }
}


export const GetDishes = () => dispatch => {
    dispatch(loading(true))
    axios.get("https://resturent-b86a0-default-rtdb.firebaseio.com/dishes.json")
        .then(response => {
            dispatch(load_dishes(response.data));
            dispatch(loading(false))
        })
        .catch(error => dispatch(loading(false)))
}