import categories from '../../data/categories';
import products from '../../data/products';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    categories: [...categories],
    products: [...products],
    cart: {
        cartItems: [],
        cartPrice: 0
    },
    orders: []
}

const shopReducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.CART_ADD_ITEM:{
            let product = state.products.find(product => product.id === action.productId);

            return {
                ...state,
                cart: {
                    ...state.cart,
                    cartItems: state.cart.cartItems.concat(product),
                    cartPrice: Math.round(state.cart.cartPrice + product.price)
                }
            }
        }
        case actionTypes.CART_DELETE_ITEM:{
            let product = state.products.find(product => product.id === action.productId);
            return {
                ...state,
                cart: {
                    ...state.cart,
                    cartItems: state.cart.cartItems.filter(cartItem => cartItem.id !== action.productId),
                    cartPrice: Math.round(state.cart.cartPrice - product.price)
                }
            }
        }
        default: 
            return state;
    }
}

export default shopReducer;