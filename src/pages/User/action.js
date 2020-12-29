import axios from 'axios';

export const getAllUser = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING' });
    axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/users',
    })
      .then((response) => {
        const data = response.data.map((item) => ({
          ...item,
          comments: [],
          favorites: [],
        }));
        dispatch({ type: 'DATA_USER', dataUser: data });
        dispatch({ type: 'DONE_LOADING' });
      })
      .catch((error) => {
        dispatch({ type: 'ERROR_DATA_USER', error });
        dispatch({ type: 'DONE_LOADING' });
        return error;
      });
  };
};

export const getAlbum = (id) => {
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

        const userAlbumFiltered = data.filter((item) => item.userId === id);
        dispatch({ type: 'DATA_ALBUM_USER', albumUser: userAlbumFiltered });
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

// export const getUserById = (id) => {
//   return (dispatch) => {
//     dispatch({ type: 'LOADING' });
//     axios({
//       method: 'get',
//       url: `https://jsonplaceholder.typicode.com/users/${id}`,
//     })
//       .then((response) => {
//         const data = response.data.map((item) => ({
//           ...item,
//           comments: [],
//           favorites: [],
//         }));
//         dispatch({ type: 'DATA_USER', dataUser: data });
//         dispatch({ type: 'DONE_LOADING' });
//       })
//       .catch((error) => {
//         dispatch({ type: 'ERROR_DATA_USER', error });
//         dispatch({ type: 'DONE_LOADING' });
//         return error;
//       });
//   };
// };
