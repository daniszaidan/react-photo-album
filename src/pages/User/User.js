import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './action';
import './User.css';

import AppBar from '../../components/AppBar';
import CardPhoto from '../../components/CardPhoto';
import Skeleton from '../../components/Skeleton';

export default function User(props) {
  const dispatch = useDispatch();
  const { userLogin } = useSelector((state) => ({
    userLogin: state.user.userLogin,
  }));

  useEffect(() => {
    // dispatch(actions.getAlbumPhoto());
  }, []);

  // console.log(userLogin, 'userLogin');

  return (
    <div className="root">
      <div className="wrapper">
        <AppBar
          title={`User ${userLogin.name}`}
          isUserPage={true}
          backButton={true}
        />

        <div className="clearfix container">{JSON.stringify(userLogin)}</div>
      </div>
    </div>
  );
}
