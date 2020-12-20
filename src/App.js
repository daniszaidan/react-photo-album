import React from 'react';
// import { Router } from 'react-router';
// import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import pages from './pages';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App({ history, store }) {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route component={pages.ProductList} exact path="/" />
          <Route component={pages.Error404} exact path="*" />
        </Switch>
      </Router>
    </Provider>
  );
}