import axios from 'axios';

export const getAlbumPhoto = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING' });
    axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/photos',
    })
      .then((response) => {
        const data = response.data.map((item) => ({
          ...item,
          comments: [],
          favorites: [],
        }));
        dispatch({ type: 'DATA_PHOTO', dataPhoto: data });
        dispatch({ type: 'DONE_LOADING' });
      })
      .catch((error) => {
        dispatch({ type: 'ERROR_DATA_PHOTO', error });
        dispatch({ type: 'DONE_LOADING' });
        return error;
      });
  };
};

export const setFavoritePhoto = (item) => {
  return (dispatch) => {
    dispatch({
      type: 'FAV_DATA_PHOTO',
      idPhoto: item.id,
      // idUser: 2,
    });
  };
  // dispatch({ type: 'DATA_PHOTO', dataPhoto:  });
  // return (dispatch) => {
  //   dispatch({ type: 'LOADING' });
  //   axios({
  //     method: 'get',
  //     url: 'https://jsonplaceholder.typicode.com/photos',
  //   })
  //     .then((response) => {
  //       const data = response.data.map((item) => ({
  //         ...item,
  //         comments: [],
  //         favorites: [],
  //       }));
  //       dispatch({ type: 'DATA_PHOTO', dataPhoto: data });
  //       dispatch({ type: 'DONE_LOADING' });
  //     })
  //     .catch((error) => {
  //       dispatch({ type: 'ERROR_DATA_PHOTO', error });
  //       dispatch({ type: 'DONE_LOADING' });
  //       return error;
  //     });
  // };
};
