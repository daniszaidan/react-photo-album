import axios from 'axios';

export const getAlbum = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING' });
    axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/albums',
    })
      .then(async (response) => {
        const dataPromises = response.data.map(async (item) => {
          const userData = await getUserById(item.userId);
          return {
            ...item,
            userData,
          };
        });
        const data = await Promise.all(dataPromises);
        dispatch({ type: 'DATA_ALBUM', dataAlbum: data });
        dispatch({ type: 'DONE_LOADING' });
      })
      .catch((error) => {
        dispatch({ type: 'ERROR_DATA_ALBUM', error });
        dispatch({ type: 'DONE_LOADING' });
        return error;
      });
  };
};

export const getAlbumByUser = (userIdFilter) => {
  return (dispatch) => {
    dispatch({ type: 'LOADING' });
    axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/albums',
    })
      .then(async (response) => {
        const dataPromises = response.data.map(async (item) => {
          const userData = await getUserById(userIdFilter);
          return {
            ...item,
            userData,
          };
        });

        const data = await Promise.all(dataPromises);

        const dataFiltered = data.filter(
          (item) => item.userId === userIdFilter
        );
        dispatch({ type: 'DATA_ALBUM', dataAlbum: dataFiltered });
        dispatch({ type: 'DONE_LOADING' });
      })
      .catch((error) => {
        dispatch({ type: 'ERROR_DATA_ALBUM', error });
        dispatch({ type: 'DONE_LOADING' });
        return error;
      });
  };
};

const getUserById = async (id) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data;
};

export function ModalFilterToggle(isOpenModalFilter) {
  return (dispatch) => {
    dispatch({
      type: 'MODAL_FILTER_TOGGLE',
      isOpenModalFilter,
    });
  };
}

export const getUserAll = () => {
  return (dispatch) => {
    axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/users',
    })
      .then((response) => {
        dispatch({ type: 'DATA_USER', dataUser: response.data });
        dispatch({ type: 'DONE_LOADING' });
      })
      .catch((error) => {
        dispatch({ type: 'DONE_LOADING' });
        return error;
      });
  };
};
