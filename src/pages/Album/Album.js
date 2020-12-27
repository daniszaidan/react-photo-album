import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './action';
import './Album.css';

import AppBar from './../../components/AppBar';
import CardPhoto from './../../components/CardPhoto';
import Skeleton from './../../components/Skeleton';

export default function Album(props) {
  const dispatch = useDispatch();
  const { dataPhoto, isLoading, userLogin } = useSelector((state) => ({
    dataPhoto: state.album.dataPhoto,
    isLoading: state.loading.isLoading,
    userLogin: state.user.userLogin,
  }));

  useEffect(() => {
    dispatch(actions.getAlbumPhoto());
  }, []);

  const album = props.location.state.data;
  const filteredAlbum =
    dataPhoto && dataPhoto.filter((item) => item.albumId === album.id);

  // console.log(album, 'album');
  // console.log(dataPhoto, 'dataPhoto');
  // console.log(userLogin, 'user data');

  const handleFavorite = (item) => {
    // console.log('ss', item);
    dispatch(actions.setFavoritePhoto(item));
    // console.log(userLogin, 'user data');
  };

  return (
    <div className="root">
      <div className="wrapper">
        <AppBar title={album.title} backButton={true} />

        <div className="clearfix container">
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
            filteredAlbum.map((item, index) => (
              <div className="col-4" key={index}>
                <CardPhoto
                  data={item}
                  handleFavorite={() => handleFavorite(item)}
                  userLogin={userLogin}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
