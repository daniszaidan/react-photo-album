import { createStore, compose, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

export const history = createBrowserHistory();

export default function configureStore(initialState) {
  const reactRouterMiddleware = routerMiddleware(history);
  const middlewares = [thunk, reactRouterMiddleware];

  return createStore(
    reducer,
    initialState,
    compose(applyMiddleware(...middlewares))
  );
}
