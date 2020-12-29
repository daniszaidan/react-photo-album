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

const getUserById = async (id) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data;
};
