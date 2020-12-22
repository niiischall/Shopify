import React from 'react';
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

import Navigator from './navigation/navigator';
import ShopReducer from './store/reducers/shopReducer';
import ProfileReducer from './store/reducers/profileReducer';

const combinedReducer = combineReducers({
  ShopReducer: ShopReducer,
  ProfileReducer: ProfileReducer
})
const store = createStore(combinedReducer, composeWithDevTools(applyMiddleware(thunk)));

const App = () => {
  return (
    <Provider store = {store}>    
      <Navigator />
    </Provider>
)};

export default App;
