import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import loading from './loading';
import main from '../pages/Main/reducer';
import album from '../pages/Album/reducer';
import user from '../pages/User/reducer';

const rootReducer = combineReducers({
  loading,
  main,
  album,
  user,
  routing: routerReducer,
});

export default rootReducer;
