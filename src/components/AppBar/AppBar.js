import React from 'react';
import './AppBar.css';
import { Link } from 'react-router-dom';

import PersonIcon from '@material-ui/icons/Person';
import TuneIcon from '@material-ui/icons/Tune';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default function AppBar(props) {
  const { title, backButton, filterButton, isUserPage } = props;
  const newTitle = (title) => {
    return (title && title.length) > 20
      ? `${title && title.slice(0, 20)}...`
      : title;
  };

  return (
    <div className="appbar">
      <div className="appbar-header">
        {backButton ? (
          <Link to="/">
            <button className="button-back">
              <ArrowBackIcon />
            </button>
          </Link>
        ) : (
          false
        )}
        <h1> {newTitle(title) || 'Photo Album'} </h1>
      </div>
      <div className="filterFrame">
        {filterButton ? (
          <button className="hover">
            <TuneIcon />
          </button>
        ) : (
          false
        )}
        <Link to="/user">
          {!isUserPage ? (
            <button className="hover">
              <PersonIcon />
            </button>
          ) : (
            false
          )}
        </Link>
      </div>
    </div>
  );
}
