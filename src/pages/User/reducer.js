const initialState = {
  userLogin: {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
    comments: [],
    favorites: [1, 3, 7],
  },
};

export default function reducer(state = initialState, action) {
  const { type, userLogin, idPhoto, idUser } = action;
  // console.log(idPhoto, 'idPhoto gan');
  // console.log(idUser, 'idUser gan');

  switch (type) {
    case 'USER_LOGIN':
      return {
        ...state,
        userLogin,
      };
    case 'FAV_DATA_PHOTO':
      // const filteredUserLogin = dataPhoto.filter((item) => item.id === id);
      // console.log(filteredPhoto, 'filteredPhoto');
      // console.log(id, 'id');

      return {
        ...state,
        userLogin: {
          ...state.userLogin,
          favorites: [...state.userLogin.favorites, idPhoto],
        },
      };
    // return {
    //   ...state,
    //   userLogin: {
    //     [id]: {
    //       ...state.userLogin.id[id],
    //       comments: 'action.someValue',
    //     },
    //   },
    // };
    default:
      return state;
  }
}
