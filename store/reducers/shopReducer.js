import categories from '../../data/categories';

const initialState = {
    categories: [...categories],
    products: [],
    orders: []
}

const shopReducer = (state=initialState, action) => {
    switch(action.type){
        default: 
            return state;
    }
}

export default shopReducer;