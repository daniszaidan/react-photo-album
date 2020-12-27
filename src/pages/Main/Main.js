import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './action';
import './Main.css';

import AppBar from './../../components/AppBar';
import CardAlbum from './../../components/CardAlbum';
import Skeleton from './../../components/Skeleton';

export default function Main(props) {
  const dispatch = useDispatch();
  const { dataAlbum, isLoading } = useSelector((state) => ({
    dataAlbum: state.main.dataAlbum,
    isLoading: state.loading.isLoading,
  }));

  useEffect(() => {
    dispatch(actions.getAlbum());
  }, []);

  const pastelColor = [
    '#a3ddcb',
    '#e6b566',
    '#e5707e',
    '#cd5d7d',
    '#a7c5eb',
    '#949cdf',
    '#999b84',
    '#d8ac9c',
    '#726a95',
    '#709fb0',
    '#a0c1b8',
  ];

  const getRandomColor = () => {
    const item = pastelColor[Math.floor(Math.random() * pastelColor.length)];
    return item;
  };

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
