/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

const Suspensed = (Element) =>
  function suspense(props) {
    return (
      <React.Suspense fallback={<span>Loading...</span>}>
        <Element {...props} />
      </React.Suspense>
    );
  };

export default {
  Error404: Suspensed(React.lazy(() => import('./Error404'))),
  ProductList: Suspensed(React.lazy(() => import('./ProductList'))),
};
