import React from 'react';
import { 
  createStore, 
  combineReducers 
} from 'redux';
import { Provider } from 'react-redux';
import { 
  composeWithDevTools 
}  from 'redux-devtools-extension'; 
import { FIREBASE_KEY } from '@env';

import Navigator from './navigation/navigator';
import ShopReducer from './store/reducers/shopReducer';

const combinedReducer = combineReducers({
  ShopReducer: ShopReducer
})
const store = createStore(combinedReducer, composeWithDevTools())


const App = () => {
  return (
  <Provider store = {store}>    
    <Navigator />
  </Provider>
)};

export default App;
