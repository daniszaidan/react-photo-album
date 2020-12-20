import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as actions from './action';
import './ProductList.css';
import { Link } from 'react-router-dom';

import AppBar from './../../components/organisms/AppBar';

export default function ProductList(props) {
  // const history = useHistory();
  // const dispatch = useDispatch();
  // const {
  //   data,
  // } = useSelector((state) => ({
  //   data: state.productList.data,
  // }));

  // useEffect(() => {
  //   // dispatch(actions.getDataProdi());
  // }, []);

  return (
    <div className="root">
      <div className="screen">
        <AppBar/>
      </div>
    </div>
  );
}
