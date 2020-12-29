/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React from 'react';
import './ModalPhoto.css';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import thumbnail from './../../assets/thumbnail.gif';
import Dialog from '@material-ui/core/Dialog';
import SendIcon from '@material-ui/icons/Send';
import PersonIcon from '@material-ui/icons/Person';

export default function ModalPhoto(props) {
  const {
    open,
    onClose,
    photoSelected,
    userLogin,
    comment,
    handleChange,
    handleSubmitComment,
  } = props;
  // console.log('photoSelected', photoSelected);
  // const isFav = userLogin.comments.includes(photoSelected.id) ? true : false;
  // console.log('userLogin.comments', userLogin.comments);
  const commentPhotoSelected = [];
  const data = userLogin.comments.map((item) => {
    const isFav =
      item.photoId === photoSelected.id
        ? commentPhotoSelected.push(item)
        : false;
  });

  // const [comment, setComment] = React.useState('');
  // const handleChange = (event) => {
  //   setComment(event.target.value);
  // };

  return (
    <Dialog open={open} onClose={onClose} fullWidth={true} maxWidth="sm">
      <div className="dialog-root">
        {/* <img src={photoSelected.url} alt="img" /> */}
        <LazyLoadImage
          alt={photoSelected.url}
          src={photoSelected.url}
          placeholderSrc={thumbnail}
          width={'100%'}
          className="CardPhotoImg"
        />
        <p className="photo-title">
          {photoSelected.title || 'sunt qui excepturi placeat culpa qui'}
        </p>
        <div className="comment-frame">
          <div class="form-input">
            <input type="text" value={comment} onChange={handleChange} />
            <label class="label">Comment</label>
          </div>
          <button onClick={handleSubmitComment}>
            <SendIcon />
          </button>
        </div>

        {commentPhotoSelected.map((item, index) => (
          <div className="card-comment">
            <div className="profile-frame">
              <div className="profile-icon">
                <PersonIcon />
              </div>
              <span className="profile-name">{userLogin.name}</span>
            </div>
            <p>{item.comment}</p>
          </div>
        ))}

        {/* <div className="card-comment">
          <div className="profile-frame">
            <div className="profile-icon">
              <PersonIcon />
            </div>
            <span className="profile-name">Danis Zaidan</span>
          </div>
          <p>Wah bagus sekali gambarnya</p>
        </div>

        <div className="card-comment">
          <div className="profile-frame">
            <div className="profile-icon">
              <PersonIcon />
            </div>
            <span className="profile-name">Danis Zaidan</span>
          </div>
          <p>Wah bagus sekali gambarnya</p>
        </div> */}
      </div>
    </Dialog>
  );
}
