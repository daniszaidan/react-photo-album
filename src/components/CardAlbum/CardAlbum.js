import React from 'react';
import './CardAlbum.css';

import { Link } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';

export default function CardAlbum(props) {
  const { backgroundColor, data } = props;

  // getUserById(data.userId);

  // const userData = {};

  // axios({
  //   method: 'get',
  //   url: `https://jsonplaceholder.typicode.com/users/${data.userId}`,
  // })
  //   .then((response) => {
  //     // console.log('id ' + data.userId, response.data);
  //     // userData = response.data;
  //   })
  //   .catch((error) => {
  //     return error;
  //   });

  // console.log(userData);

  return (
    <div
      className="CardAlbum hover"
      style={{ backgroundColor: backgroundColor || '#A552F8' }}
    >
      <Link
        to={{
          pathname: `/album/${data.id}`,
          state: { data },
        }}
      >
        <div>
          <p className="album-name">
            {data.title || 'sunt qui excepturi placeat culpa qui'}
          </p>
        </div>
      </Link>

      <Link
        to={{
          pathname: `/user/${data.userData.name}`,
          state: { userData: data.userData },
        }}
      >
        <div className="profile-frame">
          <div className="profile-icon">
            <PersonIcon />
          </div>
          <span className="profile-name">{data.userData.name}</span>
        </div>
      </Link>
    </div>
  );
}
