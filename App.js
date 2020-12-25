import React, {useEffect} from 'react';
import { 
  createStore, 
  combineReducers,
  applyMiddleware 
} from 'redux';
import { Provider } from 'react-redux';
import { 
  composeWithDevTools 
}  from 'redux-devtools-extension'; 
import thunk from 'redux-thunk';

import ShopReducer from './store/reducers/shopReducer';
import ProfileReducer from './store/reducers/profileReducer';
import Layout from './Layout';

const combinedReducer = combineReducers({
  ShopReducer: ShopReducer,
  ProfileReducer: ProfileReducer
})
const store = createStore(combinedReducer, composeWithDevTools(applyMiddleware(thunk)));

const App = () => {
  return (
    <Provider store = {store}>    
      <Layout />
    </Provider>
)};

export default App;
