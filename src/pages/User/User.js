import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './action';
import './User.css';

import AppBar from '../../components/AppBar';
import CardAlbum from './../../components/CardAlbum';
import Skeleton from '../../components/Skeleton';

export default function User(props) {
  const dispatch = useDispatch();
  const userSelected = props.location.state.userData;
  const { pastelColor, userLogin, albumUser, isLoading } = useSelector(
    (state) => ({
      pastelColor: state.main.pastelColor,
      userLogin: state.user.userLogin,
      albumUser: state.user.albumUser,
      isLoading: state.loading.isLoading,
    })
  );

  useEffect(() => {
    dispatch(actions.getAlbum(userSelected.id));
    // dispatch(actions.getAlbumPhoto(userSelected.id));
  }, []);

  const getRandomColor = () => {
    const item = pastelColor[Math.floor(Math.random() * pastelColor.length)];
    return item;
  };

  // console.log(userLogin, 'userLogin');
  // console.log('albumUser', albumUser);

  return (
    <div className="root">
      <div className="wrapper">
        <AppBar
          title={`User ${userSelected.name}`}
          isUserPage={true}
          backButton={true}
        />

        <div className="clearfix container">
          <div className="clearfix container">
            {JSON.stringify(userSelected)}
          </div>

          {isLoading ? (
            <>
              <div className="col-4 col-skeleton">
                <Skeleton />
              </div>
              <div className="col-4 col-skeleton">
                <Skeleton />
              </div>
              <div className="col-4 col-skeleton">
                <Skeleton />
              </div>
            </>
          ) : (
            albumUser.map((item, index) => (
              <div className="col-4" key={index}>
                <CardAlbum data={item} backgroundColor={getRandomColor()} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
