import React from 'react';
import './CardPhoto.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import thumbnail from './../../assets/thumbnail.gif';

import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CommentIcon from '@material-ui/icons/Comment';

export default function CardPhoto(props) {
  const { data, handleFavorite, handleOpenModalPhoto, userLogin } = props;
  const isFav = userLogin.favorites.includes(data.id) ? true : false;

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
