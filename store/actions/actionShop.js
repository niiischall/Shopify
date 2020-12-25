import * as actionTypes from './actionTypes';
import apiUrls from '../../services/apiUrls';
import axios from 'axios';
import RNBootSplash from 'react-native-bootsplash';

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

export const prepareForOrder = () => {
    return {
        type: actionTypes.PREPARE_FOR_ORDER
    }
}

const placeOrderStart = () => {
    return {
        type: actionTypes.ORDER_PLACE_START
    }
}

const placeOrderSuccess = () => {
    return {
        type: actionTypes.ORDER_PLACE_SUCCESS
    }
}

const placeOrderFailure = (error) => {
    return {
        type: actionTypes.ORDER_PLACE_FAILED,
        error: error.message
    }
}

export const placeOrder = (orderDetails) => {
    const apiURL = apiUrls.orders; 

    return (dispatch, getState) => {
        dispatch(placeOrderStart());
        axios.post(apiURL + getState().ProfileReducer.IDToken, orderDetails)
        .then(response => {
            dispatch(placeOrderSuccess());
            dispatch(fetchOrder());
        })
        .catch(error => {
            dispatch(placeOrderFailure(error));
        });
    }
}

const fetchOrderStart = () => {
    return{
        type: actionTypes.ORDER_FETCH_START
    }
}

const fetchOrderSuccess = (orders) => {
    const fetchedOrders = [];
    const orderIDs = Object.keys(orders);
    orderIDs.forEach((orderID) => {
        const newOrder = {
            orderId: orderID,
            cart: orders[orderID].cart,
            details: {
                ...orders[orderID].contact,
                dateOfPurchase: orders[orderID].dateOfPurchase
            }
        }
        fetchedOrders.push(newOrder);
    });
    return{
        type: actionTypes.ORDER_FETCH_SUCCESS,
        orders: fetchedOrders
    }
}

const fetchOrderFailure= (error) => {
    console.log(error);
    return{
        type: actionTypes.ORDER_FETCH_FAILED
    }
}

export const fetchOrder = () => {
    const apiURL = apiUrls.orders;

    return (dispatch, getState) => {
        dispatch(fetchOrderStart());
        const queryParams = getState().ProfileReducer.IDToken + '&orderBy="userID"&equalTo="' + getState().ProfileReducer.userID + '"';

        axios.get(apiURL + queryParams)
        .then(response => {
           dispatch(fetchOrderSuccess(response.data));
        })
        .catch(error => {
            dispatch(fetchOrderFailure(error));
        })
    }
}

const setContent = (categories, products) => {
    return {
        type: actionTypes.GET_CONTENT,
        categories: Object.values(categories),
        products: Object.values(products)
    }
}

export const getContent = () => {  
    return dispatch => {
        const requestOne = axios.get(apiUrls.categories);
        const requestTwo = axios.get(apiUrls.products);
        axios.all([requestOne, requestTwo])
        .then(axios.spread((...responses) => {
            RNBootSplash.hide(); 
            dispatch(setContent(responses[0].data, responses[1].data));
        }))
        .catch(errors => {
            console.log(errors);
        })
    }
}
