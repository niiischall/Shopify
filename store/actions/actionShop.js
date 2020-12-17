import * as actionTypes from './actionTypes';

export const addToCart = (productId) => {
    return {
        type: actionTypes.CART_ADD_ITEM,
        productId: productId
    }
}

export const deleteFromCart = (productId) => {
    return {
        type: actionTypes.CART_DELETE_ITEM,
        productId: productId
    }
}