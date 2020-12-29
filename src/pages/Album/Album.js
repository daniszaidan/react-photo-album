import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './action';
import './Album.css';

import AppBar from './../../components/AppBar';
import CardPhoto from './../../components/CardPhoto';
import Skeleton from './../../components/Skeleton';
import ModalPhoto from './../../components/ModalPhoto';

export default function Album(props) {
  const dispatch = useDispatch();
  const {
    isOpenModalPhoto,
    dataPhoto,
    photoSelected,
    tempComment,
    isLoading,
    userLogin,
  } = useSelector((state) => ({
    isOpenModalPhoto: state.album.isOpenModalPhoto,
    dataPhoto: state.album.dataPhoto,
    photoSelected: state.album.photoSelected,
    tempComment: state.album.tempComment,
    isLoading: state.loading.isLoading,
    userLogin: state.user.userLogin,
  }));

  useEffect(() => {
    dispatch(actions.getAlbumPhoto());
  }, [dispatch]);

  const album = props.location.state.data;
  const filteredAlbum =
    dataPhoto && dataPhoto.filter((item) => item.albumId === album.id);

  const handleFavorite = (item) => {
    dispatch(actions.setFavoritePhoto(item));
  };

  const handleOpenModalPhoto = (data) => {
    dispatch(actions.ModalPhotoToggle(true));
    dispatch(actions.setPhotoSelected(data));
  };
  const handleCloseModalPhoto = () => {
    dispatch(actions.ModalPhotoToggle(false));
  };

  const handleChange = (event) => {
    dispatch(actions.setTempComment(event.target.value));
  };
  const handleSubmitComment = () => {
    if (tempComment.length !== 0) {
      const dataComment = {
        photoId: photoSelected.id,
        comment: tempComment,
      };
      dispatch(actions.setCommentPhoto(dataComment));
      dispatch(actions.setTempComment(''));
    }
  };

  return (
    <div className="root">
      <div className="wrapper">
        <ModalPhoto
          open={isOpenModalPhoto}
          onClose={handleCloseModalPhoto}
          photoSelected={photoSelected}
          userLogin={userLogin}
          comment={tempComment}
          handleChange={handleChange}
          handleSubmitComment={handleSubmitComment}
        />
        <AppBar title={album.title} backButton={true} />

        <div className="clearfix container">
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
            filteredAlbum.map((item, index) => (
              <div className="col-4 col-m-6 col-s-12" key={index}>
                <CardPhoto
                  data={item}
                  handleFavorite={() => handleFavorite(item)}
                  userLogin={userLogin}
                  handleOpenModalPhoto={() => handleOpenModalPhoto(item)}
                  photoSelected={photoSelected}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
