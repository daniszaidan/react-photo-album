import React from 'react';
import './CardPhoto.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import thumbnail from './../../assets/thumbnail.gif';

import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CommentIcon from '@material-ui/icons/Comment';

export default function CardPhoto(props) {
  const {
    data,
    handleFavorite,
    handleOpenModalPhoto,
    userLogin,
    photoSelected,
  } = props;
  const isFav = userLogin.favorites.includes(data.id) ? true : false;
  // const isComment = userLogin.comments.includes(data.id) ? true : false;
  // console.log('userLogin', userLogin);

  const commentPhotoSelected = [];
  const dataComment = userLogin.comments.map((item) => {
    const isComment =
      item.photoId === data.id ? commentPhotoSelected.push(item) : false;
  });

  return (
    <div className="CardPhoto">
      <div className="img-frame">
        {/* <img src={data.thumbnailUrl} alt="album-img" /> */}
        <LazyLoadImage
          alt={data.thumbnailUrl}
          src={data.thumbnailUrl}
          placeholderSrc={thumbnail}
          width={'100%'}
          className="CardPhotoImg"
        />
        <div className="img-action">
          <button className="button" onClick={handleFavorite}>
            {isFav ? (
              <FavoriteIcon className="favorite-icon favorite-icon-red" />
            ) : (
              <FavoriteBorderIcon className="favorite-icon" />
            )}
          </button>
          <button className="button" onClick={handleOpenModalPhoto}>
            <div className="comment-count">
              <span>{commentPhotoSelected.length}</span>
            </div>
            <CommentIcon />
          </button>
        </div>
        <div className="photo-title">
          <p>{data.title || 'sunt qui excepturi placeat culpa qui'}</p>
        </div>
      </div>
    </div>
  );
}
