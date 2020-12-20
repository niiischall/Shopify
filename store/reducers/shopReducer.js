import categories from '../../data/categories';
import products from '../../data/products';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    categories: [...categories],
    products: [...products],
    cart: {
        cartItems: [],
        cartPrice: 0,
        delivery: 10.00,
        totalBill: 10.00
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
        case actionTypes.ORDER_PLACE: {
            let newOrder = {
                orderId: Date.now(),
                cart: state.cart,
                details: action.orderDetails
            }

            return {
                ...state,
                cart: {
                    ...state.cart,
                    cartItems: [],
                    cartPrice: 0,
                    delivery: 10.00,
                    totalBill: 10.00
                },
                orders: state.orders.concat(newOrder)
            }
        }
        default: 
            return state;
    }
}

export default shopReducer;