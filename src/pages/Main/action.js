import axios from 'axios';

export const getAlbum = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING' });
    axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/albums',
    })
      .then((response) => {
        dispatch({ type: 'DATA_ALBUM', dataAlbum: response.data });
        dispatch({ type: 'DONE_LOADING' });
      })
      .catch((error) => {
        dispatch({ type: 'ERROR_DATA_ALBUM', error });
        dispatch({ type: 'DONE_LOADING' });
        return error;
      });
  };
};
