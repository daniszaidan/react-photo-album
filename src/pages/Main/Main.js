import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './action';
import './Main.css';

import AppBar from './../../components/AppBar';
import CardAlbum from './../../components/CardAlbum';
import Skeleton from './../../components/Skeleton';
import ModalFilter from './../../components/ModalFilter';

export default function Main(props) {
  const dispatch = useDispatch();
  const {
    pastelColor,
    dataAlbum,
    dataUser,
    isLoading,
    isOpenModalFilter,
  } = useSelector((state) => ({
    pastelColor: state.main.pastelColor,
    dataAlbum: state.main.dataAlbum,
    dataUser: state.main.dataUser,
    isOpenModalFilter: state.main.isOpenModalFilter,
    isLoading: state.loading.isLoading,
  }));

  useEffect(() => {
    dispatch(actions.getAlbum());
    dispatch(actions.getUserAll());
  }, [dispatch]);

  const getRandomColor = () => {
    const item = pastelColor[Math.floor(Math.random() * pastelColor.length)];
    return item;
  };

  const handleOpenModalFilter = (data) => {
    dispatch(actions.ModalFilterToggle(true));
  };
  const handleCloseModalFilter = () => {
    dispatch(actions.ModalFilterToggle(false));
  };
  // console.log('dataAlbum', dataAlbum);
  // console.log('dataUser', dataUser);

  const handleFilter = (userIdFilter) => {
    dispatch(actions.getAlbumByUser(userIdFilter));
    handleCloseModalFilter();
  };
  const getAllData = (userIdFilter) => {
    dispatch(actions.getAlbum());
    handleCloseModalFilter();
  };

  return (
    <div className="root">
      <div className="wrapper">
        <ModalFilter
          open={isOpenModalFilter}
          onClose={handleCloseModalFilter}
          dataUser={dataUser}
          handleFilter={handleFilter}
          getAllData={getAllData}
        />
        <AppBar
          filterButton={true}
          handleOpenModalFilter={handleOpenModalFilter}
        />

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
              <div className="col-4 col-m-6 col-s-12" key={index}>
                <CardAlbum data={item} backgroundColor={getRandomColor()} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
