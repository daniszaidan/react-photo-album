import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import productList from '../pages/ProductList/reducer';

const rootReducer = combineReducers({
  productList,
  routing: routerReducer,
});

export default rootReducer;
