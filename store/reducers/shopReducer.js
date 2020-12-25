import * as actionTypes from '../actions/actionTypes';

const initialState = {
    categories: [],
    products: [],
    cart: {
        cartItems: [],
        cartPrice: 0,
        delivery: 10.00,
        totalBill: 10.00
    },
    orders: [],
    loading: false,
    error: '',
    ordered: false
}

const shopReducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.GET_CONTENT:{
            return {
                ...state,
                categories: action.categories,
                products: action.products
            }
        }
        case actionTypes.CART_ADD_ITEM:{
            let product = state.products.find(product => product.id === action.productId);

            return {
                ...state,
                cart: {
                    ...state.cart,
                    cartItems: state.cart.cartItems.concat(product),
                    cartPrice: Math.round((state.cart.cartPrice + product.price + Number.EPSILON) * 100) / 100,
                    totalBill: Math.round((state.cart.totalBill + product.price + Number.EPSILON) * 100) / 100
                },
                
            }
        }
        case actionTypes.CART_DELETE_ITEM:{
            let product = state.products.find(product => product.id === action.productId);
            return {
                ...state,
                cart: {
                    ...state.cart,
                    cartItems: state.cart.cartItems.filter(cartItem => cartItem.id !== action.productId),
                    cartPrice: Math.round((state.cart.cartPrice - product.price + Number.EPSILON) * 100) / 100,
                    totalBill: Math.round((state.cart.totalBill - product.price + Number.EPSILON) * 100) / 100
                }
            }
        }
        case actionTypes.ORDER_PLACE_START: {
            return {
                ...state,
                loading: true,
                ordered: false,
                error: ''
            }
        }
        case actionTypes.ORDER_PLACE_SUCCESS: {
            return {
                ...state,
                cart: {
                    ...state.cart,
                    cartItems: [],
                    cartPrice: 0,
                    delivery: 10.00,
                    totalBill: 10.00
                },
                loading: false,
                ordered: true,
                error: ''
            }
        }
        case actionTypes.ORDER_PLACE_FAILED: {
            return {
                ...state,
                loading: false,
                ordered: true,
                error: action.error
            }
        }
        case actionTypes.PREPARE_FOR_ORDER: {
            return {
                ...state,
                loading: false,
                error: '',
                ordered: false
            }
        }
        case actionTypes.ORDER_FETCH_START: {
            return {
                ...state,
                loading: true,
                orders: []
            }
        }
        case actionTypes.ORDER_FETCH_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: '',
                orders: action.orders
            }
        }
        case actionTypes.ORDER_FETCH_FAILED: {
            return {
                ...state,
                loading: false,
                error: action.error,
                orders: []
            }
        }
        default: 
            return state;
    }
}

export default shopReducer;