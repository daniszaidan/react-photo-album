import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './action';
import './Main.css';

import AppBar from './../../components/AppBar';
import CardAlbum from './../../components/CardAlbum';
import Skeleton from './../../components/Skeleton';

export default function Main(props) {
  const dispatch = useDispatch();
  const { pastelColor, dataAlbum, isLoading } = useSelector((state) => ({
    pastelColor: state.main.pastelColor,
    dataAlbum: state.main.dataAlbum,
    isLoading: state.loading.isLoading,
  }));

  useEffect(() => {
    dispatch(actions.getAlbum());
  }, []);

  const getRandomColor = () => {
    const item = pastelColor[Math.floor(Math.random() * pastelColor.length)];
    return item;
  };

  const getUserById = (id) => {
    // dispatch(actions.getUserById(id));
  };

  // console.log('dataAlbum', dataAlbum);

  return (
    <div className="root">
      <div className="wrapper">
        <AppBar filterButton={true} />

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
            dataAlbum.map((item, index) => (
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
