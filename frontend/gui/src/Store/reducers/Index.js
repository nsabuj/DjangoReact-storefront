import { CHANGE_SEARCH_SHOW, CHANGE_CART_SHOW } from '../actions/ActionTypes';

const initialState = {
    showSearch: false,
    showCart: false,
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_SHOW:
            return {
                showSearch: action.value,
                showCart: state.showCart,
            }
        case CHANGE_CART_SHOW:
            return {
                showCart: action.value,
                showSearch: state.showSearch,
            }
        default:
            return state;
    }
}