import * as actionTypes from '../actions/actionTypes';

const initialState = {
    userID: '',
    IDToken: '',
    email: '',
    error: '',
    loading: false
}

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.AUTH_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                userID: action.userID,
                IDToken: action.IDToken,
                email: action.email,
                error: '',
                loading: false
            }
        case actionTypes.AUTH_FAILED:
            return {
                ...state,
                error: action.error.replace('_', ' ').toLowerCase(),
                loading: false
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                userID: '',
                IDToken: '',
                email: '',
                error: ''
            }
        default:
            return state;
    }
}

export default profileReducer;