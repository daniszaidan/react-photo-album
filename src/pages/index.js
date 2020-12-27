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
  Main: Suspensed(React.lazy(() => import('./Main'))),
  Album: Suspensed(React.lazy(() => import('./Album'))),
  User: Suspensed(React.lazy(() => import('./User'))),
};
