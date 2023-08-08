import * as actionTypes from "./actionTypes";

const initialState = {
    dishes: [],
    favorite: [],
    loading: false
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_DISHES:
            return {
                ...state,
                dishes: action.payload
            }

        case actionTypes.ADD_TO_FAVORITE:


            return {
                ...state,
                favorite: state.favorite.concat(action.payload)
            }
        case actionTypes.REMOVE_TO_FAVORITE:

            return {
                ...state,
                favorite: state.favorite.filter(item => item.id !== action.payload)
            }

        case actionTypes.LOADING:
            return {
                ...state,
                loading: action.payload
            }


        default:
            return state;
    }
}


export default Reducer;