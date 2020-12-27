import React from 'react';
import './CardAlbum.css';

import { Link } from 'react-router-dom';

export default function CardAlbum(props) {
  const { backgroundColor, data } = props;

  // console.log(data);

  return (
    // <Link to="/album/id">
    <Link
      to={{
        pathname: `/album/${data.id}`,
        state: { data },
      }}
    >
      <div
        className="CardAlbum hover"
        style={{ backgroundColor: backgroundColor || '#A552F8' }}
      >
        <p>{data.title || 'sunt qui excepturi placeat culpa qui'}</p>
      </div>
    </Link>
  );
}
