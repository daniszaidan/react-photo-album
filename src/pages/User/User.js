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
  const { pastelColor, albumUser, isLoading } = useSelector((state) => ({
    pastelColor: state.main.pastelColor,
    userLogin: state.user.userLogin,
    albumUser: state.user.albumUser,
    isLoading: state.loading.isLoading,
  }));

  useEffect(() => {
    dispatch(actions.getAlbum(userSelected.id));
    // dispatch(actions.getAlbumPhoto(userSelected.id));
  }, [dispatch, userSelected.id]);

  const getRandomColor = () => {
    const item = pastelColor[Math.floor(Math.random() * pastelColor.length)];
    return item;
  };

  // console.log(userLogin, 'userLogin');

  return (
    <div className="root">
      <div className="wrapper">
        <AppBar
          title={`User ${userSelected.name}`}
          isUserPage={true}
          backButton={true}
        />

        <div className="clearfix container">
          <div className="col-12 ">
            <div className="user-info">
              <div class="table-responsive">
                <table class="table table-hover table-striped">
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>{userSelected.name}</td>
                    </tr>
                    <tr>
                      <td>Address</td>
                      <td>{`${userSelected.address.city}, ${userSelected.address.street}`}</td>
                    </tr>
                    <tr>
                      <td>Phone</td>
                      <td>{userSelected.phone}</td>
                    </tr>
                    <tr>
                      <td>Company</td>
                      <td>{userSelected.company.name}</td>
                    </tr>
                    <tr>
                      <td>Website</td>
                      <td>{userSelected.website}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {isLoading ? (
            <>
              <div className="col-4 col-m-6 col-s-12 col-skeleton">
                <Skeleton />
              </div>
              <div className="col-4 col-m-6 col-s-12 col-skeleton">
                <Skeleton />
              </div>
              <div className="col-4 col-m-6 col-s-12 col-skeleton">
                <Skeleton />
              </div>
            </>
          ) : (
            albumUser.map((item, index) => (
              <div className="col-4 col-m-6 col-s-12" key={index}>
                <CardAlbum data={item} backgroundColor={getRandomColor()} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
