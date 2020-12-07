import categories from '../../data/categories';
import products from '../../data/products';

const initialState = {
    categories: [...categories],
    products: [...products],
    orders: []
}

const shopReducer = (state=initialState, action) => {
    switch(action.type){
        default: 
            return state;
    }
}

export default shopReducer;