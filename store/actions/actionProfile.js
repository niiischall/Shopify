import axios from 'axios';

import * as actionTypes from '../actions/actionTypes';
import apiUrl from '../../services/apiUrls';
import { 
    storeData, 
    removeData
} from '../../services/asyncFunctions';

const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

const authSuccess = (userID, IDToken, userEmail) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        userID: userID,
        IDToken: IDToken,
        email: userEmail
    }
}

const authFailed = (error) => {
    return {
        type: actionTypes.AUTH_FAILED,
        error: error.message
    }
}

export const authLogout = () => {
    removeData();
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const authentication = (inputValues, inputMethod)=>{
    const info = {
        email    : inputValues.email,
        password : inputValues.password,
        returnSecureToken: true
    }

    let apiURL = "";
    if(inputMethod === "Log In")
        apiURL = apiUrl.signIn
    else if(inputMethod === "Sign Up")
        apiURL = apiUrl.signUp 


    return dispatch => {
        dispatch(authStart());
        axios.post(apiURL, info)
        .then(response => { 
            dispatch(authSuccess(response.data.localId, response.data.idToken, info.email));

            storeData('userID', response.data.localId);
            storeData('IDToken', response.data.idToken);
            storeData('email', info.email);
         })
        .catch(error => {
            dispatch(authFailed(error.response.data.error));
        })
    }
}